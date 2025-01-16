import styled from "styled-components";
import { motion } from "motion/react";

const SectionAboutContainer = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
  z-index: 999;
`;
const HeaderAbout = styled.header`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
`;
const TitleAboutFirst = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
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
const TitleAboutSecond = styled(TitleAboutFirst)`
  margin-top: -1rem;
`;
const WatfordTime = styled.span`
  margin-top: -0.2rem;
  padding-left: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
`;
const ImgContainer = styled.div`
  position: absolute;
  top: 8%;
  right: ${({ theme }) => theme.padding.small};
  content: "";
  width: 60%;
  height: 55%;
  z-index: -1;
  overflow: hidden;
`;
const Img = styled.img`
  width: auto;
  max-width: 100%;
  object-fit: cover;
  opacity: 0;
`;
const SectionAboutStory = styled.section`
  position: relative;
  max-width: 100%;
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding.small};
`;
const SectionTransition = styled(motion.section)`
  width:100%;
  height:200vh;
`
const SectionExperience = styled.section`
width:100%;
height:100vh;
padding: ${({ theme }) => theme.padding.small};
`
const HeaderExperience = styled.header`
width:100%;
height:15%;
color:${({theme})=>theme.colors.secondary};
`
const SectionTitleExperience = styled.h2`
  width:100%;
  margin-top: -0.3rem;
  font-size: ${({theme})=>theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: -0.15rem;
  word-spacing: 0.15rem;
  line-height:-3rem;
  span{
    font-size: ${({theme})=>theme.fontSize.xl};
    font-family: ${({ theme }) => theme.fontFamily.playfairBold};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.15rem;
    word-spacing: -0.15rem;
  }
  br{
    display: block;
    content: "";
    margin-top: -1rem; 
  }
`


export {
  SectionAboutContainer,
  HeaderAbout,
  TitleAboutFirst,
  TitleAboutSecond,
  WatfordTime,
  ImgContainer,
  Img,
  SectionAboutStory,
  SectionTransition,
  SectionExperience,
  HeaderExperience,
  SectionTitleExperience,
};
