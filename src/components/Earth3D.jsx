import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';

// ── ASHIMA SIMPLEX NOISE IMPLEMENTATION IN GLSL ──
// High-performance procedural noise compiled on the GPU for infinite resolution and zero asset latency.
const simplexNoiseGLSL = `
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

// ── CUSTOM SHADER MATERIAL FOR DUALITY EARTH ──
const DualityShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uLightDirection: new THREE.Vector3(1, 1, 1).normalize(),
  },
  // Vertex Shader: Dynamic noise displacement on the polluted and healthy continents
  `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vNoise;
    varying float vDuality;
    
    ${simplexNoiseGLSL}

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vPosition = position;

      // Base Simplex noise for landmasses
      float noise = snoise(position * 2.2);
      vNoise = noise;

      // Calculate the duality axis (left polluted, right healthy)
      // We jitter the boundary with noise for an organic, fractured transition line
      float boundaryJitter = snoise(position * 4.0) * 0.12;
      float duality = position.x + boundaryJitter;
      vDuality = duality;

      vec3 displacedPosition = position;

      if (duality < 0.0) {
        // Polluted side: Rugged high-displacement wasteland canyons
        float canyonDisplacement = abs(snoise(position * 5.0)) * 0.08;
        displacedPosition += normal * (-canyonDisplacement + noise * 0.04);
      } else {
        // Healthy side: Mountain ridges only on land areas
        if (noise > 0.05) {
          float mountainDisplacement = (noise - 0.05) * 0.16;
          displacedPosition += normal * mountainDisplacement;
        }
      }

      gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
    }
  `,
  // Fragment Shader: High-fidelity procedural textures, magma veins, and atmospheric rim glow
  `
    varying vec3 vNormal;
    varying vec3 vPosition;
    varying float vNoise;
    varying float vDuality;
    uniform float uTime;
    uniform vec3 uLightDirection;

    ${simplexNoiseGLSL}

    void main() {
      // 3D diffuse directional lighting
      vec3 norm = normalize(vNormal);
      float diffuse = max(dot(norm, uLightDirection), 0.1);

      // Procedural color splatting
      vec3 finalColor = vec3(0.0);

      // Transition width
      float edge = 0.06;
      float blend = smoothstep(-edge, edge, vDuality);

      // ── SIDE A: POLLUTED WASTELAND COLOR SCHEME ──
      // Volcanic dark grey bedrock and glowing red/orange magma cracks
      vec3 rockBase = vec3(0.24, 0.25, 0.25);
      vec3 rockDark = vec3(0.12, 0.13, 0.13);
      float rockNoise = snoise(vPosition * 10.0);
      vec3 pollutedBedrock = mix(rockBase, rockDark, smoothstep(-1.0, 1.0, rockNoise));

      // High-frequency cracked veins
      float crackNoise = 1.0 - abs(snoise(vPosition * 9.0 + vec3(uTime * 0.05)));
      float crackIntensity = smoothstep(0.85, 0.98, crackNoise);
      vec3 magmaColor = mix(vec3(0.9, 0.15, 0.0), vec3(1.0, 0.65, 0.0), sin(uTime + vPosition.y * 5.0) * 0.5 + 0.5);
      vec3 pollutedColor = mix(pollutedBedrock, magmaColor, crackIntensity);

      // ── SIDE B: VIBRANT HEALTHY COLOR SCHEME ──
      // Lush green landmasses and deep blue oceans
      vec3 oceanDeep = vec3(0.06, 0.18, 0.32);
      vec3 oceanShallow = vec3(0.14, 0.44, 0.58);
      vec3 landForest = vec3(0.15, 0.48, 0.28);
      vec3 landGrass = vec3(0.25, 0.65, 0.35);

      vec3 healthyColor;
      if (vNoise > 0.05) {
        // Land
        float landVeg = snoise(vPosition * 8.0);
        healthyColor = mix(landForest, landGrass, smoothstep(-0.5, 0.5, landVeg));
      } else {
        // Ocean (with moving wave glints)
        float waves = sin(vPosition.x * 20.0 + uTime * 1.5) * cos(vPosition.z * 20.0 + uTime * 1.2) * 0.5 + 0.5;
        healthyColor = mix(oceanDeep, oceanShallow, smoothstep(0.0, 1.0, vNoise * 8.0 + waves * 0.08));
      }

      // ── COMPOSITE BLEND ──
      finalColor = mix(pollutedColor, healthyColor, blend);

      // Apply diffuse shadow mapping
      finalColor *= (diffuse * 0.9 + 0.15);

      // ── ATMOSPHERIC RIM GLOW EFFECT ──
      // Ambient atmospheric fresnel halo
      float fresnel = pow(1.0 - max(dot(norm, vec3(0.0, 0.0, 1.0)), 0.0), 3.0);
      vec3 glowColor = mix(vec3(0.9, 0.3, 0.0), vec3(0.4, 0.8, 1.0), blend);
      finalColor += glowColor * fresnel * 0.45;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

extend({ DualityShaderMaterial });

// ── SUB-COMPONENT: PROCEDURAL LOW-POLY TREES ──
// Programmatically scatters trees on the healthy hemisphere, normal-vector aligned outwards.
// Optimized using InstancedMesh for 60 FPS performance (reduces draw calls to 2).
function ScatteredTrees({ count = 32, radius = 2.0 }) {
  const trunkRef = useRef();
  const foliageRef = useRef();

  const trees = useMemo(() => {
    const list = [];
    const seedRandom = (s) => {
      const x = Math.sin(s) * 10000;
      return x - Math.floor(x);
    };

    for (let i = 0; i < count * 2; i++) {
      // Uniform distribution on sphere
      const u = seedRandom(i * 12.3);
      const v = seedRandom(i * 45.6);
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      // Only place trees firmly on the healthy/vibrant side (Side B, x > 0.45)
      if (x > 0.45 && y > -1.2 && y < 1.4) {
        const pos = [x, y, z];
        
        // Calculate orientation to look directly outwards from origin (0,0,0)
        const dir = new THREE.Vector3(x, y, z).normalize();
        const up = new THREE.Vector3(0, 1, 0);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, dir);
        
        list.push({
          pos,
          rot: quaternion,
          scale: 0.12 + seedRandom(i * 7.89) * 0.08,
          trunkHeight: 0.18 + seedRandom(i * 1.23) * 0.1,
        });

        // Break once we have enough valid trees
        if (list.length >= count) break;
      }
    }
    return list;
  }, [count, radius]);

  useEffect(() => {
    if (!trunkRef.current || !foliageRef.current) return;

    const tempObject = new THREE.Object3D();
    trees.forEach((t, i) => {
      // 1. Position and scale the Trunk (scale height based on trunkHeight relative to 0.25)
      tempObject.position.set(t.pos[0], t.pos[1], t.pos[2]);
      tempObject.quaternion.copy(t.rot);
      tempObject.scale.set(t.scale, t.scale * (t.trunkHeight / 0.25), t.scale);
      tempObject.translateY(t.trunkHeight / 2);
      tempObject.updateMatrix();
      trunkRef.current.setMatrixAt(i, tempObject.matrix);

      // 2. Position and scale the Foliage (reset position and offset along local Y axis)
      tempObject.position.set(t.pos[0], t.pos[1], t.pos[2]);
      tempObject.quaternion.copy(t.rot);
      tempObject.scale.set(t.scale, t.scale, t.scale);
      tempObject.translateY(t.trunkHeight + 0.12);
      tempObject.updateMatrix();
      foliageRef.current.setMatrixAt(i, tempObject.matrix);
    });

    trunkRef.current.instanceMatrix.needsUpdate = true;
    foliageRef.current.instanceMatrix.needsUpdate = true;
  }, [trees]);

  return (
    <group>
      {/* Trunks Instance */}
      <instancedMesh ref={trunkRef} args={[null, null, count]} castShadow receiveShadow>
        <cylinderGeometry args={[0.04, 0.06, 0.25, 5]} />
        <meshStandardMaterial color="#5c4033" roughness={0.9} flatShading />
      </instancedMesh>

      {/* Foliage Instance */}
      <instancedMesh ref={foliageRef} args={[null, null, count]} castShadow>
        <coneGeometry args={[0.18, 0.36, 5]} />
        <meshStandardMaterial color="#225c34" roughness={0.7} flatShading />
      </instancedMesh>
    </group>
  );
}

