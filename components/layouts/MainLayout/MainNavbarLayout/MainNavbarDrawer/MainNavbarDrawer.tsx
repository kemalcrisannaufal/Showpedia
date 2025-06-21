import Image from "next/image";
import Link from "next/link";
import { NAV_ITEMS } from "../../MainLayout.constants";
import { cn } from "@/utils/cn";
import { FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";
import SearchBar from "../SearchBar";

interface Proptypes {
  currentPathname: string;
}

const MainNavbarDrawer = (props: Proptypes) => {
  const { currentPathname } = props;
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
      exit={{ x: "-100%", transition: { duration: 0.5 } }}
      className="xl:hidden z-50 fixed inset-0 bg-gradient-to-r from-[#c12626] via-[#E50914] to-[#c12626] p-7 w-[80%] lg:w-[60%] h-screen text-white"
    >
      <Link href="/" className="flex justify-center items-center gap-5">
        <Image
          src={"/images/general/logo-white.svg"}
          alt="logo"
          width={75}
          height={75}
        />
      </Link>

      <SearchBar classname="md:hidden mt-6" />

      <div className="flex flex-col gap-5 mt-6">
        {NAV_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "px-4 py-3 text-xl transition-all duration-500 ease-in-out bg-red-700 rounded-md flex justify-between items-center",
              item.href === currentPathname && "border-1 border-white"
            )}
          >
            {item.label}
            <FiChevronRight className="text-2xl" />
          </Link>
        ))}

        <p className="mt-12 font-semibold text-2xl leading-10">
          Discover shows. Share your thoughts.
        </p>
      </div>
    </motion.div>
  );
};

export default MainNavbarDrawer;
