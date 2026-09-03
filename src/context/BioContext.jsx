import { createContext, useContext } from "react";

const BioContext = createContext(null);
export function BioProvider({ children }) {
  const bio = {
    name: "Uche Emmanuel Chisom",
    age: "20",
    hobby:
      "Playing Football games, Sleeping and Watching Movies and Documentaries",
    bestFood: "Vegetable Soup and Rice and Beans",
    favoriteColor: "Black and Blue",
  };

  return <BioContext.Provider value={{ bio }}>{children}</BioContext.Provider>;
}

export function useBio() {
  const context = useContext(BioContext);
  if (!context) {
    throw new Error("No context");
  }
  return context;
}
