import { useTexture } from '@react-three/drei'

function Sphere3D({ position, texture }) {
  const sphereTexture = useTexture(texture);

  return (
    <mesh position={position}>
      <sphereGeometry attach="geometry" />
      <meshStandardMaterial map={sphereTexture} />
    </mesh>
  );
}

export default Sphere3D;
