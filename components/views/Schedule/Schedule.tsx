import useSchedule from "./useSchedule";
import ScheduleCard from "@/components/fragments/ScheduleCard";
import Tabs from "@/components/ui/Tabs";
import "react-datepicker/dist/react-datepicker.css";
import { getFormattedDate } from "@/utils/date";
import ScheduleBanner from "./ScheduleBanner";
import ScheduleFilter from "./ScheduleFilter";
import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import { DEFAULT_LAST_IDX_SCHEDULE_SHOW } from "@/constants/list.constants";
import Image from "next/image";
import { IScheduleTVShow } from "@/types/tvshow.type";

const Schedule = () => {
  const {
    dataSchedule,
    isLoadingSchedule,
    dates,
    filter,
    setFilter,
    resetFilter,
    idxLastSchedule,
    handleClickIdxLastSchedule,
  } = useSchedule();

  return (
    <>
      <ScheduleBanner />

      <section className="xl:flex xl:gap-5">
        <ScheduleFilter
          filter={filter}
          setFilter={setFilter}
          resetFilter={resetFilter}
        />
        <div className="xl:w-2/3">
          <Tabs tabsHeader={dates.map((date) => getFormattedDate(date))}>
            {!isLoadingSchedule
              ? dataSchedule?.map((schedules, index) => (
                  <div key={`tab-schedule-${index}`}>
                    {schedules.length > 0 ? (
                      <motion.div
                        key={idxLastSchedule}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {schedules.slice(0, idxLastSchedule).map((schedule) => (
                          <ScheduleCard
                            key={schedule.id}
                            data={schedule}
                            isLoading={isLoadingSchedule}
                            showSummary
                            classname="border-none shadow-none mb-2"
                          />
                        ))}

                        {schedules.length > DEFAULT_LAST_IDX_SCHEDULE_SHOW && (
                          <div className="flex justify-center mt-3">
                            <Button
                              onClick={() =>
                                handleClickIdxLastSchedule(schedules.length)
                              }
                              variant="secondary"
                              classname="text-sm"
                            >
                              {idxLastSchedule < schedules.length
                                ? "Load More"
                                : "Show Less"}
                            </Button>
                          </div>
                        )}
                      </motion.div>
                    ) : (
                      <div className="flex justify-center items-center gap-5 p-5 border border-gray-300 rounded-md w-full text-gray-600 text-sm md:text-lg">
                        <Image
                          src={"/images/illustrations/megaphone.png"}
                          alt="alert"
                          height={75}
                          width={75}
                        />
                        No data available for this country/date
                      </div>
                    )}
                  </div>
                ))
              : Array.from({ length: dates.length }).map((_, index) => (
                  <div key={`tab-schedule-skeleton-${index}`}>
                    <div className="flex flex-col gap-5">
                      {Array.from({ length: 3 }).map((_, index) => (
                        <ScheduleCard
                          key={`schedule-skeleton-${index}`}
                          data={{} as IScheduleTVShow}
                          isLoading
                        />
                      ))}
                    </div>
                  </div>
                ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Schedule;
