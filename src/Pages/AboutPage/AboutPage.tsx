import {useRef, useEffect} from 'react';
import { Canvas } from "@react-three/fiber";
import { motion ,useScroll,useSpring , useTransform } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  const scrollSectionRef = useRef<HTMLElement>(null);
  const watfordTime = useWatfordTime();

  const {scrollYProgress} = useScroll({
    target:scrollSectionRef,
    offset:["start end", "end end"]
  });

  const yPos =  useTransform(scrollYProgress,[0,0.5],[0,100]);
  const yPosWithSpring = useSpring(yPos,{
    stiffness:500,
    bounce:0.4,
    // damping:20,
    // mass:1
  });

  const dPathPosition = useTransform(yPosWithSpring, (pos)=>{
    const newPos = Math.floor(pos);  
    return `M -20 100 C ${window.innerWidth / 3} ${newPos} ${(window.innerWidth / 3) * 2} ${newPos} ${window.innerWidth + 20} 100`
  });

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: "7vh", left: 0, width: "100%", height: "100vh", zIndex: 1 }}
        gl={{ alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
      >
        <ShaderImageMaterial />
      </Canvas>
      <S.SectionAboutContainer>
        <S.HeaderAbout>
          <S.TitleAboutFirst>
            Creative<span> Developer</span>
          </S.TitleAboutFirst>
          <S.TitleAboutSecond>
            <span>Based in</span> Watford.
          </S.TitleAboutSecond>
          <S.WatfordTime>{watfordTime}</S.WatfordTime>
        </S.HeaderAbout>
        <InfinityTextScroll />
      </S.SectionAboutContainer>
      <section ref={scrollSectionRef} style={{ position:'relative',width: "100%", height: "200vh", background: "#121212" }}>
        <svg width={window.innerWidth} height='100px' style={{position:'absolute',content:'',top:'-100px',left:0}}>
          <motion.path  d={dPathPosition} fill="#121212"></motion.path>
        </svg>
      </section>
    </>
  );
};

export default AboutPage;
