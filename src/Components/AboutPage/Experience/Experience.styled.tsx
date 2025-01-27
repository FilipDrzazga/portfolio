import styled from "styled-components";

const ExperienceSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  background-color: transparent;
`;
const ExperienceHeader = styled.header`
  width: 100%;
  height: 15%;
  color: ${({ theme }) => theme.colors.secondary};
`;
const ExperienceTitle = styled.h2`
  width: 100%;
  margin-top: -0.3rem;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  letter-spacing: -0.15rem;
  word-spacing: 0.15rem;
  line-height: -3rem;
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.fontFamily.playfairBold};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: -0.15rem;
    word-spacing: -0.15rem;
  }
  br {
    display: block;
    content: "";
    margin-top: -1rem;
  }
`;

export { ExperienceSection, ExperienceHeader, ExperienceTitle };
