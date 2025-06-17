import { SHOWPEDIA_PICK } from "./Home.constants";
import HomeList from "./HomeList";
import HomeSlider from "./HomeSlider";
import useHome from "./useHome";
import HomeScheduleList from "./HomeScheduleList";

const Home = () => {
  const { dataSchedule, isLoadingSchedule } = useHome();
  console.log(dataSchedule);
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
