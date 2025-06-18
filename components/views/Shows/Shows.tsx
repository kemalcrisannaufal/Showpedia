import { SHOWPEDIA_PICK } from "@/constants/list.constants";
import ShowpediaPick from "./ShowpediaPick";
import ShowsList from "./ShowsList";
import {
  AMERICAN_SERIES_DATA,
  JAPANESE_SERIES_DATA,
  KOREAN_SERIES_DATA,
} from "./Shows.constants";
  
const Shows = () => {
  return (
    <div>
      <ShowpediaPick shows={SHOWPEDIA_PICK} />
      <ShowsList
        data={AMERICAN_SERIES_DATA}
        isLoading={false}
        title="American Series"
      />
      <ShowsList
        data={KOREAN_SERIES_DATA}
        isLoading={false}
        title="Korean Series"
      />
      <ShowsList data={JAPANESE_SERIES_DATA} isLoading={false} title="Anime" />
    </div>
  );
};

export default Shows;
