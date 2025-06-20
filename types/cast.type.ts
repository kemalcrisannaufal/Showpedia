import { IEpisode, ITVShow } from "./tvshow.type";

interface IPerson {
  id: string;
  url: string | null;
  name: string | null;
  country: {
    name: string | null;
    code: string | null;
    timezone: string | null;
  };
  birthday: string | null;
  deathday: string | null;
  gender: string | null;
  image: {
    medium: string | null;
    original: string | null;
  } | null;
  updated: number | null;
  _links: {
    self: {
      href: string | null;
    } | null;
  } | null;
  _embedded: {
    castcredits?: ICastCredits[];
  };
}

interface ICharacter {
  id: string;
  url: string | null;
  name: string | null;
  image: {
    medium: string | null;
    original: string | null;
  };
  _links: {
    self: {
      href: string | null;
    } | null;
  } | null;
  self: boolean | null;
  voice: boolean | null;
}

interface ICastCredits {
  _links: {
    show?: {
      href: string | null;
      name: string | null;
    } | null;
    character: {
      href: string | null;
      name: string | null;
    } | null;
    episode?: {
      href: string | null;
      name: string | null;
    } | null;
  } | null;
  self: boolean | null;
  voice: boolean | null;
  _embedded?: {
    show?: ITVShow;
    episode?: IEpisode;
  };
}

interface ICast {
  person: IPerson;
  character: ICharacter;
}

export type { IPerson, ICharacter, ICast, ICastCredits };
