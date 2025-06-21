import { IEpisode } from "@/types/tvshow.type";

const getIdShowByEpisode = (data: IEpisode | undefined) => {
  if (typeof data === "undefined") {
    return;
  }

  return data?._links.show.href.split("/")[
    data?._links.show.href.split("/").length - 1
  ];
};

export { getIdShowByEpisode };
