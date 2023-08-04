import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function Sphere() {
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

function ThreeJSbg() {
  return (
    <Canvas style={{ height: "100vh" }}>
      <Stars />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Sphere />
    </Canvas>
  );
}

export default ThreeJSbg;
