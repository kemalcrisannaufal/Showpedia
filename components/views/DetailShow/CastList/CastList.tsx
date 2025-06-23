import { ICast } from "@/types/cast.type";
import { getFormattedDate } from "@/utils/date";
import Image from "next/image";
import useCastList from "./useCastList";
import Button from "@/components/ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { DEFAULT_LAST_IDX_CAST_SHOW } from "@/constants/list.constants";
import { motion } from "framer-motion";
import Link from "next/link";

interface Proptypes {
  casts: ICast[] | undefined;
}

const CastList = (props: Proptypes) => {
  const { casts } = props;
  const { lastIdx, handleShowAllCast } = useCastList();

  return (
    <>
      {casts && casts?.length > 0 && (
        <div className="mt-5">
          <h2 className="my-3 font-bold text-red-600 text-xl">Cast List</h2>
          <div className="gap-5 grid grid-cols-1 xl:grid-cols-3">
            {casts?.slice(0, lastIdx).map((cast) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                key={cast.person.id}
                className="flex gap-4"
              >
                <Image
                  src={
                    cast.character.image?.original ||
                    cast.person.image?.original ||
                    "/images/illustrations/img-not-found.jpg"
                  }
                  alt={`${cast.person.name}`}
                  width={500}
                  height={1000}
                  className="shadow-md rounded-sm w-[150px] lg:w-[200px] xl:w-1/2 h-auto object-cover"
                />
                <div className="xl:w-1/2">
                  <Link
                    className="font-semibold text-neutral-700 dark:text-white text-xl hover:underline"
                    href={`/cast/${cast.person.id}`}
                  >
                    {cast.person.name}
                  </Link>
                  <p className="text-neutral-600 dark:text-white text-sm">
                    as {cast.character.name}
                  </p>
                  <p className="mt-2 text-neutral-700 dark:text-white text-sm">
                    {getFormattedDate(cast.person.birthday)}
                  </p>

                  {cast.person.deathday && (
                    <div className="mt-3 text-neutral-600 text-xs">
                      <p className="font-semibold">Death on</p>
                      <p>{getFormattedDate(cast.person.deathday)}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {Number(casts?.length) > DEFAULT_LAST_IDX_CAST_SHOW && (
            <div className="flex justify-end">
              <Button
                variant="secondary"
                classname="mt-4 md:mt-8 flex items-center gap-2"
                onClick={() => handleShowAllCast(casts?.length)}
              >
                {lastIdx === DEFAULT_LAST_IDX_CAST_SHOW &&
                Number(casts?.length) > DEFAULT_LAST_IDX_CAST_SHOW ? (
                  <>
                    Show Full Cast <FaChevronRight />
                  </>
                ) : (
                  <>
                    <FaChevronLeft />
                    Show Less
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CastList;
