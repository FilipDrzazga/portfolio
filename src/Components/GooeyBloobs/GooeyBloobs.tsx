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
    // Update container size
    const updateContainerSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };

    updateContainerSize();
    window.addEventListener("resize", updateContainerSize);
    return () => window.removeEventListener("resize", updateContainerSize);
  }, []);

  useEffect(() => {
    if (containerSize.width > 0 && containerSize.height > 0) {
      generateUniqueRandomPositions();
    }
  }, [containerSize]);

  const generateUniqueRandomPositions = () => {
    const positions: Position[] = [];
    const bloobSize = 100;
    const padding = 50;

    for (let i = 0; i < bloobsArr.length; i++) {
      let validPosition = false;
      let x = 0,
        y = 0;

      while (!validPosition) {
        x = Math.random() * (containerSize.width - bloobSize - padding * 2) - (containerSize.width / 2 - padding);
        y = Math.random() * (containerSize.height - bloobSize - padding * 2) - (containerSize.height / 2 - padding);

        // Ensure no overlap with previous positions
        validPosition = positions.every(
          (pos) => Math.sqrt((pos.x - x) ** 2 + (pos.y - y) ** 2) > bloobSize + padding
        );
      }

      positions.push({ x, y });
    }

    setSpreadPositions(positions);
  };

  const handleBloobClick = (id: number) => {
    if (isSpread && id === centerBloob) {
      setCenterBloob(null); // Reset to center position
    } else {
      setCenterBloob(id); // Set clicked bloob as new center
    }
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
        const xPos = isSpread && !isCenter ? spreadPositions[index]?.x || 0 : 0;
        const yPos = isSpread && !isCenter ? spreadPositions[index]?.y || 0 : 0;
        const size = isCenter ? 30 : isSpread ? 100 : 200; // Increased spread size

        return (
          <S.Bloob
            key={index}
            onClick={() => handleBloobClick(index)}
            initial={{ x: 0, y: 0, width: 200, height: 200 }}
            animate={{
              x: xPos,
              y: yPos,
              width: size,
              height: size,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
              type: "spring",
              delay: index * 0.1, // Stagger movement
            }}
          >
            {isSpread && <S.BloobText>{bloob}</S.BloobText>}
          </S.Bloob>
        );
      })}
    </S.BloobsContainer>
  );
};

export default GooeyBloobs;
