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
            {dataSchedule?.map((schedules, index) => (
              <div key={index}>
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
                        classname="border-none shadow-none"
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
                  <div className="flex justify-center items-center p-5 w-full text-gray-600 text-lg">
                    No data available for this country/date
                  </div>
                )}
              </div>
            ))}
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default Schedule;
