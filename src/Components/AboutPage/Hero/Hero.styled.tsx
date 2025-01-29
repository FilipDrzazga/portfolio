import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
  z-index: 999;
`;
const HeroHeader = styled.header`
  margin-top: 7rem;
  display: flex;
  flex-direction: column;
`;
const HeroTitleFirst = styled.h2`
  width: 100%;
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: 300;
  letter-spacing: -0.15rem;
  word-spacing: -0.15rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: 300;
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
const HeroTitleSecond = styled(HeroTitleFirst)`
  margin-top: -1rem;
`;
const HeroWatfordTime = styled.span`
  margin-top: -0.2rem;
  padding-left: 0.3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: -0.05rem;
`;
const HeroImgContainer = styled.div`
  position: absolute;
  top: 11%;
  right: ${({ theme }) => theme.padding.small};
  content: "";
  width: 60%;
  height: 55%;
  z-index: -1;
  overflow: hidden;
`;
const HeroImg = styled.img`
  width: auto;
  max-width: 100%;
  object-fit: cover;
  opacity: 0;
`;

export { HeroSection, HeroHeader, HeroTitleFirst, HeroTitleSecond, HeroWatfordTime, HeroImgContainer, HeroImg };
