import styled from "styled-components";

const ExperienceSection = styled.section`
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  padding-top: ${({ theme }) => theme.padding.medium};
  background-color: transparent;
`;
const ExperienceHeader = styled.header`
  width: 100%;
  color: ${({ theme }) => theme.colors.secondary};
`;

export { ExperienceSection, ExperienceHeader };
