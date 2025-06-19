import { ICast } from "@/types/cast.type";
import { getFormattedDate } from "@/utils/date";
import Image from "next/image";
import useCastList from "./useCastList";
import Button from "@/components/ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { DEFAULT_LAST_IDX_CAST_SHOW } from "@/constants/list.constants";
import { motion } from "framer-motion";

interface Proptypes {
  casts: ICast[] | undefined;
}

const CastList = (props: Proptypes) => {
  const { casts } = props;
  const { lastIdx, handleShowAllCast } = useCastList();
  return (
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
                "/"
              }
              alt={`${cast.person.name}`}
              width={500}
              height={1000}
              className="shadow-md rounded-sm w-1/2"
            />
            <div className="w-1/2">
              <p className="font-semibold text-neutral-700 text-xl">
                {cast.person.name}
              </p>
              <p className="text-neutral-600 text-sm">
                as {cast.character.name}
              </p>
              <p className="mt-2 text-neutral-700 text-sm">
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
  );
};

export default CastList;
