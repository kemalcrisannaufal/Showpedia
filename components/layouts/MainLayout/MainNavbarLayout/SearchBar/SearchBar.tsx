import { FiSearch, FiX } from "react-icons/fi";
import useSearchBar from "./useSearchBar";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";

interface Proptypes {
  classname?: string;
}

const SearchBar = (props: Proptypes) => {
  const { classname } = props;
  const {
    handleSearch,
    dataSearch,
    isLoadingSearch,
    search,
    inputRef,
    handleClearSearch,
  } = useSearchBar();

  return (
    <div className={cn("relative  text-neutral-600", classname)}>
      <div className="flex items-center bg-white px-4 py-1 border rounded-full">
        <FiSearch className="mr-2 text-lg" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search title"
          className="py-1 pr-3 focus:outline-none w-full text-neutral-700"
          onChange={(e) => handleSearch(e.target.value)}
        />

        {search !== "" && (
          <button
            aria-label="btn clear"
            className="block bg-gray-200 p-1 rounded-full cursor-pointer"
            onClick={handleClearSearch}
          >
            <FiX />
          </button>
        )}
      </div>

      <AnimatePresence>
        {search !== "" && !isLoadingSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="top-full left-0 z-50 absolute bg-white mt-2 p-2 rounded-md"
          >
            {dataSearch && dataSearch?.length > 0 ? (
              dataSearch?.map((item, index) => (
                <Link
                  href={`/shows/${item.show.id}`}
                  key={index}
                  className="flex gap-5 bg-transparent mb-2 p-2 border border-gray-300 rounded-md w-full"
                >
                  <Image
                    src={
                      item.show.image?.original ||
                      item.show.image?.medium ||
                      "/images/illustrations/img-not-found.jpg"
                    }
                    alt={item.show.name}
                    width={500}
                    height={500}
                    className="rounded-md w-[65px] h-[100px] object-cover"
                  />

                  <div>
                    <p className="font-semibold text-red-600">
                      {item.show.name}
                    </p>
                    <p
                      className="text-neutral-600 text-xs line-clamp-3 leading-5"
                      dangerouslySetInnerHTML={{
                        __html: item.show.summary || "Summary is not available",
                      }}
                    />
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <p>
                  <strong>No TV show found.</strong> We couldn{`'`}t find any
                  shows matching {search}
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchBar;
