import Image from "next/image";
import EpisodeList from "./EpisodeList";
import useDetailShow from "./useDetailShow";
import Button from "@/components/ui/Button";
import CastList from "./CastList";

const DetailShow = () => {
  const { dataDetailShow, episodesGroupBySeason, isLoadingDetailShow } =
    useDetailShow();

  return (
    <>
      {!isLoadingDetailShow && dataDetailShow ? (
        <div className="flex md:flex-row flex-col-reverse gap-5 min-h-screen">
          <div className="md:px-10 rounded-md md:w-3/4 h-max">
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

              <h2 className="my-3 font-bold text-red-600 text-xl">
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
            <CastList casts={dataDetailShow._embedded?.cast} />
          </div>

          <div className="relative md:w-1/4">
            <div className="top-16 sticky">
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
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default DetailShow;
