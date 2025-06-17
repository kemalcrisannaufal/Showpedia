import { ITVShow } from "@/types/tvshow.type";
import Image from "next/image";
import useTVShowCard from "./useTVShowCard";
import TVShowPreviewModal from "./TVShowPreviewModal";
import { AnimatePresence } from "framer-motion";

interface Proptypes {
  isLoading: boolean;
  tvShow: ITVShow;
}

const TVShowCard = (props: Proptypes) => {
  const { tvShow } = props;
  const { isModalPreviewOpen, toggleModalPreview } = useTVShowCard();
  return (
    <>
      <button
        className="relative rounded-md w-[150px] h-[200px] cursor-pointer"
        onClick={toggleModalPreview}
      >
        <Image
          src={tvShow.image.original}
          alt={tvShow.name}
          width={500}
          height={500}
          className="rounded-md w-full h-full"
        />
      </button>

      <AnimatePresence>
        {isModalPreviewOpen && (
          <TVShowPreviewModal onClose={toggleModalPreview} tvShow={tvShow} />
        )}
      </AnimatePresence>
    </>
  );
};

export default TVShowCard;
