import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";

interface Proptypes {
  classname?: string;
  text: string;
}

const TypingTextEffect = (props: Proptypes) => {
  const { classname, text } = props;

  const [showText, setShowText] = useState<string>("");
  const [charIdx, setCharIdx] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  useEffect(() => {
    const delay = isDeleting ? 70 : 120;
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIdx === text.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIdx === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
      return () => clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      const nextIdx = isDeleting ? charIdx - 1 : charIdx + 1;
      setShowText(text.slice(0, nextIdx));
      setCharIdx(nextIdx);
    }, delay);

    return () => clearTimeout(timeout);
  }, [charIdx, isDeleting, text]);

  return <p className={cn(classname)}>{showText}</p>;
};

export default TypingTextEffect;
