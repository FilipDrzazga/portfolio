import styled from "styled-components";
import { motion } from "motion/react";

interface AboutMeSectionProps {
  readonly $randomContent: string;
}

const AboutMeSection = styled.section`
  width: 100%;
  // height: 200vh; // apply for screen and bigger
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeImgContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
`;
const AboutMeTxtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: ${({ theme }) => theme.padding.medium};
  padding-bottom: ${({ theme }) => theme.padding.medium};
`;
const AboutMeHeader = styled.header`
  width: 100%;
  text-align: center;
`;
const AboutMeTitle = styled.h2`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 2rem;
`;
const AboutMeDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;
const AboutMeTxt = styled.p`
  width: 100%;
  // margin-top: 3rem;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.1rem;
  text-align: justify;
  text-align-last: center;
  hyphens: auto;
`;
const AboutMeSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;
const AboutMeAnimatedSpan = styled(motion.span)<AboutMeSectionProps>`
position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
   &::after {
    content: ${({ $randomContent }) => `'${$randomContent}'`};
    position: absolute;
    top: 0;
    left: 20%;
    width: 6px;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.primary};
    font-size: font-size: 0.65rem;
    opacity: var(--afterOpacity);
`;

export {
  AboutMeSection,
  AboutMeImgContainer,
  AboutMeTxtContainer,
  AboutMeHeader,
  AboutMeTitle,
  AboutMeDetailsContainer,
  AboutMeTxt,
  AboutMeSpan,
  AboutMeAnimatedSpan,
};
