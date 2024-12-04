import styled from "styled-components";

const SectionAboutContainer = styled.section`
  position: absolute;
  top: 7vh; // navigation size
  left: 0;
  width: 100%;
  height: 100%;
  padding: ${({ theme }) => theme.padding.small};
`;

export { SectionAboutContainer };
