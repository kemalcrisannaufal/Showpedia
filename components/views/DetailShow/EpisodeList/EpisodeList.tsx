import Accordion from "@/components/ui/Accordion";
import AccordionItem from "@/components/ui/Accordion/AccordionItem";
import { IEpisode } from "@/types/tvshow.type";
import { cn } from "@/utils/cn";
import { getFormattedDate } from "@/utils/date";
import { getRatingColor } from "@/utils/getRatingColor";
import Image from "next/image";
import useEpisodeList from "./useEpisodeList";
import EpisodeListRatingModal from "./EpisodeListRatingModal";
import { AnimatePresence, motion } from "framer-motion";
import { DEFAULT_SEASON_RATING_MODAL } from "@/constants/list.constants";

interface Proptypes {
  episodesGroupBySeason: Record<number, IEpisode[]>;
}

const EpisodeList = (props: Proptypes) => {
  const { episodesGroupBySeason } = props;
  const {
    seasonRatingModal,
    setSeasonRatingModal,
    expandedDescription,
    toggleShowAllDescription,
  } = useEpisodeList();
  return (
    <>
      <h2 className="my-3 font-bold text-red-600 text-xl">Episode List</h2>
      <div className="flex flex-col gap-5 mt-5">
        {Object.entries(episodesGroupBySeason).map(([season, episodes]) => (
          <Accordion
            key={season}
            title={`Season ${season}`}
            titleClickable
            onClickTitle={() => setSeasonRatingModal(+season)}
          >
            {episodes.map((episode) => (
              <AccordionItem key={episode.id}>
                <div className="flex flex-wrap md:flex-nowrap gap-5">
                  {episode.image?.original ? (
                    <Image
                      src={`${episode.image?.original}`}
                      alt={`${episode.name}`}
                      width={150}
                      height={150}
                      className="block rounded-lg w-full md:w-[160px] h-[180px] md:h-[120px] object-cover aspect-video"
                    />
                  ) : (
                    <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg w-full md:w-[160px] h-[180px] md:h-[120px] aspect-video">
                      <Image
                        src={`/images/general/logo-white.svg`}
                        alt={`Showpedia`}
                        width={50}
                        height={50}
                      />
                      <span className="block font-medium text-white text-xs">
                        Showpedia
                      </span>
                    </div>
                  )}

                  <div className="w-full">
                    <div className="flex justify-between items-start gap-2 w-full">
                      <div>
                        <p className="font-bold text-neutral-700">
                          Episode {episode.number} - {episode.name}
                        </p>
                        <div className="flex items-center gap-5 text-neutral-600 text-sm">
                          <p>{getFormattedDate(`${episode.airdate}`)}</p>
                          <p>{episode.runtime} Minutes</p>
                        </div>
                      </div>
                      <div
                        className={cn(
                          "p-2 text-white rounded-lg w-8 h-8 md:w-10 md:h-10 flex justify-center items-center shadow-md text-xs md:text-sm font-medium",
                          getRatingColor(episode.rating.average)
                        )}
                      >
                        {episode.rating.average || "N/A"}
                      </div>
                    </div>

                    {episode.summary ? (
                      <>
                        <AnimatePresence initial={false}>
                          <motion.div
                            key={
                              expandedDescription[episode.id]
                                ? `expanded-${episode.id}`
                                : `clamped-${episode.id}`
                            }
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <p
                              className={cn(
                                "mt-2 text-neutral-700 text-sm text-justify",
                                !expandedDescription[episode.id] &&
                                  "line-clamp-3"
                              )}
                              dangerouslySetInnerHTML={{
                                __html: `${episode.summary}`,
                              }}
                            />
                          </motion.div>
                        </AnimatePresence>

                        {episode.summary.length > 400 && (
                          <button
                            className="mt-1 mr-2 font-semibold text-sm cursor-pointer"
                            onClick={() => toggleShowAllDescription(episode.id)}
                          >
                            {expandedDescription[episode.id]
                              ? "Show Less"
                              : "Show More"}
                          </button>
                        )}
                      </>
                    ) : (
                      <p className="mt-2 text-neutral-700 text-sm text-justify">
                        No description available
                      </p>
                    )}
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        ))}
      </div>

      <AnimatePresence>
        {seasonRatingModal !== DEFAULT_SEASON_RATING_MODAL && (
          <EpisodeListRatingModal
            episodes={episodesGroupBySeason[seasonRatingModal]}
            season={seasonRatingModal}
            onClose={() => setSeasonRatingModal(DEFAULT_SEASON_RATING_MODAL)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default EpisodeList;
