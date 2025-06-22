import Image from "next/image";
import useSearchCast from "./useSearchCast";
import { getFormattedDate } from "@/utils/date";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const SearchCast = () => {
  const {
    search,
    handleSearch,
    dataSearch,
    isLoadingSearch,
    handleClearSearch,
    inputRef,
  } = useSearchCast();

  return (
    <div className="flex justify-between items-center mb-5">
      <h1 className="font-semibold text-red-600 text-2xl">Cast</h1>
      <div className="relative w-2/3 md:w-1/3 xl:w-1/4">
        <div className="flex items-center gap-2 px-2 border border-gray-300 rounded-xl">
          <input
            ref={inputRef}
            placeholder="Search cast"
            type="text"
            className="px-3 py-2 focus:outline-0 active:outline-0 focus:ring-0 active:ring-0 w-full text-neutral-600"
            onChange={(e) => handleSearch(e.target.value)}
          />

          {search !== "" && (
            <button
              className="bg-neutral-300 p-1 rounded-full text-neutral-700 cursor-pointer"
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
              className="top-full z-50 absolute bg-white shadow-2xl shadow-neutral-500 mt-2 p-2 rounded-md w-full"
            >
              {dataSearch && dataSearch.length > 0 ? (
                dataSearch?.map((item) => (
                  <Link
                    href={`/cast/${item.person.id}`}
                    key={item.person.id}
                    className="flex gap-4 mb-2"
                  >
                    <div className="w-24 h-24 aspect-square">
                      <Image
                        src={
                          item.person.image?.original ||
                          item.person.image?.medium ||
                          "/images/illustrations/img-not-found.jpg"
                        }
                        alt={item.person.name || "profile-image"}
                        width={100}
                        height={100}
                        className="rounded-md w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-700 text-lg">
                        {item.person.name}
                      </h4>
                      <p className="text-neutral-600 text-xs md:text-base line-clamp-2">
                        {item.person.country?.name}
                      </p>
                      <p className="mt-1.5 text-neutral-600 text-xs md:text-sm">
                        {getFormattedDate(item.person.birthday)}
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                <div>
                  <strong>Cast Not Found</strong>. We couldn{"'"}t find cast
                  matching {search}.
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SearchCast;
