import Select from "./Select";

import useUrl from "../hooks/useUrl";

const SortBy = ({ options, filtredValue }) => {
  const { setUrlParams, searchParams } = useUrl();

  const sortBy = searchParams.get(filtredValue) || "";

  const changeHandler = (e) => {
    setUrlParams(filtredValue, e.target.value);
  };

  return <Select value={sortBy} type="white" options={options} onChange={changeHandler} />;
};

export default SortBy;
