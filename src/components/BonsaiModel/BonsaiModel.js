import React, { useRef, Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "react-three-fiber";

// BONSAI MODEL
const Bonsai = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -2, 0]} scale={[1, props.grow, 1]}>
            <mesh
              material={materials.lambert7}
              geometry={nodes.pPlatonic5_lambert7_0.geometry}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

export default function BonsaiModel({ grow }) {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight intensity={0.5} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        <Bonsai grow={grow} />
      </Suspense>
      <OrbitControls autoRotate={true} enableZoom={false} />
    </Canvas>
  );
}

useGLTF.preload("/scene.gltf");
