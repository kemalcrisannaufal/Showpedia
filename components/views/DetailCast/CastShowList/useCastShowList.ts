import { DEFAULT_MAX_IDX_SHOW_BY_CAST } from "@/constants/list.constants";
import { IEpisode } from "@/types/tvshow.type";
import { useState } from "react";

const useCastShowList = () => {
  const [maxIdxShow, setMaxIdxShow] = useState(DEFAULT_MAX_IDX_SHOW_BY_CAST);
  const [detailEpisode, setDetailEpisode] = useState<IEpisode | undefined>(
    {} as IEpisode
  );
  const [selectedCharacter, setSelectedCharacter] = useState({
    show: "",
    character: "",
  });

  const handleShowAllOrLess = (numOfShow: number) => {
    if (maxIdxShow < numOfShow) {
      setMaxIdxShow(numOfShow);
    } else {
      setMaxIdxShow(DEFAULT_MAX_IDX_SHOW_BY_CAST);
    }
  };

  return {
    maxIdxShow,
    setMaxIdxShow,
    handleShowAllOrLess,
    detailEpisode,
    setDetailEpisode,
    selectedCharacter,
    setSelectedCharacter,
  };
};

export default useCastShowList;
