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
      let previousY = 0
      let previousRatio = 0
      entries.forEach((entry: any) => {
    const currentY = entry.boundingClientRect.y
    const currentRatio = entry.intersectionRatio
    const isIntersecting = entry.isIntersecting

    if (currentY < previousY) {
      if (currentRatio > previousRatio && isIntersecting) {
        console.log("Scrolling down enter")
        setIsIntersecting(true);
      } else {
        console.log("Scrolling down leave")
        setIsIntersecting(false);
      }
    } else if (currentY > previousY && isIntersecting) {
      if (currentRatio < previousRatio) {
        console.log("Scrolling up leave")
      } else {
        console.log("Scrolling up enter")
        setIsIntersecting(false);
      }
    }
    previousY = currentY
    previousRatio = currentRatio
      });
    };
    const options = {
      root:null,
      threshold: [0,0.5],
      rootMargin: "0px" 
    }
    const observer = new IntersectionObserver(callback,options);

    observer.observe(sectionAboutStoryRef.current!);

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
    <Navigation isInView={isIntersecting} />
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
      <S.SectionAboutStory ref={sectionAboutStoryRef} data-intersection='1'>
        <BounceSVG scrollYProgress={scrollYProgress} />
        <BlurRevealText scrollYProgress={scrollYProgress} />
      </S.SectionAboutStory>
      <section style={{width:'100%', height:'200vh'}}>

      </section>
    </>
  );
};

export default AboutPage;
