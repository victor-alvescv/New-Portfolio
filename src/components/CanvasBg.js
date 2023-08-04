import { OrbitControls, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

function CanvasBg({ rotateSpeed }) {
  return (
    <div className="canvasbg">
      <Canvas>
        <Stars />
        <OrbitControls panSpeed={0.5} autoRotate autoRotateSpeed={rotateSpeed ? rotateSpeed : 0.5} enableZoom={false} />
        <ambientLight intensity={1} />
      </Canvas>
    </div>
  );
}

export default CanvasBg;
