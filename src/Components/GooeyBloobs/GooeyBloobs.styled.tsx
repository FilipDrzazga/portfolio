import styled from "styled-components";
import { motion } from "motion/react";

const BloobsContainer = styled(motion.div)`
  width: 100%;
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: url("#goo");
  overflow: hidden;
`;
const bloob = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.secondary};
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  line-height: 100px;
  text-align: center;
  color: white;
  font-size: 40px;
  border-radius: 100%;
  margin-top: -150px;
  margin-left: -100px;
`;

export { BloobsContainer, bloob };
