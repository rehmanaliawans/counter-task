import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext({
  counterValue: 7,
  setCounterValue: (counterValue: number) => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  //change context values
  const [counterValue, setCounterValue] = useState(7);

  return (
    <AppContext.Provider value={{ counterValue, setCounterValue }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
