import Button from "@/components/ui/Button";
import { IEpisode, ITVShow } from "@/types/tvshow.type";
import Image from "next/image";
import EpisodeList from "../EpisodeList";

interface Proptypes {
  dataDetailShow: ITVShow | undefined;
  isLoading: boolean;
  episodesGroupBySeason: Record<number, IEpisode[]>;
}

const InformationDetailShow = (props: Proptypes) => {
  const { dataDetailShow, isLoading, episodesGroupBySeason } = props;
  return (
    <>
      {!isLoading && dataDetailShow ? (
        <div className="flex gap-5">
          <div className="px-10 py-5 rounded-md w-3/4 h-max">
            <div>
              <h1 className="font-bold text-red-600 text-3xl">
                {dataDetailShow?.name}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${dataDetailShow?.summary}`,
                }}
                className="mt-2 text-md text-neutral-600 text-justify"
              />

              <h2 className="my-3 font-semibold text-red-600 text-xl">
                Information
              </h2>
              <ul className="flex flex-col gap-1 text-neutral-700">
                <li>
                  Average Rating:{" "}
                  {dataDetailShow?.rating?.average === null
                    ? "N/A"
                    : dataDetailShow?.rating?.average}
                </li>
                <li>Types: {`${dataDetailShow?.type}`} </li>
                <li>Genres: {dataDetailShow?.genres?.join(", ")} </li>
                <li>Language: {`${dataDetailShow?.language}`} </li>
                <li>Premiered: {`${dataDetailShow?.premiered}`} </li>
                <li>Status: {`${dataDetailShow?.status}`} </li>
              </ul>
            </div>
            
            <EpisodeList episodesGroupBySeason={episodesGroupBySeason} />
          </div>

          <div className="w-1/4">
            <Image
              src={`${dataDetailShow?.image?.original}`}
              alt={`${dataDetailShow?.name}`}
              width={500}
              height={500}
              className="rounded-md w-full h-auto"
            />
            <Button fullWidth variant="secondary" classname="mt-2">
              Official Site
            </Button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default InformationDetailShow;
