import showServices from "@/services/show.services";
import { ITVShow } from "@/types/tvshow.type";
import { groupEpisodesBySeason } from "@/utils/groupEpisode";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDetailShow = () => {
  const { isReady, query } = useRouter();

  const getDetailShow = async (): Promise<ITVShow> => {
    const { data } = await showServices.getDetailShowById(`${query.id}`);
    return data;
  };

  const { data: dataDetailShow, isPending: isPendingDetailShow } = useQuery({
    queryKey: ["getDetailShowById"],
    queryFn: getDetailShow,
    enabled: isReady && !!query.id,
  });

  const episodesGroupBySeason = groupEpisodesBySeason(
    dataDetailShow?._embedded?.episodes
  );

  return {
    dataDetailShow,
    episodesGroupBySeason,
    isPendingDetailShow,
  };
};

export default useDetailShow;
