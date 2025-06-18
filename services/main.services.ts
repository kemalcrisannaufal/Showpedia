import instance from "@/lib/axios/instance";

const mainServices = {
  getShows: (page: number) => instance.get(`/shows?page=${page}`),
  getShowById: (id: string) => instance.get(`/shows/${id}`),
  getScheduleByCountry: (country: string) =>
    instance.get(`/schedule?country=${country}`),

  getDetailShowById: (id: string) =>
    instance.get(`/shows/${id}?embed[]=episodes&embed[]=cast`),
};

export default mainServices;
