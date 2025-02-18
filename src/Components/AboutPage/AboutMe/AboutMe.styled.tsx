import styled from "styled-components";
import { device } from "../../../Style/BreakPoints";

const AboutMeSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeImgContainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  @media ${device["360x740"]} {
    height: 70vh;
  }
  @media ${device[375]} {
    height: 85vh;
  }
  @media ${device["390x844"]} {
    height: 73vh;
  }
  @media ${device[393]} {
    height: 70vh;
  }
  @media ${device[412]} {
    height: 70vh;
  }
  @media ${device["430x932"]} {
    height: 70vh;
`;
const AboutMeTxtContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding-top: ${({ theme }) => theme.padding.medium};
  padding-bottom: ${({ theme }) => theme.padding.medium};
`;
const AboutMeHeader = styled.header`
  width: 100%;
  text-align: center;
`;
const AboutMeDetailsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
`;
const AboutMeTxt = styled.p`
  width: 100%;
  font-size: 0.65rem;
  font-family: ${({ theme }) => theme.fontFamily.latoRegular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 1.1rem;
  text-align: justify;
  text-align-last: center;
  hyphens: auto;
  @media ${device[412]} {
    font-size: 0.70rem;
  }
  @media ${device["430x932"]} {
    font-size: 0.70rem;
`;
const AboutMeSpan = styled.span`
  color: ${({ theme }) => theme.colors.accent};
`;

export {
  AboutMeSection,
  AboutMeImgContainer,
  AboutMeTxtContainer,
  AboutMeHeader,
  AboutMeDetailsContainer,
  AboutMeTxt,
  AboutMeSpan,
};
