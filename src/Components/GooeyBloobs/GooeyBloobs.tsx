import { useEffect } from 'react';
import * as S from './GooeyBloobs.styled';
import { useMotionValue } from 'motion/react';

const bloobsArr = [1,2,3,4,5,6,7,8,9,10,11];

const GooeyBloobs = ()=>{
    const xPos = useMotionValue(0);
    const yPos = useMotionValue(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            xPos.set(Math.random() * 50 -25);
            yPos.set(Math.random() * 50 -25);
        },1000)

        return ()=> clearInterval(interval);
    },[]);

    return(
        <S.BloobsContainer>
            <svg style={{display:'none'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            {/* <S.bloob animate={{x:[200,-200],transition:{duration:2,repeat:Infinity,repeatType:"reverse"}}}></S.bloob>
            <S.bloob></S.bloob> */}
            {bloobsArr.map((bloob,id)=>{
                return(
                    <S.bloob key={id} animate={{x:xPos.get(),y:yPos.get()}} transition={{duration:2,repeat:Infinity,repeatType:'reverse'}}></S.bloob>
                )
            })}
        </S.BloobsContainer>
    )
};

export default GooeyBloobs;