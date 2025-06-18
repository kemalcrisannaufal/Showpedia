import { IScheduleTVShow } from "@/types/tvshow.type";
import { getFormattedDate } from "@/utils/date";
import Image from "next/image";
import useScheduleCard from "./useScheduleCard";
import { AnimatePresence } from "framer-motion";
import TVShowPreviewModal from "../TVShowPreviewModal";

interface Proptypes {
  data: IScheduleTVShow;
  isLoading: boolean;
}

const ScheduleCard = (props: Proptypes) => {
  const { data, isLoading } = props;
  const { isModalPreviewOpen, toggleModalPreview } = useScheduleCard();
  return (
    <>
      {!isLoading ? (
        <div className="bg-red-100/10 shadow-md p-2 md:px-3 border-2 border-red-300 rounded-md">
          <div className="flex gap-5">
            <button onClick={toggleModalPreview} className="cursor-pointer">
              <Image
                src={`${data.show.image?.original}`}
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
              <div className="bg-yellow-300/50 mt-1 px-3 py-1 rounded-lg w-max font-semibold text-xs">
                {data.show.type}
              </div>

              <div className="flex flex-col gap-1 text-neutral-600 md:text-md text-sm">
                <div className="flex items-center gap-2 mt-2">
                  <p>Season {data.season}</p>
                  <span>|</span>
                  <p>{data.name}</p>
                </div>
                <div className="flex items-center gap-2">
                  <p>{getFormattedDate(`${data.airdate}`)}</p>
                  <p>&#8226;</p>
                  <p>{data.airtime}</p>
                </div>
                <p>{data.runtime} Minutes</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-300 shadow-md p-2 rounded-md w-full h-[150px] animate-pulse" />
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
