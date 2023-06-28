import React, { useEffect, useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [pageItems, setPageItems] = useState(3);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sort, setSort] = useState('difficulty');

  // super helpful: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
  const saveLocalStorage = () => {
    localStorage.setItem('pageItems', JSON.stringify(+pageItems));//+pageItems converts string to number
    localStorage.setItem('showCompleted', JSON.stringify(showCompleted));
    localStorage.setItem('sort', JSON.stringify(sort));
  };


  const values = {
    pageItems,
    setPageItems,
    showCompleted,
    setShowCompleted,
    sort,
    setSort,
    saveLocalStorage // !! don't forget to add this to the values object
  }

  useEffect(() => { 
  const localPageItems = JSON.parse(localStorage.getItem('pageItems'));
  const localShowCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  const localSort = JSON.parse(localStorage.getItem('sort'));
  //trying to practice one line if statements
  if(localPageItems) setPageItems(JSON.parse.localPageItems);
  if(localShowCompleted) setShowCompleted(JSON.parse.localShowCompleted);
  if(localSort) setSort(JSON.parse.localSort);
}, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;