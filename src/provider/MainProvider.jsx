import React, { Children, useState } from "react";
import { createContext } from "react";
export const contextProvider = createContext(null);

function MainProvider({ children }) {
  const [trueAnswer, setTrueAnswer] = useState(0);
  const [testData, setTestData] = useState([])

  return (
    <contextProvider.Provider value={{ trueAnswer, setTrueAnswer, testData, setTestData }}>
      {children}
    </contextProvider.Provider>
  );
}

export default MainProvider;
