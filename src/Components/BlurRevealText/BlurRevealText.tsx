import { useRef, useEffect, useState } from 'react';
import { type MotionValue, useMotionValueEvent} from 'motion/react';

import * as S from './BlurRevealText.styled';

const text1 = 'A'.split('');
const text1special = 'self-taught'.split('');
const text2 = 'and emerging'.split('');
const text3 = 'creator,'.split('');
const text2special = 'always'.split('');
const text4 = 'trying to push'.split('');
const text5 = 'the boundaries to bring'.split('');
const text3special = 'cuzy'.split('');
const text6 = 'ideas to'.split('');
const text4special = 'web/app'.split('');
const text7 = 'development.'.split('');

const wordsObj = {
    char1:text1,
    special1:text1special,
    char3:text2,
    char4:text3,
    special2:text2special,
    char6:text4,
    char7:text5,
    special3:text3special,
    char9:text6,
    special410:text4special,
    char11:text7
};

const charContainerVariants = {
    initial:{
        opacity:0,
    },
    enter:(i:number)=>({
        opacity:1,
        transition:{
            delay: i * 0.8,
            staggerChildren:0.1,
            // when: "afterChildren"
        }
    })
};

const charVariants = {
    initial:{
        opacity: 0,
        filter: "blur(40px)",
    },
    enter:{
        opacity: 1,
        filter: "blur(0px)",
        transition:{
            duration:0.4
        }
    }
}

interface BlurRevealTextProps {
     readonly scrollYProgress:MotionValue<number>
}


const BlurRevealText = ({scrollYProgress}:BlurRevealTextProps)=>{
const DivStoryContainerRef = useRef<HTMLDivElement>(null);
const [divStoryContainerHeight, setdivStoryContainerHeight] = useState(0);
const [isAnimationComplete, setIsAnimationComplete] = useState(0);

    useMotionValueEvent(scrollYProgress, 'change', (latest)=>{
        console.log(latest)
    });

    useEffect(()=>{
        if(DivStoryContainerRef.current){
            const height = DivStoryContainerRef.current.getBoundingClientRect().height;
            setdivStoryContainerHeight(height);
        };
    },[])

    return(
    <S.DivStoryContainer $height={+divStoryContainerHeight} ref={DivStoryContainerRef}>        
        {Object.entries(wordsObj).map(([key,charArr],id)=>(
            <S.CharactersContainer 
            onAnimationComplete={()=>{
                if(id === isAnimationComplete && isAnimationComplete < 10){
                    setIsAnimationComplete(prev=>prev + 1);
                }
            }}
            custom={id} 
            variants={charContainerVariants} 
            initial='initial' 
            animate={id === isAnimationComplete && 'enter'} 
            data-specialcontainer={key.includes('special') ? 'true' : 'false'} 
            key={key}>
                {charArr.map((char,id)=>(
                    <S.SpanCharacters 
                    data-specialchar={key.includes('special') ? 'true' : 'false'} 
                    key={id}
                    variants={charVariants}
                    >{char}
                    </S.SpanCharacters>
                ))}
            </S.CharactersContainer>
        ))}
    </S.DivStoryContainer>
    );
};

export default BlurRevealText;