import styled from "styled-components";
import { motion } from "framer-motion";

const GetInTouchSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: ${({ theme }) => theme.padding.small};
  overflow: hidden;
`;
const GetInTouchHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  width: 90%;
  height: 90%;
`;
const GetInTouchFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 10%;
`;
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

export { GetInTouchSection, GetInTouchHeader, GetInTouchFooter, GooeyCircles, Circle };
