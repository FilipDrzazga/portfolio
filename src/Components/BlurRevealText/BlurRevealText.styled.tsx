import styled from "styled-components";
import { motion } from "motion/react";
import { device } from "../../Style/BreakPoints";

interface Props {
  $height: number;
}

const WordContainer = styled(motion.div)<Props>`
  position: sticky;
  top: ${({ $height }) => `calc(46% - ${$height / 2}px)`};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.3rem;
  align-items: center;
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
    margin-left: -0.1rem;
    line-height: 1.7rem;
    @media ${device['360x740']} {
    margin-left: -0.05rem;
      font-size: 2.5rem;
      line-height: 2rem;
    }
    @media ${device[375]} {
      font-size: 2.6rem;
      line-height: 2.15rem;
    }
    @media ${device['390x844']} {
      font-size: 2.8rem;
      line-height: 2.3rem;
    }
    @media ${device[412]} {
      font-size: 3rem;
      line-height: 2.5rem;
    }
    @media ${device['430x932']} {
      font-size: 3rem;
      line-height: 2.7rem;
    }
`;

export { WordContainer, CharactersContainer, Characters };
