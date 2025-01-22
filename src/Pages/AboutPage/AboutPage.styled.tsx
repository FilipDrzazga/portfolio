import styled from "styled-components";
import { motion } from "motion/react";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
  z-index: 999;
`;
const HeroHeader = styled.header`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
`;
const HeroTitleFirst = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: 300;
  letter-spacing: -0.15rem;
  word-spacing: -0.15rem;
  color: ${({ theme }) => theme.colors.secondary};
  span {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: -0.15rem;
    word-spacing: -0.15rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const HeroTitleSecond = styled(HeroTitleFirst)`
  margin-top: -1rem;
`;
const HeroWatfordTime = styled.span`
  margin-top: -0.2rem;
  padding-left: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
`;
const HeroImgContainer = styled.div`
  position: absolute;
  top: 11%;
  right: ${({ theme }) => theme.padding.small};
  content: "";
  width: 60%;
  height: 55%;
  z-index: -1;
  overflow: hidden;
`;
const HeroImg = styled.img`
  width: auto;
  max-width: 100%;
  object-fit: cover;
  opacity: 0;
`;
const AboutMeIntroSection = styled(motion.section)`
  position: relative;
  max-width: 100%;
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding.small};
`;
const SectionTransition = styled(motion.section)`
  width: 100%;
  height: 200vh;
`;
const SectionExperience = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
`;
const HeaderExperience = styled.header`
  width: 100%;
  height: 15%;
  color: ${({ theme }) => theme.colors.secondary};
`;
const SectionTitleExperience = styled.h2`
  width: 100%;
  margin-top: -0.3rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: -0.15rem;
  word-spacing: 0.15rem;
  line-height: -3rem;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.fontFamily.playfairBold};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.15rem;
    word-spacing: -0.15rem;
  }
  br {
    display: block;
    content: "";
    margin-top: -1rem;
  }
`;
const AboutMeSection = styled.section`
  width: 100%;
  height: 200vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeImgContainer = styled.div`
  width: 100%;
  height: auto;
`;
const AboutMeImg = styled.img`
  width: auto;
  max-width: 100%;
  object-fit: cover;
`;
const AboutMeImgTxtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.3rem;
`;
const AboutMeImgTxt = styled.span`
  width: 100%;
  text-align: right;
  font-size: 0.7rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.primary};
`;
const AboutMeTxtContainer = styled.div`
  width: 100%;
  disaply: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:5rem;
`;
const AboutMeHeader = styled.header`
  width:100%;
`;
const AboutMeTitle = styled.h2`
  width: 100%;
  text-align: justify;
  text-align-last: right;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary};
`;
const AboutMeDetailsContainer = styled.div`
  width:100%;
`
const AboutMeTxt = styled.p`
  width:100%;
`;

export {
  HeroSection,
  HeroHeader,
  HeroTitleFirst,
  HeroTitleSecond,
  HeroWatfordTime,
  HeroImgContainer,
  HeroImg,
  AboutMeIntroSection,
  SectionTransition,
  SectionExperience,
  HeaderExperience,
  SectionTitleExperience,
  AboutMeSection,
  AboutMeImgContainer,
  AboutMeImg,
  AboutMeImgTxt,
  AboutMeImgTxtContainer,
  AboutMeTxtContainer,
  AboutMeHeader,
  AboutMeTitle,
  AboutMeDetailsContainer,
  AboutMeTxt
};
