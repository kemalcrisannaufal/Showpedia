import { IScheduleTVShow } from "@/types/tvshow.type";
import { getFormattedDate } from "@/utils/date";
import Image from "next/image";
import useScheduleCard from "./useScheduleCard";
import { AnimatePresence } from "framer-motion";
import TVShowPreviewModal from "../TVShowPreviewModal";
import { cn } from "@/utils/cn";

interface Proptypes {
  classname?: string;
  data: IScheduleTVShow;
  isLoading: boolean;
  showSummary?: boolean;
}

const ScheduleCard = (props: Proptypes) => {
  const { classname, data, isLoading, showSummary = false } = props;
  const { isModalPreviewOpen, toggleModalPreview } = useScheduleCard();
  return (
    <>
      {!isLoading ? (
        <div
          className={cn(
            "bg-red-100/10 dark:bg-gray-900 shadow-md p-2 md:px-3 border-2 border-red-300 rounded-md",
            classname
          )}
        >
          <div className="flex gap-5">
            <button
              onClick={toggleModalPreview}
              className="block min-w-[120px] cursor-pointer"
            >
              <Image
                src={
                  data.show.image?.original ||
                  data.show.image?.medium ||
                  "/images/illustrations/img-not-found.jpg"
                }
                width={500}
                height={500}
                alt={`${data.show.name}`}
                className="rounded-md w-[120px] h-[165px]"
              />
            </button>
            <div>
              <p className="font-semibold text-red-600 text-lg lg:text-2xl line-clamp-2">
                {data.show.name}
              </p>
              <div className="bg-amber-500/50 dark:bg-red-600 mt-1 px-3 py-1 rounded-lg w-max font-semibold text-xs">
                {data.show.type}
              </div>

              <div className="flex flex-col gap-1 text-neutral-600 md:text-md dark:text-neutral-200 text-sm">
                <div className="flex items-center gap-2 mt-2">
                  <p>Season {data.season}</p>
                  <span>|</span>
                  <p className="line-clamp-2">{data.name}</p>
                </div>

                {showSummary && (
                  <p
                    className="line-clamp-2"
                    dangerouslySetInnerHTML={{
                      __html: data.show.summary || "Summary is not available",
                    }}
                  />
                )}

                <div className="flex items-center gap-2 font-semibold text-sky-800 dark:text-neutral-200">
                  <p>{getFormattedDate(`${data.airdate}`)}</p>
                  <p>&#8226;</p>
                  <p>{data.airtime}</p>
                </div>
                <p>{data.runtime || "N/A"} Minutes</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 dark:bg-gray-600 shadow-md p-2 rounded-md w-full min-w-xs h-[150px] animate-pulse" />
      )}

      <AnimatePresence>
        {isModalPreviewOpen && (
          <TVShowPreviewModal onClose={toggleModalPreview} tvShow={data.show} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ScheduleCard;
