import React, { createContext, useState, type RefObject } from "react";

interface PageContextProviderProps {
  children: React.ReactNode;
}

interface ContextValue {
  heroImgRect: DOMRect | null;
  aboutMeImgRect: DOMRect | null;
  experienceSectionRect: DOMRect | null;
  isIntersecting: boolean;
  getHeroImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getAboutMeImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getExperienceSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getIntersectionElement: (value: boolean) => void;
}

export const PageContext = createContext<ContextValue | null>(null);

const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [heroImgRect, setHeroImgRect] = useState<DOMRect | null>(null);
  const [aboutMeImgRect, setAboutMeImgRect] = useState<DOMRect | null>(null);
  const [experienceSectionRect, setExperienceSectionRect] = useState<DOMRect | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ctx: ContextValue = {
    heroImgRect,
    aboutMeImgRect,
    experienceSectionRect,
    isIntersecting,
    getHeroImgBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setHeroImgRect(elementRef.current.getBoundingClientRect());
      }
    },
    getAboutMeImgBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setAboutMeImgRect(elementRef.current.getBoundingClientRect());
      }
    },
    getExperienceSectionBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setExperienceSectionRect(elementRef.current.getBoundingClientRect());
      }
    },
    getIntersectionElement: (value) => {
      setIsIntersecting(value);
    },
  };

  return <PageContext.Provider value={ctx}>{ctx && children}</PageContext.Provider>;
};

export default PageContextProvider;
