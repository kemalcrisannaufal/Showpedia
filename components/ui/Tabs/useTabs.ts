import { DEFAULT_IDX_TAB } from "@/constants/list.constants";
import { useState } from "react";

const useTabs = () => {
  const [activeIdx, setActiveIdx] = useState(DEFAULT_IDX_TAB);

  return { activeIdx, setActiveIdx };
};

export default useTabs;
