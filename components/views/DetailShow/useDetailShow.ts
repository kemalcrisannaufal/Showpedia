import mainServices from "@/services/main.services";
import { ITVShow } from "@/types/tvshow.type";
import { groupEpisodesBySeason } from "@/utils/groupEpisodeBySeason";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useDetailShow = () => {
  const { isReady, query } = useRouter();

  const getDetailShow = async (): Promise<ITVShow> => {
    const { data } = await mainServices.getDetailShowById(`${query.id}`);
    return data;
  };

  const { data: dataDetailShow, isLoading: isLoadingDetailShow } = useQuery({
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
    isLoadingDetailShow,
  };
};

export default useDetailShow;
