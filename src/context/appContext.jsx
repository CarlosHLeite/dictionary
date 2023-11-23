import { useContext, createContext, useState, useEffect } from "react";

const AppProvider = createContext();

export const GlobalContext = ({ children }) => {
  const [word, setWord] = useState("hello");
  const [wordData, setWordData] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrors(false);
        setLoading(true);
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );

        if (response.status === 404) {
          setErrors(true);
          setLoading(false);
        }

        const data = await response.json();
        setWordData(data);
        setLoading(false);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchData();
  }, [word]);

  return (
    <AppProvider.Provider value={{ setWord, wordData, loading, errors }}>
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobalContext = () => useContext(AppProvider);
