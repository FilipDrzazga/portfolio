import { motion } from "motion/react";
import styled from "styled-components";

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
  margin-top: -2rem;
  justify-self: center;
  display: flex;
  flex-direction: column;
`;
const HeroTitle = styled.h2`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.2rem;
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  letter-spacing: -0.1rem;
  word-spacing: -0.15rem;
  line-height: 1.2;
  color: ${({ theme }) => theme.colors.secondary};
`;
const TitleTextContainer = styled(motion.div)``;
const TitleCharacters = styled(motion.span)``;
const HeroWatfordTime = styled.span`
  margin-top: -0.2rem;
  padding-left: 0.2rem;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
`;
const HeroImgContainer = styled.div`
  position: absolute;
  top: calc(100vh - 82%);
  right: ${({ theme }) => theme.padding.small};
  content: "";
  width: 60%;
  height: 53%;
  z-index: -1;
  overflow: hidden;
`;
const HeroImg = styled.img`
  width: auto;
  high: auto;
  max-width: 100%;
  object-fit: cover;
  opacity: 0;
`;
const HeroSocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -3rem;
  gap: 0.4rem;
  width: 100%;
  & [data-linkedin="linkedin"] {
    margin-top: 1.8rem;
  }
  & [data-github="github"] {
    // margin-top: -0.8rem;
  }
  span {
    font-size: 0.65rem;
    font-family: ${({ theme }) => theme.fontFamily.latoRegular};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const HeroSocialBtn = styled.button`
  position: relative;
  width: 30%;
  height: 0.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outeline: none;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: left;
`;

export {
  HeroSection,
  HeroHeader,
  HeroTitle,
  TitleTextContainer,
  TitleCharacters,
  HeroWatfordTime,
  HeroImgContainer,
  HeroImg,
  HeroSocialLinksContainer,
  HeroSocialBtn,
};
