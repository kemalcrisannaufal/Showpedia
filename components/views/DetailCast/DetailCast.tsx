import useDetailCast from "./useDetailCast";
import TVShowPreviewModal from "@/components/fragments/TVShowPreviewModal";
import { ITVShow } from "@/types/tvshow.type";
import ProfileImageCast from "./ProfileImageCast";
import CastShowList from "./CastShowList";

const DetailCast = () => {
  const {
    dataCast,
    dataShowByCast,
    dataEpisodeList,
    detailShow,
    setDetailShow,
    groupCastEpisodesByShow,
  } = useDetailCast();

  console.log(groupCastEpisodesByShow);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex md:flex-row flex-col gap-5 lg:gap-10">
          <ProfileImageCast
            dataCast={dataCast}
            dataShowByCast={dataShowByCast}
            dataCastAsGuestGroupByShow={groupCastEpisodesByShow}
          />

          <CastShowList
            dataShowByCast={dataShowByCast}
            dataEpisodeList={dataEpisodeList}
            setDetailShow={setDetailShow}
            dataCastAsGuestGroupByShow={groupCastEpisodesByShow}
          />
        </div>
      </div>
      {Object.keys(detailShow).length > 0 && (
        <TVShowPreviewModal
          tvShow={detailShow}
          onClose={() => setDetailShow({} as ITVShow)}
        />
      )}
    </>
  );
};

export default DetailCast;
