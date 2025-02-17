interface useCalcMeshPositionProps {
    elementRect?:{
        top:number;
        left:number;
        height:number;
        width:number;
    } | null;
}

const useCalcMeshPosition = (elementRect?:useCalcMeshPositionProps['elementRect']) => { 
    if(!elementRect){
        return {topMeshPosition:0, leftMeshPosition:0};
    }
    const { top, left, height, width } = elementRect;

    return {
        top: -top + window.innerHeight / 2 - height / 2,
        left: left - window.innerWidth / 2 + width / 2,
        height,
        width
    };
};

export default useCalcMeshPosition;