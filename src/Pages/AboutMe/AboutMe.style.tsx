import styled from "styled-components";
import { motion } from "framer-motion";

interface AboutMeProps {
  readonly $d?: string;
}

const AboutMeContainer = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeTittleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
`;
const AboutMeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const AboutMeTitleSpan = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const AboutMeTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
`;
const AboutMeTextDescription = styled.span`
  width: 90%;
  text-align: right;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.1rem;
  line-height: 1.5;
`;
const AboutMeTextDescriptionSpan = styled(motion.span)`
  display: inline-block;
  height: 1.35rem;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fontType.primary};
`;
const AboutMeSvgContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  flex: 1;
  width: 100%;
  height: 40%;
`;
const AboutMeSvg = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
const AboutMePath = styled(motion.path)<AboutMeProps>`
  d: ${(props) => props.$d};
  fill: ${({ theme }) => theme.colors.secondary};
`;
const AboutMeStoryContainer = styled(motion.section)`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export {
  AboutMeContainer,
  AboutMeTittleContainer,
  AboutMeTitle,
  AboutMeTitleSpan,
  AboutMeTextContainer,
  AboutMeTextDescription,
  AboutMeTextDescriptionSpan,
  AboutMeSvgContainer,
  AboutMeSvg,
  AboutMePath,
  AboutMeStoryContainer,
};
