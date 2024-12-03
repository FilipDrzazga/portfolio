import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled(motion.h1)``;

const Letter = styled(motion.span)`
  font-size: 0.9rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.5em;
`;

const LoadersSquareContainer = styled(motion.section)`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 2.3rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const LoadersSquare = styled(motion.div)`
  width: 10%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export { LandingPageContainer, Title, Letter, LoadersSquareContainer, LoadersSquare };
