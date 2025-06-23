import Image from "next/image";
import { NAV_ITEMS } from "../MainLayout.constants";
import Link from "next/link";
import { cn } from "@/utils/cn";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
import useMainNavbarLayout from "./useMainNavbarLayout";
import MainNavbarDrawer from "./MainNavbarDrawer";
import { AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";
import useScrolled from "@/hooks/useScrolled";
import ThemeToggle from "@/components/fragments/ThemeToggle";

const MainNavbarLayout = () => {
  const isScrolled = useScrolled();
  const { handleOnClick, isDrawerOpen, pathname } = useMainNavbarLayout();

  return (
    <div
      className={cn(
        "flex justify-between items-center px-5 md:px-10 w-full h-16 text-red-600 transition-all duration-300",
        isScrolled
          ? "bg-white/80 shadow-md sticky top-0 z-50 backdrop-blur-2xl dark:bg-gray-700"
          : "bg-transparent"
      )}
    >
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
      <div className="hidden xl:flex justify-end items-center gap-3 w-1/3">
        {NAV_ITEMS.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== "/");
          return (
            <Link
              href={item.href}
              key={index}
              className={cn(
                "px-4 py-2 font-medium  transition-all duration-500 ease-in-out text-red-600/65 dark:text-red-500 hover:text-white hover:bg-red-500 hover:rounded-full",
                isActive && "rounded-full bg-red-600 text-white dark:text-white"
              )}
            >
              {item.label}
            </Link>
          );
        })}

        <ThemeToggle />
      </div>

      <div className="flex items-center gap-5">
        <div className="xl:hidden">
          <ThemeToggle />
        </div>

        {/* Menu Button for Mobile */}
        <HamburgerMenu isOpen={isDrawerOpen} handleOnClick={handleOnClick} />
      </div>

      {/* Drawer for Mobile */}
      <AnimatePresence>
        {isDrawerOpen && <MainNavbarDrawer currentPathname={pathname} />}
      </AnimatePresence>
    </div>
  );
};

export default MainNavbarLayout;
