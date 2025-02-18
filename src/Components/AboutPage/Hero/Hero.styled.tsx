import { motion } from "motion/react";
import styled from "styled-components";
import { device } from "../../../Style/BreakPoints";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
  z-index: 999;
`;
const HeroHeader = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-self: center;
  flex-direction: column;
  margin-top: 4.3rem;
  @media ${device["360x740"]} {
    margin-top: 5.8rem;
  }
  @media ${device[375]} {
    margin-top: 4.5rem;
    gap: 0.2rem;
  }
  @media ${device["390x844"]} {
    margin-top: 8rem;
  }
  @media ${device[393]} {
    margin-top: 9rem;
  }
  @media ${device[412]} {
    margin-top: 6rem;
  }
  @media ${device["430x932"]} {
    margin-top: 6rem;
  }
`;
const HeroTitle = styled.h2`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.1rem;
  word-spacing: -0.15rem;
  @media ${device[375]} {
    font-size: 2.8rem;
  }
  @media ${device["360x740"]} {
    font-size: 2.7rem;
  }
  @media ${device["390x844"]} {
    font-size: 2.9rem;
  }
  @media ${device[393]} {
    font-size: 3rem;
  }
  @media ${device[412]} {
    font-size: 3.2rem;
  }
  @media ${device["430x932"]} {
    font-size: 3.2rem;
  }
`;
const TitleTextContainer = styled(motion.div)`
  width: 100%;
  line-height: 1.8rem;
  @media ${device["360x740"]} {
    line-height: 2.2rem;
  }
  @media ${device[375]} {
    line-height: 2.3rem;
  }
  @media ${device[412]} {
    line-height: 2.5rem;
  }
  @media ${device["430x932"]} {
    line-height: 2.5rem;
  }
`;
const TitleCharacters = styled(motion.span)``;
const HeroImgContainer = styled.div`
  position: absolute;
  top: calc(100vh - 82%);
  right: ${({ theme }) => theme.padding.small};
  content: "";
  width: 60%;
  height: 53%;
  z-index: -1;
  overflow: hidden;
  @media ${device["360x740"]} {
    width: 65%;
  }
  @media ${device[375]} {
    top: calc(100vh - 85%);
    width: 60%;
    height: 55%;
  }
  @media ${device["390x844"]} {
    width: 68%;
  }
  @media ${device[393]} {
    width: 70%;
    height: 55%;
  }
  @media ${device[412]} {
    top: calc(100vh - 85%);
    width: 68%;
  }
  @media ${device["430x932"]} {
    top: calc(100vh - 85%);
    width: 70%;
  }
`;
const HeroSocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  width: 100%;
  height: auto;
  margin-top: -1.7rem;
  & [data-linkedin="linkedin"] {
    margin-top: 1rem;
  }
  @media ${device["360x740"]} {
    margin-top: 0.5rem;
  }
  @media ${device[375]} {
    margin-top: -1.7rem;
  }
  @media ${device["390x844"]} {
    margin-top: -1rem;
  }
  @media ${device[412]} {
    margin-top: 2.5rem;
  }
  @media ${device["430x932"]} {
    margin-top: 2.8rem;
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
  text-align: left;
`;
const ScrollContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export {
  HeroSection,
  HeroHeader,
  HeroTitle,
  TitleTextContainer,
  TitleCharacters,
  HeroImgContainer,
  HeroSocialLinksContainer,
  HeroSocialBtn,
  ScrollContainer,
};
