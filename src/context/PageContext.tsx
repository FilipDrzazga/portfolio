import React, { createContext } from "react";

type PageContextProviderProps = {
  children: React.ReactNode;
};

type ContextValue = {
  // context value types
};

export const PageContext = createContext<ContextValue | null>(null);

const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const ctx: ContextValue = {
    // context value
  };

  return <PageContext.Provider value={ctx}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
