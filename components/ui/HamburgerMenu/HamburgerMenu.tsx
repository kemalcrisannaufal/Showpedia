import { cn } from "@/utils/cn";

interface Proptypes {
  isOpen: boolean;
  handleOnClick: () => void;
}

const HamburgerMenu = (props: Proptypes) => {
  const { isOpen, handleOnClick } = props;
  return (
    <button
      className="xl:hidden relative w-8 h-6 cursor-pointer"
      onClick={handleOnClick}
    >
      <span
        className={cn(
          "block  absolute bg-red-600 w-full h-[3px] transition-all duration-500 ease-in-out",
          isOpen ? "rotate-45 top-3" : "top-0"
        )}
      />
      <span
        className={cn(
          "block top-3 absolute bg-red-600 w-full h-[3px] transition-all duration-400 ease-in-out",
          isOpen ? "opacity-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "block absolute bg-red-600 w-full h-[3px] transition-all duration-500 ease-in-out",
          isOpen ? "-rotate-45" : "top-6"
        )}
      />
    </button>
  );
};

export default HamburgerMenu;
