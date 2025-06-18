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

interface ICast {
  person: IPerson;
  character: ICharacter;
}

export type { IPerson, ICharacter, ICast };
