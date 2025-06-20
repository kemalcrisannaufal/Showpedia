import HomeList from "./HomeList";
import HomeSlider from "./HomeSlider";
import useHome from "./useHome";
import HomeScheduleList from "./HomeScheduleList";
import { SHOWPEDIA_PICK } from "@/constants/list.constants";

const Home = () => {
  const { dataSchedule, isLoadingSchedule } = useHome();

  return (
    <div>
      <HomeSlider />
      <HomeList
        data={SHOWPEDIA_PICK}
        isLoading={false}
        title="Showpedia Pick"
      />
      <HomeSlider reverse />
      <HomeScheduleList
        dataSchedule={dataSchedule!}
        isLoading={isLoadingSchedule}
      />
    </div>
  );
};

export default Home;
