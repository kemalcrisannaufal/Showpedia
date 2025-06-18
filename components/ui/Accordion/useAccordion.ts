import { useState } from "react";

const useAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return { isOpen, handleToggleOpen };
};

export default useAccordion;
