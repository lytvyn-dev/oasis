import { useSearchParams } from "react-router-dom";

function useUrl() {
  const [searchParams, setSearchParams] = useSearchParams();

  const setUrlParams = (filtredValue, value) => {
    searchParams.set(filtredValue, value);
    setSearchParams(searchParams);
  };

  return { setUrlParams, searchParams };
}

export default useUrl;
