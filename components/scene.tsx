"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Group, Mesh } from "three";

function Crystal() {
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = clock.elapsedTime * 0.22 + pointer.y * 0.18;
    mesh.current.rotation.y = clock.elapsedTime * 0.32 + pointer.x * 0.24;
    mesh.current.position.y = Math.sin(clock.elapsedTime * 1.1) * 0.12;
  });

  return (
    <mesh ref={mesh} position={[0, 0.1, 0]}>
      <icosahedronGeometry args={[1.45, 1]} />
      <meshStandardMaterial color="#7dd3fc" roughness={0.18} metalness={0.72} emissive="#312e81" emissiveIntensity={0.35} wireframe />
    </mesh>
  );
}

function OrbitingRunes() {
  const group = useRef<Group>(null);
  const points = useMemo(
    () =>
      Array.from({ length: 18 }, (_, index) => {
        const angle = (index / 18) * Math.PI * 2;
        return [Math.cos(angle) * 2.45, Math.sin(angle) * 0.38, Math.sin(angle) * 2.45] as const;
      }),
    []
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = clock.elapsedTime * 0.18;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.4) * 0.08;
  });

  return (
    <group ref={group}>
      {points.map((point, index) => (
        <mesh key={index} position={point}>
          <boxGeometry args={[0.04, 0.04, 0.42]} />
          <meshStandardMaterial color={index % 3 === 0 ? "#fbbf24" : index % 2 === 0 ? "#22d3ee" : "#8b5cf6"} emissive="#111827" />
        </mesh>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-80">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
        <ambientLight intensity={0.55} />
        <pointLight position={[4, 3, 5]} intensity={2.2} color="#22d3ee" />
        <pointLight position={[-4, -2, 4]} intensity={1.4} color="#8b5cf6" />
        <Crystal />
        <OrbitingRunes />
      </Canvas>
    </div>
  );
}
