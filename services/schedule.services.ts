import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const scheduleServices = {
  getScheduleByDateAndCountry: (country: string, date: string) =>
    instance.get(`${ENDPOINT.SCHEDULE}?country=${country}&date=${date}`),
  getScheduleByCountry: (country: string) =>
    instance.get(`${ENDPOINT.SCHEDULE}?country=${country}`),
};

export default scheduleServices;
