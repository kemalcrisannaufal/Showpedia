import Image from "next/image";
import useCast from "./useCast";
import Link from "next/link";
import SearchCast from "./SearchCast";

const Cast = () => {
  const { dataCast } = useCast();
  return (
    <>
      <SearchCast />
      <div className="gap-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9">
        {dataCast?.slice(0, 54).map((cast) => (
          <Link href={`/cast/${cast.id}`} key={cast.id} className="relative">
            <Image
              src={
                cast.image?.original ||
                cast.image?.medium ||
                "/images/illustrations/img-not-found.jpg"
              }
              alt={cast.name || "profile-image"}
              width={500}
              height={500}
              className="rounded-md w-full max-w-[180px] h-[220px] object-cover"
            />
            <div className="bottom-0 absolute bg-gradient-to-b from-transparent via-black to-black p-2 rounded-b-md w-full min-h-[25%] text-white">
              <p className="font-semibold text-lg line-clamp-2">{cast.name} </p>
              <p className="text-xs">{cast.country?.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cast;
