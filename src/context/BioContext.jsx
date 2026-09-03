import { createContext, useContext } from "react";

const BioContext = createContext(null);

export function BioProvider({ children }) {
  const bio = {
    name: "Uche Emmanuel Chisom",
      age: 20,
    bestfood: "Vegetable soup and Fufu",
    hobby: "Watching movies and documentaries, sleeping, playing football games",
    favoriteColor: "Black and Blue",
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
