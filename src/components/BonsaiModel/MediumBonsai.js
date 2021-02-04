import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

// BONSAI MODEL
export default function MediumBonsai(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/medium-bonsai/medium-bonsai.gltf");
  let grow = props.grow / 100 + 1;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, -2, 0]} scale={[1, grow, 1]}>
            <mesh
              material={materials.lambert7}
              geometry={nodes.pPlatonic5_lambert7_0.geometry}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
useGLTF.preload("/medium-bonsai/medium-bonsai.gltf");
