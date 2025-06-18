import mainServices from "@/services/main.services";
import { ITVShow } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";

const useShows = () => {
  const getShows = async (): Promise<ITVShow[]> => {
    const { data } = await mainServices.getShows(1);
    return data.slice(0, 48);
  };

  const { data: dataShows, isLoading: isLoadingShows } = useQuery({
    queryKey: ["getShows"],
    queryFn: getShows,
    enabled: true,
  });

  return {
    dataShows,
    isLoadingShows,
  };
};

export default useShows;
