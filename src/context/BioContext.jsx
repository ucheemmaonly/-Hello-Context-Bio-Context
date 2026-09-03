import { createContext, useContext } from "react";

const BioContext = createContext(null);

export function BioProvider({ children }) {
  const bio = {
    name: "Emmanuel",
    age: 20,
    hobby: "watching movies, sleeping, playing games",
    favoriteColor: "Purple",
  };

  return (
    <BioContext.Provider value={bio}>
      {children}
    </BioContext.Provider>
  );
}

export function useBio() {
  const context = useContext(BioContext);

  if (context === null) {
    throw new Error("No context")
  }

  return context;
}
