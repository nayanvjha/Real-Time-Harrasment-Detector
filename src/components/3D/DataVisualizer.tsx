import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Trail } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const DataNode = ({ position }: { position: [number, number, number] }) => {
  const nodeRef = useRef<THREE.Mesh>();
  
  useFrame(({ clock }) => {
    if (nodeRef.current) {
      nodeRef.current.position.y += Math.sin(clock.getElapsedTime() + position[0]) * 0.01;
    }
  });

  return (
    <Sphere ref={nodeRef} position={position} args={[0.1, 16, 16]}>
      <meshStandardMaterial
        color={new THREE.Color(0, 1, 1)}
        emissive={new THREE.Color(0, 0.5, 0.5)}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
};

const DataFlow = () => {
  const nodes = Array.from({ length: 20 }, (_, i) => {
    const angle = (i / 20) * Math.PI * 2;
    const radius = 2;
    return [
      Math.cos(angle) * radius,
      Math.sin(i / 3),
      Math.sin(angle) * radius,
    ] as [number, number, number];
  });

  return (
    <>
      {nodes.map((position, i) => (
        <DataNode key={i} position={position} />
      ))}
    </>
  );
};

const DataVisualizer = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 2, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <DataFlow />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.5}
            luminanceSmoothing={0.9}
            intensity={1.5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default DataVisualizer;