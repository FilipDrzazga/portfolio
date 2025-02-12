import { RefObject } from "react";
import { create } from "zustand";


interface PageStore {
    // State values
    heroImgRect: DOMRect | null;
    introSectionRect: DOMRect | null;
    aboutMeSectionRect: DOMRect | null;
    aboutMeImgRect: DOMRect | null;
    experienceSectionRect: DOMRect | null;
    getInTouchSectionRect: DOMRect | null;
  
    // Methods to update each bounding rect from a ref
    getHeroImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
    getIntroSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
    getAboutMeSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
    getAboutMeImgBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
    getExperienceSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
    getGetInTouchSectionBoundingClientRect: <T extends HTMLElement>(elementRef: RefObject<T>) => void;
  }

export const usePageStore = create<PageStore>((set) => ({
    heroImgRect: null,
    introSectionRect: null,
    aboutMeSectionRect: null,
    aboutMeImgRect: null,
    experienceSectionRect: null,
    getInTouchSectionRect: null,

    getHeroImgBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({heroImgRect: elementRef.current.getBoundingClientRect()});
        }
    },
    getIntroSectionBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({introSectionRect: elementRef.current.getBoundingClientRect()});
        }
    },
    getAboutMeSectionBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({aboutMeSectionRect: elementRef.current.getBoundingClientRect()});
        }
    },
    getAboutMeImgBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({aboutMeImgRect: elementRef.current.getBoundingClientRect()});
        }
    },
    getExperienceSectionBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({experienceSectionRect: elementRef.current.getBoundingClientRect()});
        }
    },
    getGetInTouchSectionBoundingClientRect: (elementRef)=>{
        if(elementRef.current){
            set({getInTouchSectionRect: elementRef.current.getBoundingClientRect()});
        }
    },
}));