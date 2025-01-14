import styled from "styled-components";

interface Props {
  readonly $height?: number;
  readonly $filter?: any;
}

const SectionGooeyTextContainer = styled.section<Props>`
  position: sticky;
  margin-top: 20vh;
  top: ${({ $height }) => `calc(45% - ${$height! / 2}px)`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;
const Svg = styled.svg`
  width: 100%;
  height: 30vh;
`
const SvgText = styled.span<Props>`
  filter: ${({$filter})=>$filter};
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
`

export {SectionGooeyTextContainer, Svg, SvgText};