// ── SUB-COMPONENT: FLUFFY ORBITING LOW-POLY CLOUDS ──
// Clusters of spheres representing stylized clouds drifting slowly.
function OrbitingClouds({ count = 3, orbitRadius = 2.45 }) {
  const cloudsRef = useRef();

  useFrame((state) => {
    if (cloudsRef.current) {
      // Clouds orbit slowly around the planet
      cloudsRef.current.rotation.y = state.clock.getElapsedTime() * 0.04;
    }
  });

  const cloudClusters = useMemo(() => {
    return Array.from({ length: count }).map((_, idx) => {
      // Place only on the healthy hemisphere
      const angle = (idx * (Math.PI / 2.2)) - Math.PI / 4;
      const height = (idx % 2 === 0 ? 0.3 : -0.4);
      const scale = 0.16 + idx * 0.04;

      return {
        pos: [
          orbitRadius * Math.cos(angle),
          height,
          orbitRadius * Math.sin(angle),
        ],
        scale,
      };
    });
  }, [count, orbitRadius]);

  return (
    <group ref={cloudsRef}>
      {cloudClusters.map((c, idx) => (
        <group key={idx} position={c.pos} scale={[c.scale, c.scale * 0.7, c.scale]}>
          <mesh castShadow>
            <sphereGeometry args={[1, 7, 7]} />
            <meshStandardMaterial color="#ffffff" opacity={0.95} transparent roughness={0.8} flatShading />
          </mesh>
          <mesh castShadow position={[0.5, -0.1, 0.2]} scale={[0.8, 0.8, 0.8]}>
            <sphereGeometry args={[1, 7, 7]} />
            <meshStandardMaterial color="#ffffff" opacity={0.95} transparent roughness={0.8} flatShading />
          </mesh>
          <mesh castShadow position={[-0.5, 0.1, -0.2]} scale={[0.75, 0.75, 0.75]}>
            <sphereGeometry args={[1, 7, 7]} />
            <meshStandardMaterial color="#ffffff" opacity={0.95} transparent roughness={0.8} flatShading />
          </mesh>
        </group>
      ))}
    </group>
  );
}

