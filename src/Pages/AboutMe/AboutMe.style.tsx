import styled from "styled-components";

const AboutMeContainer = styled.section`
  width: 100%;
  height: 200vh;
  padding: ${({ theme }) => theme.padding.small};
`;
const AboutMeTittleContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  gap: 0.2rem;
`;
const AboutMeTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const AboutMeTitleSpan = styled.span`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const AboutMeSvgLineContainer = styled.svg`
  width: 100%;
  height: 5%;
`;
const AboutMeTextContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
`;
const AboutMeTextDescription = styled.p`
  width: 50%;
  text-align: right;
  font-size: 1rem;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  font-family: ${({ theme }) => theme.fontType.primary};
  letter-spacing: 0.1rem;
  line-height: 1.5;
`;

export {
  AboutMeContainer,
  AboutMeTittleContainer,
  AboutMeTitle,
  AboutMeTitleSpan,
  AboutMeSvgLineContainer,
  AboutMeTextContainer,
  AboutMeTextDescription,
};
