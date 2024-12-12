import styled from "styled-components";

const CharactersContainer = styled.div`

`;
const SpanCharacters = styled.span`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  margin-left:-0.1rem;
`;

export {CharactersContainer, SpanCharacters};