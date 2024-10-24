import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;

export { LandingPageContainer, Title };
