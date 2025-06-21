import { ICastCredits } from "@/types/cast.type";
import { IEpisode } from "@/types/tvshow.type";

const groupEpisodesBySeason = (episodes: IEpisode[] | undefined) => {
  if (episodes === undefined) return {};

  return episodes.reduce((acc, episode) => {
    const season = episode.season;
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {} as Record<number, IEpisode[]>);
};

const groupEpisodesByShow = (episodesByCast: ICastCredits[] | undefined) => {
  if (episodesByCast === undefined) return {};

  return episodesByCast?.reduce((acc, castCredits: ICastCredits) => {
    const showname = `${castCredits._embedded?.episode?._links.show.name}`;
    if (!acc[showname]) {
      acc[showname] = [];
    }
    acc[showname].push(castCredits);
    return acc;
  }, {} as Record<string, ICastCredits[]>);
};

export { groupEpisodesBySeason, groupEpisodesByShow };
