import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "react-three-fiber";
import SmallBonsai from "./SmallBonsai";
import BigBonsai from "./BigBonsai";
import MediumBonsai from "./MediumBonsai";

export default function BonsaiModel({ grow }) {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight intensity={1.5} position={[5, 20, 20]} />
      <Suspense fallback={null}>
        {grow < 10 ? (
          <SmallBonsai grow={grow} />
        ) : grow < 30 ? (
          <MediumBonsai grow={grow} />
        ) : (
          <BigBonsai />
        )}
      </Suspense>
      <OrbitControls autoRotate={true} enableZoom={false} />
    </Canvas>
  );
}
