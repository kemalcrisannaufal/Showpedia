import Image from "next/image";
import { NAV_ITEMS } from "../MainLayout.constants";
import Link from "next/link";
import { cn } from "@/utils/cn";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import useMainNavbarLayout from "./useMainNavbarLayout";
import MainNavbarDrawer from "./MainNavbarDrawer";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

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
      <div className="hidden md:block w-full md:w-1/2 xl:w-1/3">
        <SearchBar />
      </div>

      {/* Nav Items */}
      <div className="hidden xl:flex justify-end gap-3 w-1/3">
        {NAV_ITEMS.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={cn(
              "px-4 py-2 font-medium  transition-all duration-500 ease-in-out text-red-600/65 hover:text-white hover:bg-red-600 hover:rounded-full",
              pathname === "/" &&
                item.href === "/" &&
                "font-semibold text-red-600",
              pathname.startsWith(item.href) &&
                item.href !== "/" &&
                "font-semibold text-red-600"
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
