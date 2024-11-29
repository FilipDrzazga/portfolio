import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled(motion.h1)``;

const Letter = styled(motion.span)`
  font-size: 0.9rem;
  font-weight: 500;
  font-family: ${({ theme }) => theme.fontFamily.latoBold};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.5em;
`;

export { LandingPageContainer, Title, Letter };
