import { ICastCredits, IPerson } from "@/types/cast.type";
import { getAge, getFormattedDate } from "@/utils/date";
import Image from "next/image";

interface Proptypes {
  dataCast: IPerson | undefined;
  dataShowByCast: ICastCredits[] | undefined;
  dataCastAsGuestGroupByShow: Record<string, ICastCredits[]>;
}

const ProfileImageCast = (props: Proptypes) => {
  const { dataCast, dataCastAsGuestGroupByShow, dataShowByCast } = props;
  return (
    <div className="xl:top-14 xl:sticky w-full md:w-1/3 xl:w-1/4 h-max">
      <div className="relative">
        <Image
          src={
            dataCast?.image?.original ||
            dataCast?.image?.medium ||
            "/images/illustrations/img-not-found.jpg"
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
            <p className="mt-1 font-semibold text-red-200">
              Died: {getFormattedDate(dataCast?.deathday)}
            </p>
          )}
        </div>
      </div>
      <div className="bg-gray-200 mt-4 p-2 rounded-md">
        <p className="text-neutral-600 text-sm leading-6">
          <span className="font-semibold">{dataCast?.name}</span> is a{" "}
          {dataCast?.gender?.toLowerCase() === "male" ? "male" : "female"} actor
          from {dataCast?.country?.name}.{" "}
          {dataCast?.gender?.toLowerCase() === "male" ? "He" : "She"} was born
          on {getFormattedDate(dataCast?.birthday)} and has starred in{" "}
          {dataShowByCast?.length} TV show
          {dataShowByCast?.length !== 1 ? "s" : ""}, along with{" "}
          {Object.keys(dataCastAsGuestGroupByShow).length} guest appearance
          {Object.keys(dataCastAsGuestGroupByShow).length !== 1 ? "s" : ""}.
        </p>
      </div>
    </div>
  );
};

export default ProfileImageCast;
