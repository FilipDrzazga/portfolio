import React, { createContext, useState, type RefObject } from "react";

interface PageContextProviderProps {
  children: React.ReactNode;
}

interface ContextValue {
  rect: DOMRect | null;
  isIntersecting: boolean;
  getBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getIntersectionElement: (value: boolean) => void;
}

export const PageContext = createContext<ContextValue | null>(null);

const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ctx: ContextValue = {
    rect,
    isIntersecting,
    getBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setRect(elementRef.current.getBoundingClientRect());
      }
    },
    getIntersectionElement: (value) => {
      setIsIntersecting(value);
    },
  };

  return <PageContext.Provider value={ctx}>{ctx && children}</PageContext.Provider>;
};

export default PageContextProvider;
