import Button from "@/components/ui/Button";
import { COUNTRIES, DEFAULT_COUNTRY } from "@/constants/list.constants";
import { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Proptypes {
  filter: { country: string; date: string };
  setFilter: Dispatch<SetStateAction<{ country: string; date: string }>>;
  resetFilter: () => void;
}

const ScheduleFilter = (props: Proptypes) => {
  const { setFilter, filter, resetFilter } = props;
  const countryOptions = COUNTRIES.map((country) => ({
    value: country["alpha-2"],
    label: country.name,
  }));

  return (
    <div className="dark:bg-gray-900 mb-5 p-3 xl:p-5 border dark:border-white border-red-600 rounded-lg xl:w-1/3 h-max">
      <h3 className="mb-1.5 md:mb-3 font-semibold text-red-600 text-lg md:text-xl">
        Filter
      </h3>
      <form>
        <div className="mb-2.5">
          <label htmlFor="country" className="block mb-1.5 font-medium text-sm">
            Country
          </label>
          <Select
            name="country"
            id="country"
            options={countryOptions}
            defaultValue={countryOptions.find(
              (opt) => opt.value === filter.country
            )}
            onChange={(selectedOption) =>
              setFilter({
                ...filter,
                country: selectedOption?.value || DEFAULT_COUNTRY,
              })
            }
            menuPlacement="auto"
            menuShouldScrollIntoView={false}
            maxMenuHeight={250}
            className="z-20 bg-white rounded-md text-gray-900"
          />
        </div>

        <div className="mb-2.5 w-full">
          <label htmlFor="date" className="block mb-1.5 font-medium text-sm">
            Date
          </label>
          <DatePicker
            id="date"
            name="date"
            placeholderText="Choose Date Here"
            selected={filter.date ? new Date(filter.date) : null}
            onChange={(date) =>
              setFilter({
                ...filter,
                date: date?.toISOString().split("T")[0] || "",
              })
            }
            className="block z-50 p-2 border border-gray-200 rounded-md w-full text-neutral-700 dark:text-white"
          />
        </div>
        <div className="flex justify-end w-full">
          <Button type="reset" classname="text-sm" onClick={resetFilter}>
            Clear Filter
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ScheduleFilter;
