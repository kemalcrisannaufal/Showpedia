import { DEFAULT_MAX_IDX_SHOW_BY_CAST } from "@/constants/list.constants";
import { useState } from "react";

const useCastShowList = () => {
  const [maxIdxShow, setMaxIdxShow] = useState(DEFAULT_MAX_IDX_SHOW_BY_CAST);

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
  };
};

export default useCastShowList;
