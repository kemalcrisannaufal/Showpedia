import { ReactNode, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface Proptypes {
  children: ReactNode;
  onClose: () => void;
}

const Modal = (props: Proptypes) => {
  const { children, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="z-50 fixed inset-0 flex justify-center items-end md:items-center bg-black/40 backdrop-blur-[2px] w-full h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        className="relative bg-white dark:bg-slate-800 md:rounded-lg rounded-t-xl w-full max-w-xl max-h-[80vh] overflow-y-auto scrollbar-hide"
        ref={ref}
      >
        {children}
        <button
          className="top-1 right-1 absolute hover:bg-gray-300/75 p-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
          onClick={onClose}
          aria-label="close modal"
        >
          <FiX className="text-xl" />
        </button>

        <div className="md:hidden flex justify-center items-center bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#7f1d1d] h-12" />
      </motion.div>
    </div>
  );
};

export default Modal;
