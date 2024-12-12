import styled from "styled-components";

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

export {CharactersContainer, SpanCharacters};