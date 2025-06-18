import { IEpisode } from "@/types/tvshow.type";

export const groupEpisodesBySeason = (episodes: IEpisode[] | undefined) => {
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
