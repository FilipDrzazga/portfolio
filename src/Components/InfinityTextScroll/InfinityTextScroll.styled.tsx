import styled from "styled-components";
import { motion } from "motion/react";

const DivInfiScrollContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  width: 100vw;
  margin-top:7vh;
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

export { DivInfiScrollContainer, InfiScrollFirst, InfiScrollSecond, TextInfScrollFirst, TextInfScrollSecond };
