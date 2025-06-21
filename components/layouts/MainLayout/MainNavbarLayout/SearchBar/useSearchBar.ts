import { DELAY } from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import showServices from "@/services/show.services";
import { ITVShowsSearch } from "@/types/tvshow.type";
import { useQuery } from "@tanstack/react-query";
import { useRef, useState } from "react";

const useSearchBar = () => {
  const debounce = useDebounce();
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const searchByQuery = async (): Promise<ITVShowsSearch[]> => {
    const { data } = await showServices.searchByQuery(search);
    return data.slice(0, 3);
  };

  const handleSearch = (input: string) => {
    debounce(() => {
      setSearch(input);
    }, DELAY);
  };

  const { data: dataSearch, isLoading: isLoadingSearch } = useQuery({
    queryKey: ["searchShow", search],
    queryFn: searchByQuery,
    enabled: search !== "",
  });

  const handleClearSearch = () => {
    setSearch("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return {
    search,
    setSearch,
    handleSearch,
    dataSearch,
    isLoadingSearch,
    inputRef,
    handleClearSearch,
  };
};

export default useSearchBar;
