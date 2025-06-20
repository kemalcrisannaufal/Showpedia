import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const castServices = {
  getCast: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}?embed=castcredits`),
  getShowByCast: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}/castcredits?embed=show`),
  getShowByCastAsGuest: (id: string) =>
    instance.get(`${ENDPOINT.CAST}/${id}/guestcastcredits?embed=episode`),
};

export default castServices;
