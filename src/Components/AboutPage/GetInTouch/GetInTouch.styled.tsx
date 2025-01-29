import styled from "styled-components";
import { motion } from "framer-motion";

const GetInTouchSection = styled.section`
position: relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
`;
const GetInTouchHeader = styled.header`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width:90%;
  height:90%;
`
const GetInTouchTitle = styled.h2`
  width:100%;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: 300;
  letter-spacing: -0.10rem;
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 2rem;
  span{
    font-size: ${({ theme }) => theme.fontSize.large};
    font-family: ${({ theme }) => theme.fontFamily.playfairMedium};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.colors.secondary};
    letter-spacing: -0.10rem;
  }
`;
const GetInTouchButtonContainer = styled.div`
width:100%;

`;
const GetInTouchButton = styled.button`
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 1.5rem;
  border: 1px solid black;
  border-radius: 50px;
  cursor: pointer;
  `;
const GetInTouchFooter = styled.footer`
  display:flex;
  justify-content: center;
  align-items: center;
  width:90%;
  height:10%;
`;
const GetInTouchFooterText = styled.span`
  font-size: 0.8rem;
  font-family: ${({ theme }) => theme.fontFamily.latoLight};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.secondary};
`
const GooeyCircles = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  filter: url(#gooey);
  z-index: -1;  
`;

const Circle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  filter: blur(40px);
`;

export { GetInTouchSection, GetInTouchHeader, GetInTouchTitle,GetInTouchButtonContainer,GetInTouchButton, GetInTouchFooter, GetInTouchFooterText,GooeyCircles, Circle };
