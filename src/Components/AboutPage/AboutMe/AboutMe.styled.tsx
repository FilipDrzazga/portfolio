import styled from "styled-components";

const AboutMeSection = styled.section`
  width: 100%;
  height: 250vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  // background-color: ${({ theme }) => theme.colors.secondary};
  background-color:transparent
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeImgContainer = styled.div`
  width: 90%;
  height: auto;
  overflow: hidden;
`;
const AboutMeImg = styled.img`
  width: auto;
  max-width: 100%;
  object-fit: cover;
  opacity:0;
`;
const AboutMeTxtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  gap: 2rem;
`;
const AboutMeHeader = styled.header`
  width: 100%;
`;
const AboutMeTitle = styled.h2`
  width: 100%;
  text-align: justify;
  text-align-last: right;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.primary};
`;
const AboutMeDetailsContainer = styled.div`
  width: 80%;
  align-self: flex-end;
`;
const AboutMeTxt = styled.p`
  width: 100%;
  margin-top: 3rem;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.primary};
  line-height: 1.5rem;
  text-align: start;
`;
const AboutMeSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export {
  AboutMeSection,
  AboutMeImgContainer,
  AboutMeImg,
  AboutMeTxtContainer,
  AboutMeHeader,
  AboutMeTitle,
  AboutMeDetailsContainer,
  AboutMeTxt,
  AboutMeSpan,
};
