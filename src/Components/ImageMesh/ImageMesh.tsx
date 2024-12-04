const ImageMesh = () => {
  return (
    <mesh position={[0.55, 1.3, 0]}>
      <planeGeometry args={[3, 4, 32, 32]} />
      <meshStandardMaterial color="hotpink" wireframe />
    </mesh>
  );
};

export default ImageMesh;
