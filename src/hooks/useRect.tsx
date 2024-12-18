import { useState, useEffect, useCallback, type RefObject } from "react";

const useRect = <T extends HTMLElement>(elementRef: RefObject<T>) => {
  const [elementInfo, setElementInfo] = useState<DOMRect | null>(null);

  const updateRect = useCallback(() => {
    if (elementRef.current) {
      setElementInfo(elementRef.current.getBoundingClientRect());
    }
  }, [elementRef]);

  useEffect(() => {
    updateRect();

    const resizeObserver = new ResizeObserver(() => updateRect());
    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [elementRef, updateRect]);

  return {
    geometryWidth: elementInfo?.width ?? 0,
    geometryHeight: elementInfo?.height ?? 0,
    topMeshPos: elementInfo?.top ?? 0,
    leftMeshPos: elementInfo?.left ?? 0,
  };
};

export default useRect;
