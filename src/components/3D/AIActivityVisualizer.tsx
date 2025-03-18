import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Line, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const AINode = ({ position, connections }: { position: THREE.Vector3; connections: THREE.Vector3[] }) => {
  const sphereRef = useRef<THREE.Mesh>();
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.scale.setScalar(
        1 + Math.sin(clock.getElapsedTime() * 2 + position.x) * 0.1
      );
    }
  });

  return (
    <>
      <Sphere ref={sphereRef} position={position} args={[0.1, 16, 16]}>
        <meshStandardMaterial
          color={new THREE.Color(1, 0, 0.5)}
          emissive={new THREE.Color(0.5, 0, 0.25)}
          roughness={0.3}
          metalness={0.7}
        />
      </Sphere>
      {connections.map((target, i) => (
        <Line
          key={i}
          points={[position, target]}
          color={new THREE.Color(0, 1, 1)}
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
    </>
  );
};

const AINetwork = () => {
  const nodes = useMemo(() => {
    const nodeCount = 15;
    return Array.from({ length: nodeCount }, () => {
      return new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4
      );
    });
  }, []);

  const connections = useMemo(() => {
    return nodes.map(node => {
      return nodes
        .filter(() => Math.random() > 0.7)
        .map(target => target);
    });
  }, [nodes]);

  return (
    <>
      {nodes.map((position, i) => (
        <AINode key={i} position={position} connections={connections[i]} />
      ))}
    </>
  );
};

const AIActivityVisualizer = () => {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AINetwork />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
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

export default AIActivityVisualizer;