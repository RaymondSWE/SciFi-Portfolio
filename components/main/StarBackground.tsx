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

const StarBackground = (props: any) => {
  const ref1: any = useRef();
  const ref2: any = useRef();
  const ref3: any = useRef();

  const [cluster1] = useState(() =>
    random.inSphere(new Float32Array(2500), { radius: 1 }),
  );
  const [cluster2] = useState(() =>
    random.inSphere(new Float32Array(1000), { radius: 1.5, center: [2, 2, 0] }),
  );
  const [cluster3] = useState(() =>
    random.inSphere(new Float32Array(500), {
      radius: 1.8,
      center: [-2, -1, 1],
    }),
  );

  useFrame((state, delta) => {
    ref1.current.rotation.x -= delta / 10;
    ref1.current.rotation.y -= delta / 15;
    ref2.current.rotation.x -= delta / 12;
    ref2.current.rotation.y -= delta / 18;
    ref3.current.rotation.x -= delta / 14;
    ref3.current.rotation.y -= delta / 20;
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
          color="$fff"
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
          color="$fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points
        ref={ref3}
        positions={cluster3}
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="$fff"
          size={0.001}
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
    new Array(10).fill(null).map(() => ({
      position: getRandomPosition(5),
      scale: Math.random() * 0.4 + 0.2,
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
    <div className="w-full h-auto fixed inset-0 pointer-events-none -z-10">
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
