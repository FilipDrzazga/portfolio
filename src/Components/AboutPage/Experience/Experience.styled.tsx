import styled from "styled-components";
import { motion } from "motion/react";

interface ExperienceSectionProps {
  readonly $randomContent: string;
}

const ExperienceSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: ${({ theme }) => theme.padding.small};
  background-color: transparent;
  overflow: hidden;
`;
const ExperienceHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
`;
const ExperienceTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;
const ExperienceText = styled.p`
  width: 100%;  margin-top: 1rem;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.1rem;
  text-align: justify;
  text-align-last: center;
  span{

`;
const ExperienceSpan = styled(motion.span)<ExperienceSectionProps>`
position: relative;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
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

export { ExperienceSection, ExperienceHeader, ExperienceTextContainer, ExperienceText, ExperienceSpan };
