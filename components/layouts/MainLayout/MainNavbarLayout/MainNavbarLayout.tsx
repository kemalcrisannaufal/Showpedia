import Image from "next/image";
import { NAV_ITEMS } from "../MainLayout.constants";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/utils/cn";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import useMainNavbarLayout from "./useMainNavbarLayout";
import MainNavbarDrawer from "./MainNavbarDrawer";
import { AnimatePresence } from "framer-motion";

const MainNavbarLayout = () => {
  const { handleOnClick, isDrawerOpen, pathname } = useMainNavbarLayout();

  return (
    <div className="flex justify-between items-center px-5 md:px-10 w-full h-16 text-red-600">
      {/* Logo */}
      <div className="flex items-center gap-5 lg:w-1/3">
        <Link href="/">
          <Image
            src={"/images/general/logo.svg"}
            alt="logo"
            width={50}
            height={50}
          />
        </Link>
        <span className="font-semibold text-xl tracking-wide">Showpedia</span>
      </div>

      {/* Search */}
      <div className="hidden lg:flex items-center bg-white px-4 py-1 border-2 border-red-600 rounded-full w-1/3">
        <FiSearch className="mr-2 text-lg" />
        <input
          type="text"
          placeholder="Search"
          className="py-1 pr-3 focus:outline-none w-full"
        />
      </div>

      {/* Nav Items */}
      <div className="hidden lg:flex justify-end gap-3 w-1/3">
        {NAV_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "px-4 py-2 font-medium  transition-all duration-500 ease-in-out",
              item.href === pathname
                ? "font-semibold"
                : "text-red-600/65 hover:text-white hover:bg-red-600 hover:rounded-full"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Menu Button for Mobile */}
      <HamburgerMenu isOpen={isDrawerOpen} handleOnClick={handleOnClick} />

      {/* Drawer for Mobile */}
      <AnimatePresence>
        {isDrawerOpen && <MainNavbarDrawer currentPathname={pathname} />}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbarLayout;
