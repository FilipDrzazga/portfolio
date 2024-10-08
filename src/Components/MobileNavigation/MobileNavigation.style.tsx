import styled from "styled-components";

const MobileNavigationContainer = styled.div`
  width: 100vw;
  height: 10vh;
  padding: ${({ theme }) => theme.padding.small};
`;
const Header = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const ToggleMenuButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;
const MenuText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-family: ${({ theme }) => theme.fontType.primary};
  color: ${({ theme }) => theme.colors.secondary};
`;
const ToogleMenuIcon = styled.span`
  width: 0.5rem;
  height: 0.5rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  display: block;
  border-radius: 50%;
`;
export { MobileNavigationContainer, Header, Title, ToggleMenuButton, MenuText, ToogleMenuIcon };
