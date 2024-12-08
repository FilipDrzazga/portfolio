import styled from "styled-components";
import { motion } from "motion/react";

const SectionAboutContainer = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
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
  z-index: 999;
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
const DivInfiScrollContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  width: 100vw;
  overflow: hidden;
  z-index: 999;
`;
const InfiScrollFirst = styled(motion.div)`
  width: 103%;
  flex-shrink: 0;
`;
const InfiScrollSecond = styled(motion.div)`
  width: 103%;
  flex-shrink: 0;
`;
const TextInfScrollFirst = styled.span`
  padding-top: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.latoBold};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
`;
const TextInfScrollSecond = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.playfairRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
  font-style: italic;
`;

export {
  SectionAboutContainer,
  HeaderAbout,
  TitleAboutFirst,
  TitleAboutSecond,
  WatfordTime,
  DivInfiScrollContainer,
  InfiScrollFirst,
  InfiScrollSecond,
  TextInfScrollFirst,
  TextInfScrollSecond,
};
