import React from 'react';
import { WebGLRenderer } from "three";
import { Fog } from 'three';
import { Canvas, useFrame } from "@react-three/fiber"
import Experience from "./components/Experience"
import { ContactShadows, Environment } from "@react-three/drei"


function App() {

  

  return (
    

    
   <Canvas camera={{fov: 20, position: [0, 0, 90]}} onMouseMove={(e) => e.preventDefault()} >
    {/*<Environment 
    files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr"
    background
    blur={0.9}
    />*/}
    <Environment preset="warehouse"  background blur={9}  />
    {/*<ContactShadows position={[0, -3.05, 0]} transparent opacity={0.4} />*/}
    <fog attach="fog" args={['#000000', 1, 100]} />
    <axesHelper position={[0, 0, -0.37]} />
    <Experience />
   </Canvas>
   
  )
}

export default App
