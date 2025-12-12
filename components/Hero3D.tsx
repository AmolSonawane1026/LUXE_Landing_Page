import React, { useRef } from 'react';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber';
import { Float, ContactShadows, Environment, MeshDistortMaterial, Sphere, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AbstractShape = (props: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
        meshRef.current.rotation.x = t * 0.1;
        meshRef.current.rotation.y = t * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={meshRef} {...props}>
            <icosahedronGeometry args={[1, 0]} />
            <MeshDistortMaterial
                color="#e0e7ff"
                envMapIntensity={1}
                clearcoat={1}
                clearcoatRoughness={0.1}
                metalness={0.9}
                roughness={0.1}
                distort={0.3}
                speed={1.5}
            />
        </mesh>
    </Float>
  );
};

const FloatingRing = (props: any) => {
    const ref = useRef<THREE.Mesh>(null);
    useFrame((state) => {
        if(ref.current) {
            ref.current.rotation.x += 0.005;
            ref.current.rotation.y += 0.005;
        }
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Torus ref={ref} args={[1.8, 0.1, 16, 100]} {...props}>
                <meshPhysicalMaterial 
                    color="#4f46e5" 
                    roughness={0.2} 
                    metalness={0.8}
                    transmission={0.2}
                    thickness={1}
                />
            </Torus>
        </Float>
    )
}

const FloatingSphere = (props: any) => {
    return (
        <Float speed={3} rotationIntensity={0.5} floatIntensity={0.8}>
            <Sphere args={[0.3, 32, 32]} {...props}>
                <meshStandardMaterial color="#818cf8" roughness={0.1} metalness={0.6} />
            </Sphere>
        </Float>
    )
}

const Hero3D: React.FC = () => {
  return (
    <div className="w-full h-[600px] md:h-[750px] bg-gray-50 relative overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-gray-50 z-0" />
        
        <Canvas className="z-10" camera={{ position: [0, 0, 8], fov: 40 }}>
          <ambientLight intensity={0.7} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={1} color="indigo" />
          <Environment preset="studio" />
          
          <group position={[2, 0, 0]}>
            <AbstractShape position={[0, 0, 0]} scale={1.8} />
            <FloatingRing position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]} />
            <FloatingSphere position={[-2, 2, 1]} />
            <FloatingSphere position={[1.5, -2, -1]} scale={1.5} />
            <FloatingSphere position={[-1, -1.5, 2]} scale={0.5} color="#4338ca" />
          </group>
          
          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.4} 
            scale={30} 
            blur={2.5} 
            far={4.5} 
          />
        </Canvas>

        {/* Text Content */}
        <div className="absolute inset-0 flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-none z-20">
            <div className="max-w-xl text-left pointer-events-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold tracking-wider mb-6 animate-fade-in-up">
                    NEW COLLECTION 2025
                </span>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6 leading-[1.1] animate-fade-in-up animation-delay-100">
                    Elevate Your <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Everyday Reality</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed animate-fade-in-up animation-delay-200">
                    Discover a curated selection of premium essentials. 
                    Where timeless aesthetics meet modern functionality.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
                    <a href="#trending" className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 hover:scale-105 transition-all shadow-xl text-center">
                        Shop Trending
                    </a>
                    <a href="/products" className="bg-white text-zinc-900 border border-gray-200 px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-gray-400 transition-all text-center">
                        View All Categories
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero3D;