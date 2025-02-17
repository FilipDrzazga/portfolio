import styled from "styled-components";
import { motion } from "framer-motion";
import { device } from "../../style/BreakPoints";

const IconPicker = styled(motion.div)`
  position: absolute;
  bottom: -0.3rem;
  left: 3.5rem;
  rotate: 315deg;
  &[data-arrow="linkedin"] {
    left: 3.4rem;
  }
  &[data-arrow="github"] {
    left: 2.8rem;
  }
  @media ${device["360x740"]} {
    &[data-arrow="linkedin"] {
      bottom: -0.2rem;
    }
  }
  @media ${device[375]} {
    &[data-arrow="linkedin"] {
      bottom: -0.3rem;
    }
    &[data-arrow="github"] {
      bottom: -0.22rem;
    }
  }
  @media ${device["390x844"]} {
    &[data-arrow="linkedin"] {
      bottom: -0.3rem;
    }
    &[data-arrow="github"] {
      bottom: -0.3rem;
    }
  }
  @media ${device[393]} {
    &[data-arrow="linkedin"] {
      bottom: -0.3rem;
    }
    &[data-arrow="github"] {
      bottom: -0.3rem;
    }
  }
  @media ${device[412]} {
    &[data-arrow="linkedin"] {
      left: 3.5rem;
      bottom: -0.22rem;
    }
    &[data-arrow="github"] {
      bottom: -0.24rem;
    }
  }
  @media ${device["430x932"]} {
    &[data-arrow="linkedin"] {
      left: 3.5rem;
      bottom: -0.22rem;
    }
    &[data-arrow="github"] {
      bottom: -0.25rem;
    }
  }
`;

export { IconPicker };
