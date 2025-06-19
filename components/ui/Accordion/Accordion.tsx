import { FaChevronLeft } from "react-icons/fa6";
import useAccordion from "./useAccordion";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/utils/cn";

interface Proptypes {
  title: string;
  children: ReactNode;
  titleClickable?: boolean;
  onClickTitle?: () => void;
}

const Accordion = (props: Proptypes) => {
  const {
    title,
    children,
    titleClickable = false,
    onClickTitle = () => {},
  } = props;
  const { isOpen, handleToggleOpen } = useAccordion();
  return (
    <div className="shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center p-3">
        <button
          disabled={!titleClickable}
          className={cn(
            "font-medium text-red-600 text-lg",
            titleClickable && "cursor-pointer underline"
          )}
          onClick={onClickTitle}
        >
          {title}
        </button>
        <button
          className={cn(
            "p-2 text-red-600 transition-transform cursor-pointer duration-500",
            isOpen && "-rotate-90"
          )}
          onClick={handleToggleOpen}
        >
          <FaChevronLeft />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
