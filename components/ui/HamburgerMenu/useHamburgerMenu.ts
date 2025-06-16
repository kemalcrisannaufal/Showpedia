import { useState } from "react";

const useHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, setIsOpen, handleOnClick };
};

export default useHamburgerMenu;
