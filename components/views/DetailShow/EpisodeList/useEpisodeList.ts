import { useState } from "react";

const useEpisodeList = () => {
  const [seasonRatingModal, setSeasonRatingModal] = useState(-1);
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
