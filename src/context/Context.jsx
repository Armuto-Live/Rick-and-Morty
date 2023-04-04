import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [pages, setPages] = useState(0);
  const [actualPages, setActualPages] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      if (response.status === 200) {
        const { info, results } = response.data;
        setCharacters(results);
        setTotalResults(info.count);
        setPages(info.pages);
        setPrevPage(info.prev);
        setNextPage(info.next);
      }
    });
  }, []);
  const goToPage = (page,e) => {
    const type=e.target.dataset.type;
    switch(type){
      case 'prev':
        setActualPages(actualPages-1);
        break;
      case 'next':
        setActualPages(actualPages+1);
        break;
      case 'goTo':
        const number=(e.target.value);
        console.log(number);
        page=`https://rickandmortyapi.com/api/character?page=${number}`;
        setActualPages(number);
        break;
      default:
        return;
    }

    axios.get(page).then(response => {
      if (response.status === 200) {
        const { info, results } = response.data;
        setCharacters(results);
        setPrevPage(info.prev);
        setNextPage(info.next);
      }
    });
  };
  return (
    <DataContext.Provider
      value={{
        characters,
        totalResults,
        pages,
        actualPages,
        prevPage,
        nextPage,
        goToPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
