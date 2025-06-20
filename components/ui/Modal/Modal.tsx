import { ReactNode } from "react";
import { FiX } from "react-icons/fi";
import { motion } from "framer-motion";

interface Proptypes {
  children: ReactNode;
  onClose: () => void;
}

const Modal = (props: Proptypes) => {
  const { children, onClose } = props;
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-end md:items-center bg-black/40 backdrop-blur-[2px] w-full h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.4 } }}
        className="relative bg-white md:rounded-lg rounded-t-xl w-full max-w-xl max-h-[80vh] overflow-y-auto scrollbar-hide"
      >
        {children}
        <button
          className="top-1 right-1 absolute hover:bg-gray-300/75 p-1 rounded-full transition-all duration-300 ease-in-out cursor-pointer"
          onClick={onClose}
          aria-label="close modal"
        >
          <FiX className="text-xl" />
        </button>

        <div className="md:hidden flex justify-center items-center bg-gradient-to-r from-[#7f1d1d] via-[#ef4444] to-[#7f1d1d] rounded-t-full h-12">
          <span className="text-white text-xs">Showpedia</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Modal;
