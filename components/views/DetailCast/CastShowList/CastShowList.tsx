import { ICastCredits } from "@/types/cast.type";
import { IEpisode, ITVShow } from "@/types/tvshow.type";
import { getIdShowByEpisode } from "@/utils/getId";
import Image from "next/image";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { FaChevronDown, FaChevronRight, FaChevronUp } from "react-icons/fa6";
import useCastShowList from "./useCastShowList";
import { DEFAULT_MAX_IDX_SHOW_BY_CAST } from "@/constants/list.constants";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Modal from "@/components/ui/Modal/Modal";

interface Proptypes {
  setDetailShow: Dispatch<SetStateAction<ITVShow>>;
  dataEpisodeList: IEpisode[][] | undefined;
  dataShowByCast: ICastCredits[] | undefined;
  dataCastAsGuestGroupByShow: Record<string, ICastCredits[]>;
}

const CastShowList = (props: Proptypes) => {
  const {
    dataShowByCast,
    setDetailShow,
    dataEpisodeList,
    dataCastAsGuestGroupByShow,
  } = props;

  const { maxIdxShow, handleShowAllOrLess, detailEpisode, setDetailEpisode } =
    useCastShowList();

  return (
    <>
      <div className="md:w-2/3 xl:w-3/4">
        {/* Appeared In */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="font-bold text-red-600 text-2xl">Appeared in</h3>
            <div className="bg-red-600 px-3 py-2 rounded-full font-medium text-white">
              {dataShowByCast?.length || 0}
            </div>
          </div>

          {dataShowByCast?.slice(0, maxIdxShow).map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-2"
            >
              <div className="flex gap-3 md:gap-5">
                <div>
                  <button
                    onClick={() =>
                      setDetailShow(data._embedded?.show || ({} as ITVShow))
                    }
                    className="block w-[125px] md:h-[180px] cursor-pointer"
                  >
                    <Image
                      src={
                        data._embedded?.show?.image?.original ||
                        data._embedded?.show?.image?.medium ||
                        "/images/illustrations/img-not-found.jpg"
                      }
                      alt="image"
                      width={500}
                      height={500}
                      className="rounded-md w-full h-full object-cover"
                    />
                  </button>
                </div>

                <div className="p-2 rounded-md w-full">
                  <div className="flex justify-between w-full">
                    <button
                      className="block font-semibold text-neutral-700 text-xl text-left hover:underline underline-offset-2 transition-all duration-300 cursor-pointer"
                      onClick={() =>
                        setDetailShow(data._embedded?.show || ({} as ITVShow))
                      }
                    >
                      {data._embedded?.show?.name}
                    </button>

                    {dataEpisodeList && (
                      <p className="hidden xl:block font-medium text-red-600">
                        {dataEpisodeList[index] &&
                          dataEpisodeList[index].length}{" "}
                        Episodes
                      </p>
                    )}
                  </div>

                  <span className="mt-3 text-md text-neutral-600">
                    as {data._links?.character?.name}
                  </span>

                  <p
                    className="mt-3 text-neutral-600 text-sm line-clamp-2 leading-5 md:leading-7"
                    dangerouslySetInnerHTML={{
                      __html:
                        data._embedded?.show?.summary ||
                        "Summary is not available",
                    }}
                  ></p>
                </div>
              </div>
            </motion.div>
          ))}

          {(dataShowByCast?.length || 0) > DEFAULT_MAX_IDX_SHOW_BY_CAST && (
            <div className="flex justify-center mt-6">
              <Button
                variant="secondary"
                classname=""
                onClick={() =>
                  handleShowAllOrLess(
                    dataShowByCast?.length || DEFAULT_MAX_IDX_SHOW_BY_CAST
                  )
                }
              >
                {maxIdxShow === DEFAULT_MAX_IDX_SHOW_BY_CAST ? (
                  <div className="flex items-center gap-2">
                    Show All <FaChevronDown className="text-sm" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    Show Less <FaChevronUp className="text-sm" />
                  </div>
                )}
              </Button>
            </div>
          )}
        </div>

        {/* Guest Appearances */}
        {Object.keys(dataCastAsGuestGroupByShow).length > 0 && (
          <div className="mt-5">
            <h3 className="mb-4 font-bold text-red-600 text-2xl">
              Guest Appearances
            </h3>
            {Object.entries(dataCastAsGuestGroupByShow).map(
              ([showname, castcredit]) => (
                <div key={showname} className="mb-5">
                  <Link
                    href={`/shows/${getIdShowByEpisode(
                      castcredit[0]._embedded?.episode
                    )}`}
                    className="block bg-gray-300 px-3 md:px-5 py-2 rounded-md w-full font-medium text-neutral-700"
                  >
                    {showname}
                  </Link>
                  <ul className="mt-2 pl-5 lg:pl-10">
                    {castcredit.map((item) => (
                      <li key={item._embedded?.episode?.id} className="mb-1.5">
                        <button
                          className="flex items-center gap-5 text-neutral-600 text-sm text-left cursor-pointer"
                          onClick={() =>
                            setDetailEpisode(item._embedded?.episode)
                          }
                        >
                          <FaChevronRight className="text-xs" />
                          Season {item._embedded?.episode?.season} - Eps.{" "}
                          {item._embedded?.episode?.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
          </div>
        )}
      </div>
      {Object.keys(detailEpisode as IEpisode).length > 0 && (
        <Modal onClose={() => setDetailEpisode({} as IEpisode)}>
          <div className="p-5">
            <h4 className="font-semibold text-xl">
              {detailEpisode?._links.show.name}
            </h4>
            <h5 className="mt-1 text-neutral-600">
              Season {detailEpisode?.season} - Eps. {detailEpisode?.name}
            </h5>

            <div className="flex gap-5 mt-3 w-full">
              <div className="w-1/2 md:w-1/3">
                {detailEpisode?.image?.original ||
                detailEpisode?.image?.medium ? (
                  <Image
                    src={
                      detailEpisode?.image?.original ||
                      detailEpisode?.image?.medium
                    }
                    alt={`${detailEpisode?.name}`}
                    width={150}
                    height={150}
                    className="block rounded-lg w-full md:w-[160px] h-[180px] md:h-[120px] object-cover aspect-video"
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center bg-gray-300 rounded-lg w-full md:w-[160px] h-[180px] md:h-[120px] aspect-video">
                    <Image
                      src={`/images/general/logo-white.svg`}
                      alt={`Showpedia`}
                      width={50}
                      height={50}
                    />
                    <span className="block font-medium text-white text-xs">
                      Showpedia
                    </span>
                  </div>
                )}
              </div>
              <div className="w-1/2 md:w-2/3">
                <p
                  className="text-neutral-700 line-clamp-7"
                  dangerouslySetInnerHTML={{
                    __html:
                      detailEpisode?.summary || "Summary is not available",
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CastShowList;
