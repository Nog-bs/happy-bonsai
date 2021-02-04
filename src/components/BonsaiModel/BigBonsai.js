import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function BigBonsai(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/big-bonsai/big-bonsai.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0.03, 0, -2]}
          rotation={[0, -0.01, 0]}
          scale={[0.65, 0.65, 0.65]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              material={materials.brush_MatteHull}
              geometry={nodes.mesh_0.geometry}
            />
            <mesh
              material={materials.brush_Spikes}
              geometry={nodes.mesh_1.geometry}
            />
            <mesh
              material={materials.brush_Spikes}
              geometry={nodes.mesh_2.geometry}
            />
            <mesh
              material={materials.brush_MatteHull}
              geometry={nodes.mesh_3.geometry}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/big-bonsai/big-bonsai.gltf");
