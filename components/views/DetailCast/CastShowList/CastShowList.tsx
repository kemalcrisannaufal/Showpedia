import { ICastCredits } from "@/types/cast.type";
import { IEpisode, ITVShow } from "@/types/tvshow.type";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface Proptypes {
  dataShowByCast: ICastCredits[] | undefined;
  setDetailShow: Dispatch<SetStateAction<ITVShow>>;
  dataEpisodeList: IEpisode[][] | undefined;
}

const CastShowList = (props: Proptypes) => {
  const { dataShowByCast, setDetailShow, dataEpisodeList } = props;
  return (
    <div className="md:w-2/3 xl:w-3/4">
      <h3 className="mb-4 font-bold text-red-600 text-2xl">Appeared in</h3>

      {dataShowByCast?.map((data, index) => (
        <div key={index} className="mb-2">
          <div className="flex gap-3 md:gap-5">
            <div className="w-[150px] h-[180px]">
              <Image
                src={
                  data._embedded?.show?.image?.original ||
                  "/images/general/logo.svg"
                }
                alt="image"
                width={500}
                height={500}
                className="rounded-md w-[150px] h-[180px] object-cover"
              />
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
                    {dataEpisodeList[index] && dataEpisodeList[index].length}{" "}
                    Episodes
                  </p>
                )}
              </div>

              <span className="mt-3 text-md text-neutral-600">
                as {data._links?.character?.name}
              </span>

              <p
                className="mt-3 text-neutral-600 text-sm line-clamp-2 leading-7"
                dangerouslySetInnerHTML={{
                  __html: `${data._embedded?.show?.summary}`,
                }}
              ></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CastShowList;
