import { useState } from "react";

const useScheduleCard = () => {
  const [isModalPreviewOpen, setModalPreviewOpen] = useState(false);

  const toggleModalPreview = () => {
    setModalPreviewOpen(!isModalPreviewOpen);
  };

  return { isModalPreviewOpen, toggleModalPreview };
};

export default useScheduleCard;
