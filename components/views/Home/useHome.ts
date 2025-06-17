import homeServices from "@/services/home.services";
import { ITVShow } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";

const useHome = () => {
  const getPopularShow = async (): Promise<ITVShow[]> => {
    const data = await homeServices.getPopularShow();
    return data.data.slice(0, 9);
  };

  const { data: dataPopularShow, isPending: isPendingPopularShow } = useQuery({
    queryKey: ["getPopularShow"],
    queryFn: getPopularShow,
    enabled: true,
  });

  return { dataPopularShow, isPendingPopularShow };
};

export default useHome;
