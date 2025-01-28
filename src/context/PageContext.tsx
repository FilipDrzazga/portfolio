import React, { createContext, useState, type RefObject } from "react";

interface PageContextProviderProps {
  children: React.ReactNode;
}

interface ContextValue {
  heroImgRect: DOMRect | null;
  introSectionRect: DOMRect | null;
  aboutMeSectionRect: DOMRect | null;
  aboutMeImgRect: DOMRect | null;
  experienceSectionRect: DOMRect | null;
  getHeroImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getIntroSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getAboutMeSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getAboutMeImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getExperienceSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
}

export const PageContext = createContext<ContextValue | null>(null);

const PageContextProvider = ({ children }: PageContextProviderProps) => {
  const [heroImgRect, setHeroImgRect] = useState<DOMRect | null>(null);
  const [introSectionRect, setIntroSectionRect] = useState<DOMRect | null>(null);
  const [aboutMeSectionRect, setAboutMeSectionRect] = useState<DOMRect | null>(null);
  const [aboutMeImgRect, setAboutMeImgRect] = useState<DOMRect | null>(null);
  const [experienceSectionRect, setExperienceSectionRect] = useState<DOMRect | null>(null);

  const ctx: ContextValue = {
    heroImgRect,
    introSectionRect,
    aboutMeSectionRect,
    aboutMeImgRect,
    experienceSectionRect,
    getHeroImgBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setHeroImgRect(elementRef.current.getBoundingClientRect());
      }
    },
    getIntroSectionBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setIntroSectionRect(elementRef.current.getBoundingClientRect());
      }
    },
    getAboutMeSectionBoundingClientRect: (elementRef) => {
      if (elementRef.current) {
        setAboutMeSectionRect(elementRef.current.getBoundingClientRect());
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
  };

  return <PageContext.Provider value={ctx}>{ctx && children}</PageContext.Provider>;
};

export default PageContextProvider;
