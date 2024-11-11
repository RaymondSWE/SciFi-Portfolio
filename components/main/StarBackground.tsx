'use client';

import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { TextureLoader } from 'three';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const getRandomPosition = (radius: number) => {
  return [
    (Math.random() - 0.5) * radius,
    (Math.random() - 0.5) * radius,
    (Math.random() - 0.5) * radius,
  ];
};

const generateRandomPositions = (
  count: number,
  radius: number,
  center: [number, number, number] = [0, 0, 0],
) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const [x, y, z] = random.inSphere(new Float32Array(3), { radius });
    positions[i * 3] = x + center[0];
    positions[i * 3 + 1] = y + center[1];
    positions[i * 3 + 2] = z + center[2];
  }
  return positions;
};

const StarBackground = (props: any) => {
  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();

  const [cluster1] = useState(() => generateRandomPositions(500, 1));
  const [cluster2] = useState(() =>
    generateRandomPositions(250, 1.5, [2, 2, 0]),
  );

  console.log(cluster1.length, cluster2.length);

  useFrame((state, delta) => {
    ref1.current.rotation.x -= delta / 10;
    ref1.current.rotation.y -= delta / 15;
    ref2.current.rotation.x -= delta / 12;
    ref2.current.rotation.y -= delta / 18;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref1}
        positions={cluster1}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points
        ref={ref2}
        positions={cluster2}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const NebulaBackground = () => {
  const texture = useLoader(TextureLoader, '/nebula.png');

  const nebulaInstances = useRef(
    new Array(5).fill(null).map(() => ({
      position: getRandomPosition(5),
      scale: Math.random() * 0.3 + 0.1,
      speedX: (Math.random() - 0.5) * 0.002,
      speedY: (Math.random() - 0.5) * 0.002,
    })),
  );

  const meshRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame(() => {
    nebulaInstances.current.forEach((nebula, i) => {
      nebula.position[0] += nebula.speedX;
      nebula.position[1] += nebula.speedY;

      const mesh = meshRefs.current[i];
      if (mesh) {
        mesh.position.set(
          nebula.position[0],
          nebula.position[1],
          nebula.position[2],
        );
      }

      if (nebula.position[0] > 5 || nebula.position[0] < -5)
        nebula.speedX *= -1;
      if (nebula.position[1] > 5 || nebula.position[1] < -5)
        nebula.speedY *= -1;
    });
  });

  return (
    <>
      {nebulaInstances.current.map((nebula, index) => (
        <mesh
          key={index}
          ref={(el) => (meshRefs.current[index] = el)}
          position={[
            nebula.position[0],
            nebula.position[1],
            nebula.position[2],
          ]}
          scale={[nebula.scale, nebula.scale, 1]}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial map={texture} transparent opacity={0.2} />
        </mesh>
      ))}
    </>
  );
};

const StarsCanvas = ({ show }: { show?: boolean }) => {
  if (!show) return null;

  return (
    <div className="w-full h-auto fixed inset-0 pointer-events-none -z-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <NebulaBackground />
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
