import { DEFAULT_LAST_IDX_CAST_SHOW } from "@/constants/list.constants";
import { useState } from "react";

const useCastList = () => {
  const [lastIdx, setLastIdx] = useState(DEFAULT_LAST_IDX_CAST_SHOW);

  const handleShowAllCast = (idx: number | undefined) => {
    if (typeof idx === "undefined") {
      setLastIdx(DEFAULT_LAST_IDX_CAST_SHOW);
      return;
    }

    if (lastIdx !== DEFAULT_LAST_IDX_CAST_SHOW) {
      setLastIdx(DEFAULT_LAST_IDX_CAST_SHOW);
      return;
    }

    setLastIdx(idx);
  };

  return { lastIdx, handleShowAllCast };
};

export default useCastList;
