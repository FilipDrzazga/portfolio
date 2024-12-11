import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useMotionValue } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";

import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import InfinityTextScroll from "../../Components/InfinityTextScroll/InfinityTextScroll";

import * as S from "./AboutPage.styled";

const AboutPage = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [svgSize,setSvgSize] = useState<number>();

  const svgHeightSize = useMotionValue(0)
  const watfordTime = useWatfordTime();

  useEffect(()=>{
    if(svgRef.current){
      const getSvgSize = svgRef.current.getBoundingClientRect().height;
      setSvgSize(getSvgSize);
      svgHeightSize.set(getSvgSize);
    }
  },[])

  const path = `M 0 100 C ${window.innerWidth / 3} 33 ${(window.innerWidth / 3) * 2} 33 ${window.innerWidth} 100`

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
      <section style={{ position:'relative',width: "100%", height: "200vh", background: "black" }}>
        <svg ref={svgRef} width={window.innerWidth} height='100px' style={{position:'absolute',content:'',top:'-100px',left:0}}>
          <path d={path}></path>
        </svg>
      </section>
    </>
  );
};

export default AboutPage;
