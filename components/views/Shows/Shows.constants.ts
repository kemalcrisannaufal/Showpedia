import { ITVShow } from "@/types/tvshow.type";

const AMERICAN_SERIES_IDS = [30770, 169, 82, 2993, 179, 269, 618, 541, 2705];
const KOREAN_SERIES_IDS = [
  14833, 62248, 59307, 9426, 84106, 73689, 33840, 42529, 83971,
];
const JAPANESE_SERIES_IDS = [
  77383, 59698, 39717, 41469, 43008, 1505, 919, 73023, 55578,
];

const AMERICAN_SERIES_DATA: ITVShow[] = [
  {
    id: 30770,
    url: "https://www.tvmaze.com/shows/30770/chernobyl",
    name: "Chernobyl",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "History"],
    status: "Ended",
    runtime: null,
    averageRuntime: 70,
    premiered: "2019-05-06",
    ended: "2019-06-03",
    officialSite: "https://www.hbo.com/chernobyl",
    schedule: {
      time: "21:00",
      days: ["Monday"],
    },
    rating: {
      average: 8.9,
    },
    weight: 98,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 360893,
      imdb: "tt7366338",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/193/482599.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/193/482599.jpg",
    },
    summary:
      "<p><b>Chernobyl</b> dramatizes the true story of one of the worst man-made catastrophes in history and tells of the brave men and women who sacrificed to save Europe from unimaginable disaster. The miniseries focuses on the heartbreaking scope of the nuclear plant disaster that occurred in Ukraine in April 1986, revealing how and why it happened and telling the shocking, remarkable stories of the heroes who fought and fell.</p>",
    updated: 1657658077,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/30770",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1634384",
        name: "Vichnaya Pamyat",
      },
    },
  },
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
    weight: 99,
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
    id: 82,
    url: "https://www.tvmaze.com/shows/82/game-of-thrones",
    name: "Game of Thrones",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Adventure", "Fantasy"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 61,
    premiered: "2011-04-17",
    ended: "2019-05-19",
    officialSite: "http://www.hbo.com/game-of-thrones",
    schedule: {
      time: "21:00",
      days: ["Sunday"],
    },
    rating: {
      average: 8.9,
    },
    weight: 100,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 24493,
      thetvdb: 121361,
      imdb: "tt0944947",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1245274.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1245274.jpg",
    },
    summary:
      "<p>Based on the bestselling book series <i>A Song of Ice and Fire</i> by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the <b>Game of Thrones</b>, you either win or you die.</p>",
    updated: 1746481277,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/82",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1623968",
        name: "The Iron Throne",
      },
    },
  },
  {
    id: 2993,
    url: "https://www.tvmaze.com/shows/2993/stranger-things",
    name: "Stranger Things",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Horror", "Science-Fiction"],
    status: "Running",
    runtime: null,
    averageRuntime: 62,
    premiered: "2016-07-15",
    ended: null,
    officialSite: "https://www.netflix.com/title/80057281",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 8.5,
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
      tvrage: 48493,
      thetvdb: 305288,
      imdb: "tt4574334",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/572/1432341.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/572/1432341.jpg",
    },
    summary:
      "<p>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>",
    updated: 1749456514,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/2993",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2209857",
        name: "Chapter Nine: The Piggyback",
      },
      nextepisode: {
        href: "https://api.tvmaze.com/episodes/2427134",
        name: "Chapter One: The Crawl",
      },
    },
  },
  {
    id: 179,
    url: "https://www.tvmaze.com/shows/179/the-wire",
    name: "The Wire",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2002-06-02",
    ended: "2008-03-09",
    officialSite: "http://www.hbo.com/the-wire",
    schedule: {
      time: "21:00",
      days: ["Sunday"],
    },
    rating: {
      average: 8.9,
    },
    weight: 99,
    network: {
      id: 8,
      name: "HBO",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.hbo.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 6296,
      thetvdb: 79126,
      imdb: "tt0306414",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/504/1260189.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/504/1260189.jpg",
    },
    summary:
      "<p>The first season of <b>The Wire</b> (2002) concentrated on the often-futile efforts of police to infiltrate a West Baltimore drug ring headed by Avon Barksdale and his lieutenant, Stringer Bell. In Seasons Two and Three, as the Barksdale investigation escalated, new storylines involving pressures on the working class and the city's political leadership were introduced. Season Four focused on the stories of several young boys in the public school system, struggling with problems at home and the lure of the corner - set against the rise of a new drug empire in West Baltimore and a new Mayor in City Hall. The fifth and final season of <i>The Wire</i> centers on the media's role in addressing - or failing to address - the fundamental political, economic and social realities depicted over the course of the series, while also resolving storylines of the numerous characters woven throughout the narrative arc of the show.</p>",
    updated: 1744958631,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/179",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/12969",
        name: "-30-",
      },
    },
  },
  {
    id: 269,
    url: "https://www.tvmaze.com/shows/269/peaky-blinders",
    name: "Peaky Blinders",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "History"],
    status: "Ended",
    runtime: null,
    averageRuntime: 61,
    premiered: "2013-09-12",
    ended: "2022-04-03",
    officialSite: "http://www.bbc.co.uk/programmes/b045fz8r",
    schedule: {
      time: "21:00",
      days: ["Sunday"],
    },
    rating: {
      average: 8.5,
    },
    weight: 99,
    network: {
      id: 12,
      name: "BBC One",
      country: {
        name: "United Kingdom",
        code: "GB",
        timezone: "Europe/London",
      },
      officialSite: "https://www.bbc.co.uk/bbcone",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 37240,
      thetvdb: 270915,
      imdb: "tt2442560",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/48/122213.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/48/122213.jpg",
    },
    summary:
      "<p>An epic gangster drama set in the lawless streets of 1920s Birmingham.</p>",
    updated: 1705170118,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/269",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2270891",
        name: "Lock and Key",
      },
    },
  },
  {
    id: 618,
    url: "https://www.tvmaze.com/shows/618/better-call-saul",
    name: "Better Call Saul",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "Legal"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 64,
    premiered: "2015-02-08",
    ended: "2022-08-15",
    officialSite: "https://www.amc.com/shows/better-call-saul--1002228",
    schedule: {
      time: "21:00",
      days: ["Monday"],
    },
    rating: {
      average: 8.6,
    },
    weight: 99,
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
      tvrage: 37780,
      thetvdb: 273181,
      imdb: "tt3032476",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/501/1253515.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/501/1253515.jpg",
    },
    summary:
      '<p><b>Better Call Saul</b> is the prequel to the award-winning series Breaking Bad, set six years before Saul Goodman became Walter White\'s lawyer. When we meet him, the man who will become Saul Goodman is known as Jimmy McGill, a small-time lawyer searching for his destiny, and, more immediately, hustling to make ends meet. Working alongside, and often against, Jimmy is "fixer" Mike Ehrmantraut, a beloved character introduced in Breaking Bad. The series will track Jimmy\'s transformation into Saul Goodman, the man who puts "criminal" in "criminal lawyer.</p>',
    updated: 1749669038,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/618",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2355731",
        name: "Saul Gone",
      },
    },
  },
  {
    id: 541,
    url: "https://www.tvmaze.com/shows/541/prison-break",
    name: "Prison Break",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2005-08-29",
    ended: "2017-05-30",
    officialSite: "http://www.fox.com/prisonbreak",
    schedule: {
      time: "21:00",
      days: ["Tuesday"],
    },
    rating: {
      average: 8.2,
    },
    weight: 99,
    network: {
      id: 4,
      name: "FOX",
      country: {
        name: "United States",
        code: "US",
        timezone: "America/New_York",
      },
      officialSite: "https://www.fox.com/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 4895,
      thetvdb: 360115,
      imdb: "tt0455275",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/104/261034.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/104/261034.jpg",
    },
    summary:
      "<p>Lincoln Burrows is currently on death row and scheduled to die in a few months for an assassination his younger brother Michael is convinced he did not commit. With no other options and time winding down, Michael takes drastic measures to get himself incarcerated alongside his brother in Fox River State Penitentiary. Once he's inside, Michael - a structural engineer with the blueprints for the prison - begins to execute an elaborate plan to break Lincoln out and prove him innocent. When Michael arrives at Fox River State Penitentiary, he meets the prison denizens who will, unknowingly, help in his escape plans - his cellmate, the lovelorn Sucre; beautiful prison doctor Dr. Sara Tancredi, who happens to be the governor's daughter; former mob boss John Abruzzi; and Warden Henry Pope. Meanwhile, outside the prison walls, the brothers' childhood friend and Lincoln's lost love, attorney Veronica Donovan, works within the law to free them; Lincoln's teenage son LJ may be going down a path similar to his convicted father's; and Secret Service Agent Paul Kellerman's investigation into Lincoln's case proves that there may be a national conspiracy.</p>",
    updated: 1749856842,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/541",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1107655",
        name: "Behind the Eyes",
      },
    },
  },
  {
    id: 2705,
    url: "https://www.tvmaze.com/shows/2705/narcos",
    name: "Narcos",
    type: "Scripted",
    language: "English",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: null,
    averageRuntime: 52,
    premiered: "2015-08-28",
    ended: "2017-09-01",
    officialSite: "https://www.netflix.com/title/80025172",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 8.4,
    },
    weight: 97,
    network: null,
    webChannel: {
      id: 1,
      name: "Netflix",
      country: null,
      officialSite: "https://www.netflix.com/",
    },
    dvdCountry: null,
    externals: {
      tvrage: 37241,
      thetvdb: 282670,
      imdb: "tt2707408",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/498/1246087.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/498/1246087.jpg",
    },
    summary:
      "<p><b>Narcos</b> chronicle the life and death of drug lord Pablo Escobar the ruthless boss of the Medellin Cartel and a known terrorist who was also a congressman, a family man and revered by the poor as a new Robin Hood.</p>",
    updated: 1704795052,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/2705",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1285394",
        name: "Going Back to Cali",
      },
    },
  },
];

