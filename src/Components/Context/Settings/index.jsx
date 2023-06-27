import React, { useState } from 'react';

export const SettingsContext = React.createContext();

function SettingsProvider({ children }){

  const [display, setDisplay] = useState(3);
  const [completed, setCompleted] = useState(false);
  const [difficulty, setDifficulty] = useState(3);

  const values = {
    display,
    completed,
    difficulty,
  }

  return(
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider;