import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";


function Escenario() {
  const { scene } = useGLTF("/models/ejercicio.glb");
  const texture = useTexture("textures/baked.jpg");
texture.flipY = false

  scene.traverse((child) => {

    if (child.isMesh) {
    child.material.map = texture;

  }
  });

  scene.position.set(-2, -3, -1);
  scene.scale.set(2, 2, 2);

  return <primitive object={scene} scale={2.0} />;

}



export default function App() {
  return (
     <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
    <Canvas camera={{ position: [4, 2, 3], fov: 75 }}>
      <ambientLight intensity={7.0} />
      <directionalLight position={[5, 5, 5]} intensity={4} />
      <Escenario />
      <OrbitControls />
    </Canvas>
    </div>
  );
}
