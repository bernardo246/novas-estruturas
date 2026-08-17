"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Torus, TorusKnot } from "@react-three/drei";
import * as THREE from "three";

function StructureRig({ scrollProgress }: { scrollProgress: number }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!group.current) return;

    // rotação suave contínua
    group.current.rotation.y += delta * 0.18;

    // resposta suave ao mouse (interpolada, sem movimento brusco)
    const targetX = state.pointer.y * 0.25;
    const targetZ = -state.pointer.x * 0.25;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.04
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      targetZ,
      0.04
    );

    // leve deslocamento vertical com o scroll
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      -scrollProgress * 1.4,
      0.08
    );

    if (ring.current) {
      ring.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.6}>
        <Torus ref={ring} args={[1.6, 0.11, 32, 96]} rotation={[0.3, 0, 0]}>
          <meshStandardMaterial
            color="#1b3358"
            metalness={0.9}
            roughness={0.18}
            emissive="#12203a"
            emissiveIntensity={0.4}
          />
        </Torus>

        <TorusKnot
          args={[0.62, 0.07, 128, 16, 2, 3]}
          position={[0, -0.05, 0]}
        >
          <meshStandardMaterial
            color="#3d6bb0"
            metalness={0.85}
            roughness={0.25}
            emissive="#1b3358"
            emissiveIntensity={0.35}
          />
        </TorusKnot>
      </Float>
    </group>
  );
}

export default function Scene3D({ scrollProgress = 0 }: { scrollProgress?: number }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.6], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 4]} intensity={40} color="#4c7fc4" />
      <pointLight position={[-3, -2, -3]} intensity={18} color="#3d6bb0" />
      <directionalLight position={[0, 4, 5]} intensity={0.6} color="#ffffff" />

      <Suspense fallback={null}>
        <StructureRig scrollProgress={scrollProgress} />
        <Environment preset="city" environmentIntensity={0.25} />
      </Suspense>
    </Canvas>
  );
}
