import { motion } from "motion/react";
import styled from "styled-components";

const ExperienceSection = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: transparent;
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

export { ExperienceSection, ExperiencePixelBlocksContainer, ExperiencePixelColumn, ExperiencePixelBlock, ExperienceHeader };
