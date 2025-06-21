import { DEFAULT_SEASON_RATING_MODAL } from "@/constants/list.constants";
import { useState } from "react";

const useEpisodeList = () => {
  const [seasonRatingModal, setSeasonRatingModal] = useState(
    DEFAULT_SEASON_RATING_MODAL
  );
  
  const [expandedDescription, setExpandedDescription] = useState<{
    [id: number]: boolean;
  }>({});

  const toggleShowAllDescription = (id: number) => {
    setExpandedDescription((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    seasonRatingModal,
    setSeasonRatingModal,
    expandedDescription,
    toggleShowAllDescription,
  };
};

export default useEpisodeList;
