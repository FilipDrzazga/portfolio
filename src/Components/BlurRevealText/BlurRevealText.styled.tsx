import styled from "styled-components";
import { motion } from "motion/react";

interface Props {
  $height: number;
}

const WordContainer = styled(motion.div)<Props>`
  position: sticky;
  top: ${({ $height }) => `calc(45% - ${$height / 2}px)`};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content:stretch;
  gap: 0.3rem;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.colors.secondary};
`;
const CharactersContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -0.5rem;
`;
const Characters = styled(motion.span)`
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondary};
    margin-left: -0.1rem;
    line-height: 1.8rem;
  }
`;

export { WordContainer, CharactersContainer, Characters };
