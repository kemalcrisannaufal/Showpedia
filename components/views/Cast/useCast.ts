import castServices from "@/services/cast.services";
import { IPerson } from "@/types/cast.type";
import { useQuery } from "@tanstack/react-query";

const useCast = () => {
  const getCast = async (): Promise<IPerson[]> => {
    const { data } = await castServices.getCast(0);
    return data;
  };

  const { data: dataCast, isLoading: isLoadingCast } = useQuery({
    queryKey: ["getCast"],
    queryFn: getCast,
    enabled: true,
  });

  return { dataCast, isLoadingCast };
};

export default useCast;
