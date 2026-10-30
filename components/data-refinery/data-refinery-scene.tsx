"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  LuTerminal,
  LuSparkles,
  LuFolderGit2,
  LuLayers,
  LuFileText,
  LuGithub,
  LuLinkedin,
  LuVolume2,
  LuVolumeX,
  LuRefreshCw,
  LuPlay,
  LuCheck,
  LuShieldCheck,
  LuX,
  LuCompass,
  LuSun,
  LuMoon,
  LuMenu,
  LuArrowRight,
  LuClock,
  LuZap,
  LuTrophy,
  LuRotateCcw,
  LuLaptop,
  LuFlame,
  LuGauge,
} from "react-icons/lu";
import { experience, projects, skills } from "@/lib/content";
import { links } from "@/lib/links";

type StationKey = "warehouse" | "pipeline" | "vector" | "tinyfish" | "terminal" | null;

interface SmashedAchievement {
  id: string;
  title: string;
  metric: string;
  color: string;
}

interface DataRefinerySceneProps {
  onSwitchToMac?: () => void;
}

export function DataRefineryScene({ onSwitchToMac }: DataRefinerySceneProps = {}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [activeStation, setActiveStation] = useState<StationKey>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [controlMode, setControlMode] = useState<"drive" | "orbit">("drive");
  const [lightingMode, setLightingMode] = useState<"night" | "day">("night");
  const [roverSpeed, setRoverSpeed] = useState(0);
  const [proximityStation, setProximityStation] = useState<StationKey>(null);
  const [directoryOpen, setDirectoryOpen] = useState(false);
  const [turboStream, setTurboStream] = useState(false);
  const [nitroActive, setNitroActive] = useState(false);

  // Smashed Bottlenecks Gamification State
  const [smashedCrates, setSmashedCrates] = useState<string[]>([]);
  const [lastAchievement, setLastAchievement] = useState<SmashedAchievement | null>(null);
  const resetCratesRef = useRef<(() => void) | null>(null);
  const toggleValveRef = useRef<(() => void) | null>(null);

  // Hovered 3D building tooltip
  const [hoveredBuilding, setHoveredBuilding] = useState<{
    id: StationKey;
    title: string;
    sub: string;
    screenX: number;
    screenY: number;
  } | null>(null);

  // SCD Type 2 Simulator state
  const [scdYear, setScdYear] = useState<2023 | 2025 | 2026>(2026);

  // Live telemetry ticker metrics
  const [telemetryRate, setTelemetryRate] = useState(14240);
  const [telemetryP99, setTelemetryP99] = useState(72);

  useEffect(() => {
    const timer = setInterval(() => {
      const base = turboStream ? 48500 : 14200;
      setTelemetryRate(base + Math.floor(Math.random() * 120 - 60));
      setTelemetryP99((turboStream ? 42 : 70) + Math.floor(Math.random() * 5));
    }, 2000);
    return () => clearInterval(timer);
  }, [turboStream]);

  // Web Agent live scan state
  const [urlInput, setUrlInput] = useState("https://www.prettiflow.com/");
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentResult, setAgentResult] = useState<any>(null);

  // Terminal state
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; type: "cmd" | "out" }>>([
    { text: "sohail@refinery-core:~$ ./status.sh", type: "cmd" },
    { text: "[OK] 3D Data Refinery operational · Studio Lighting at 60 FPS", type: "out" },
    { text: "[OK] Pipeline flow valve calibrated · Click valve to toggle turbo", type: "out" },
    { text: "[OK] Camera director active · Click any station for macro zoom", type: "out" },
    { text: "Drive rover: WASD/Arrows · Shift: Nitro · H: Honk · Space: Brake", type: "out" },
  ]);

  // Audio synthesizer ref
  const audioCtxRef = useRef<AudioContext | null>(null);

  const playSynthBeep = (freq: number, type: OscillatorType = "sine", dur = 0.12) => {
    if (!soundEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + dur);
    } catch {}
  };

  const playSmashSound = () => {
    if (!soundEnabled) return;
    playSynthBeep(180, "sawtooth", 0.18);
    setTimeout(() => playSynthBeep(523.25, "sine", 0.16), 70);
    setTimeout(() => playSynthBeep(659.25, "sine", 0.16), 140);
    setTimeout(() => playSynthBeep(880.0, "triangle", 0.22), 210);
  };

  const playValveSound = () => {
    if (!soundEnabled) return;
    playSynthBeep(260, "square", 0.08);
    setTimeout(() => playSynthBeep(340, "square", 0.1), 80);
    setTimeout(() => playSynthBeep(480, "triangle", 0.15), 160);
  };

  // Web Agent scanner
  const runAgentScan = async () => {
    setAgentRunning(true);
    setAgentResult(null);
    playSynthBeep(880, "triangle", 0.2);
    try {
      const res = await fetch("/api/tinyfish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: urlInput, goal: "Analyze 3D architecture and live infrastructure" }),
      });
      const data = await res.json();
      setAgentResult(data);
      playSynthBeep(1200, "sine", 0.3);
    } catch {
      setAgentResult({
        success: true,
        data: {
          title: "Prettiflow: Distributed Infrastructure & Tools",
          description: "Internal tools infrastructure and distributed container workflows.",
          latency: "135ms",
          status: "200 OK",
          summary: "Live extraction completed.",
        },
      });
    } finally {
      setAgentRunning(false);
    }
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;
    playSynthBeep(520, "sine", 0.08);

    const newHistory = [...terminalHistory, { text: `sohail@refinery:~$ ${terminalInput}`, type: "cmd" as const }];

    if (cmd === "help") {
      newHistory.push({
        text: "Commands: telemetry, warehouse, pipeline, vector, agent, turbo, clear, whoami",
        type: "out",
      });
    } else if (cmd === "turbo") {
      toggleValveRef.current?.();
      newHistory.push({ text: `Pipeline throughput set to ${!turboStream ? "OVERDRIVE (48.5k msg/s)" : "STANDARD (14.2k msg/s)"}`, type: "out" });
    } else if (cmd === "warehouse") {
      setActiveStation("warehouse");
      newHistory.push({ text: "Camera zooming to Dimensional Warehouse...", type: "out" });
    } else if (cmd === "pipeline") {
      setActiveStation("pipeline");
      newHistory.push({ text: "Camera zooming to PrettiFlow Execution Engine...", type: "out" });
    } else if (cmd === "vector") {
      setActiveStation("vector");
      newHistory.push({ text: "Camera zooming to Neural Vector Core...", type: "out" });
    } else if (cmd === "agent" || cmd === "tinyfish") {
      setActiveStation("tinyfish");
      newHistory.push({ text: "Camera zooming to Autonomous Web Agent...", type: "out" });
    } else if (cmd === "whoami") {
      newHistory.push({ text: "Sohail Shaik · Founding Data & AI Engineer", type: "out" });
    } else if (cmd === "clear") {
      setTerminalHistory([]);
      setTerminalInput("");
      return;
    } else {
      newHistory.push({ text: `command not found: ${cmd}. Type 'help' for available commands.`, type: "out" });
    }

    setTerminalHistory(newHistory);
    setTerminalInput("");
  };

  // Keyboard driving state ref
  const keysRef = useRef<{ [k: string]: boolean }>({});

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = true;
      if (e.key === " " || e.key.startsWith("Arrow")) e.preventDefault();
      if (e.key === "h" || e.key === "H") playSynthBeep(440, "sawtooth", 0.35);
    };
    const onKeyUp = (e: KeyboardEvent) => {
      keysRef.current[e.key.toLowerCase()] = false;
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [soundEnabled]);

  // Three.js Scene Setup
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const isNight = lightingMode === "night";

    const bgColor = isNight ? "#07080f" : "#12141c";
    scene.background = new THREE.Color(bgColor);
    scene.fog = new THREE.FogExp2(bgColor, isNight ? 0.018 : 0.014);

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 200);
    camera.position.set(24, 20, 24);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = isNight ? 1.4 : 1.15;
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.05;
    controls.minDistance = 6;
    controls.maxDistance = 65;
    controls.target.set(0, 3.5, 0);

    // ── STUDIO LIGHTING SETUP (The Awwwards Quality) ──
    // 1. Two-Tone Hemisphere Light (Cool Sky + Warm Terracotta Ground Bounce)
    const hemiLight = new THREE.HemisphereLight(
      isNight ? 0x38bdf8 : 0xfff4e6,
      isNight ? 0x854d0e : 0x5c2b09,
      isNight ? 0.9 : 1.2
    );
    scene.add(hemiLight);

    // 2. Main Key Directional Sun Light
    const sunColor = isNight ? "#60a5fa" : "#fff8ed";
    const sunIntensity = isNight ? 1.1 : 2.8;
    const sunLight = new THREE.DirectionalLight(sunColor, sunIntensity);
    sunLight.position.set(22, 36, 20);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 80;
    const d = 18;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0004;
    scene.add(sunLight);

    // 3. Cool Ambient Fill
    const blueFillLight = new THREE.DirectionalLight("#38bdf8", isNight ? 1.4 : 1.0);
    blueFillLight.position.set(-20, 16, -20);
    scene.add(blueFillLight);

    // 4. Warm Doorway Light Shaft & Step Illumination
    const doorLight = new THREE.SpotLight(0xf59e0b, isNight ? 7.0 : 4.0, 12, Math.PI / 3, 0.45, 1);
    doorLight.position.set(1.8, 1.4, 4.9);
    const doorTarget = new THREE.Object3D();
    doorTarget.position.set(1.8, 0.1, 7.8);
    scene.add(doorTarget);
    doorLight.target = doorTarget;
    doorLight.castShadow = true;
    scene.add(doorLight);

    const bunkerGlow = new THREE.PointLight("#ff8800", isNight ? 4.5 : 2.0, 10);
    bunkerGlow.position.set(1.8, 1.8, 4.2);
    scene.add(bunkerGlow);

    // Materials Palette
    const matPedestal = new THREE.MeshStandardMaterial({ color: "#1c1e28", roughness: 0.85, metalness: 0.1 });
    const matConcreteBunker = new THREE.MeshStandardMaterial({ color: "#252936", roughness: 0.9, metalness: 0.05 });
    const matTerracotta = new THREE.MeshStandardMaterial({ color: isNight ? "#bf4428" : "#dd5030", roughness: 0.7, metalness: 0.05 });
    const matDarkOrange = new THREE.MeshStandardMaterial({ color: isNight ? "#9c341c" : "#b93f24", roughness: 0.75, metalness: 0.05 });
    const matRoofCorrugated = new THREE.MeshStandardMaterial({ color: isNight ? "#636d80" : "#8a96aa", roughness: 0.45, metalness: 0.55 });
    const matSteel = new THREE.MeshStandardMaterial({ color: "#475165", roughness: 0.4, metalness: 0.7 });
    const matBrass = new THREE.MeshStandardMaterial({ color: "#f59e0b", roughness: 0.3, metalness: 0.85 });
    const matWhiteTrim = new THREE.MeshStandardMaterial({ color: "#e2e6ee", roughness: 0.6 });
    const matWoodPole = new THREE.MeshStandardMaterial({ color: "#85493a", roughness: 0.85 });
    const matCableBlack = new THREE.MeshBasicMaterial({ color: "#0c0d12" });
    const matGlowCyan = new THREE.MeshBasicMaterial({ color: "#00f0ff" });
    const matGlowEmerald = new THREE.MeshStandardMaterial({
      color: "#10b981",
      emissive: "#10b981",
      emissiveIntensity: 1.2,
      roughness: 0.2,
    });

    // ── 1. THE FLOATING ISOMETRIC PEDESTAL ──
    const pedestalGroup = new THREE.Group();
    const pedestalGeo = new THREE.BoxGeometry(22, 1.8, 22);
    const pedestalMesh = new THREE.Mesh(pedestalGeo, matPedestal);
    pedestalMesh.position.y = -0.9;
    pedestalMesh.receiveShadow = true;
    pedestalGroup.add(pedestalMesh);

    const rimGeo = new THREE.BoxGeometry(22.4, 0.4, 22.4);
    const rimMesh = new THREE.Mesh(rimGeo, new THREE.MeshStandardMaterial({ color: "#12131a", roughness: 0.9 }));
    rimMesh.position.y = -1.8;
    pedestalGroup.add(rimMesh);
    scene.add(pedestalGroup);

    // ── 2. LEVEL 1: CONCRETE BUNKER (DIMENSIONAL VAULT) ──
    const bunkerGroup = new THREE.Group();
    const bunkerBase = new THREE.Mesh(new THREE.BoxGeometry(7, 3.2, 5), matConcreteBunker);
    bunkerBase.position.set(1.5, 1.6, 2.5);
    bunkerBase.castShadow = true;
    bunkerBase.receiveShadow = true;
    bunkerGroup.add(bunkerBase);

    // Entry Steps & Door
    const doorFrame = new THREE.Mesh(new THREE.BoxGeometry(1.4, 2.0, 0.2), matWhiteTrim);
    doorFrame.position.set(1.8, 1.1, 5.05);
    bunkerGroup.add(doorFrame);

    const doorInner = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.8, 0.25), matConcreteBunker);
    doorInner.position.set(1.8, 1.1, 5.1);
    bunkerGroup.add(doorInner);

    for (let s = 0; s < 3; s++) {
      const step = new THREE.Mesh(new THREE.BoxGeometry(1.6 - s * 0.15, 0.25, 0.45), matWhiteTrim);
      step.position.set(1.8, 0.125 + s * 0.25, 5.3 + s * 0.35);
      step.castShadow = true;
      step.receiveShadow = true;
      bunkerGroup.add(step);
    }

    // Windows with security boards
    const winFrame = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.9, 0.15), matWhiteTrim);
    winFrame.position.set(-0.6, 1.0, 5.05);
    bunkerGroup.add(winFrame);
    const board1 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.18, 0.2), matWoodPole);
    board1.position.set(-0.6, 1.0, 5.12);
    board1.rotation.z = 0.55;
    bunkerGroup.add(board1);
    const board2 = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.18, 0.2), matWoodPole);
    board2.position.set(-0.6, 1.0, 5.12);
    board2.rotation.z = -0.55;
    bunkerGroup.add(board2);

    scene.add(bunkerGroup);

    // ── 3. LEVEL 2: TERRACOTTA ENGINE (PRETTIFLOW PIPELINES) ──
    const midGroup = new THREE.Group();
    const mainTower = new THREE.Mesh(new THREE.BoxGeometry(5.2, 5.5, 4.8), matTerracotta);
    mainTower.position.set(-0.2, 4.5, 0.6);
    mainTower.castShadow = true;
    mainTower.receiveShadow = true;
    midGroup.add(mainTower);

    // Slanted corrugated shed roofs
    const midRoof = new THREE.Mesh(new THREE.BoxGeometry(5.8, 0.25, 4.2), matRoofCorrugated);
    midRoof.position.set(-0.8, 7.3, 1.2);
    midRoof.rotation.z = -0.32;
    midRoof.castShadow = true;
    midGroup.add(midRoof);

    const porchRoof = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.2, 3.4), matRoofCorrugated);
    porchRoof.position.set(-4.0, 2.6, 2.2);
    porchRoof.rotation.z = -0.25;
    porchRoof.castShadow = true;
    midGroup.add(porchRoof);

    const post1 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.5, 0.25), matWoodPole);
    post1.position.set(-5.5, 1.25, 3.4);
    post1.castShadow = true;
    midGroup.add(post1);
    const post2 = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.5, 0.25), matWoodPole);
    post2.position.set(-5.5, 1.25, 1.0);
    post2.castShadow = true;
    midGroup.add(post2);

    // External AC cooling units with spinning fan blades
    const acFanMeshes: THREE.Mesh[] = [];
    for (const [acX, acY, acZ] of [
      [-1.2, 5.8, 3.05],
      [1.4, 3.6, 3.05],
    ] as [number, number, number][]) {
      const acBox = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.9, 0.8), matWhiteTrim);
      acBox.position.set(acX, acY, acZ);
      acBox.castShadow = true;
      midGroup.add(acBox);

      const fanCircle = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.32, 0.05, 16), matSteel);
      fanCircle.position.set(acX, acY, acZ + 0.42);
      fanCircle.rotation.x = Math.PI / 2;
      midGroup.add(fanCircle);
      acFanMeshes.push(fanCircle);
    }

    // Industrial Steel Stairs
    const stairGroup = new THREE.Group();
    const stairBeam1 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 4.2, 0.3), matSteel);
    stairBeam1.position.set(-2.0, 3.0, 3.6);
    stairBeam1.rotation.x = 0.65;
    stairGroup.add(stairBeam1);
    const stairBeam2 = new THREE.Mesh(new THREE.BoxGeometry(0.18, 4.2, 0.3), matSteel);
    stairBeam2.position.set(-3.0, 3.0, 3.6);
    stairBeam2.rotation.x = 0.65;
    stairGroup.add(stairBeam2);

    for (let t = 0; t < 8; t++) {
      const tread = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.08, 0.35), matSteel);
      tread.position.set(-2.5, 1.6 + t * 0.36, 4.8 - t * 0.32);
      stairGroup.add(tread);
    }
    midGroup.add(stairGroup);

    // Balcony & Ladder
    const balconyFloor = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.2, 1.6), matSteel);
    balconyFloor.position.set(2.6, 5.0, 0.8);
    balconyFloor.castShadow = true;
    midGroup.add(balconyFloor);

    const upperDoorOpen = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.8, 0.08), matWoodPole);
    upperDoorOpen.position.set(1.6, 5.9, 1.3);
    upperDoorOpen.rotation.y = 1.1;
    upperDoorOpen.castShadow = true;
    midGroup.add(upperDoorOpen);

    const ladderGroup = new THREE.Group();
    const lRail1 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 4.8, 0.08), matSteel);
    lRail1.position.set(3.4, 3.2, 1.4);
    lRail1.rotation.x = 0.25;
    ladderGroup.add(lRail1);
    const lRail2 = new THREE.Mesh(new THREE.BoxGeometry(0.08, 4.8, 0.08), matSteel);
    lRail2.position.set(3.4, 3.2, 0.7);
    lRail2.rotation.x = 0.25;
    ladderGroup.add(lRail2);

    for (let r = 0; r < 10; r++) {
      const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.7), matSteel);
      rung.position.set(3.4, 1.1 + r * 0.42, 1.6 - r * 0.11);
      rung.rotation.x = Math.PI / 2;
      ladderGroup.add(rung);
    }
    midGroup.add(ladderGroup);

    scene.add(midGroup);

    // ── 4. LEVEL 3: UPPER OBSERVATION TOWER & PENTHOUSE ──
    const topGroup = new THREE.Group();
    const penthouse = new THREE.Mesh(new THREE.BoxGeometry(3.0, 3.2, 3.0), matDarkOrange);
    penthouse.position.set(0.6, 8.4, -0.4);
    penthouse.castShadow = true;
    topGroup.add(penthouse);

    const topRoof = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.25, 3.6), matRoofCorrugated);
    topRoof.position.set(0.6, 10.1, -0.4);
    topRoof.rotation.z = -0.35;
    topRoof.castShadow = true;
    topGroup.add(topRoof);

    // ── 4B. THE ROOFTOP "AI NEURAL CORE" ──
    const neuralCoreGroup = new THREE.Group();
    neuralCoreGroup.position.set(0.6, 11.4, -0.4);

    const coreOuterGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreOuterMat = new THREE.MeshStandardMaterial({
      color: "#c084fc",
      wireframe: true,
      emissive: "#9333ea",
      emissiveIntensity: 0.9,
    });
    const coreOuterMesh = new THREE.Mesh(coreOuterGeo, coreOuterMat);
    neuralCoreGroup.add(coreOuterMesh);

    const coreInnerGeo = new THREE.OctahedronGeometry(0.48, 0);
    const coreInnerMat = new THREE.MeshStandardMaterial({
      color: "#00f0ff",
      emissive: "#00f0ff",
      emissiveIntensity: 1.4,
      roughness: 0.1,
    });
    const coreInnerMesh = new THREE.Mesh(coreInnerGeo, coreInnerMat);
    neuralCoreGroup.add(coreInnerMesh);

    const neuralLight = new THREE.PointLight("#a855f7", isNight ? 4.5 : 2.5, 10);
    neuralCoreGroup.add(neuralLight);

    // Orbiting Vector Particle Swarm
    const orbitCount = 16;
    const orbitMeshes: THREE.Mesh[] = [];
    for (let o = 0; o < orbitCount; o++) {
      const oMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 8, 8),
        new THREE.MeshBasicMaterial({ color: o % 2 === 0 ? "#00f0ff" : "#ec4899" })
      );
      neuralCoreGroup.add(oMesh);
      orbitMeshes.push(oMesh);
    }

    topGroup.add(neuralCoreGroup);
    scene.add(topGroup);

    // ── 5. UTILITY POLE & 3D SWAYING CATENARY CABLES ──
    const poleGroup = new THREE.Group();
    const poleMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.32, 0.38, 18, 16), matWoodPole);
    poleMesh.position.set(-3.8, 9.0, -4.2);
    poleMesh.castShadow = true;
    poleGroup.add(poleMesh);

    for (const armY of [15.2, 16.6]) {
      const arm = new THREE.Mesh(new THREE.BoxGeometry(3.8, 0.3, 0.3), matWoodPole);
      arm.position.set(-3.8, armY, -4.2);
      arm.castShadow = true;
      poleGroup.add(arm);

      for (let i = 0; i < 4; i++) {
        const ins = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.14, 0.5, 12), matConcreteBunker);
        ins.position.set(-5.3 + i * 1.0, armY + 0.35, -4.2);
        poleGroup.add(ins);
      }
    }
    scene.add(poleGroup);

    // Swaying Catenary Cables
    const cablesGroup = new THREE.Group();
    const cablePointsList = [
      [new THREE.Vector3(-4.8, 16.8, -4.2), new THREE.Vector3(-1.8, 13.0, -2.6), new THREE.Vector3(0.6, 10.2, -0.4)],
      [new THREE.Vector3(-3.2, 15.5, -4.2), new THREE.Vector3(-2.4, 10.8, -1.8), new THREE.Vector3(-0.6, 7.4, 1.2)],
      [new THREE.Vector3(-2.8, 15.3, -4.2), new THREE.Vector3(-4.5, 7.0, 0.0), new THREE.Vector3(-4.2, 2.8, 2.4)],
      [new THREE.Vector3(-3.8, 6.0, -4.2), new THREE.Vector3(-2.0, 2.5, -1.0), new THREE.Vector3(1.5, 1.2, 0.2)],
    ];

    cablePointsList.forEach((pts) => {
      const curve = new THREE.CatmullRomCurve3(pts);
      const tubeGeo = new THREE.TubeGeometry(curve, 32, 0.05, 8, false);
      const tubeMesh = new THREE.Mesh(tubeGeo, matCableBlack);
      tubeMesh.castShadow = true;
      cablesGroup.add(tubeMesh);
    });
    scene.add(cablesGroup);

    // ── 6. ANIMATED CONDUIT PIPES & INTERACTIVE BRASS FLOW VALVE ──
    const pipeGroup = new THREE.Group();
    const pipePoints = [
      new THREE.Vector3(4.8, 0.5, 2.0),
      new THREE.Vector3(4.8, 3.8, 2.0),
      new THREE.Vector3(2.6, 3.8, 2.0),
      new THREE.Vector3(2.6, 5.2, 0.8),
    ];
    const pipeCurve = new THREE.CatmullRomCurve3(pipePoints);
    const pipeGeo = new THREE.TubeGeometry(pipeCurve, 32, 0.22, 12, false);
    const pipeMesh = new THREE.Mesh(pipeGeo, matSteel);
    pipeMesh.castShadow = true;
    pipeGroup.add(pipeMesh);

    // Interactive Brass Valve Wheel
    const valveGroup = new THREE.Group();
    valveGroup.position.set(4.8, 2.2, 2.3);
    const valveStem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.4, 8), matSteel);
    valveStem.rotation.x = Math.PI / 2;
    valveGroup.add(valveStem);

    const valveWheel = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 12, 24), matBrass);
    valveWheel.position.z = 0.2;
    valveWheel.castShadow = true;
    valveGroup.add(valveWheel);

    for (let sp = 0; sp < 3; sp++) {
      const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.03, 0.03, 0.65), matBrass);
      spoke.rotation.z = (sp * Math.PI) / 3;
      spoke.position.z = 0.2;
      valveGroup.add(spoke);
    }
    pipeGroup.add(valveGroup);
    scene.add(pipeGroup);

    // Valve toggle hook
    toggleValveRef.current = () => {
      playValveSound();
      setTurboStream((prev) => !prev);
      valveWheel.rotation.z += Math.PI * 1.5;
    };

    // Data Pulses along Pipe
    const pulseCount = 12;
    const pulseGeo = new THREE.SphereGeometry(0.12, 8, 8);
    const pulses: THREE.Mesh[] = [];
    for (let p = 0; p < pulseCount; p++) {
      const pulse = new THREE.Mesh(pulseGeo, matGlowCyan);
      pipeGroup.add(pulse);
      pulses.push(pulse);
    }

    // ── 6B. KINETIC STEAM / PRESSURE EXHAUST PUFFS ──
    const steamCount = 8;
    const steamGeo = new THREE.SphereGeometry(0.18, 8, 8);
    const steamMat = new THREE.MeshBasicMaterial({ color: "#e2e8f0", transparent: true, opacity: 0.35 });
    const steamParticles: Array<{ mesh: THREE.Mesh; seed: number }> = [];

    for (let s = 0; s < steamCount; s++) {
      const sMesh = new THREE.Mesh(steamGeo, steamMat);
      sMesh.position.set(2.6, 5.3, 0.8);
      scene.add(sMesh);
      steamParticles.push({ mesh: sMesh, seed: s / steamCount });
    }

    // ── 7. ATMOSPHERIC PARTICLES ──
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 22;
      posArray[i + 1] = Math.random() * 14 + 1;
      posArray[i + 2] = (Math.random() - 0.5) * 22;
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: isNight ? 0.22 : 0.16,
      color: isNight ? "#00f0ff" : "#38bdf8",
      transparent: true,
      opacity: isNight ? 0.75 : 0.55,
      blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particleGeo, particleMat);
    scene.add(particlesMesh);

    // ── 8. IN-WORLD 3D SPATIAL MARKERS ──
    const stations = [
      { id: "warehouse" as const, pos: new THREE.Vector3(2.0, 0.05, 7.2), color: "#38bdf8", label: "Warehouse" },
      { id: "pipeline" as const, pos: new THREE.Vector3(-6.5, 0.05, 4.0), color: "#f59e0b", label: "Pipelines" },
      { id: "vector" as const, pos: new THREE.Vector3(6.5, 0.05, -2.5), color: "#a855f7", label: "Vector RAG" },
      { id: "tinyfish" as const, pos: new THREE.Vector3(-2.5, 0.05, -7.5), color: "#ec4899", label: "Web Agent" },
    ];

    const beaconMeshes: Array<{
      id: StationKey;
      ring: THREE.Mesh;
      light: THREE.PointLight;
      pos: THREE.Vector3;
      floatingIcon?: THREE.Mesh;
    }> = [];

    stations.forEach((st) => {
      const bGroup = new THREE.Group();
      bGroup.position.copy(st.pos);

      // Floor landing pad ring
      const ringGeo = new THREE.RingGeometry(1.2, 1.45, 32);
      const ringMat = new THREE.MeshBasicMaterial({ color: st.color, side: THREE.DoubleSide, transparent: true, opacity: 0.85 });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = -Math.PI / 2;
      bGroup.add(ring);

      // Elevated Floating Holographic Marker
      const holoGeo = new THREE.OctahedronGeometry(0.35, 0);
      const holoMat = new THREE.MeshStandardMaterial({
        color: st.color,
        emissive: st.color,
        emissiveIntensity: 1.0,
        wireframe: true,
      });
      const holoMesh = new THREE.Mesh(holoGeo, holoMat);
      holoMesh.position.y = 2.8;
      bGroup.add(holoMesh);

      const pLight = new THREE.PointLight(st.color, isNight ? 2.5 : 1.8, 6);
      pLight.position.y = 1.5;
      bGroup.add(pLight);

      scene.add(bGroup);
      beaconMeshes.push({ id: st.id, ring, light: pLight, pos: st.pos, floatingIcon: holoMesh });
    });

    // ── 9. SMASHABLE BRUNO SIMON-STYLE BOTTLENECK CRATES ──
    const createCrateTexture = (label: string, metric: string, bgColor: string, accentColor: string) => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext("2d");
        if (!ctx) return new THREE.Texture();

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, 512, 512);

        // Hazard Stripes Top & Bottom
        ctx.fillStyle = "#fbbf24";
        ctx.fillRect(0, 0, 512, 45);
        ctx.fillRect(0, 467, 512, 45);

        ctx.fillStyle = "#1e293b";
        for (let i = -512; i < 1024; i += 40) {
          ctx.beginPath();
          ctx.moveTo(i, 0);
          ctx.lineTo(i + 20, 0);
          ctx.lineTo(i - 45 + 20, 45);
          ctx.lineTo(i - 45, 45);
          ctx.fill();

          ctx.beginPath();
          ctx.moveTo(i, 467);
          ctx.lineTo(i + 20, 467);
          ctx.lineTo(i - 45 + 20, 512);
          ctx.lineTo(i - 45, 512);
          ctx.fill();
        }

        ctx.fillStyle = "#090d16";
        ctx.fillRect(36, 70, 440, 360);
        ctx.lineWidth = 6;
        ctx.strokeStyle = accentColor;
        ctx.strokeRect(36, 70, 440, 360);

        ctx.font = "bold 24px monospace";
        ctx.fillStyle = accentColor;
        ctx.textAlign = "center";
        ctx.fillText("⚠️ SYSTEM BOTTLENECK", 256, 120);

        ctx.font = "900 44px sans-serif";
        ctx.fillStyle = "#ffffff";
        ctx.fillText(label, 256, 195);

        ctx.font = "bold 32px monospace";
        ctx.fillStyle = "#ef4444";
        ctx.fillText(metric, 256, 260);

        ctx.font = "bold 22px monospace";
        ctx.fillStyle = "#38bdf8";
        ctx.fillText("💥 RAM WITH ROVER", 256, 350);

        const texture = new THREE.CanvasTexture(canvas);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;
        return texture;
      } catch {
        return new THREE.Texture();
      }
    };

    const crateDefinitions = [
      {
        id: "coldstart",
        label: "COLD START",
        metric: "3.2s LATENCY",
        fixedMetric: "-96% Latency (~100ms)",
        title: "Cold-Start Bottleneck Shattered!",
        color: "#f97316",
        pos: new THREE.Vector3(-4.5, 0.6, 5.8),
      },
      {
        id: "tablescan",
        label: "TABLE SCAN",
        metric: "SEQ LOCK 18M ROWS",
        fixedMetric: "+40% Speed (Target Index)",
        title: "Table Scan Bottleneck Shattered!",
        color: "#8b5cf6",
        pos: new THREE.Vector3(5.2, 0.6, -4.2),
      },
      {
        id: "techdebt",
        label: "LEGACY ETL",
        metric: "MANUAL RECON FAIL",
        fixedMetric: "100.00% Parity Gate",
        title: "Legacy ETL Bottleneck Shattered!",
        color: "#ef4444",
        pos: new THREE.Vector3(-6.2, 0.6, -2.5),
      },
    ];

    interface CrateState {
      id: string;
      label: string;
      metric: string;
      fixedMetric: string;
      title: string;
      color: string;
      pos: THREE.Vector3;
      smashed: boolean;
      group: THREE.Group;
      solidMesh: THREE.Mesh;
      debris: Array<{
        mesh: THREE.Mesh;
        vx: number;
        vy: number;
        vz: number;
        rotX: number;
        rotY: number;
      }>;
      badgeGroup: THREE.Group;
    }

    const crates: CrateState[] = [];

    crateDefinitions.forEach((def) => {
      const cGroup = new THREE.Group();
      cGroup.position.copy(def.pos);

      const tex = createCrateTexture(def.label, def.metric, "#1e293b", def.color);
      const matFace = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.6, metalness: 0.1 });
      const matEdge = new THREE.MeshStandardMaterial({ color: "#111827", roughness: 0.8 });
      const cubeMats = [matFace, matFace, matEdge, matEdge, matFace, matFace];

      const solidGeo = new THREE.BoxGeometry(1.25, 1.15, 1.25);
      const solid = new THREE.Mesh(solidGeo, cubeMats);
      solid.castShadow = true;
      solid.receiveShadow = true;
      cGroup.add(solid);

      const debrisList: CrateState["debris"] = [];
      const debGeo = new THREE.BoxGeometry(0.36, 0.36, 0.36);
      const debMat = new THREE.MeshStandardMaterial({ color: def.color, roughness: 0.5, metalness: 0.2 });

      for (let d = 0; d < 8; d++) {
        const dMesh = new THREE.Mesh(debGeo, debMat);
        dMesh.visible = false;
        dMesh.castShadow = true;
        cGroup.add(dMesh);
        debrisList.push({
          mesh: dMesh,
          vx: 0,
          vy: 0,
          vz: 0,
          rotX: 0,
          rotY: 0,
        });
      }

      const badgeGroup = new THREE.Group();
      badgeGroup.position.set(0, 0.4, 0);
      badgeGroup.visible = false;

      const starGeo = new THREE.OctahedronGeometry(0.38, 0);
      const star = new THREE.Mesh(starGeo, matGlowEmerald);
      badgeGroup.add(star);

      const ringGeo = new THREE.TorusGeometry(0.65, 0.05, 12, 32);
      const ring = new THREE.Mesh(ringGeo, matGlowEmerald);
      ring.rotation.x = Math.PI / 2;
      badgeGroup.add(ring);

      const bLight = new THREE.PointLight("#10b981", 3.0, 6);
      bLight.position.y = 0.5;
      badgeGroup.add(bLight);

      cGroup.add(badgeGroup);
      scene.add(cGroup);

      crates.push({
        id: def.id,
        label: def.label,
        metric: def.metric,
        fixedMetric: def.fixedMetric,
        title: def.title,
        color: def.color,
        pos: def.pos,
        smashed: false,
        group: cGroup,
        solidMesh: solid,
        debris: debrisList,
        badgeGroup,
      });
    });

    resetCratesRef.current = () => {
      crates.forEach((c) => {
        c.smashed = false;
        c.solidMesh.visible = true;
        c.badgeGroup.visible = false;
        c.debris.forEach((deb) => {
          deb.mesh.visible = false;
          deb.mesh.position.set(0, 0, 0);
        });
      });
      setSmashedCrates([]);
      setLastAchievement(null);
      playSynthBeep(440, "triangle", 0.15);
    };

    // ── 10. THE AUTONOMOUS ROVER (With Dynamic Suspension & Headlights) ──
    const roverGroup = new THREE.Group();
    roverGroup.position.set(0, 0.35, 7.5);

    const chassisGeo = new THREE.BoxGeometry(1.4, 0.45, 2.2);
    const chassisMat = new THREE.MeshStandardMaterial({ color: "#e2e8f0", roughness: 0.3, metalness: 0.8 });
    const chassis = new THREE.Mesh(chassisGeo, chassisMat);
    chassis.position.y = 0.2;
    chassis.castShadow = true;
    roverGroup.add(chassis);

    const domeGeo = new THREE.SphereGeometry(0.55, 16, 12, 0, Math.PI * 2, 0, Math.PI / 2);
    const domeMat = new THREE.MeshStandardMaterial({ color: "#0284c7", roughness: 0.1, metalness: 0.9, transparent: true, opacity: 0.8 });
    const dome = new THREE.Mesh(domeGeo, domeMat);
    dome.position.set(0, 0.42, -0.15);
    chassis.add(dome);

    const wheelMeshes: THREE.Mesh[] = [];
    const wheelGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.22, 16);
    const wheelMat = new THREE.MeshStandardMaterial({ color: "#18181b", roughness: 0.9 });

    const wheelOffsets = [
      [-0.8, 0, -0.75],
      [0.8, 0, -0.75],
      [-0.8, 0, 0.0],
      [0.8, 0, 0.0],
      [-0.8, 0, 0.75],
      [0.8, 0, 0.75],
    ];

    wheelOffsets.forEach(([wx, wy, wz]) => {
      const wheel = new THREE.Mesh(wheelGeo, wheelMat);
      wheel.position.set(wx, wy, wz);
      wheel.rotation.z = Math.PI / 2;
      wheel.castShadow = true;
      roverGroup.add(wheel);
      wheelMeshes.push(wheel);
    });

    // Dual Realistic Headlights projecting real light cones
    for (const hx of [-0.45, 0.45]) {
      const hlOrb = new THREE.Mesh(new THREE.SphereGeometry(0.1, 8, 8), matGlowCyan);
      hlOrb.position.set(hx, 0.3, -1.1);
      chassis.add(hlOrb);

      const hSpot = new THREE.SpotLight("#38bdf8", isNight ? 5 : 3, 14, Math.PI / 5, 0.4, 1);
      hSpot.position.set(hx, 0.3, -1.05);
      const spotTgt = new THREE.Object3D();
      spotTgt.position.set(hx, 0.1, -7);
      chassis.add(spotTgt);
      hSpot.target = spotTgt;
      chassis.add(hSpot);
    }

    // Rear Nitro Exhaust Nozzle
    const nitroFlameGeo = new THREE.ConeGeometry(0.18, 0.6, 8);
    const nitroFlameMat = new THREE.MeshBasicMaterial({ color: "#00f0ff", transparent: true, opacity: 0.85 });
    const nitroFlame = new THREE.Mesh(nitroFlameGeo, nitroFlameMat);
    nitroFlame.position.set(0, 0.25, 1.3);
    nitroFlame.rotation.x = -Math.PI / 2;
    nitroFlame.visible = false;
    chassis.add(nitroFlame);

    scene.add(roverGroup);

    // Rover Physics Variables
    let roverPos = new THREE.Vector3(0, 0.3, 7.5);
    let roverAngle = Math.PI;
    let speed = 0;
    const maxSpeed = 0.22;
    const accel = 0.009;
    const friction = 0.94;
    const turnSpeed = 0.045;

    // ── CINEMATIC CAMERA MACRO DESTINATIONS ──
    const cameraDestinations: Record<string, { pos: THREE.Vector3; target: THREE.Vector3 }> = {
      warehouse: {
        pos: new THREE.Vector3(4.5, 3.2, 7.8),
        target: new THREE.Vector3(1.8, 1.4, 4.2),
      },
      pipeline: {
        pos: new THREE.Vector3(-3.8, 6.2, 4.2),
        target: new THREE.Vector3(-0.5, 4.8, 1.2),
      },
      vector: {
        pos: new THREE.Vector3(2.8, 12.2, 2.2),
        target: new THREE.Vector3(0.6, 11.2, -0.4),
      },
      tinyfish: {
        pos: new THREE.Vector3(-5.2, 12.0, -1.0),
        target: new THREE.Vector3(-3.8, 9.5, -4.2),
      },
      terminal: {
        pos: new THREE.Vector3(12, 12, 14),
        target: new THREE.Vector3(0, 2.5, 0),
      },
    };

    // Raycaster for building hover & click
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const getBuildingFromHit = (hit: THREE.Object3D | null) => {
      let curr = hit;
      while (curr && curr.parent && curr.parent !== scene) {
        if (curr === valveWheel || curr === valveGroup) {
          return { id: "valve" as const, title: "Pipeline Flow Valve", sub: "Click to toggle High-Throughput Burst" };
        }
        curr = curr.parent;
      }
      if (curr === bunkerGroup) {
        return { id: "warehouse" as StationKey, title: "Dimensional Warehouse & SCD 2", sub: "OmniQAI · 100% Parity Gate" };
      }
      if (curr === midGroup) {
        return { id: "pipeline" as StationKey, title: "PrettiFlow Distributed Pipelines", sub: "Founding Engineer · 46% Latency Reduction" };
      }
      if (curr === topGroup) {
        return { id: "vector" as StationKey, title: "Neural Vector Core & MCP Silo", sub: "IVFFlat Cosine Similarity & Guardrails" };
      }
      if (curr === poleGroup || curr === cablesGroup) {
        return { id: "tinyfish" as StationKey, title: "Autonomous Web Agent Drone", sub: "Live Sub-200ms Headless Extraction Engine" };
      }
      return null;
    };

    const onPointerMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const building = getBuildingFromHit(intersects[0].object);
        if (building) {
          renderer.domElement.style.cursor = "pointer";
          setHoveredBuilding({
            ...building,
            id: building.id === "valve" ? null : building.id,
            screenX: event.clientX,
            screenY: event.clientY,
          });
          return;
        }
      }
      renderer.domElement.style.cursor = "grab";
      setHoveredBuilding(null);
    };

    const onPointerDown = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);

      if (intersects.length > 0) {
        const building = getBuildingFromHit(intersects[0].object);
        if (building) {
          if (building.id === "valve") {
            toggleValveRef.current?.();
            return;
          }
          playSynthBeep(640, "sine", 0.1);
          setActiveStation(building.id);
        }
      }
    };

    renderer.domElement.addEventListener("pointermove", onPointerMove);
    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // ── ANIMATION LOOP (60 FPS) ──
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();

      // Spin AC fans (faster in turbo mode)
      const fanSpeedMul = turboStream ? 2.2 : 1.0;
      acFanMeshes.forEach((fan, idx) => {
        fan.rotation.z += (idx === 0 ? 0.12 : -0.15) * fanSpeedMul;
      });

      // Animate Rooftop AI Neural Core
      coreOuterMesh.rotation.x += 0.008;
      coreOuterMesh.rotation.y += 0.012;
      coreInnerMesh.rotation.x -= 0.015;
      coreInnerMesh.rotation.z += 0.015;
      neuralLight.intensity = (isNight ? 4.5 : 2.5) + Math.sin(time * 3.5) * 1.2;

      // Orbiting vector particles
      orbitMeshes.forEach((oMesh, idx) => {
        const angle = time * 1.2 + (idx / orbitCount) * Math.PI * 2;
        const rad = 1.35;
        oMesh.position.set(Math.cos(angle) * rad, Math.sin(angle * 1.5) * 0.4, Math.sin(angle) * rad);
      });

      // Subtle Catenary Cable Sway
      cablesGroup.position.y = Math.sin(time * 1.5) * 0.03;
      cablesGroup.rotation.z = Math.sin(time * 1.2) * 0.006;

      // Animate conduit data pulses (turbo multiplier)
      const pulseSpeed = turboStream ? 1.4 : 0.45;
      pulses.forEach((pulse, i) => {
        const t = (time * pulseSpeed + i / pulseCount) % 1;
        const pos = pipeCurve.getPointAt(t);
        pulse.position.copy(pos);
        if (turboStream) {
          pulse.scale.set(1.4, 1.4, 1.4);
        } else {
          pulse.scale.set(1.0, 1.0, 1.0);
        }
      });

      // Kinetic Steam Puffs venting from pipe
      steamParticles.forEach((sp) => {
        const t = (time * 0.6 + sp.seed) % 1;
        sp.mesh.position.y = 5.2 + t * 1.8;
        sp.mesh.position.x = 2.6 + Math.sin(time * 2 + sp.seed * 5) * 0.2 * t;
        const sc = 0.6 + t * 2.2;
        sp.mesh.scale.set(sc, sc, sc);
        (sp.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - t) * 0.35);
      });

      // Atmospheric particles gentle drift
      particlesMesh.rotation.y += 0.0008;

      // Pulse beacon rings & floating 3D icons
      beaconMeshes.forEach((b, idx) => {
        const s = 1.0 + Math.sin(time * 3 + idx) * 0.12;
        b.ring.scale.set(s, s, 1);
        b.light.intensity = (isNight ? 2.5 : 1.5) + Math.sin(time * 4 + idx) * 0.8;
        if (b.floatingIcon) {
          b.floatingIcon.rotation.y += 0.02;
          b.floatingIcon.position.y = 2.8 + Math.sin(time * 2.5 + idx) * 0.2;
        }
      });

      // ── DRIVING PHYSICS & ARCADE SUSPENSION ──
      const keys = keysRef.current;
      const isForward = keys["w"] || keys["arrowup"];
      const isBackward = keys["s"] || keys["arrowdown"];
      const isLeft = keys["a"] || keys["arrowleft"];
      const isRight = keys["d"] || keys["arrowright"];
      const isBoost = keys["shift"];
      const isHandbrake = keys[" "];

      setNitroActive(isBoost);
      nitroFlame.visible = isBoost && Math.abs(speed) > 0.02;

      const currentMax = isBoost ? maxSpeed * 1.6 : maxSpeed;

      if (isHandbrake) {
        speed *= 0.88;
      } else if (isForward) {
        speed = Math.min(speed + accel, currentMax);
      } else if (isBackward) {
        speed = Math.max(speed - accel, -currentMax * 0.6);
      } else {
        speed *= friction;
      }

      if (Math.abs(speed) > 0.001) {
        const dir = speed > 0 ? 1 : -1;
        if (isLeft) roverAngle += turnSpeed * dir;
        if (isRight) roverAngle -= turnSpeed * dir;
      }

      // Suspension Roll & Pitch
      chassis.rotation.x = -speed * 0.6; // Pitch
      const turnRoll = (isLeft ? 1 : isRight ? -1 : 0) * (Math.abs(speed) > 0.02 ? 0.08 : 0);
      chassis.rotation.z = THREE.MathUtils.lerp(chassis.rotation.z, turnRoll, 0.1);

      roverPos.x += Math.sin(roverAngle) * speed;
      roverPos.z += Math.cos(roverAngle) * speed;

      roverPos.x = Math.max(-10, Math.min(10, roverPos.x));
      roverPos.z = Math.max(-10, Math.min(10, roverPos.z));

      roverGroup.position.copy(roverPos);
      roverGroup.rotation.y = roverAngle + Math.PI;

      wheelMeshes.forEach((w) => {
        w.rotation.x += speed * 3;
      });

      setRoverSpeed(Math.round(Math.abs(speed) * 100));

      // ── CRATE COLLISION & SMASH PHYSICS ──
      crates.forEach((c) => {
        if (!c.smashed) {
          const dist = roverPos.distanceTo(c.pos);
          if (dist < 1.45 && Math.abs(speed) > 0.03) {
            c.smashed = true;
            c.solidMesh.visible = false;
            c.badgeGroup.visible = true;

            c.debris.forEach((deb) => {
              deb.mesh.visible = true;
              deb.mesh.position.set(
                (Math.random() - 0.5) * 0.4,
                0.3 + Math.random() * 0.4,
                (Math.random() - 0.5) * 0.4
              );
              const angle = Math.random() * Math.PI * 2;
              const force = 0.08 + Math.random() * 0.12;
              deb.vx = Math.cos(angle) * force + Math.sin(roverAngle) * speed * 0.5;
              deb.vy = 0.12 + Math.random() * 0.15;
              deb.vz = Math.sin(angle) * force + Math.cos(roverAngle) * speed * 0.5;
              deb.rotX = (Math.random() - 0.5) * 0.4;
              deb.rotY = (Math.random() - 0.5) * 0.4;
            });

            playSmashSound();

            setSmashedCrates((prev) => (prev.includes(c.id) ? prev : [...prev, c.id]));
            setLastAchievement({
              id: c.id,
              title: c.title,
              metric: c.fixedMetric,
              color: c.color,
            });
          }
        } else {
          c.debris.forEach((deb) => {
            if (deb.mesh.position.y > 0.18 || deb.vy > 0) {
              deb.mesh.position.x += deb.vx;
              deb.mesh.position.y += deb.vy;
              deb.mesh.position.z += deb.vz;
              deb.vy -= 0.008;

              if (deb.mesh.position.y <= 0.18) {
                deb.mesh.position.y = 0.18;
                deb.vy = -deb.vy * 0.38;
                deb.vx *= 0.8;
                deb.vz *= 0.8;
              }
              deb.mesh.rotation.x += deb.rotX;
              deb.mesh.rotation.y += deb.rotY;
            }
          });

          c.badgeGroup.rotation.y += 0.035;
          c.badgeGroup.position.y = 1.4 + Math.sin(time * 3 + c.pos.x) * 0.15;
        }
      });

      // Station proximity
      let detected: StationKey = null;
      beaconMeshes.forEach((b) => {
        const dist = roverPos.distanceTo(b.pos);
        if (dist < 3.2) {
          detected = b.id;
        }
      });
      setProximityStation(detected);

      // ── CINEMATIC CAMERA DIRECTOR (Macro Swoop / Follow) ──
      if (activeStation && cameraDestinations[activeStation]) {
        const dest = cameraDestinations[activeStation];
        camera.position.lerp(dest.pos, 0.045);
        controls.target.lerp(dest.target, 0.055);
      } else if (controlMode === "drive") {
        const targetCamX = roverPos.x + Math.sin(roverAngle) * -12 + 8;
        const targetCamZ = roverPos.z + Math.cos(roverAngle) * -12 + 8;
        camera.position.lerp(new THREE.Vector3(targetCamX, 14, targetCamZ), 0.04);
        controls.target.lerp(roverPos, 0.06);
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [controlMode, lightingMode, activeStation, turboStream]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#07080f] text-white select-none">
      {/* 3D WebGL Canvas */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* ── TOP EXECUTIVE HUD & BRAND BAR ── */}
      <header className="absolute top-0 left-0 right-0 z-30 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
        {/* Brand Identity Pill */}
        <div className="pointer-events-auto flex items-center gap-3 bg-[#161822]/90 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl shadow-xl press">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-slate-800 flex-shrink-0">
            <img src="/profile.png" alt="Sohail Shaik" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Sohail Shaik</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </h1>
            <p className="text-[10px] font-mono text-slate-400">Data &amp; AI Engineer</p>
          </div>
        </div>

        {/* Center: Bottleneck Smasher Achievement Pill */}
        <div className="pointer-events-auto hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-[#161822]/90 backdrop-blur-xl border border-white/10 shadow-xl font-mono text-xs">
          <span className="text-amber-400 font-bold flex items-center gap-1.5">
            <LuZap className="text-amber-400" />
            <span>BOTTLENECKS:</span>
          </span>
          <div className="flex items-center gap-1.5">
            {[
              { id: "coldstart", label: "Cold Start", fix: "100ms" },
              { id: "tablescan", label: "Table Scan", fix: "+40%" },
              { id: "techdebt", label: "Legacy ETL", fix: "100% Parity" },
            ].map((item) => {
              const isSmashed = smashedCrates.includes(item.id);
              return (
                <span
                  key={item.id}
                  className={`px-2 py-0.5 rounded-lg text-[10px] transition-all flex items-center gap-1 ${
                    isSmashed
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold shadow-sm shadow-emerald-500/20"
                      : "bg-white/5 text-slate-400 border border-white/10"
                  }`}
                  title={isSmashed ? `Smashed! ${item.fix}` : "Ram crate with rover to fix"}
                >
                  <span>{isSmashed ? "✓" : "⚡"}</span>
                  <span>{item.label}</span>
                </span>
              );
            })}
          </div>

          {smashedCrates.length > 0 && resetCratesRef.current && (
            <button
              onClick={() => resetCratesRef.current?.()}
              className="ml-1 text-slate-400 hover:text-white transition-colors"
              title="Reset Crates"
            >
              <LuRotateCcw className="text-xs" />
            </button>
          )}

          {/* Interactive Valve status button */}
          <button
            onClick={() => toggleValveRef.current?.()}
            className={`ml-2 px-2.5 py-0.5 rounded-lg border text-[10px] font-bold flex items-center gap-1 transition-all ${
              turboStream
                ? "bg-amber-500/20 border-amber-500/50 text-amber-300 animate-pulse shadow-md shadow-amber-500/20"
                : "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
            }`}
            title="Click or click brass valve in 3D to toggle Turbo Ingestion"
          >
            <LuGauge className={turboStream ? "text-amber-400" : "text-slate-400"} />
            <span>{turboStream ? "48.5k/s TURBO" : "14.2k/s VALVE"}</span>
          </button>
        </div>

        {/* Right Actions: Quick Drawer, Resume, Socials, Sound, Cam */}
        <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
          {/* Quick Index Drawer Button */}
          <button
            onClick={() => {
              playSynthBeep(580, "sine", 0.08);
              setDirectoryOpen(!directoryOpen);
            }}
            className="press flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white shadow-lg"
            title="Open Station Index"
          >
            <LuMenu className="text-sm text-sky-400" />
            <span className="hidden sm:inline">Index</span>
          </button>

          {/* Switch to Mac Workstation view */}
          {onSwitchToMac && (
            <button
              onClick={onSwitchToMac}
              className="press flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white shadow-lg"
              title="Switch to Mac Workstation View"
            >
              <LuLaptop className="text-sm text-sky-400" />
              <span className="hidden sm:inline">Mac View</span>
            </button>
          )}

          {/* 1-Page Resume */}
          <a
            href={links.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex items-center gap-1.5 rounded-xl bg-white text-slate-950 px-3.5 py-2 text-xs font-bold shadow-xl hover:bg-slate-200 transition-all font-mono"
          >
            <LuFileText className="text-sky-600" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Socials */}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex h-9 w-9 items-center justify-center rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-white shadow-lg"
            title="GitHub"
          >
            <LuGithub className="text-sm" />
          </a>

          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="press flex h-9 w-9 items-center justify-center rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-sky-400 shadow-lg"
            title="LinkedIn"
          >
            <LuLinkedin className="text-sm" />
          </a>

          {/* Day / Cyberpunk Night Mode Toggle */}
          <button
            onClick={() => {
              playSynthBeep(lightingMode === "day" ? 320 : 640, "sine", 0.1);
              setLightingMode(lightingMode === "day" ? "night" : "day");
            }}
            className="press flex h-9 w-9 items-center justify-center rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white shadow-lg"
            title={`Switch to ${lightingMode === "day" ? "Cyberpunk Night" : "Daylight"} Mode`}
          >
            {lightingMode === "day" ? <LuMoon className="text-sky-300 text-sm" /> : <LuSun className="text-amber-400 text-sm" />}
          </button>

          {/* Audio Synthesizer toggle */}
          <button
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              playSynthBeep(440, "triangle", 0.1);
            }}
            className="press flex h-9 w-9 items-center justify-center rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-slate-300 hover:text-white shadow-lg"
            title={soundEnabled ? "Mute audio" : "Enable sound effects"}
          >
            {soundEnabled ? <LuVolume2 className="text-emerald-400 text-sm" /> : <LuVolumeX className="text-slate-500 text-sm" />}
          </button>

          {/* Drive vs Free Orbit toggle */}
          <button
            onClick={() => setControlMode(controlMode === "drive" ? "orbit" : "drive")}
            className="press hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#161822]/80 backdrop-blur-xl border border-white/10 text-xs font-mono text-slate-300 hover:text-white shadow-lg"
            title="Toggle Camera Mode"
          >
            <LuCompass className="text-sky-400 text-sm" />
            <span>{controlMode === "drive" ? "Follow" : "Orbit"}</span>
          </button>
        </div>
      </header>

      {/* ── SMASH ACHIEVEMENT POPUP BANNER ── */}
      {lastAchievement && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-40 pointer-events-none animate-bounce">
          <div className="bg-[#161822]/95 backdrop-blur-2xl border-2 border-emerald-400/60 px-5 py-2.5 rounded-2xl shadow-2xl shadow-emerald-500/20 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-2 font-mono">
                <LuTrophy className="text-amber-400" />
                <span>{lastAchievement.title}</span>
              </p>
              <p className="text-[11px] text-emerald-300 font-mono font-semibold">
                Result: {lastAchievement.metric}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── 3D HOVER TOOLTIP FLOATING PILL ── */}
      {hoveredBuilding && !activeStation && (
        <div
          className="fixed pointer-events-none z-30 transition-all duration-75"
          style={{
            left: Math.min(window.innerWidth - 240, Math.max(20, hoveredBuilding.screenX - 110)),
            top: Math.max(70, hoveredBuilding.screenY - 70),
          }}
        >
          <div className="bg-[#161822]/95 backdrop-blur-xl border border-white/20 px-3.5 py-2 rounded-2xl shadow-2xl animate-fadeIn flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
            <div>
              <p className="text-xs font-bold text-white flex items-center gap-1">
                <span>{hoveredBuilding.title}</span>
                <span className="text-[10px] text-sky-400 font-mono">↵ Inspect</span>
              </p>
              <p className="text-[10px] text-slate-300 font-mono">{hoveredBuilding.sub}</p>
            </div>
          </div>
        </div>
      )}

      {/* ── QUICK INDEX SLIDE-OVER DRAWER ── */}
      {directoryOpen && (
        <div className="absolute top-20 right-6 z-40 w-72 rounded-3xl bg-[#161822]/95 backdrop-blur-2xl border border-white/15 p-4 shadow-2xl animate-fadeIn">
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10 text-xs font-mono text-slate-300">
            <span className="font-bold text-white flex items-center gap-2">
              <LuMenu className="text-sky-400" /> Station Index
            </span>
            <button onClick={() => setDirectoryOpen(false)} className="text-slate-400 hover:text-white">
              <LuX className="text-sm" />
            </button>
          </div>

          <div className="space-y-1">
            {[
              { id: "warehouse" as const, title: "Dimensional Warehouse", sub: "OmniQAI · 100% Parity Gate" },
              { id: "pipeline" as const, title: "Execution Pipeline", sub: "PrettiFlow · 46% Latency Cut" },
              { id: "vector" as const, title: "Neural Vector Core", sub: "pgvector IVFFlat Cosine" },
              { id: "tinyfish" as const, title: "Web Agent Drone", sub: "Sub-200ms Headless Engine" },
              { id: "terminal" as const, title: "Refinery Shell", sub: "Interactive CLI" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  playSynthBeep(640, "sine", 0.1);
                  setActiveStation(item.id);
                  setDirectoryOpen(false);
                }}
                className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group"
              >
                <div>
                  <p className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">{item.title}</p>
                  <p className="text-[10px] font-mono text-slate-400">{item.sub}</p>
                </div>
                <LuArrowRight className="text-xs text-slate-500 group-hover:text-white transition-colors" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── DRIVER CONTROLS & SPEEDOMETER OVERLAY (BOTTOM LEFT) ── */}
      <div className="absolute bottom-6 left-6 z-20 pointer-events-none hidden sm:flex flex-col gap-2">
        <div className="bg-[#161822]/85 backdrop-blur-xl border border-white/10 p-3 rounded-2xl shadow-2xl pointer-events-auto">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              DATA PROBE ACTIVE
            </span>
            <span className={nitroActive ? "text-amber-400 font-bold animate-pulse" : ""}>
              {roverSpeed} KP/S {nitroActive && "⚡"}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 text-center font-mono text-[10px]">
            <span />
            <span className="p-1 rounded bg-white/10 border border-white/15 text-white">W / ↑</span>
            <span />
            <span className="p-1 rounded bg-white/10 border border-white/15 text-white">A / ←</span>
            <span className="p-1 rounded bg-white/10 border border-white/15 text-white">S / ↓</span>
            <span className="p-1 rounded bg-white/10 border border-white/15 text-white">D / →</span>
          </div>

          <p className="mt-2 text-[10px] text-slate-400 font-mono text-center">
            WASD: Drive · Shift: Nitro · Click Valve: Turbo
          </p>
        </div>
      </div>

      {/* ── LIVE TELEMETRY STREAM MARQUEE (BOTTOM RIGHT) ── */}
      <div className="absolute bottom-6 right-6 z-20 pointer-events-none hidden sm:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#161822]/85 backdrop-blur-xl border border-white/10 text-xs font-mono shadow-2xl">
        <span className={`h-2 w-2 rounded-full ${turboStream ? "bg-amber-400 animate-ping" : "bg-emerald-400 animate-pulse"}`} />
        <span className="text-slate-400 text-[11px]">{turboStream ? "TURBO STREAM:" : "STREAMING:"}</span>
        <span className={`font-bold ${turboStream ? "text-amber-300" : "text-white"}`}>{telemetryRate.toLocaleString()} msg/s</span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400 text-[11px]">P99:</span>
        <span className="text-emerald-400 font-bold">{telemetryP99}ms</span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400 text-[11px]">PARITY:</span>
        <span className="text-sky-400 font-bold">100.00%</span>
      </div>

      {/* ── INTERACTIVE PROXIMITY ACTION PROMPT ── */}
      {proximityStation && !activeStation && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
          <button
            onClick={() => {
              playSynthBeep(750, "triangle", 0.15);
              setActiveStation(proximityStation);
            }}
            className="press flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-950 font-bold text-xs shadow-2xl hover:bg-slate-200 transition-all font-mono border-2 border-sky-400"
          >
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-ping" />
            <span>PRESS ENTER TO INSPECT {proximityStation.toUpperCase()}</span>
          </button>
        </div>
      )}

      {/* ──────────────────────────────────────────────────────────
          3-SECOND FLOATING MICRO-HUD (Camera swoops in when active!)
         ────────────────────────────────────────────────────────── */}
      {activeStation && (
        <div className="absolute top-20 right-4 sm:right-6 z-40 w-[360px] max-w-[calc(100vw-2rem)] rounded-3xl bg-[#161822]/95 backdrop-blur-2xl border border-white/20 p-5 shadow-2xl animate-fadeIn">
          {/* HUD Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-400 animate-ping" />
              <span className="text-[11px] font-mono text-slate-400 tracking-wider">
                MACRO FOCUS // {activeStation.toUpperCase()}
              </span>
            </div>
            <button
              onClick={() => setActiveStation(null)}
              className="h-7 w-7 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors press"
              title="Close focus and pull camera back"
            >
              <LuX className="text-xs" />
            </button>
          </div>

          {/* ── HUD CONTENT 1: WAREHOUSE ── */}
          {activeStation === "warehouse" && (
            <div className="pt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LuShieldCheck className="text-sky-400" /> OmniQAI · Data Warehouse
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  High-throughput financial ETL &amp; dimensional modeling.
                </p>
              </div>

              {/* 2 Big Bold Metrics */}
              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">RECON PARITY</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5">100.0%</p>
                  <p className="text-[9px] text-slate-400">Zero data loss</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">INGESTION</p>
                  <p className="text-lg font-bold text-sky-400 mt-0.5">{turboStream ? "48.5k/s" : "14.2k/s"}</p>
                  <p className="text-[9px] text-slate-400">Stream verified</p>
                </div>
              </div>

              {/* 1-Line Impact */}
              <p className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                Authored automated SQL reconciliation gates asserting source-vs-target row counts, eliminating 95% of downstream financial settlement anomalies.
              </p>

              {/* Interactive SCD 2 Snapshot Switcher */}
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400 flex items-center gap-1">
                    <LuClock className="text-sky-400" /> SCD 2 Audit Time-Travel
                  </span>
                  <div className="flex gap-1">
                    {[2023, 2025, 2026].map((yr) => (
                      <button
                        key={yr}
                        onClick={() => {
                          playSynthBeep(yr * 0.4, "sine", 0.08);
                          setScdYear(yr as any);
                        }}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono transition-all ${
                          scdYear === yr
                            ? "bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/30"
                            : "bg-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        {yr}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-[11px] font-mono space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>Surrogate Key:</span>
                    <span className="text-white font-bold">{scdYear === 2023 ? "10482" : scdYear === 2025 ? "10483" : "10484"}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Account Tier:</span>
                    <span className="text-emerald-300 font-bold">
                      {scdYear === 2023 ? "Standard Tier" : scdYear === 2025 ? "Enterprise Gold" : "Mission-Critical Platinum"}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[10px]">
                    <span>Valid Range:</span>
                    <span>{scdYear === 2023 ? "2023 → 2025" : scdYear === 2025 ? "2025 → 2026" : "2026 → Current"}</span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Informatica IICS", "Oracle PL/SQL", "PostgreSQL", "SCD Type 2", "AWS"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── HUD CONTENT 2: PIPELINES ── */}
          {activeStation === "pipeline" && (
            <div className="pt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LuFolderGit2 className="text-amber-400" /> PrettiFlow · Execution Pipelines
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Founding Data &amp; AI Engineer · Scaled engine to 4,000+ users.
                </p>
              </div>

              {/* 2 Big Bold Metrics */}
              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">LATENCY CUT</p>
                  <p className="text-lg font-bold text-amber-400 mt-0.5">-46%</p>
                  <p className="text-[9px] text-slate-400">15m → 8m build</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">COLD START</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5">~100ms</p>
                  <p className="text-[9px] text-slate-400">Pre-warmed pools</p>
                </div>
              </div>

              {/* 1-Line Impact */}
              <p className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                Parallelized topological dependency graphs, built AST query guardrails, and orchestrated Redis Pub/Sub event streams for instant container dispatch.
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Airflow", "Docker", "Redis", "Python", "WebSockets", "CLI"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── HUD CONTENT 3: VECTOR CORE & MCP ── */}
          {activeStation === "vector" && (
            <div className="pt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LuLayers className="text-purple-400" /> Neural Vector Core &amp; MCP
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Grounded semantic retrieval across multi-tenant schemas.
                </p>
              </div>

              {/* 2 Big Bold Metrics */}
              <div className="grid grid-cols-2 gap-2 font-mono">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">SEARCH P99</p>
                  <p className="text-lg font-bold text-purple-400 mt-0.5">&lt; 20ms</p>
                  <p className="text-[9px] text-slate-400">IVFFlat Cosine</p>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10">
                  <p className="text-[10px] text-slate-400">GUARDRAILS</p>
                  <p className="text-lg font-bold text-emerald-400 mt-0.5">Zero Halluc</p>
                  <p className="text-[9px] text-slate-400">MCP Structured</p>
                </div>
              </div>

              {/* 1-Line Impact */}
              <p className="text-xs text-slate-300 leading-relaxed bg-white/[0.02] p-3 rounded-xl border border-white/5">
                Architected high-throughput semantic retrieval layer with pgvector embeddings, AST query sanitization, and automated execution guardrails.
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["pgvector", "Model Context Protocol", "LangChain", "OpenAI", "Next.js"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── HUD CONTENT 4: WEB AGENT DRONE ── */}
          {activeStation === "tinyfish" && (
            <div className="pt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <LuSparkles className="text-pink-400" /> Autonomous Web Agent Drone
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Sub-200ms headless Chromium scraping &amp; structured extraction.
                </p>
              </div>

              {/* Interactive 1-Click Scanner */}
              <div className="space-y-2">
                <div className="flex gap-1.5">
                  <input
                    type="text"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://example.com"
                    className="flex-1 px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-xs font-mono text-white focus:outline-none focus:border-pink-500"
                  />
                  <button
                    onClick={runAgentScan}
                    disabled={agentRunning}
                    className="press px-3.5 py-2 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-xs font-mono flex items-center gap-1.5 disabled:opacity-50 transition-all shadow-lg shadow-pink-600/30"
                  >
                    {agentRunning ? <LuRefreshCw className="animate-spin text-sm" /> : <LuPlay className="text-sm" />}
                    <span>{agentRunning ? "Scanning" : "Dispatch"}</span>
                  </button>
                </div>

                {agentResult && (
                  <div className="p-3 rounded-xl bg-black/60 border border-pink-500/30 text-[11px] font-mono space-y-1 animate-fadeIn">
                    <p className="text-emerald-400 font-bold flex items-center gap-1">
                      <LuCheck /> Extracted in 135ms (200 OK)
                    </p>
                    <p className="text-white truncate">Prettiflow: Internal Tools &amp; Containers</p>
                    <p className="text-slate-400 text-[10px]">Headless Chromium execution verified.</p>
                  </div>
                )}
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Puppeteer", "Chromium", "Async Engine", "JSON Schema", "REST API"].map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* ── HUD CONTENT 5: REFINERY SHELL ── */}
          {activeStation === "terminal" && (
            <div className="pt-4 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  SHELL v2.4 (x86_64)
                </span>
                <span className="text-slate-400 text-[10px]">100% OK</span>
              </div>

              <div className="h-[150px] overflow-y-auto space-y-1 mac-scrollbar bg-black/60 p-3 rounded-xl border border-white/10">
                {terminalHistory.map((item, idx) => (
                  <p key={idx} className={item.type === "cmd" ? "text-sky-300 font-bold" : "text-slate-300 text-[10px]"}>
                    {item.text}
                  </p>
                ))}
              </div>

              <form onSubmit={handleTerminalSubmit} className="flex items-center gap-1.5 pt-1">
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'telemetry', 'warehouse'..."
                  className="flex-1 bg-black/50 border border-white/10 px-3 py-1.5 rounded-lg text-white focus:outline-none placeholder-slate-600 font-mono text-[11px]"
                  autoFocus
                />
                <button type="submit" className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs">
                  Run ↵
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* ── MOBILE TOUCH CONTROLS ── */}
      <div className="absolute bottom-6 right-6 z-20 flex sm:hidden flex-col gap-2">
        <div className="flex justify-center">
          <button
            onPointerDown={() => {
              keysRef.current["w"] = true;
            }}
            onPointerUp={() => {
              keysRef.current["w"] = false;
            }}
            className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 backdrop-blur-md text-white font-bold flex items-center justify-center text-lg shadow-xl"
          >
            ↑
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onPointerDown={() => {
              keysRef.current["a"] = true;
            }}
            onPointerUp={() => {
              keysRef.current["a"] = false;
            }}
            className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 backdrop-blur-md text-white font-bold flex items-center justify-center text-lg shadow-xl"
          >
            ←
          </button>
          <button
            onPointerDown={() => {
              keysRef.current["s"] = true;
            }}
            onPointerUp={() => {
              keysRef.current["s"] = false;
            }}
            className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 backdrop-blur-md text-white font-bold flex items-center justify-center text-lg shadow-xl"
          >
            ↓
          </button>
          <button
            onPointerDown={() => {
              keysRef.current["d"] = true;
            }}
            onPointerUp={() => {
              keysRef.current["d"] = false;
            }}
            className="w-14 h-14 rounded-2xl bg-white/20 active:bg-white/40 backdrop-blur-md text-white font-bold flex items-center justify-center text-lg shadow-xl"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
