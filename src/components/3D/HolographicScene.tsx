import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const FloatingText = () => {
  const textRef = useRef<THREE.Mesh>();
  
  useFrame(({ clock }) => {
    if (textRef.current) {
      textRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2;
    }
  });

  return (
    <Center>
      <Text3D
        ref={textRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.2}
        curveSegments={12}
      >
        AI SHIELD
        <meshStandardMaterial 
          color={[0, 2, 2]}
          emissive={[0, 0.5, 0.5]}
          roughness={0.3}
          metalness={0.7}
        />
      </Text3D>
    </Center>
  );
};

const HolographicScene = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingText />
        <OrbitControls enableZoom={false} />
        <EffectComposer>
          <Bloom 
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            intensity={2}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default HolographicScene;