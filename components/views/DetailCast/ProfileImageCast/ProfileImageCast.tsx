import { IPerson } from "@/types/cast.type";
import { getAge, getFormattedDate } from "@/utils/date";
import Image from "next/image";

interface Proptypes {
  dataCast: IPerson | undefined;
}

const ProfileImageCast = (props: Proptypes) => {
  const { dataCast } = props;
  return (
    <div className="xl:top-20 relative xl:sticky w-full md:w-1/3 xl:w-1/4 h-max">
      <Image
        src={
          dataCast?.image?.original ||
          dataCast?.image?.medium ||
          "/images/general/logo.svg"
        }
        alt={dataCast?.name || "Profile image"}
        width={820}
        height={1920}
        className="rounded-lg w-full h-full object-cover"
      />
      <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-black/90 via-black/60 to-transparent p-5 rounded-b-lg text-white">
        <h2 className="font-bold text-3xl">{dataCast?.name}</h2>
        <p className="text-lg">{dataCast?.country?.name || "Unknown"}</p>
        <p className="text-sm">
          {getFormattedDate(dataCast?.birthday)} (
          {getAge(dataCast?.birthday, dataCast?.deathday)} years)
        </p>
        {dataCast?.deathday && (
          <p className="mt-1 font-semibold text-red-300">
            Died: {getFormattedDate(dataCast?.deathday)}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileImageCast;
