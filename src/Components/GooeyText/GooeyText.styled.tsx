import styled from "styled-components";

interface Props {
  readonly $height?: number;
  readonly $filter?: any;
}

const SectionGooeyTextContainer = styled.section<Props>`
  position: sticky;
  top: ${({ $height }) => `calc(45% - ${$height! / 2}px)`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const Svg = styled.svg`
  display:none;
  width: 100%;
  height: 30vh;
`
const SpanFiltered = styled.span<Props>`
  filter: ${({$filter})=>$filter};
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  &[data-specialchar="true"] {
    margin-top: -0.35rem;
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`

export {SectionGooeyTextContainer, Svg, SpanFiltered};