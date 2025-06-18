import TVShowCard from "@/components/fragments/TVShowCard";
import { ITVShow } from "@/types/tvshow.type";

interface Proptypes {
  data: ITVShow[];
  isLoading: boolean;
  title: string;
}

const ShowsList = (props: Proptypes) => {
  const { data, isLoading, title } = props;
  return (
    <div className="mb-10">
      <h2 className="mb-2 font-bold text-red-600 text-2xl">{title}</h2>
      <div className="gap-3 grid xl:grid-cols-9 grid-flow-col auto-cols-max overflow-x-auto xl:overflow-x-hidden">
        {data.map((item, index) => (
          <TVShowCard key={index} isLoading={isLoading} tvShow={item} />
        ))}
      </div>
    </div>
  );
};

export default ShowsList;
