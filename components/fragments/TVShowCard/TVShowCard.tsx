import { ITVShow } from "@/types/tvshow.type";
import Image from "next/image";
import useTVShowCard from "./useTVShowCard";
import TVShowPreviewModal from "../TVShowPreviewModal";
import { AnimatePresence } from "framer-motion";

interface Proptypes {
  isLoading: boolean;
  tvShow: ITVShow;
}

const TVShowCard = (props: Proptypes) => {
  const { isLoading, tvShow } = props;
  const { isModalPreviewOpen, toggleModalPreview } = useTVShowCard();
  return (
    <>
      {!isLoading ? (
        <>
          <button
            className="relative rounded-md w-[145px] h-[200px] cursor-pointer"
            onClick={toggleModalPreview}
          >
            <Image
              src={`${tvShow.image?.medium}`}
              alt={`${tvShow.name}`}
              width={500}
              height={1000}
              className="shadow-lg rounded-md w-[145px] h-[200px]"
            />
          </button>

          <AnimatePresence>
            {isModalPreviewOpen && (
              <TVShowPreviewModal
                onClose={toggleModalPreview}
                tvShow={tvShow}
              />
            )}
          </AnimatePresence>
        </>
      ) : (
        <div className="bg-gray-300 rounded-md w-[145px] h-[200px] animate-pulse" />
      )}
    </>
  );
};

export default TVShowCard;
