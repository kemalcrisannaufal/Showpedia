import { useQuery } from "@tanstack/react-query";
import { DELAY } from "@/constants/list.constants";
import useDebounce from "@/hooks/useDebounce";
import { useRef, useState } from "react";
import castServices from "@/services/cast.services";
import { IPersonSearch } from "@/types/cast.type";

const useSearchCast = () => {
  const [search, setSearch] = useState("");
  const debounce = useDebounce();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (text: string) => {
    debounce(() => {
      setSearch(text);
    }, DELAY);
  };

  const searchCast = async (): Promise<IPersonSearch[]> => {
    const { data } = await castServices.searchCast(search);
    return data;
  };

  const { data: dataSearch, isLoading: isLoadingSearch } = useQuery({
    queryKey: ["searchCast"],
    queryFn: searchCast,
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
    handleSearch,
    dataSearch,
    isLoadingSearch,
    handleClearSearch,
    inputRef,
  };
};

export default useSearchCast;
