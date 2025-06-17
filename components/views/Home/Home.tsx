import TVShowCard from "@/components/ui/TVShowCard";
import useHome from "./useHome";
import HomeSlider from "./HomeSlider";

const Home = () => {
  const { dataPopularShow, isPendingPopularShow } = useHome();
  return (
    <>
      <HomeSlider />

      <div className="grid grid-cols-2 lg:grid-cols-9">
        {dataPopularShow?.map((item, index) => (
          <TVShowCard
            key={index}
            isLoading={isPendingPopularShow}
            tvShow={item}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
