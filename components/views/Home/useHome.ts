import mainServices from "@/services/main.services";
import { IScheduleTVShow, ITVShow } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";
import { POPULAR_IDS } from "./Home.constants";

const useHome = () => {
  const getShowpediaPicked = async (): Promise<ITVShow[]> => {
    const request = POPULAR_IDS.map((id) =>
      mainServices.getShowById(id.toString())
    );
    const responses = await Promise.all(request);
    const data = responses.map((res) => res.data);
    return data;
  };

  const { data: dataShowpediaPicked, isLoading: isLoadingShowpediaPicked } =
    useQuery({
      queryKey: ["getShowpediaPicked"],
      queryFn: getShowpediaPicked,
      enabled: true,
    });

  const getScheduleByCountry = async (): Promise<IScheduleTVShow[]> => {
    const { data } = await mainServices.getScheduleByCountry("KR");
    return data;
  };

  const { data: dataSchedule, isLoading: isLoadingSchedule } = useQuery({
    queryKey: ["getScheduleByCountry"],
    queryFn: getScheduleByCountry,
    enabled: true,
  });

  return {
    dataShowpediaPicked,
    isLoadingShowpediaPicked,
    dataSchedule,
    isLoadingSchedule,
  };
};

export default useHome;
