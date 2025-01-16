import styled from 'styled-components';
import { motion } from "motion/react";

const BloobsContainer = styled(motion.div)`
  width:100%;
  height:85%;
  filter:url('#goo');
  overflow:hidden;
`
const bloob = styled(motion.div)`
  position:absolute;
  background:#e97b7a;
  left:50%;
  top:50%;
  width:100px;
  height:100px;
  line-height:100px;
  text-align:center;
  color:white;
  font-size:40px;
  border-radius:100%;
  margin-top:-50px;
  margin-left:-50px;
`

export {BloobsContainer, bloob};