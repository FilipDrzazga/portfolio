import {
  createContext,
  useState,
  useCallback,
  useMemo,
  type RefObject,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

interface PageContextProviderProps {
  children: ReactNode;
}

interface ContextValue {
  heroImgRect: DOMRect | null;
  introSectionRect: DOMRect | null;
  aboutMeSectionRect: DOMRect | null;
  aboutMeImgRect: DOMRect | null;
  experienceSectionRect: DOMRect | null;
  getInTouchSectionRect: DOMRect | null;
  getHeroImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getIntroSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getAboutMeSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getAboutMeImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getExperienceSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  getGetInTouchSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
}

export const PageContext = createContext<ContextValue | null>(null);

const PageContextProvider = ({ children }: PageContextProviderProps) => {
  // States for each section’s bounding rect
  const [heroImgRect, setHeroImgRect] = useState<DOMRect | null>(null);
  const [introSectionRect, setIntroSectionRect] = useState<DOMRect | null>(null);
  const [aboutMeSectionRect, setAboutMeSectionRect] = useState<DOMRect | null>(null);
  const [aboutMeImgRect, setAboutMeImgRect] = useState<DOMRect | null>(null);
  const [experienceSectionRect, setExperienceSectionRect] = useState<DOMRect | null>(null);
  const [getInTouchSectionRect, setGetInTouchSectionRect] = useState<DOMRect | null>(null);

  /**
   * A helper function that takes a ref and a setter,
   * and updates the state with the element’s bounding client rect.
   */
  const updateBoundingRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>, setter: Dispatch<SetStateAction<DOMRect | null>>) => {
      if (elementRef.current) {
        setter(elementRef.current.getBoundingClientRect());
      }
    },
    []
  );

  // Each function uses the helper to update its corresponding state.
  const getHeroImgBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setHeroImgRect);
    },
    [updateBoundingRect]
  );

  const getIntroSectionBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setIntroSectionRect);
    },
    [updateBoundingRect]
  );

  const getAboutMeSectionBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setAboutMeSectionRect);
    },
    [updateBoundingRect]
  );

  const getAboutMeImgBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setAboutMeImgRect);
    },
    [updateBoundingRect]
  );

  const getExperienceSectionBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setExperienceSectionRect);
    },
    [updateBoundingRect]
  );

  const getGetInTouchSectionBoundingClientRect = useCallback(
    <T extends HTMLElement>(elementRef: RefObject<T>) => {
      updateBoundingRect(elementRef, setGetInTouchSectionRect);
    },
    [updateBoundingRect]
  );

  // Memoize the context value so that it only changes when one of its parts changes.
  const contextValue = useMemo<ContextValue>(
    () => ({
      heroImgRect,
      introSectionRect,
      aboutMeSectionRect,
      aboutMeImgRect,
      experienceSectionRect,
      getInTouchSectionRect,
      getHeroImgBoundingClientRect,
      getIntroSectionBoundingClientRect,
      getAboutMeSectionBoundingClientRect,
      getAboutMeImgBoundingClientRect,
      getExperienceSectionBoundingClientRect,
      getGetInTouchSectionBoundingClientRect,
    }),
    [
      heroImgRect,
      introSectionRect,
      aboutMeSectionRect,
      aboutMeImgRect,
      experienceSectionRect,
      getInTouchSectionRect,
      getHeroImgBoundingClientRect,
      getIntroSectionBoundingClientRect,
      getAboutMeSectionBoundingClientRect,
      getAboutMeImgBoundingClientRect,
      getExperienceSectionBoundingClientRect,
      getGetInTouchSectionBoundingClientRect,
    ]
  );

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

export default PageContextProvider;
