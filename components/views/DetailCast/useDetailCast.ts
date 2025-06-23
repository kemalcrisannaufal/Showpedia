import castServices from "@/services/cast.services";
import showServices from "@/services/show.services";
import { ICastCredits, IPerson } from "@/types/cast.type";
import { IEpisode, ITVShow } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState } from "react";
import { groupEpisodesByShow } from "@/utils/groupEpisode";
import { DEFAULT_IDX_NOT_FOUND } from "@/constants/list.constants";

const useDetailCast = () => {
  const { query, isReady } = useRouter();
  const [detailShow, setDetailShow] = useState<ITVShow>({} as ITVShow);
  const [idSelectedShow, setIdSelectedShow] = useState<number>(
    DEFAULT_IDX_NOT_FOUND
  );

  const getCastData = async (): Promise<IPerson> => {
    const { data } = await castServices.getCastById(`${query.id}`);
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

  const getCastImageInShow = async (): Promise<{
    medium: string | null;
    original: string | null;
  }> => {
    const { data } = await showServices.getDetailShowById(`${idSelectedShow}`);
    const dataShow = data as ITVShow;
    return dataShow?._embedded?.cast.find(
      (cast) => Number(cast.person.id) === Number(query.id)
    )?.character.image as {
      medium: string;
      original: string;
    };
  };

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

  const {
    data: dataImageCharacterForSelectedShow,
    isPending: isPendingImageCharacterForSelectedShow,
  } = useQuery({
    queryKey: ["getCastImageInShow", idSelectedShow],
    queryFn: getCastImageInShow,
    enabled: idSelectedShow !== -1,
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

    dataImageCharacterForSelectedShow,
    isPendingImageCharacterForSelectedShow,
    idSelectedShow,
    setIdSelectedShow,
  };
};

export default useDetailCast;
