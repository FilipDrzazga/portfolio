import { useState, useEffect, useRef } from "react";
import * as S from "./GooeyBloobs.styled";

// Define an interface for each blob’s custom data.
interface BlobData {
  x: number;
  y: number;
  content: string;
}

// Instead of a separate array of numbers, we now define an array of BlobData
// for the other blobs.
const initialCustomBlobs: BlobData[] = [
  { x: -100, y: -50, content: "Blob 1" },
  { x: 100, y: -50, content: "Blob 2" },
  { x: -60, y: 50, content: "Blob 3" },
  { x: 60, y: 50, content: "Blob 4" },
  { x: 0, y: -75, content: "Blob 5" },
  { x: 100, y: -160, content: "Blob 6" },
  { x: 0, y: -170, content: "Blob 7" },
  { x: 0, y: 140, content: "Blob 8" },
  { x: -100, y: -160, content: "Blob 9" },
  { x: 100, y: 170, content: "Blob 10" },
  { x: -100, y: 170, content: "Blob 11" },
];

const bloobVariants = {
  initial:(i)=>({
    
  }),
  animate:(i)=>({

  }),
}

// A separate component for the special (toggle) blob.
const SpecialBlob = ({ isBloobSpreaded, onClick }: { isBloobSpreaded: boolean; onClick: () => void }) => {
  // When not isBloobSpreaded, size is 75. When isBloobSpreaded, size is 37.5.
  const [specialSize, setSpecialSize] = useState(isBloobSpreaded ? 37.5 : 75);

  // Update local state when the isBloobSpreaded prop changes.
  useEffect(() => {
    setSpecialSize(isBloobSpreaded ? 37.5 : 75);
  }, [isBloobSpreaded]);

  const target = { x: 0, y: 0, width: specialSize, height: specialSize };

  return (
    <S.Bloob onClick={onClick} animate={target} transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}>
      <S.BloobText>☰</S.BloobText>
    </S.Bloob>
  );
};

const GooeyBloobs = () => {
  // When isBloobSpreaded is false, all other blobs remain centered (with larger size).
  // When isBloobSpreaded is true, they move to the positions defined in customBlobs.
  const [isBloobSpreaded, setIsBloobSpreaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  // Instead of random positions, we now use our custom blob data.
  const [customBlobs, setCustomBlobs] = useState<BlobData[]>(initialCustomBlobs);

  // Update container size on mount/resize.
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerSize({ width, height });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Toggle isBloobSpreaded state when the special blob is clicked.
  const handleBloobSpread = () => {
    setIsBloobSpreaded((prev) => !prev);
  };

  // For other blobs:
  // - When not isBloobSpreaded: they are centered (x: 0, y: 0) with larger size.
  // - When isBloobSpreaded: they use the positions defined in customBlobs and size 75.
  const getOtherBlobTarget = (blob: BlobData) => {
    return isBloobSpreaded
      ? {
          x: blob.x,
          y: blob.y,
          width: 75,
          height: 75,
        }
      : {
          x: 0,
          y: 0,
          width: 150,
          height: 150,
        };
  };

  return (
    <>
      <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0   0 1 0 0 0   0 0 1 0 0   0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <S.BloobsContainer ref={containerRef}>
        {/* Render Other Blobs */}
        {customBlobs.map((blob, index) => {
          const target = getOtherBlobTarget(blob);
          return (
            <S.Bloob key={index} animate={target} transition={{ duration: 1.5, ease: "easeInOut", type: "spring" }}>
              {isBloobSpreaded && <S.BloobText></S.BloobText>}
            </S.Bloob>
          );
        })}
        {/* Render Special Toggle Blob */}
        <SpecialBlob isBloobSpreaded={isBloobSpreaded} onClick={handleBloobSpread} />
      </S.BloobsContainer>
    </>
  );
};

export default GooeyBloobs;
