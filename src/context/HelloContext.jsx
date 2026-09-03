import { createContext, useContext } from "react";

const HelloContext = createContext(null);

export function HelloProvider({ children }) {
  const greet = "Hello Everyone, I'm Emmanuel";

  return (
    <HelloContext.Provider value={greet}>
      {children}
    </HelloContext.Provider>
  );
}

export function useHello() {
  const context = useContext(HelloContext);

  if (context === null) {
    throw new Error("useHello must be used inside a HelloProvider");
  }

  return context;
}
