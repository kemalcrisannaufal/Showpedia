import { IEpisode } from "@/types/tvshow.type";

const getIdShowByEpisode = (data: IEpisode | null | undefined) => {
  if (typeof data === "undefined") {
    return;
  }

  return data?._links.show.href.split("/")[
    data?._links.show.href.split("/").length - 1
  ];
};

const getIdFromLink = (link: string | null | undefined): number => {
  if (typeof link === "undefined") {
    return -1;
  }

  return Number(link?.split("/")[link?.split("/").length - 1]);
};

export { getIdShowByEpisode, getIdFromLink };