const KOREAN_SERIES_DATA: ITVShow[] = [
  {
    id: 14833,
    url: "https://www.tvmaze.com/shows/14833/another-miss-oh",
    name: "Another Miss Oh",
    type: "Scripted",
    language: "Korean",
    genres: ["Comedy", "Romance"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2016-05-02",
    ended: "2016-06-28",
    officialSite: "http://program.interest.me/tvn/againoh",
    schedule: {
      time: "23:00",
      days: ["Monday", "Tuesday"],
    },
    rating: {
      average: 7.8,
    },
    weight: 85,
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
      thetvdb: 309674,
      imdb: "tt5679572",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/53/134993.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/53/134993.jpg",
    },
    summary:
      "<p>Two women working in the same industry with the exact same name keep getting their lives entangled both professionally and personally.</p>",
    updated: 1719482723,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/14833",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/819763",
        name: "Please Stay Alive, I'm Grateful You're Alive, Honey",
      },
    },
  },
  {
    id: 62248,
    url: "https://www.tvmaze.com/shows/62248/alchemy-of-souls",
    name: "Alchemy of Souls",
    type: "Scripted",
    language: "Korean",
    genres: ["Action", "Fantasy", "Romance"],
    status: "Ended",
    runtime: 80,
    averageRuntime: 80,
    premiered: "2022-06-18",
    ended: "2023-01-08",
    officialSite: "http://program.tving.com/tvn/alchemyofsouls/",
    schedule: {
      time: "21:15",
      days: ["Saturday", "Sunday"],
    },
    rating: {
      average: 7.9,
    },
    weight: 91,
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
      thetvdb: 401475,
      imdb: "tt20859920",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/431/1079679.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/431/1079679.jpg",
    },
    summary:
      '<p>Set in a fictional country called Daeho that does not exist in history or on maps, it is about the love and growth of young mages as they overcome their twisted fates due to a magic spell known as the "alchemy of souls", which allows souls to switch bodies. It follows the story of an elite assassin named Naksu, whose soul is accidentally trapped inside the weak body of Moo Duk—Jang Wook\'s servant from a powerful and noble family in the country. The young master of the Jang Family, Jang Wook, holds a dark secret about his scandalous birth. He wants the formidable assassin to help change his destiny.</p><p><br /> </p>',
    updated: 1735387420,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/62248",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2400627",
        name: "Episode 10",
      },
    },
  },
  {
    id: 59307,
    url: "https://www.tvmaze.com/shows/59307/money-heist-korea-joint-economic-area",
    name: "Money Heist: Korea - Joint Economic Area",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Crime", "Thriller"],
    status: "Ended",
    runtime: null,
    averageRuntime: 70,
    premiered: "2022-06-24",
    ended: "2022-12-09",
    officialSite: "https://www.netflix.com/title/80997343",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 6.5,
    },
    weight: 47,
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
      thetvdb: 401314,
      imdb: "tt13696452",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/430/1076004.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/430/1076004.jpg",
    },
    summary:
      "<p>Thieves overtake the mint of a unified Korea. With hostages trapped inside, the police must stop them — as well as the shadowy mastermind behind it all.</p>",
    updated: 1706989826,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/59307",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2320584",
        name: "Episode 12",
      },
    },
  },
  {
    id: 9426,
    url: "https://www.tvmaze.com/shows/9426/descendants-of-the-sun",
    name: "Descendants of the Sun",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Romance", "Medical"],
    status: "Ended",
    runtime: 60,
    averageRuntime: 60,
    premiered: "2016-02-24",
    ended: "2016-04-14",
    officialSite: "http://www.kbs.co.kr/drama/sun/",
    schedule: {
      time: "22:00",
      days: ["Wednesday", "Thursday"],
    },
    rating: {
      average: 8,
    },
    weight: 48,
    network: {
      id: 128,
      name: "KBS2",
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
      thetvdb: 305327,
      imdb: "tt4925000",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/46/115575.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/46/115575.jpg",
    },
    summary:
      "<p>This story tells of doctors stationed in the fictional war zone of Urk, and follows the love story that develops between a surgeon and a special forces officer, both elite in their respective fields. The story tracks both their personal and professional struggles while exploring issues about the value of life.<i><br></i></p>",
    updated: 1707392301,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/9426",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/659616",
        name: "Episode 16",
      },
    },
  },
  {
    id: 84106,
    url: "https://www.tvmaze.com/shows/84106/our-unwritten-seoul",
    name: "Our Unwritten Seoul",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Family", "Romance"],
    status: "Running",
    runtime: 100,
    averageRuntime: 100,
    premiered: "2025-05-24",
    ended: null,
    officialSite: "https://tvn.cjenm.com/ko/Our-Unwritten-Seoul/",
    schedule: {
      time: "21:20",
      days: ["Saturday", "Sunday"],
    },
    rating: {
      average: null,
    },
    weight: 90,
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
      thetvdb: 444739,
      imdb: "tt36724865",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/566/1416522.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/566/1416522.jpg",
    },
    summary:
      "<p><b>Our Unwritten Seoul </b>centers on twin sisters, Yoo Mi Ji and Yoo Mi Rae — identical in appearance yet opposite in personality and life paths. After a complicated twist of fate, they swap identities, each sister navigating unfamiliar challenges to discover love and their true selves.</p>",
    updated: 1750064564,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/84106",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3208752",
        name: "An Unconventional Whole",
      },
      nextepisode: {
        href: "https://api.tvmaze.com/episodes/3208753",
        name: "Episode 9",
      },
    },
  },
  {
    id: 73689,
    url: "https://www.tvmaze.com/shows/73689/mercy-for-none",
    name: "Mercy for None",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Action", "Crime"],
    status: "Ended",
    runtime: null,
    averageRuntime: 43,
    premiered: "2025-06-06",
    ended: "2025-06-06",
    officialSite: "https://www.netflix.com/title/81702777",
    schedule: {
      time: "",
      days: [],
    },
    rating: {
      average: 5.2,
    },
    weight: 96,
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
      thetvdb: 430791,
      imdb: "tt29650530",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/567/1419833.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/567/1419833.jpg",
    },
    summary:
      "<p>After severing ties with his gang, a former gangster returns to uncover the truth behind his brother's death -- embarking on a relentless path of revenge.</p>",
    updated: 1749617066,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/73689",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3269879",
        name: "Episode 7",
      },
    },
  },
  {
    id: 33840,
    url: "https://www.tvmaze.com/shows/33840/my-mister",
    name: "My Mister",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Family"],
    status: "Ended",
    runtime: 90,
    averageRuntime: 80,
    premiered: "2018-03-21",
    ended: "2018-05-17",
    officialSite: "http://program.tving.com/tvn/mymister/2/Vod/List",
    schedule: {
      time: "21:30",
      days: ["Wednesday", "Thursday"],
    },
    rating: {
      average: 8,
    },
    weight: 44,
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
      thetvdb: 341871,
      imdb: "tt7923710",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/150/375701.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/150/375701.jpg",
    },
    summary:
      "<p>A man in his 40's withstands the weight of life. A woman in her 20's goes through different experiences, but also withstands the weight of her life. The man and woman get together to help each other.</p>",
    updated: 1688924649,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/33840",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1432724",
        name: "Episode 16",
      },
    },
  },
  {
    id: 42529,
    url: "https://www.tvmaze.com/shows/42529/hotel-del-luna",
    name: "Hotel del Luna",
    type: "Scripted",
    language: "Korean",
    genres: ["Drama", "Fantasy", "Romance"],
    status: "Ended",
    runtime: 100,
    averageRuntime: 100,
    premiered: "2019-07-13",
    ended: "2019-09-01",
    officialSite: "http://program.tving.com/tvn/hoteldelluna",
    schedule: {
      time: "21:00",
      days: ["Saturday", "Sunday"],
    },
    rating: {
      average: 7.6,
    },
    weight: 63,
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
      thetvdb: 361412,
      imdb: "tt10220588",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/204/510214.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/204/510214.jpg",
    },
    summary:
      "<p>The Hotel Del Luna, located in Seoul, is not like any other hotel: its client are all ghosts. Jang Man Wol, stuck in the hotel for the past millennium, meets Goo Chan Sung, the new manager.</p>",
    updated: 1629638762,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/42529",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1681794",
        name: "Episode 16",
      },
    },
  },
  {
    id: 83971,
    url: "https://www.tvmaze.com/shows/83971/tastefully-yours",
    name: "Tastefully Yours",
    type: "Scripted",
    language: "Korean",
    genres: ["Comedy", "Food", "Romance"],
    status: "Ended",
    runtime: 74,
    averageRuntime: 74,
    premiered: "2025-05-12",
    ended: "2025-06-10",
    officialSite: "https://ktena.co.kr/bbs/board.php?bo_table=drama&wr_id=36",
    schedule: {
      time: "22:00",
      days: ["Monday", "Tuesday"],
    },
    rating: {
      average: null,
    },
    weight: 86,
    network: {
      id: 1897,
      name: "ENA",
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
      thetvdb: 451827,
      imdb: "tt36722167",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/563/1407947.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/563/1407947.jpg",
    },
    summary:
      "<p><b>Tastefully Yours d</b>epicts the story of Han Bum Woo, the successor of a large food company, who runs the best fine dining restaurant in Seoul but has no interest in 'taste', and Mo Yun Joo, a chef crazy about 'taste' who runs a one-table restaurant without a sign in a remote corner of the countryside. They grow together and fall in love while running a small restaurant in the city of Miraek, Jeonju.</p>",
    updated: 1749587200,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/83971",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3202178",
        name: "Tastefully Yours",
      },
    },
  },
];

