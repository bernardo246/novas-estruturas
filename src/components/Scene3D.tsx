'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import type { Group } from 'three'

function RotatingStructure(){
  const ref = useRef<Group | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const max = doc.scrollHeight - doc.clientHeight
      const ratio = max > 0 ? window.scrollY / max : 0
      setScrollProgress(ratio)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useFrame((state, delta) => {
    if(ref.current){
      const targetY = state.pointer.x * 0.3
      const targetX = -state.pointer.y * 0.15 + scrollProgress * 0.25
      // very gentle autonomous rotation
      ref.current.rotation.y += delta * 0.08
      ref.current.rotation.x += delta * 0.015
      // subtle interaction smoothing
      ref.current.rotation.y += (targetY - ref.current.rotation.y) * 0.02
      ref.current.rotation.x += (targetX - ref.current.rotation.x) * 0.02
      ref.current.position.y = scrollProgress * 0.18
    }
  })

  return (
    <Float speed={0.6} rotationIntensity={0.12} floatIntensity={0.08}>
      <group ref={ref} rotation={[0.15, 0, 0]}>
        {/* primary structural ring (navy) */}
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[0.9, 0.06, 24, 120]} />
          <meshStandardMaterial color="#14213D" metalness={0.7} roughness={0.35} />
        </mesh>

        {/* accent beam (yellow) */}
        <mesh position={[0, 0.5, 0]} rotation={[0.15, 0.2, 0]}> 
          <boxGeometry args={[0.7, 0.16, 0.16]} />
          <meshStandardMaterial color="#F5B700" emissive={'#F5B700'} emissiveIntensity={0.18} metalness={0.3} roughness={0.25} />
        </mesh>

        {/* small connector pieces */}
        <mesh position={[0.45, -0.25, 0.1]}>
          <cylinderGeometry args={[0.03, 0.03, 0.9, 12]} />
          <meshStandardMaterial color="#10141F" metalness={0.6} roughness={0.4} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Scene3D(){
  return (
    <Canvas camera={{ position: [0,0,4], fov: 50 }} style={{ width: '100%', height: '100%' }}>
      {/* ambient with slight blue depth */}
      <ambientLight intensity={0.35} color={'#14213D'} />
      {/* warm primary key light in yellow */}
      <directionalLight position={[3,3,2]} intensity={1.0} color={'#F5B700'} />
      {/* subtle cool fill */}
      <directionalLight position={[-3, -2, -2]} intensity={0.35} color={'#0A2340'} />
      <RotatingStructure />
    </Canvas>
  )
}
