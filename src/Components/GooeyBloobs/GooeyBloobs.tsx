import { useState, useEffect, useRef } from "react";
import * as S from "./GooeyBloobs.styled";

interface Position {
  x: number;
  y: number;
}

const bloobsArr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const GooeyBloobs = () => {
  const [centerBloob, setCenterBloob] = useState<number | null>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [spreadPositions, setSpreadPositions] = useState<Position[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isSpread = centerBloob !== null;

  useEffect(() => {
    const updateContainerSizeAndPositions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });

        const bloobSize = 100;
        const padding = 50;
        const positions: Position[] = [];
        const usedPositions = new Set<string>();

        const getRandomPosition = (): Position => {
          const x = Math.random() * (width - bloobSize - padding * 2) - (width / 2 - padding);
          const y = Math.random() * (height - bloobSize - padding * 2) - (height / 2 - padding);
          return { x, y };
        };

        const addUniquePosition = (attempts = 0) => {
          if (attempts > 20) return;
          const position = getRandomPosition();
          const key = `${Math.round(position.x)},${Math.round(position.y)}`;

          if (!usedPositions.has(key)) {
            usedPositions.add(key);
            positions.push(position);
          } else {
            addUniquePosition(attempts + 1);
          }
        };

        for (let i = 0; i < bloobsArr.length; i++) {
          addUniquePosition();
        }

        setSpreadPositions(positions);
      }
    };

    updateContainerSizeAndPositions();
    window.addEventListener("resize", updateContainerSizeAndPositions);
    return () => window.removeEventListener("resize", updateContainerSizeAndPositions);
  }, []);

  const handleBloobClick = (id: number) => {
    setCenterBloob((prev) => (prev === id ? null : id));
  };

  return (
    <S.BloobsContainer ref={containerRef}>
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {bloobsArr.map((bloob, index) => {
        const isCenter = index === centerBloob;
        const finalX = isSpread && !isCenter ? spreadPositions[index]?.x || 0 : 0;
        const finalY = isSpread && !isCenter ? spreadPositions[index]?.y || 0 : 0;
        const size = isCenter ? 30 : isSpread ? 100 : 200;

        // Floating effect AFTER reaching position (random up/down movement)
        const floatRange = 10; // Maximum ±10px movement
        const floatDuration = 2 + Math.random(); // Randomized float duration

        return (
          <S.Bloob
            key={index}
            onClick={() => handleBloobClick(index)}
            initial={{ x: 0, y: 0, width: 200, height: 200 }}
            animate={{
              x: finalX,
              y: finalY,
              width: size,
              height: size,
              transition: { duration: 1.5, ease: "easeInOut", type: "spring" },
            }}
          >
            <S.FloatAnimation
              animate={{
                y: [0, floatRange, -floatRange, 0], // Moves up/down
              }}
              transition={{
                duration: floatDuration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {isSpread && <S.BloobText>{bloob}</S.BloobText>}
            </S.FloatAnimation>
          </S.Bloob>
        );
      })}
    </S.BloobsContainer>
  );
};

export default GooeyBloobs;
