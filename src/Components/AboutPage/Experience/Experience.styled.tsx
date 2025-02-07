import { motion } from "motion/react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: transparent;
  overflow: hidden;
`;
const ExperiencePixelBlocksContainer = styled.div `
position:absolute;
top:0;
left:0;
display: flex;
flex-direction: row;
width: 100%;
height: 100%;
overflow: hidden;
`;
const ExperiencePixelColumn = styled.div `
  width: 20vw;
  height: 100%;
`;
const ExperiencePixelBlock = styled(motion.div) `
  width: 100%;
  height: 20vw;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
const ExperienceHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
`;
const ExperienceCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  padding-top: 2rem;
`;
const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;
const CardTitle = styled.h2`
  font-size: 1.3rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;
const CardContent = styled.p`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.5;
  width: 100%;
`;

export { ExperienceSection, 
  ExperiencePixelBlocksContainer, 
  ExperiencePixelColumn, 
  ExperiencePixelBlock, 
  ExperienceHeader,
  ExperienceCardContainer,
  ExperienceCard,
  CardTitle,
  CardContent };
