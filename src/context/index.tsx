import { createContext, ReactNode, useContext, useState } from "react";

const AppContext = createContext({
  counterValue: 1,
  setCounterValue: (counterValue: number) => {},
});

const AppProvider = ({ children }: { children: ReactNode }) => {
  //change context values
  const [counterValue, setCounterValue] = useState(1);

  return (
    <AppContext.Provider value={{ counterValue, setCounterValue }}>
      {children}
    </AppContext.Provider>
  );
};

//custom hook
const useGlobalContext = () => useContext(AppContext);

export { AppProvider, useGlobalContext };
