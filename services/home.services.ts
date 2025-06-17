import instance from "@/lib/axios/instance";

const homeServices = {
  getPopularShow: () => instance.get("https://api.tvmaze.com/shows?page=0"),
};

export default homeServices;
