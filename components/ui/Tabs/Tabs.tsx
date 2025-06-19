import { Children, ReactNode } from "react";
import useTabs from "./useTabs";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface Proptypes {
  children: ReactNode;
  tabsHeader: string[];
}

const Tabs = ({ children, tabsHeader }: Proptypes) => {
  const { activeIdx, setActiveIdx } = useTabs();
  const childrenArray = Children.toArray(children);

  return (
    <>
      <div className="relative flex flex-wrap bg-gray-200 rounded-md w-full">
        {tabsHeader.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIdx(index)}
            className={cn(
              "relative flex-1 py-2 px-4 text-center font-medium z-10 transition-all cursor-pointer text-xs md:text-sm border border-white lg:border-none",
              activeIdx === index ? "text-white" : "text-gray-700"
            )}
          >
            {tab}
            {activeIdx === index && (
              <motion.div
                layoutId="tab-bg"
                className="z-[-1] absolute inset-0 bg-red-600 rounded-md"
                transition={{ duration: 0.6, type: "spring" }}
              />
            )}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:p-4 py-2"
        >
          {childrenArray[activeIdx]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Tabs;
