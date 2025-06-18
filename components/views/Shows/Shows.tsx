import TVShowCard from "@/components/fragments/TVShowCard";
import useShows from "./useShows";

const Shows = () => {
  const { dataShows, isLoadingShows } = useShows();
  return (
    <div>
      <h2 className="mb-2 font-bold text-red-600 text-2xl">Shows</h2>
      <div className="flex">
        <div className="w-1/4"></div>
        <div className="flex flex-wrap justify-between gap-5 lg:w-3/4">
          {dataShows?.map((show, index) => (
            <TVShowCard key={index} isLoading={isLoadingShows} tvShow={show} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shows;
