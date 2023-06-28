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

  // Ryan said saving LS in useEffect can be messy but componentDidMount is not a thing in React Hooks? I am confused
  useEffect(() => { 
  const localPageItems = JSON.parse(localStorage.getItem('pageItems'));
  console.log('my local page items', localPageItems)
  const localShowCompleted = JSON.parse(localStorage.getItem('showCompleted'));
  console.log('my local show completed', localShowCompleted)
  const localSort = JSON.parse(localStorage.getItem('sort'));
  console.log('my local sort', localSort)
  //trying to practice one line if statements
  if(localPageItems){
    setPageItems(JSON.parse.localPageItems);
  }
  if(localShowCompleted){
    setShowCompleted(JSON.parse.localShowCompleted);
  }
  if(localSort){
    setSort(JSON.parse.localSort)
  };
}, []);

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}


export default SettingsProvider;