const JAPANESE_SERIES_DATA: ITVShow[] = [
  {
    id: 77383,
    url: "https://www.tvmaze.com/shows/77383/sakamoto-days",
    name: "Sakamoto Days",
    type: "Animation",
    language: "Japanese",
    genres: ["Comedy", "Action", "Anime"],
    status: "Running",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2025-01-11",
    ended: null,
    officialSite: "https://sakamotodays.jp/",
    schedule: {
      time: "23:00",
      days: ["Saturday"],
    },
    rating: {
      average: 5.8,
    },
    weight: 94,
    network: {
      id: 76,
      name: "TV Tokyo",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 423732,
      imdb: "tt17069148",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/552/1382459.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/552/1382459.jpg",
    },
    summary:
      "<p>Taro Sakamoto used to be an unrivaled hit-man, earning legendary status in the underworld. But one day, the unthinkable happened. Sakamoto fell in love.</p>",
    updated: 1749068673,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/77383",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3109673",
        name: "Casino Battle",
      },
      nextepisode: {
        href: "https://api.tvmaze.com/episodes/3269110",
        name: "Episode 12",
      },
    },
  },
  {
    id: 59698,
    url: "https://www.tvmaze.com/shows/59698/spyfamily",
    name: "Spy×Family",
    type: "Animation",
    language: "Japanese",
    genres: ["Comedy", "Action", "Anime"],
    status: "Running",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2022-04-09",
    ended: null,
    officialSite: "https://spy-family.net/",
    schedule: {
      time: "23:00",
      days: ["Saturday"],
    },
    rating: {
      average: 7.3,
    },
    weight: 94,
    network: {
      id: 76,
      name: "TV Tokyo",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 405920,
      imdb: "tt13706018",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/442/1107117.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/442/1107117.jpg",
    },
    summary:
      "<p>Master spy Twilight is the best at what he does when it comes to going undercover on dangerous missions in the name of a better world. But when he receives the ultimate impossible assignment—get married and have a kid—he may finally be in over his head! Not one to depend on others, Twilight has his work cut out for him procuring both a wife and a child for his mission to infiltrate an elite private school. What he doesn't know is that the wife he's chosen is an assassin and the child he's adopted is a telepath!</p>",
    updated: 1741054897,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/59698",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2662109",
        name: "Part of the Family",
      },
    },
  },
  {
    id: 39717,
    url: "https://www.tvmaze.com/shows/39717/5-toubun-no-hanayome",
    name: "5 toubun no hanayome",
    type: "Animation",
    language: "Japanese",
    genres: ["Comedy", "Anime", "Romance"],
    status: "Ended",
    runtime: 24,
    averageRuntime: 24,
    premiered: "2019-01-10",
    ended: "2023-09-09",
    officialSite: "http://www.tbs.co.jp/anime/5hanayome",
    schedule: {
      time: "01:28",
      days: ["Thursday"],
    },
    rating: {
      average: 6.9,
    },
    weight: 62,
    network: {
      id: 159,
      name: "TBS",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: "https://www.tbs.co.jp/",
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 355966,
      imdb: "tt9584920",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/174/436196.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/174/436196.jpg",
    },
    summary:
      "<p>Fuutarou Uesugi is a poor, antisocial ace student who one day meets the rich transfer student Itsuki Nakano. They argue but when Uesugi realizes he is to be her tutor, he tries to get on better terms. While trying to do so he meets four other girls.</p>",
    updated: 1706234844,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/39717",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2751615",
        name: "A Not-so Coincidental Summer Vacation (Part 2)",
      },
    },
  },
  {
    id: 41469,
    url: "https://www.tvmaze.com/shows/41469/demon-slayer",
    name: "Demon Slayer",
    type: "Animation",
    language: "Japanese",
    genres: ["Action", "Fantasy", "Horror"],
    status: "Running",
    runtime: 30,
    averageRuntime: 31,
    premiered: "2019-04-06",
    ended: null,
    officialSite: "https://kimetsu.com/anime/",
    schedule: {
      time: "23:15",
      days: ["Sunday"],
    },
    rating: {
      average: 8,
    },
    weight: 97,
    network: {
      id: 131,
      name: "Fuji TV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 348545,
      imdb: "tt9335498",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/456/1140750.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/456/1140750.jpg",
    },
    summary:
      "<p>Since ancient times, rumors have abounded of man-eating demons lurking in the woods. Because of this, the local townsfolk never venture outside at night. Legend has it that a demon slayer also roams the night, hunting down these bloodthirsty demons. For young Tanjiro, these rumors will soon to become his harsh reality… Ever since the death of his father, Tanjiro has taken it upon himself to support his family. Although their lives may be hardened by tragedy, they've found happiness. But that ephemeral warmth is shattered one day when Tanjiro finds his family slaughtered and the lone survivor, his sister Nezuko, turned into a demon. To his surprise, however, Nezuko still shows signs of human emotion and thought… Thus begins Tanjiro's quest to fight demons and turn his sister human again.</p>",
    updated: 1745802086,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/41469",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2911036",
        name: "The Hashira Unite",
      },
    },
  },
  {
    id: 43008,
    url: "https://www.tvmaze.com/shows/43008/best-pool-ever",
    name: "Best. Pool. Ever.",
    type: "Reality",
    language: "English",
    genres: [],
    status: "Ended",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2019-07-06",
    ended: "2019-08-23",
    officialSite: "https://watch.hgtv.com/tv-shows/best-pool-ever/",
    schedule: {
      time: "15:00",
      days: ["Saturday"],
    },
    rating: {
      average: null,
    },
    weight: 53,
    network: {
      id: 192,
      name: "HGTV",
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
      tvrage: null,
      thetvdb: 366521,
      imdb: "tt11735970",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/205/512734.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/205/512734.jpg",
    },
    summary:
      "<p>An epic tour of the most extreme and spectacular residential pools. From infinity pools to backyard water parks, the best of the best in outdoor living is featured.</p>",
    updated: 1642536284,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/43008",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/1702190",
        name: "Dream Designs",
      },
    },
  },
  {
    id: 1505,
    url: "https://www.tvmaze.com/shows/1505/one-piece",
    name: "One Piece",
    type: "Animation",
    language: "Japanese",
    genres: ["Action", "Adventure", "Anime", "Fantasy"],
    status: "Running",
    runtime: 25,
    averageRuntime: 26,
    premiered: "1999-10-20",
    ended: null,
    officialSite: "https://one-piece.com/anime/index.html",
    schedule: {
      time: "23:15",
      days: ["Sunday"],
    },
    rating: {
      average: 8.8,
    },
    weight: 99,
    network: {
      id: 131,
      name: "Fuji TV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 8205,
      thetvdb: 81797,
      imdb: "tt0388629",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/504/1262497.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/504/1262497.jpg",
    },
    summary:
      "<p><b>One Piece</b> animation is based on the successful comic by Eiichiro Oda. The comic has sold more than 260 million copies. The success doesn't stop; the <i>One Piece</i> animation series is in its top 5 TV ratings for kids programs in Japan for past few years and the series' most recent feature film title <i>\"One Piece Film Z\" </i>which was released on December 2012 has gathered 5.6 million viewers so far. The success goes beyond borders; receives high popularity on animation at terrestrial channel in Taiwan, no.1 rating on animation at a DTT channel in France, received high popularity among age 3-13 on a terrestrial channel in Germany in year 2010. The animation series has been broadcasted in many parts of the world: USA, UK, Australia, France, Spain, Portugal, Germany, Italy, Greece, Turkey, Israel, South Korea, Taiwan, China, Hong Kong, Philippine, Thailand, Singapore, Malaysia, Indonesia, Ecuador, Nicaragua, Chile, Mexico, Brazil, and etc.</p>",
    updated: 1750069766,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/1505",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3276454",
        name: "To Save His Daughter - Kuma the Timid Pacifist",
      },
    },
  },
  {
    id: 919,
    url: "https://www.tvmaze.com/shows/919/attack-on-titan",
    name: "Attack on Titan",
    type: "Animation",
    language: "Japanese",
    genres: ["Anime", "Fantasy", "Horror"],
    status: "Ended",
    runtime: 25,
    averageRuntime: 25,
    premiered: "2013-04-07",
    ended: "2023-11-05",
    officialSite: "http://shingeki.tv/",
    schedule: {
      time: "00:10",
      days: ["Saturday"],
    },
    rating: {
      average: 8.9,
    },
    weight: 97,
    network: {
      id: 281,
      name: "NHK",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: 35298,
      thetvdb: 267440,
      imdb: "tt2560140",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/476/1191684.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/476/1191684.jpg",
    },
    summary:
      "<p>Known in Japan as Shingeki no Kyojin, many years ago, the last remnants of humanity were forced to retreat behind the towering walls of a fortified city to escape the massive, man-eating Titans that roamed the land outside their fortress. Only the heroic members of the Scouting Legion dared to stray beyond the safety of the walls – but even those brave warriors seldom returned alive. Those within the city clung to the illusion of a peaceful existence until the day that dream was shattered, and their slim chance at survival was reduced to one horrifying choice: kill – or be devoured!</p>",
    updated: 1744576995,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/919",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/2643610",
        name: "Attack on Titan: The Final Chapters (Part Two)",
      },
    },
  },
  {
    id: 73023,
    url: "https://www.tvmaze.com/shows/73023/dandadan",
    name: "Dandadan",
    type: "Animation",
    language: "Japanese",
    genres: ["Action", "Anime", "Fantasy"],
    status: "Running",
    runtime: null,
    averageRuntime: 24,
    premiered: "2024-10-03",
    ended: null,
    officialSite: "https://anime-dandadan.com",
    schedule: {
      time: "00:26",
      days: ["Thursday"],
    },
    rating: {
      average: 7.5,
    },
    weight: 97,
    network: null,
    webChannel: {
      id: 135,
      name: "AbemaTV",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 432832,
      imdb: "tt30217403",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/537/1344868.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/537/1344868.jpg",
    },
    summary:
      "<p>When high schooler Momo, from a family of spirit mediums, first meets her classmate Okarun, an occult geek, they argue—Momo believes in ghosts but denies aliens, and Okarun believes in aliens but denies ghosts. When it turns out both phenomena are real, Momo awakens a hidden power and Okarun gains the power of a curse. Together, they must challenge the paranormal forces threatening their world.</p>",
    updated: 1749551979,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/73023",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3019392",
        name: "Let's Go to the Cursed House",
      },
      nextepisode: {
        href: "https://api.tvmaze.com/episodes/3195217",
        name: "Episode 1",
      },
    },
  },
  {
    id: 55578,
    url: "https://www.tvmaze.com/shows/55578/doraemon",
    name: "Doraemon",
    type: "Animation",
    language: "Japanese",
    genres: ["Comedy", "Children"],
    status: "Running",
    runtime: 30,
    averageRuntime: 30,
    premiered: "2005-04-15",
    ended: null,
    officialSite: "https://www.tv-asahi.co.jp/doraemon/",
    schedule: {
      time: "",
      days: ["Saturday"],
    },
    rating: {
      average: null,
    },
    weight: 73,
    network: {
      id: 263,
      name: "TV Asahi",
      country: {
        name: "Japan",
        code: "JP",
        timezone: "Asia/Tokyo",
      },
      officialSite: null,
    },
    webChannel: null,
    dvdCountry: null,
    externals: {
      tvrage: null,
      thetvdb: 281405,
      imdb: "tt4083422",
    },
    image: {
      medium:
        "https://static.tvmaze.com/uploads/images/medium_portrait/321/803650.jpg",
      original:
        "https://static.tvmaze.com/uploads/images/original_untouched/321/803650.jpg",
    },
    summary:
      "<p>A robot cat Doraemon is sent back in time to help make Nobita Nobi, a boy without much talent, a better person.</p>",
    updated: 1748690098,
    _links: {
      self: {
        href: "https://api.tvmaze.com/shows/55578",
      },
      previousepisode: {
        href: "https://api.tvmaze.com/episodes/3180420",
        name: "Transformation Robot / Collecting Weather From All Around",
      },
    },
  },
];

export {
  AMERICAN_SERIES_IDS,
  AMERICAN_SERIES_DATA,
  KOREAN_SERIES_IDS,
  KOREAN_SERIES_DATA,
  JAPANESE_SERIES_IDS,
  JAPANESE_SERIES_DATA,
};
