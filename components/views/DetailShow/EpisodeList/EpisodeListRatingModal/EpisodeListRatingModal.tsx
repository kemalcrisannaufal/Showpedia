import Modal from "@/components/ui/Modal/Modal";
import { IEpisode } from "@/types/tvshow.type";
import { cn } from "@/utils/cn";
import { getRatingColor } from "@/utils/getRatingColor";
import { FaStar } from "react-icons/fa6";

interface Proptypes {
  episodes: IEpisode[];
  season: number;
  onClose: () => void;
}

const EpisodeListRatingModal = (props: Proptypes) => {
  const { episodes, season, onClose } = props;
  return (
    <Modal onClose={onClose}>
      <div className="p-5">
        <h2 className="font-semibold text-2xl">Season {season}</h2>
        <div className="gap-2 grid grid-cols-5 md:grid-cols-7 mt-5">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className={cn(
                "flex flex-col justify-center items-center p-2 border rounded-lg w-16 h-16 text-white",
                getRatingColor(episode.rating.average)
              )}
            >
              <span className="text-xs">Ep. {episode.number}</span>

              <div className="flex items-center gap-1 text-xs">
                <FaStar className="text-amber-500" />
                <span className="text-sm">
                  {episode.rating.average || "N/A"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default EpisodeListRatingModal;
