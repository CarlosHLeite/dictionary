import { useEffect, useState } from "react";

const useFetch = () => {
  const [wordDefinition, setWordDefinition] = useState("");
  const [newWord, setNewWord] = useState("Hello");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`
      );

      const data = await response.json();
      setWordDefinition(data);
    };

    fetchData();
  }, [newWord]);
  return { wordDefinition, setNewWord };
};
export default useFetch;
