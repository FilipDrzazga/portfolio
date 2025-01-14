import styled from "styled-components";

interface Props {
  $height: number;
}

const SectionGooeyTextContainer = styled.section<Props>`
  position: sticky;
  margin-top: 20vh;
  top: ${({ $height }) => `calc(45% - ${$height / 2}px)`};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export {SectionGooeyTextContainer};