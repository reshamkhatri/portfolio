import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei'

function AnimatedSphere() {
    const meshRef = useRef<any>(null)

    useFrame((state) => {
        if (meshRef.current) {
            const t = state.clock.getElapsedTime()
            meshRef.current.rotation.x = t * 0.2
            meshRef.current.rotation.y = t * 0.3
        }
    })

    return (
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
            <Sphere args={[1, 100, 100]} scale={2.5}>
                <MeshDistortMaterial
                    color="#f97316"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.8}
                />
            </Sphere>
        </Float>
    )
}

function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 bg-[#050505]">
            <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={1} color="#ef4444" />
                <AnimatedSphere />
            </Canvas>
            {/* Overlay gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 pointer-events-none" />
        </div>
    )
}

export default Background3D
