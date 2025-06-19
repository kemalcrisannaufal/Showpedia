import {
  DEFAULT_FILTER_SCHEDULE,
  DEFAULT_LAST_IDX_SCHEDULE_SHOW,
} from "@/constants/list.constants";
import mainServices from "@/services/main.services";
import { IScheduleTVShow } from "@/types/tvshow.type";
import { getSevenConsecutiveDate } from "@/utils/date";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useSchedule = () => {
  const [dates, setDates] = useState<string[]>(getSevenConsecutiveDate());
  const [filter, setFilter] = useState<{ country: string; date: string }>(
    DEFAULT_FILTER_SCHEDULE
  );
  const [idxLastSchedule, setIdxLastSchedule] = useState(
    DEFAULT_LAST_IDX_SCHEDULE_SHOW
  );

  const getSchedule = async (): Promise<IScheduleTVShow[][]> => {
    if (filter.date === "") {
      setDates(getSevenConsecutiveDate());
      const request = dates.map((item) =>
        mainServices.getScheduleByDateAndCountry(filter.country, item)
      );

      const responses = await Promise.all(request);
      const data = responses.map((res) => res.data);

      return data;
    }

    setDates([filter.date]);
    const { data } = await mainServices.getScheduleByDateAndCountry(
      filter.country,
      filter.date
    );
    console.log(data);
    return [data];
  };

  const { data: dataSchedule, isLoading: isLoadingSchedule } = useQuery({
    queryKey: ["getSchedule", filter.country, filter.date],
    queryFn: getSchedule,
    enabled: true,
  });

  const resetFilter = () => {
    setFilter(DEFAULT_FILTER_SCHEDULE);
    setDates(getSevenConsecutiveDate());
  };

  const handleClickIdxLastSchedule = (numSchedules: number) => {
    if (idxLastSchedule < numSchedules) {
      setIdxLastSchedule(idxLastSchedule + DEFAULT_LAST_IDX_SCHEDULE_SHOW);
    } else {
      setIdxLastSchedule(DEFAULT_LAST_IDX_SCHEDULE_SHOW);
    }
  };

  return {
    dataSchedule,
    isLoadingSchedule,
    dates,
    setDates,
    setFilter,
    filter,
    resetFilter,
    idxLastSchedule,
    handleClickIdxLastSchedule,
  };
};

export default useSchedule;
