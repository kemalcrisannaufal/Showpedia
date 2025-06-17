import { useState } from "react";

const useTVShowCard = () => {
  const [isModalPreviewOpen, setModalPreviewOpen] = useState(false);

  const toggleModalPreview = () => {
    setModalPreviewOpen(!isModalPreviewOpen);
  };

  return { isModalPreviewOpen, toggleModalPreview };
};

export default useTVShowCard;
