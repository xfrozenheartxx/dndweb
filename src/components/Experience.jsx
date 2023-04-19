import * as THREE from 'three';
import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { OrbitControls } from "@react-three/drei";
import { MeshNormalMaterial } from "three"

import Hoodiedown from "./HOODIEDOWN";
import Hoodieup from "./HOODIEUP";
import Letras from "./LETTERS";

const Experience =()=>{
    return(
        <>
        <OrbitControls  minAzimuthAngle={-Math.PI / 0}
        maxAzimuthAngle={Math.PI / 0} 
        minPolarAngle={Math.PI / 9}
        maxPolarAngle={Math.PI - Math.PI / 2}
        maxDistance={Math.PI / 0.5} 
        minDistance={Math.PI / 1}
        dampingFactor={0.1}/>
        {/*<ambientLight intensity={1}/>*/} 
        <spotLight color="white" intensity={1} position={[5, 20, 20]} />
    <spotLight color="white" intensity={1} position={[-5, -20, -20]} />
    <spotLight color="white" intensity={1} position={[5, 20, 20]} />
    <spotLight color="blue" intensity={4} position={[-5, -20, -20]} />
    
        
        
        
        <Letras position={[0.03, -0.6, 0]}  scale={2} />
        <Hoodieup position={[0.7, -2.8, -0.5]}  scale={0.2}/>
        <Hoodieup position={[-5.3, -2.8, -0.5]}  scale={0.2}/>
       

        
        
        
       
      
      
    
      </>
      
        
    );
};

export default Experience;

      