import styled from "styled-components";
import {motion} from 'motion/react'

interface Props {
    $height:number;
}

const DivStoryContainer = styled(motion.div)<Props>`
position:sticky;
top: ${({$height})=> `calc(45% - ${$height / 2}px)` };
// top:50vh;
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:0.2rem;
color: ${({ theme }) => theme.colors.primary};
`;
const CharactersContainer = styled(motion.div)`
margin-bottom:-0.5rem;
&[data-specialcontainer='true'] {
margin-top:-0.35rem;
}
`;
const SpanCharacters = styled(motion.span)`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left:-0.1rem;
  &[data-specialchar='true'] {
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fontFamily.playfairBold};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }
`;

export {DivStoryContainer, CharactersContainer, SpanCharacters};