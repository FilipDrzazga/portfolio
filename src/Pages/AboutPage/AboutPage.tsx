import { useState, useEffect, useMemo, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useScroll, useTransform } from "motion/react";

import useWatfordTime from "../../hooks/useWatfordTime";
import useRect from "../../hooks/useRect";

import Navigation from "../../Components/Navigation/Navigation";
import ScrollToExplore from "../../Components/ScrollToExplore/ScrollToExplore";
import ShaderImageMaterial from "../../Components/ShaderImageMaterial/ShaderImageMaterial";
import BounceSVG from "../../Components/BounceSVG/BounceSVG";
import BlurRevealText from "../../Components/BlurRevealText/BlurRevealText";

import * as S from "./AboutPage.styled";
import myImg from "../../Images/mobile_man_face.jpg";
import { OrbitControls } from '@react-three/drei';
// import GooeyBloobs from "../../Components/GooeyBloobs/GooeyBloobs";

const AboutPage = () => {
  const SectionAboutHeroRef = useRef<HTMLDivElement>(null);
  const sectionAboutStoryRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  // const sectionTransition = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const imgRect = useRect(imgRef);
  const [isIntersecting, setIsIntersecting] = useState(false);

  const watfordTime = useWatfordTime();

  const { scrollY } = useScroll();
  const { scrollYProgress } = useScroll({
    target: sectionAboutStoryRef,
    offset: ["start end", "end end"],
  });
  // const { scrollYProgress: sectionTransitionScrollYProgress } = useScroll({
  //   target: sectionTransition,
  //   offset: ["start end", "end end"],
  // });

  const fovPosition = useMemo(() => {
    const cameraZPosition = 600;
    const newFovPosition = 2 * Math.atan(window.innerHeight / 2 / cameraZPosition) * (180 / Math.PI);
    return newFovPosition;
  }, []);

  // const backgroundColor = useTransform(sectionTransitionScrollYProgress, [0, 0.48, 0.8], ["#121212", "#121212", "#E9E9E9"]);

  useEffect(() => {
    const callback = (entries: any[])=>{
      entries.forEach((entry: any) => {
        console.log(entry);
        setIsIntersecting(entry.isIntersecting);
      });
    };
    const options = {
      threshold: 0.5,
      rootMargin: "100px 0px 0px 200px" 
    }
    const observer = new IntersectionObserver(callback,options);

    observer.observe(sectionAboutStoryRef.current!);
    observer.observe(ref.current!)

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Canvas
        style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100vh", zIndex: -1 }}
        gl={{ alpha: true }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        camera={{ fov: fovPosition, position: [0, 0, 600] }}
      >
        <OrbitControls />
        <ShaderImageMaterial imageRect={imgRect} scrollY={scrollY} />
      </Canvas>
    <Navigation isInView={false} />
      <S.SectionAboutHero ref={SectionAboutHeroRef}>
        <S.HeaderAbout>
          <S.TitleAboutFirst>
            Creative<span> Developer</span>
          </S.TitleAboutFirst>
          <S.TitleAboutSecond>
            <span>Based in</span> Watford.
          </S.TitleAboutSecond>
          <S.WatfordTime>{watfordTime}</S.WatfordTime>
          <S.ImgContainer ref={imgRef}>
            <S.Img src={myImg} alt="Photo of mine face"></S.Img>
          </S.ImgContainer>
        </S.HeaderAbout>
        <ScrollToExplore/>
      </S.SectionAboutHero>
      <S.SectionAboutStory ref={sectionAboutStoryRef}>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.SectionAboutStory>
      <section ref={ref} style={{width:'100%', height:'200vh'}}>

      </section>
    </>
  );
};

export default AboutPage;
