import * as S from "./GooeyBloobs.styled";

const bloobsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const GooeyBloobs = () => {
  return (
    <S.BloobsContainer>
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {bloobsArr.map((bloob, id) => {
        const xPos = Math.random() * 80 - 40;
        const yPos = Math.random() * 80 - 40;
        return (
          <S.bloob
            key={id}
            animate={{ x: xPos, y: yPos }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: id * 0.1,
              type: "spring",
              stiffness: 10,
              damping: 10,
            }}
          ></S.bloob>
        );
      })}
    </S.BloobsContainer>
  );
};

export default GooeyBloobs;
