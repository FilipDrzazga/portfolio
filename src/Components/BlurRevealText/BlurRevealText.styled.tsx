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
  justify-content: stretch;
  align-items: center;
  gap: 0.5rem;
  margin-top: 100px;
  margin-bottom: 300px;
  color: ${({ theme }) => theme.colors.secondary};
`;
const CharactersContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Characters = styled(motion.span)`
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondary};
    line-height: 1.5rem;
    margin-left: -0.1rem;
  }
`;

export { WordContainer, CharactersContainer, Characters };
