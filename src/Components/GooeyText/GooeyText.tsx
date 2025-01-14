import {useState,useEffect, useRef} from 'react';
import { motion, useTransform,useMotionValueEvent, type MotionValue} from "motion/react";
import * as S from './GooeyText.styled';

const text1 = "A".split("");
const text1special = "self-taught".split("");
const text2 = "and emerging".split("");
const text3 = "creator,".split("");
const text2special = "always".split("");
const text4 = "trying to push".split("");
const text5 = "the boundaries".split("");
const text6 = "to bring".split("");
const text3special = "cuzy".split("");
const text7 = "ideas to".split("");
const text4special = "web/app".split("");
const text8 = "development.".split("");

const wordsObj = {
  char1: text1,
  special1: text1special,
  char2: text2,
  char3: text3,
  special2: text2special,
  char4: text4,
  char5: text5,
  cart6: text6,
  special3: text3special,
  char7: text7,
  special410: text4special,
  char8: text8,
};


interface GooeyTextProps {
   readonly scrollYProgress: MotionValue<number>;
}

const GooeyText = ({scrollYProgress}:GooeyTextProps) => {
    const sectionContainerRef = useRef<HTMLElement>(null);
    const [sectionContainerHeight, setSectionContainerHeight] = useState(0);

    const stdDeviation = useTransform(scrollYProgress,[0,1],[3,0]);

    useEffect(() => {
        if (sectionContainerRef.current) {
          const height = sectionContainerRef.current.getBoundingClientRect().height;
          console.log(height)
          setSectionContainerHeight(height);
        }
    }, []);

    return(
    <S.SectionGooeyTextContainer $height={sectionContainerHeight} ref={sectionContainerRef}>
        <svg style={{ width:'100%', height:'30vh'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id='gooey-text'>
                    <motion.feGaussianBlur in="SourceGraphic" stdDeviation={stdDeviation} result="blur" />
                    <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7" result="goo" />
                </filter>
            </defs>
            <text filter="url(#gooey-text)" x='0' y='2rem' fontFamily="Lato-Regular" fontSize='2rem' fill="white" >Custom Font With Filter</text>
        </svg>
    </S.SectionGooeyTextContainer>
    )
};

export default GooeyText;