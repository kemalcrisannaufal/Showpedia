import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const castServices = {
  getCast: (page: number) => instance.get(`${ENDPOINT.CAST}?page=${page}`),
  getCastById: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}?embed=castcredits`),
  getShowByCast: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}/castcredits?embed=show`),
  getShowByCastAsGuest: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}/guestcastcredits?embed=episode`),

  searchCast: (query: string) =>
    instance.get(`/search${ENDPOINT.CAST}?q=${query}`),
};

export default castServices;
