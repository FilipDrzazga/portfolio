import styled from "styled-components";

const SectionAboutContainer = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
  z-index: 999;
`;
const HeaderAbout = styled.header`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
  z-index: 999;
`;
20;
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
const SectionAboutStory = styled.section`
  position: relative;
  width: 100%;
  height: 200vh;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.padding.small};
`;
const DivStoryContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
  gap:0.2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export { SectionAboutContainer, HeaderAbout, TitleAboutFirst, TitleAboutSecond, WatfordTime, SectionAboutStory,DivStoryContainer };
