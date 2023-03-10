import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Ground from "./components/Ground";
import FirstPointOfView from "./components/FirstPointOfView";

function App() {
  return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]} />
      <ambientLight intensity={0.5} />
      <FirstPointOfView />
      <Physics>
        <Ground />
      </Physics>
    </Canvas>
  );
}

export default App;
