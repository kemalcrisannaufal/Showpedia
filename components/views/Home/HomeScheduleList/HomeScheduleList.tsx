import ScheduleCard from "@/components/fragments/ScheduleCard";
import { IScheduleTVShow } from "@/types/tvshow.type";

interface Proptypes {
  dataSchedule: IScheduleTVShow[];
  isLoading: boolean;
}

const HomeScheduleList = (props: Proptypes) => {
  const { dataSchedule, isLoading } = props;
  return (
    <div className="mb-10">
      <h2 className="mb-2 font-bold text-red-600 text-2xl">Today Schedule</h2>
      <div className="gap-5 grid xl:grid-cols-3 grid-flow-col auto-cols-max overflow-x-auto xl:overflow-x-hidden scrollbar-hide">
        {dataSchedule?.map((schedule, index) => (
          <ScheduleCard key={index} data={schedule} isLoading={isLoading} />
        ))}
      </div>
    </div>
  );
};

export default HomeScheduleList;
