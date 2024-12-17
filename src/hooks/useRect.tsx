import { useState, useEffect, type RefObject} from 'react';

const useRect = <T extends HTMLElement>(elementRef:RefObject<T>)=>{
    const [elementInfo, setElementInfo] = useState<DOMRect|null>(null);

    useEffect(()=>{
        if(elementRef.current){
            setElementInfo(elementRef.current.getBoundingClientRect());
        };
    },[])

    return({
        geometryWidth:elementInfo?.width,
        geometryHeight:elementInfo?.height,
        topMeshPos:elementInfo?.top,
        leftMeshPos:elementInfo?.left
    });
};

export default useRect;