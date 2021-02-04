import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function SmallBonsai(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/small-bonsai/small-bonsai.gltf");
  let grow = props.grow / 100 + 0.5;
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group
          position={[0, 0, 0]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.5, 0.5, grow]}
        >
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, -4.57, 0]} scale={[0.4, 0.4, 0.4]}>
              <mesh
                material={materials["Material.002"]}
                geometry={nodes.mesh_0.geometry}
              />
              <mesh
                material={materials["Material.007"]}
                geometry={nodes.mesh_1.geometry}
              />
            </group>
            <group position={[0, -3.44, 0]} scale={[0.14, 0.78, 0.14]}>
              <mesh
                material={materials["Material.008"]}
                geometry={nodes.mesh_2.geometry}
              />
            </group>
            <group
              position={[0.82, -3.17, -0.36]}
              rotation={[-1.4, 0.61, -0.1]}
              scale={[0.1, 0.1, 0.09]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_3.geometry}
              />
            </group>
            <group
              position={[0.6, -2.55, -0.05]}
              rotation={[-0.02, 0.02, -0.71]}
              scale={[0.14, 0.13, 0.15]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_4.geometry}
              />
            </group>
            <group
              position={[-0.3, -3.43, 0.3]}
              rotation={[2.74, 1.32, -1.17]}
              scale={[0.14, 0.17, 0.17]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_5.geometry}
              />
            </group>
            <group
              position={[0.51, -3.19, -0.18]}
              rotation={[-2.32, -0.33, -2.35]}
              scale={[0.17, 0.16, 0.16]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_6.geometry}
              />
            </group>
            <group
              position={[0.21, -2.63, -0.01]}
              rotation={[0.18, -0.21, 1.47]}
              scale={[0.2, 0.25, 0.25]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_7.geometry}
              />
            </group>
            <group
              position={[-0.17, -3.52, 0.16]}
              rotation={[-2.04, 0.85, -2.64]}
              scale={[0.09, 0.1, 0.09]}
            >
              <mesh
                material={materials["Material.004"]}
                geometry={nodes.mesh_8.geometry}
              />
            </group>
            <group
              position={[-0.42, -3.52, 0.24]}
              rotation={[-2.95, 1.33, -2.08]}
              scale={[0.09, 0.11, 0.11]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_9.geometry}
              />
            </group>
            <group
              position={[0.43, -2.51, 0.12]}
              rotation={[1.03, -0.47, -0.13]}
              scale={[0.2, 0.2, 0.18]}
            >
              <mesh
                material={materials["Material.004"]}
                geometry={nodes.mesh_10.geometry}
              />
            </group>
            <group
              position={[-0.18, -2.93, -0.02]}
              rotation={[3.01, 1.34, -1.75]}
              scale={[0.09, 0.1, 0.11]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_11.geometry}
              />
            </group>
            <group
              position={[0.69, -3.25, -0.34]}
              rotation={[1.82, 0.35, -0.41]}
              scale={[0.15, 0.15, 0.13]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_12.geometry}
              />
            </group>
            <group
              position={[0.69, -3.13, -0.26]}
              rotation={[-1.36, -0.85, 0.16]}
              scale={[0.11, 0.13, 0.12]}
            >
              <mesh
                material={materials["Material.004"]}
                geometry={nodes.mesh_13.geometry}
              />
            </group>
            <group
              position={[0.45, -2.63, 0.12]}
              rotation={[0.21, -1.08, -1.2]}
              scale={[0.13, 0.16, 0.16]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_14.geometry}
              />
            </group>
            <group
              position={[-0.35, -2.85, -0.02]}
              rotation={[1.84, 0.54, -0.46]}
              scale={[0.17, 0.19, 0.16]}
            >
              <mesh
                material={materials["Material.004"]}
                geometry={nodes.mesh_15.geometry}
              />
            </group>
            <group
              position={[-0.53, -2.83, 0]}
              rotation={[-1.72, 0.54, -0.46]}
              scale={[0.12, 0.12, 0.11]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_16.geometry}
              />
            </group>
            <group
              position={[-0.55, -3.46, 0.24]}
              rotation={[-2.95, 1.33, -2.08]}
              scale={[0.07, 0.09, 0.09]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_17.geometry}
              />
            </group>
            <group
              position={[-0.05, -2.64, -0.01]}
              rotation={[-0.07, -0.27, 0.49]}
              scale={[0.12, 0.1, 0.12]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_18.geometry}
              />
            </group>
            <group
              position={[-0.18, -2.83, -0.01]}
              rotation={[-0.07, -0.27, 0.49]}
              scale={[0.06, 0.05, 0.06]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_19.geometry}
              />
            </group>
            <group
              position={[0.06, -2.73, -0.01]}
              rotation={[-0.28, 0, -0.81]}
              scale={[0.08, 0.08, 0.09]}
            >
              <mesh
                material={materials["Material.003"]}
                geometry={nodes.mesh_20.geometry}
              />
            </group>
            <group
              position={[0.35, -2.57, -0.08]}
              rotation={[1.07, 0.6, 0.8]}
              scale={[0.18, 0.17, 0.14]}
            >
              <mesh
                material={materials["Material.005"]}
                geometry={nodes.mesh_21.geometry}
              />
            </group>
            <group
              position={[0.76, -2.61, -0.02]}
              rotation={[0.83, -0.68, -0.47]}
              scale={[0.12, 0.13, 0.13]}
            >
              <mesh
                material={materials["Material.004"]}
                geometry={nodes.mesh_22.geometry}
              />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/small-bonsai/small-bonsai.gltf");
