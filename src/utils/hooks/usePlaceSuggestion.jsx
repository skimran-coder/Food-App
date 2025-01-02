import { useEffect, useState } from "react";

const usePlaceSuggestion = (searchInput) => {
  const [suggestion, setSuggestion] = useState();

  useEffect(() => {
    async function findSuggestion() {
      const response = await fetch(
        `${
          import.meta.env.VITE_BACKEND_URL
        }placeSuggestion/?searchInput=${searchInput}`
      );

      const data = await response.json();
      setSuggestion(data.data);
    }

    findSuggestion();
  }, [searchInput]);

  return suggestion;
};

export default usePlaceSuggestion;
