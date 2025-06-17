import instance from "@/lib/axios/instance";

const homeServices = {
  getShowById: (id: string) => instance.get(`/shows/${id}`),
  getScheduleByCountry: (country: string) =>
    instance.get(`/schedule?country=${country}`),
};

export default homeServices;
