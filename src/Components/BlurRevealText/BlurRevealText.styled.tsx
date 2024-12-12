import styled from "styled-components";

interface Props {
    $height:number;
}

const DivStoryContainer = styled.div<Props>`
position:sticky;
${({$height}) => `top: calc(50vh - ${$height / 2});`};
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
gap:0.2rem;
color: ${({ theme }) => theme.colors.primary};
`;
const CharactersContainer = styled.div`
margin-bottom:-0.5rem;
&[data-specialcontainer='true'] {
margin-top:-0.35rem;
}
`;
const SpanCharacters = styled.span`
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