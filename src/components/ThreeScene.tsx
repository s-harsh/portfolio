"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Torus, Icosahedron, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const icoRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = t * 0.15;
      torusRef.current.rotation.y = t * 0.2;
      torusRef.current.rotation.z = t * 0.1;
    }
    if (icoRef.current) {
      icoRef.current.rotation.x = -t * 0.1;
      icoRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <>
      {/* Main torus knot */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh ref={torusRef} position={[2.5, 0, -1]}>
          <torusKnotGeometry args={[1.2, 0.35, 180, 16, 2, 3]} />
          <meshStandardMaterial
            color="#4f8eff"
            roughness={0.1}
            metalness={0.9}
            wireframe={false}
            emissive="#1a3a8f"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>

      {/* Wireframe icosahedron */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={icoRef} position={[-2.8, 1, -2]}>
          <icosahedronGeometry args={[0.8, 1]} />
          <meshStandardMaterial
            color="#b490ff"
            roughness={0.05}
            metalness={0.95}
            wireframe
          />
        </mesh>
      </Float>

      {/* Small accent torus */}
      <Float speed={3} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[-1.5, -2, -1]}>
          <torusGeometry args={[0.4, 0.12, 12, 40]} />
          <meshStandardMaterial color="#ffd166" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
    </>
  );
}

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const count = 800;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.02) * 0.1;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4f8eff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function MouseParallax() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (-mouse.current.y * 0.3 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  if (typeof window !== "undefined") {
    window.onmousemove = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
  }

  return null;
}

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={1.5} color="#4f8eff" />
        <pointLight position={[-5, -3, 2]} intensity={0.8} color="#b490ff" />
        <pointLight position={[0, -5, 3]} intensity={0.5} color="#ffd166" />
        <MouseParallax />
        <FloatingGeometry />
        <ParticleField />
      </Canvas>
    </div>
  );
}
