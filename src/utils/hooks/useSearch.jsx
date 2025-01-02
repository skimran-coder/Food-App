import { useEffect, useState } from "react";

const useSearch = (searchInput) => {
  const lat = localStorage.getItem("lat") || "22.51800";
  const lng = localStorage.getItem("lng") || "88.38320";
  const [searchResult, setSearchResult] = useState();

  async function getSearchResult() {
    try {
      const data = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }search/?searchInput=${searchInput}&lat=${lat}&lng=${lng}`
      );
      const json = await data.json();
      console.log(json);
      setSearchResult(json);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getSearchResult();
  }, [searchInput]);

  return searchResult;
};

export default useSearch;
