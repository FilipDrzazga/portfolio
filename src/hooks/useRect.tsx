import { useState, useEffect, type RefObject} from 'react';

const useRect = <T extends HTMLElement>(elementRef:RefObject<T>)=>{
    const [elementInfo, setElementInfo] = useState<DOMRect|null>(null);

    useEffect(()=>{
        if(elementRef.current){
            setElementInfo(elementRef.current.getBoundingClientRect());
        };
    },[])

    return({
        width:elementInfo?.width,
        height:elementInfo?.height,
        top:elementInfo?.top,
        left:elementInfo?.left
    });
};

export default useRect;