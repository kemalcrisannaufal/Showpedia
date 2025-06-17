import { ITVShow } from "@/types/tvshow.type";
import Modal from "../../ui/Modal/Modal";
import Image from "next/image";
import Button from "../../ui/Button";

interface Proptypes {
  tvShow: ITVShow;
  onClose: () => void;
}

const TVShowPreviewModal = (props: Proptypes) => {
  const { tvShow, onClose } = props;
  return (
    <Modal onClose={onClose}>
      <div className="flex gap-5 p-5">
        <Image
          src={tvShow.image.original}
          alt={tvShow.name}
          width={500}
          height={500}
          className="rounded-md w-[150px] h-[200px]"
        />
        <div className="flex flex-col">
          <div className="flex-grow">
            <h2 className="font-semibold text-2xl">{tvShow.name}</h2>
            <div className="flex flex-wrap items-center gap-1 mt-1.5">
              {tvShow.genres.map((genre, index) => (
                <div
                  key={index}
                  className="bg-red-200/50 px-2 py-1 border rounded-md font-medium text-red-600 text-xs"
                >
                  {genre}
                </div>
              ))}
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: tvShow.summary }}
              className="mt-3 text-neutral-700 text-xs md:text-sm line-clamp-4 md:line-clamp-3 leading-relaxed"
            />
          </div>

          <div className="flex justify-end mt-2">
            <Button classname="text-xs md:text-base">Read More</Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TVShowPreviewModal;
