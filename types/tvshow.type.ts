interface ITVShow {
  id: number;
  url: string | null;
  name: string;
  type: string | null;
  language: string | null;
  genres: string[] | null;
  status: string | null;
  runtime: number | null;
  averageRuntime: number | null;
  premiered: string | null;
  ended: string | null;
  officialSite: string | null;
  schedule: { time: string | null; days: string[] | null } | null;
  rating: { average: number | null } | null;
  weight: number;
  webChannel: {
    id: number | null;
    name: string | null;
    country: string | null;
    officialSite: string | null;
  } | null;
  network: {
    id: number | null;
    name: string | null;
    country: {
      name: string | null;
      code: string | null;
      timezone: string | null;
    } | null;
    officialSite: string | null;
  } | null;
  dvdCountry: string | null;
  externals: {
    tvrage: number | null;
    thetvdb: number | null;
    imdb: string | null;
  } | null;
  image: {
    medium: string | null;
    original: string | null;
  } | null;
  summary: string | null;
  updated: number | null;
  _links: {
    self?: {
      href: string | null;
    };
    previousepisode?: {
      href: string | null;
      name: string | null;
    };
    nextepisode?: {
      href: string | null;
      name: string | null;
    };
  } | null;
}

interface IScheduleTVShow {
  id: number | null;
  url: string | null;
  name: string | null;
  season: number | null;
  number: number | null;
  type: string | null;
  airdate: string | null;
  airtime: string | null;
  airstamp: string | null;
  runtime: number | null;
  rating: { average: number | null } | null;
  image: {
    medium: string | null;
    original: string | null;
  };
  summary: string | null;
  show: ITVShow;
}

export type { ITVShow, IScheduleTVShow };
