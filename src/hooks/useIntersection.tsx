import { useState, useEffect } from "react";

const useIntersection = (ref: React.RefObject<HTMLDivElement>) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const callback = (entries: IntersectionObserverEntry[]) => {
      let previousY = 0;
      let previousRatio = 0;

      entries.forEach((entry: IntersectionObserverEntry) => {
        const currentY = entry.boundingClientRect.y;
        const currentRatio = entry.intersectionRatio;
        const isIntersecting = entry.isIntersecting;

        if (currentY < previousY) {
          if (currentRatio > previousRatio && isIntersecting) {
            // console.log("Scrolling down element reached the top of viewport");
            setIsIntersecting(true);
          } else {
            // console.log("Scrolling down element leave viewport");
            setIsIntersecting(false);
          }
        } else if (currentY > previousY && isIntersecting) {
          if (currentRatio < previousRatio) {
            // console.log("Scrolling up leave");
          } else {
            // console.log("Scrolling up element reached the top of viewport");
            setIsIntersecting(false);
          }
        }
        previousY = currentY;
        previousRatio = currentRatio;
      });
    };
    const options = {
      root: null,
      threshold: [0, 0.5],
      rootMargin: "0px",
    };
    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current!);

    return () => observer.disconnect();
  }, [ref]);

  return isIntersecting;
};

export default useIntersection;