// ── SUB-COMPONENT: SMOKE PARTICLES (POLLUTED SIDE) ──
// Emits small carbon-ash debris rising from the canyons on the left hemisphere.
function RisingSmoke({ count = 80 }) {
  const pointsRef = useRef();

  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Position smoke only on the polluted left side (x < -0.3)
      const u = Math.random();
      const v = Math.random();
      const theta = u * Math.PI + Math.PI / 2; // Left side angle range
      const phi = Math.acos(2.0 * v - 1.0);

      const r = 2.05 + Math.random() * 0.15; // Floating slightly above surface
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      spd[i] = 0.15 + Math.random() * 0.25;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const array = pointsRef.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      // Move smoke particles upward along the Y axis
      array[i * 3 + 1] += speeds[i] * delta * 0.5;
      
      // Also gently drift leftwards (further into pollution zone)
      array[i * 3] -= speeds[i] * delta * 0.15;

      // Reset when they rise too high or drift out
      if (array[i * 3 + 1] > 2.8 || array[i * 3] > 0.1) {
        const theta = Math.random() * Math.PI + Math.PI / 2;
        const phi = Math.acos(2.0 * Math.random() - 1.0);
        const r = 2.05;
        array[i * 3] = r * Math.sin(phi) * Math.cos(theta);
        array[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
        array[i * 3 + 2] = r * Math.cos(phi);
      }
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#707371"
        size={0.065}
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ── SUB-COMPONENT: FRACTURED DEBRIS (FAR LEFT EDGE) ──
// Small geode fragments floating away from the breaking planet on the far-left.
// Optimized using InstancedMesh for 60 FPS performance (reduces draw calls to 1).
function FloatingDebris({ count = 12 }) {
  const instancedRef = useRef();

  const debrisItems = useMemo(() => {
    return Array.from({ length: count }).map((_, idx) => {
      const seed = idx * 3.5;
      return {
        pos: [
          -2.35 - (idx * 0.09) - Math.random() * 0.1, // Far left offset
          -0.6 + (idx * 0.2) + Math.random() * 0.15,
          (idx % 2 === 0 ? 0.35 : -0.35) + Math.random() * 0.1,
        ],
        scale: 0.04 + Math.random() * 0.06,
        speed: 0.4 + Math.random() * 0.5,
        drift: 0.12 + Math.random() * 0.1,
        seed,
      };
    });
  }, [count]);

  useFrame((state) => {
    if (!instancedRef.current) return;
    const elapsed = state.clock.getElapsedTime();
    const tempObject = new THREE.Object3D();

    debrisItems.forEach((item, i) => {
      // Subtle floating sine wave animation with phase offset
      const y = item.pos[1] + Math.sin(elapsed * item.speed + item.seed) * item.drift;
      const x = item.pos[0] + Math.cos(elapsed * item.speed * 0.5 + item.seed) * 0.06;
      const z = item.pos[2];

      tempObject.position.set(x, y, z);
      tempObject.scale.set(item.scale, item.scale, item.scale);
      
      // Tumbling rotation
      tempObject.rotation.set(
        elapsed * 0.2 + item.seed,
        elapsed * 0.15 - item.seed,
        0
      );

      tempObject.updateMatrix();
      instancedRef.current.setMatrixAt(i, tempObject.matrix);
    });

    instancedRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={instancedRef} args={[null, null, count]} castShadow>
      <dodecahedronGeometry args={[1]} />
      <meshStandardMaterial color="#2d2d2d" roughness={0.9} flatShading />
    </instancedMesh>
  );
}

// ── MAIN CORE ELEMENT: DUALITY PLANET MESH ──
function DualityPlanet() {
  const shaderRef = useRef();
  const sphereRef = useRef();

  useFrame((state) => {
    if (shaderRef.current) {
      // Feed elapsed time to custom shaders
      shaderRef.current.uTime = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={sphereRef} castShadow receiveShadow>
      {/* 2.0 Radius high-density sphere for rich vertex displacement heightmaps */}
      <sphereGeometry args={[2.0, 128, 128]} />
      <dualityShaderMaterial ref={shaderRef} />
    </mesh>
  );
}

// ── SUB-COMPONENT: ROTATING FLOATING GLOBE SCENE WRAPPER ──
// R3F hooks can only be invoked in a component that is a child of the <Canvas> component.
function FloatingGlobe({ mouse }) {
  const containerGroupRef = useRef();
  const rotationGroupRef = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime();

    if (containerGroupRef.current) {
      // 1. Antigravity floating effect using wave functions
      containerGroupRef.current.position.y = Math.sin(elapsed * 0.5) * 0.16;

      // 2. Interactive Hover Parallax (gentle tilt interpolation)
      const targetX = mouse.y * 0.14;
      const targetY = mouse.x * 0.14;
      containerGroupRef.current.rotation.x = THREE.MathUtils.lerp(containerGroupRef.current.rotation.x, targetX, 0.05);
      containerGroupRef.current.rotation.z = THREE.MathUtils.lerp(containerGroupRef.current.rotation.z, -targetY, 0.05);
    }

    if (rotationGroupRef.current) {
      // 3. Continuous slow Y-axis axial rotation
      rotationGroupRef.current.rotation.y = elapsed * 0.06;
    }
  });

  return (
    /* ── 23.5° AXIAL TILT WRAPPER GROUP ── */
    /* Z-rotation of 0.41 radians tilts the axis by exactly 23.5 degrees */
    <group rotation={[0, 0, 0.41]}>
      
      {/* Main Floating container (sine float & mouse tilt) */}
      <group ref={containerGroupRef}>
        
        {/* Spinning rotation container (continuous Y spin) */}
        <group ref={rotationGroupRef}>
          
          {/* The Split Duality planet */}
          <DualityPlanet />
          
          {/* Programmatic Low-Poly Trees */}
          <ScatteredTrees count={32} />

          {/* Orbiting Fluffy Clouds */}
          <OrbitingClouds count={3} />

          {/* Carbon soot rising smoke particles */}
          <RisingSmoke count={100} />

        </group>

        {/* Fractured Debris (Far Left, floats independently of planetary Y spin) */}
        <FloatingDebris count={7} />

      </group>

    </group>
  );
}

// ── INTERACTIVE CANVAS COMPOSITION CONTAINER ──
export default function Earth3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Monitor mouse movements for subtle interactive tilt parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '380px', position: 'relative' }}>
      <Canvas
        camera={{ position: [0, 0, 5.0], fov: 50 }}
        dpr={[1, 2]}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        {/* Soft Ambient lighting to see base textures */}
        <ambientLight intensity={0.5} />

        {/* Directional key light matching the top-left light source */}
        <directionalLight
          position={[-6, 6, 4]}
          intensity={2.2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0005}
        />

        {/* Dynamic Point fill lights to illuminate glowing magma on dark sides */}
        <pointLight position={[5, -2, -3]} intensity={0.5} color="#ffa366" />
        <pointLight position={[-4, -3, 2]} intensity={0.8} color="#ff3300" />

        {/* Render the inner scene component which is nested inside the Canvas */}
        <FloatingGlobe mouse={mouse} />
      </Canvas>
    </div>
  );
}
