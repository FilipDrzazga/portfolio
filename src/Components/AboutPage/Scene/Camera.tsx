import {useFrame} from "@react-three/fiber";
import { useLenis } from 'lenis/react'

const Camera = ()=>{
    const lenis = useLenis()
    useFrame(({camera})=>{
        camera.position.y = -(lenis?.actualScroll ?? 0);
    },(0));
    return null;
}

export default Camera;