import castServices from "@/services/cast.services";
import showServices from "@/services/show.services";
import { ICastCredits, IPerson } from "@/types/cast.type";
import { IEpisode, ITVShow } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { groupEpisodesByShow } from "@/utils/groupEpisode";

const useDetailCast = () => {
  const { query, isReady } = useRouter();
  const [detailShow, setDetailShow] = useState<ITVShow>({} as ITVShow);

  const getCastData = async (): Promise<IPerson> => {
    const { data } = await castServices.getCast(`${query.id}`);
    return data;
  };

  const getShowByCast = async (): Promise<ICastCredits[]> => {
    const { data } = await castServices.getShowByCast(`${query.id}`);
    return data;
  };

  const getEpisodeList = async (): Promise<IEpisode[][]> => {
    const request = dataShowByCast!.map((item) =>
      showServices.getEpisodesByShow(`${item._embedded?.show?.id}`)
    );

    const responses = await Promise.all(request);
    const data = responses.map((res) => res.data);
    return data;
  };

  const getShowByCastAsGuest = async (): Promise<ICastCredits[]> => {
    const { data } = await castServices.getShowByCastAsGuest(`${query.id}`);
    return data;
  };

  const { data: dataCast, isLoading: isLoadingCastData } = useQuery({
    queryKey: ["getCastData"],
    queryFn: getCastData,
    enabled: !!query.id && isReady,
  });

  const {
    data: dataShowByCast,
    isLoading: isLoadingShowByCastData,
    isSuccess: isSuccessShowByCastData,
  } = useQuery({
    queryKey: ["getShowByCast"],
    queryFn: getShowByCast,
    enabled: !!query.id && isReady,
  });

  const { data: dataEpisodeList, isLoading: isLoadingEpisodeList } = useQuery({
    queryKey: ["getEpisodeList"],
    queryFn: getEpisodeList,
    enabled: !!query.id && isReady && isSuccessShowByCastData,
  });

  const { data: dataShowByCastAsGuest, isLoading: isLoadingShowByCastAsGuest } =
    useQuery({
      queryKey: ["getShowByCastAsGuest"],
      queryFn: getShowByCastAsGuest,
      enabled: !!query.id && isReady,
    });

  const groupCastEpisodesByShow = groupEpisodesByShow(dataShowByCastAsGuest);

  return {
    dataCast,
    isLoadingCastData,
    dataShowByCast,
    isLoadingShowByCastData,
    dataEpisodeList,
    isLoadingEpisodeList,
    dataShowByCastAsGuest,
    isLoadingShowByCastAsGuest,
    detailShow,
    setDetailShow,
    groupCastEpisodesByShow,
  };
};

export default useDetailCast;
