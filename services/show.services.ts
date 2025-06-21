import instance from "@/lib/axios/instance";
import ENDPOINT from "./endpoint.constants";

const showServices = {
  getShows: (page: number) => instance.get(`${ENDPOINT.SHOW}?page=${page}`),
  getShowById: (id: string) => instance.get(`${ENDPOINT.SHOW}/${id}`),
  getDetailShowById: (id: string) =>
    instance.get(`${ENDPOINT.SHOW}/${id}?embed[]=episodes&embed[]=cast`),
  getEpisodesByShow: (id: string) =>
    instance.get(`${ENDPOINT.SHOW}/${id}/episodes`),

  searchByQuery: (query: string) =>
    instance.get(`/search${ENDPOINT.SHOW}?q=${query}`),
};

export default showServices;
