import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";
function Network() {
  const ref = useRef<Group>(null);
  const { positions, edges } = useMemo(() => {
    const points: [number, number, number][] = [];
    for (let i = 0; i < 180; i++) {
      const y = 1 - (i / 179) * 2;
      const r = Math.sqrt(1 - y * y);
      const a = i * 2.399963;
      points.push([Math.cos(a) * r * 2, y * 2, Math.sin(a) * r * 2]);
    }
    const lines: number[] = [];
    points.forEach((p, i) =>
      points.slice(i + 1).forEach((q) => {
        if (Math.hypot(p[0] - q[0], p[1] - q[1], p[2] - q[2]) < 0.57)
          lines.push(...p, ...q);
      }),
    );
    return {
      positions: new Float32Array(points.flat()),
      edges: new Float32Array(lines),
    };
  }, []);
  useFrame(({ pointer, clock }, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.075;
    ref.current.rotation.x +=
      (0.2 + pointer.y * 0.14 - ref.current.rotation.x) * Math.min(dt * 2.4, 1);
    ref.current.rotation.z +=
      (-0.18 - pointer.x * 0.12 - ref.current.rotation.z) *
      Math.min(dt * 2.4, 1);
    const pulse = 1 + Math.sin(clock.elapsedTime * 0.75) * 0.018;
    ref.current.scale.setScalar(pulse);
  });
  return (
    <group ref={ref} rotation={[0.2, 0, -0.18]}>
      <Points positions={positions} stride={3}>
        <PointMaterial
          transparent
          color="#baa2ff"
          size={0.035}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[edges, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#9875dc" transparent opacity={0.24} />
      </lineSegments>
    </group>
  );
}
export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.8], fov: 48 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
    >
      <Stars
        radius={8}
        depth={7}
        count={450}
        factor={1.8}
        saturation={0.15}
        fade
        speed={0.35}
      />
      <Network />
    </Canvas>
  );
}
