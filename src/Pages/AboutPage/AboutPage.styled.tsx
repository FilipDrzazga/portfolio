import styled from "styled-components";

const SectionAboutContainer = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: ${({ theme }) => theme.colors.primary};
`;
const HeaderAbout = styled.header`
  position: absolute;
  top: 35%;
  left: ${({ theme }) => theme.padding.small};
  display: flex;
  flex-direction: column;
  // width: 100%;
  // height: 100vh;
  z-index: 999;
  // background-color: black;
`;
const TitleAboutFirst = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: -0.15rem;
  word-spacing: -0.15rem;
  color: ${({ theme }) => theme.colors.secondary};
  span {
    font-size: 2.5rem;
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    letter-spacing: -0.15rem;
    word-spacing: -0.15rem;
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
const TitleAboutSecond = styled(TitleAboutFirst)`
  margin-top: -1rem;
`;
const WatfordTime = styled.span`
  margin-top: -0.2rem;
  padding-left: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
`;

export { SectionAboutContainer, HeaderAbout, TitleAboutFirst, TitleAboutSecond, WatfordTime };
