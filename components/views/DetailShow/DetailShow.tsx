import Image from "next/image";
import EpisodeList from "./EpisodeList";
import useDetailShow from "./useDetailShow";
import CastList from "./CastList";
import Link from "next/link";
import { cn } from "@/utils/cn";

const DetailShow = () => {
  const { dataDetailShow, episodesGroupBySeason, isPendingDetailShow } =
    useDetailShow();

  return (
    <>
      {!isPendingDetailShow && dataDetailShow ? (
        <div className="flex md:flex-row flex-col-reverse gap-5 min-h-screen">
          <div className="md:px-10 rounded-md md:w-3/4 h-max">
            <div>
              <h1 className="font-bold text-red-600 text-3xl">
                {dataDetailShow?.name}
              </h1>
              <p
                dangerouslySetInnerHTML={{
                  __html: dataDetailShow?.summary || "Summary is not available",
                }}
                className="mt-2 text-md text-neutral-600 dark:text-neutral-200 text-justify"
              />

              <h2 className="my-3 font-bold text-red-600 text-xl">
                Information
              </h2>
              <ul className="flex flex-col gap-1 text-neutral-700 dark:text-neutral-200">
                <li>
                  Average Rating:{" "}
                  <span className="font-medium">
                    {dataDetailShow?.rating?.average === null
                      ? "N/A"
                      : dataDetailShow?.rating?.average}
                  </span>
                </li>
                <li>
                  Network/Channel:{" "}
                  <span className="font-medium">
                    {dataDetailShow.network?.name ||
                      dataDetailShow.webChannel?.name ||
                      "-"}
                  </span>
                </li>
                <li>
                  Types:
                  <span className="font-medium">{dataDetailShow?.type}</span>
                </li>
                <li>
                  Genres:{" "}
                  <span className="font-medium">
                    {dataDetailShow?.genres?.join(", ")}
                  </span>{" "}
                </li>
                <li>
                  Language:{" "}
                  <span className="font-medium">
                    {dataDetailShow?.language}
                  </span>{" "}
                </li>
                <li>
                  Premiered:{" "}
                  <span className="font-medium">
                    {dataDetailShow?.premiered}
                  </span>
                </li>
                <li>
                  {" "}
                  Status:{" "}
                  <span className="font-medium">{dataDetailShow?.status} </span>
                </li>
              </ul>
            </div>

            <EpisodeList episodesGroupBySeason={episodesGroupBySeason} />
            <CastList casts={dataDetailShow._embedded?.cast} />
          </div>

          <div className="relative md:w-1/4">
            <div className="top-20 sticky">
              <Image
                src={
                  dataDetailShow?.image?.original ||
                  dataDetailShow?.image?.medium ||
                  "/images/illustrations/img-not-found.jpg"
                }
                alt={`${dataDetailShow?.name}`}
                width={500}
                height={500}
                className="rounded-md w-full h-auto"
              />
              <Link
                href={dataDetailShow.officialSite || "/"}
                className="flex justify-center items-center bg-white hover:bg-red-600 dark:bg-gray-900 mt-2 p-2 border rounded-lg w-full text-red-600 hover:text-white dark:text-neutral-200 transition-colors duration-300"
              >
                Official Site
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex md:flex-row flex-col-reverse gap-2 min-h-screen animate-pulse">
            <div className="md:px-10 rounded-md md:w-3/4 h-max">
              <div>
                <div className="bg-gray-300 dark:bg-gray-600 mb-2 rounded-lg w-[90%] h-12" />
                {Array.from({ length: 15 }).map((_, index) => (
                  <div
                    key={index}
                    className={cn(
                      `bg-gray-300 dark:bg-gray-600 my-2 rounded-lg w-full h-6`,
                      index % 5 === 0 && "mb-5"
                    )}
                  />
                ))}

                <div className="mb-10" />
                <div className="gap-5 grid md:grid-cols-3 grid-col-1">
                  {Array.from({ length: 9 }).map((_, index) => (
                    <div
                      key={index}
                      className={`bg-gray-300 dark:bg-gray-600 my-2 rounded-lg w-full h-[200px]`}
                    />
                  ))}
                </div>

                <div className="mb-10" />
              </div>
            </div>
            <div className="bg-gray-300 dark:bg-gray-600 mb-2 rounded-md md:w-1/4 h-[300px] xl:h-[450px] animate-pulse" />
          </div>
        </div>
      )}
    </>
  );
};

export default DetailShow;
