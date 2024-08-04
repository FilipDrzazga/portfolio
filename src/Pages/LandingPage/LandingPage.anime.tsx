const name = ["F", "I", "L", "I", "P", " ", "D", "R", "Z", "A", "Z", "G", "A"];

const textStaggerAnimation = {
  variants: {
    hidden: {
      opacity: 0,
      filter: "blur(40px)",
      transition: {
        duration: 6,
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 3,
        staggerChildren: 0.1,
      },
    },
  },
};

export { textStaggerAnimation, name };
