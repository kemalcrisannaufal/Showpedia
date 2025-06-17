import { ITVShow } from "@/types/tvshow.type";

const POPULAR_IDS = [169, 43687, 74399, 3479, 63335, 7269, 49929, 15525, 27436];

const SHOWPEDIA_PICK: ITVShow[] = [
  {
    id: 169,
    url: "https://www.tvmaze.com/shows/169/breaking-bad",
    name: "Breaking Bad",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2008-01-20",
    ended: "2019-10-11",
    officialSite: "http://www.amc.com/shows/breaking-bad",
    schedule: {
      time: "22:00",
      days: ["Sunday"],
    },
    rating: {
      average: 9.2,
    },
    weight: 100,
    network: {
      id: 20,
      name: "AMC",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 18164,
      thetvdb: 81189,
      imdb: "tt0903747",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253519.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/501/1253519.jpg",
    },
    summary:
      "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
    updated: 1734304801,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/169",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2007806",
        name: "El Camino: A Breaking Bad Movie",
      },
    },
  },
  {
    id: 43687,
    url: "https://www.tvmaze.com/shows/43687/squid-game",
    name: "Squid Game",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Thriller", "Mystery"],
    status: "Running",
    runtime: null,
    averageRuntime: 58,
    premiered: "2021-09-17",
    ended: null,
    officialSite: "https://www.netflix.com/title/81040344",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 8.1,
    },
    weight: 100,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 383275,
      imdb: "tt10919420",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/554/1385558.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/554/1385558.jpg",
    },
    summary:
      "<p>Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.</p>",
    updated: 1749142256,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/43687",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3086997",
        name: "Friend or Foe",
      },
      nextepisode: {
        href: "https://api.tvmaze.com/episodes/3098208",
        name: "TBA",
      },
    },
  },
  {
    id: 74399,
    url: "https://www.tvmaze.com/shows/74399/when-life-gives-you-tangerines",
    name: "When Life Gives You Tangerines",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Romance"],
    status: "Ended",
    runtime: null,
    averageRuntime: 62,
    premiered: "2025-03-07",
    ended: "2025-03-28",
    officialSite: "https://www.netflix.com/title/81681535",
    schedule: {
      time: "",
      days: ["Friday"],
    },
    rating: {
      average: null,
    },
    weight: 91,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 428338,
      imdb: "tt26471411",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/553/1383936.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/553/1383936.jpg",
    },
    summary:
      "<p>In Jeju, a spirited girl and a steadfast boy's island story blossoms into a lifelong tale of setbacks and triumphs --- proving love endures across time.</p>",
    updated: 1744671986,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/74399",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3121286",
        name: "Here’s to All You’ve Been Through",
      },
    },
  },
  {
    id: 3479,
    url: "https://www.tvmaze.com/shows/3479/running-man",
    name: "Running Man",
    type: "Variety",
    language: "Korean",
    genres: ["Comedy"],
    status: "Running",
    runtime: 90,
    averageRuntime: 90,
    premiered: "2010-07-11",
    ended: null,
    officialSite:
      "http://program.sbs.co.kr/builder/programMainList.do?pgm_id=00000330171",
    schedule: {
      time: "18:10",
      days: ["Sunday"],
    },
    rating: {
      average: 7.8,
    },
    weight: 92,
    network: {
      id: 127,
      name: "SBS",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 29529,
      thetvdb: 248870,
      imdb: "tt2185037",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/18/46329.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/18/46329.jpg",
    },
    summary:
      '<p><b>Running Man</b> is a South Korean variety show that first aired on July 11, 2010. This show is classified as an "urban action variety"; a never-before-seen new genre of variety shows. The MCs and guests complete missions in landmarks to win the race. It has garnered attention as being the come-back program for Yu Jae-suk, the main MC of the program, after leaving Good Sunday\'s <i>Family Outing</i> in February 2010.</p>',
    updated: 1749244464,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/3479",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3270183",
        name: "755 Road Trips as Drawn",
      },
    },
  },
  {
    id: 63335,
    url: "https://www.tvmaze.com/shows/63335/earth-arcade",
    name: "Earth Arcade",
    type: "Reality",
    language: "Korean",
    genres: ["Comedy", "Adventure"],
    status: "Running",
    runtime: null,
    averageRuntime: 97,
    premiered: "2022-06-24",
    ended: null,
    officialSite: "http://program.tving.com/tvn/tvneartharcade",
    schedule: {
      time: "",
      days: ["Friday"],
    },
    rating: {
      average: null,
    },
    weight: 21,
    network: {
      id: 280,
      name: "tvN",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 421766,
      imdb: "tt27744576",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/567/1417679.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/567/1417679.jpg",
    },
    summary:
      "<p>Four warriors who gathered to catch the moon rabbit who fled to Earth! A new concept hybrid multiverse action adventure variety that unfolds across time and space begins!</p>",
    updated: 1749984195,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/63335",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3275963",
        name: "The E-cade Members Chasing After Torong and Cheol Yong",
      },
    },
  },
  {
    id: 7269,
    url: "https://www.tvmaze.com/shows/7269/answer-me-1988",
    name: "Answer Me 1988",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Comedy", "Romance"],
    status: "Ended",
    runtime: 80,
    averageRuntime: 95,
    premiered: "2015-11-06",
    ended: "2016-01-16",
    officialSite: "http://program.interest.me/tvn/reply1988",
    schedule: {
      time: "20:30",
      days: ["Friday", "Saturday"],
    },
    rating: {
      average: 8,
    },
    weight: 45,
    network: {
      id: 280,
      name: "tvN",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 301078,
      imdb: "tt5182866",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/27/67574.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/27/67574.jpg",
    },
    summary:
      "<p>A drama about a small cluster of neighboring families set in 1988.</p>",
    updated: 1724053732,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/7269",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/573767",
        name: "Goodbye, My Youth. Goodbye, Ssangmundong.",
      },
    },
  },
  {
    id: 49929,
    url: "https://www.tvmaze.com/shows/49929/start-up",
    name: "Start-Up",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Romance"],
    status: "Ended",
    runtime: 90,
    averageRuntime: 90,
    premiered: "2020-10-17",
    ended: "2020-12-06",
    officialSite: "http://program.tving.com/tvn/startup",
    schedule: {
      time: "21:00",
      days: ["Saturday", "Sunday"],
    },
    rating: {
      average: 6.6,
    },
    weight: 45,
    network: {
      id: 280,
      name: "tvN",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 383801,
      imdb: "tt12867810",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/274/685409.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/274/685409.jpg",
    },
    summary:
      "<p><b>Start-Up</b> is set in South Korea's fictional Silicon Valley, called Sandbox, and tells the story of people in the world of startup companies. Seo Dal Mi dreams of becoming Korea's Steve Jobs. She's an adventurer who doesn't own much, but has a grand plan for herself. She also has experience in a wide range of part-time jobs and is a person of great vitality. </p><p>Nam Do San is the founder of Samsan Tech. He was once the pride of his family as a math genius, but for the past two years, he's been going nowhere with his company's investments. It turns out that Seo Dal Mi remembers him as her ‘cool first love', and he decides to begin a startup in the hope of turning Seo Dal Mi's misunderstanding into reality.</p>",
    updated: 1721912473,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/49929",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1951354",
        name: "Scale Up",
      },
    },
  },
  {
    id: 15525,
    url: "https://www.tvmaze.com/shows/15525/the-heirs",
    name: "The Heirs",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Comedy", "Romance"],
    status: "Ended",
    runtime: 65,
    averageRuntime: null,
    premiered: "2013-10-09",
    ended: "2013-12-12",
    officialSite: null,
    schedule: {
      time: "21:55",
      days: ["Wednesday", "Thursday"],
    },
    rating: {
      average: 7.6,
    },
    weight: 46,
    network: {
      id: 127,
      name: "SBS",
      country: {
        name: "Korea, Republic of",
        code: "KR",
        timezone: "Asia/Seoul",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 273107,
      imdb: "tt3243098",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/52/131713.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/52/131713.jpg",
    },
    summary:
      '<p><b>The Heirs</b> follows a group of privileged, elite high school students as they are groomed to take over their families\' business empires. A romantic comedy about high school students living in top 1% high society, learning about love and friendship. Things get turned topsy turvy when the students end up getting tangled with a girl from lower class who is the heir of "poverty", and romance unfolds.</p>',
    updated: 1704794599,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/15525",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/704968",
        name: "A Happy Ending for Kim Tan and Eun Sang",
      },
    },
  },
  {
    id: 27436,
    url: "https://www.tvmaze.com/shows/27436/la-casa-de-papel",
    name: "La Casa de Papel",
    type: "Scripted",
    language: "Spanish",
    genres: ["Action", "Crime", "Thriller"],
    status: "Ended",
    runtime: null,
    averageRuntime: 60,
    premiered: "2017-05-02",
    ended: "2021-12-03",
    officialSite: "https://www.netflix.com/title/80192098",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 8,
    },
    weight: 99,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 327417,
      imdb: "tt6468322",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/376/940830.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/376/940830.jpg",
    },
    summary:
      "<p>A group of very peculiar robbers have assaulted the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and taking home 2,400 million euros.</p>",
    updated: 1704795522,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/27436",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2098588",
        name: "Una tradición familiar",
      },
    },
  },
];

export { POPULAR_IDS, SHOWPEDIA_PICK };
