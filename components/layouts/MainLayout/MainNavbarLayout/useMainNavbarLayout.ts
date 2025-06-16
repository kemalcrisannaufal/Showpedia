import { useRouter } from "next/router";
import { useState } from "react";

const useMainNavbarLayout = () => {
  const { pathname } = useRouter();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOnClick = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return { handleOnClick, isDrawerOpen, pathname };
};

export default useMainNavbarLayout;
