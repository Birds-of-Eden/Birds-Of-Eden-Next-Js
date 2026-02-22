// "use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// interface AnimationProps {
//   modelUrl: string;
// }

// export default function Animation({ modelUrl }: AnimationProps) {
//   const mountRef = useRef<HTMLDivElement>(null);
//   const modelRef = useRef<THREE.Object3D | null>(null);
//   const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
//   const sceneRef = useRef<THREE.Scene | null>(null);
//   const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     const mount = mountRef.current;

//     // Scene setup
//     const scene = new THREE.Scene();
//     scene.background = null;
//     sceneRef.current = scene;

//     // Camera setup - Down-to-top 45° view
//     const camera = new THREE.PerspectiveCamera(
//       10,
//       mount.clientWidth / mount.clientHeight,
//       0.1,
//       1000
//     );
//     // Position the camera above the object and angle it downward
//     camera.position.set(-2, -1, 5); // (x, y, z) - y is up, z is depth
//     camera.lookAt(0, 0, 0); // Look at the center of the scene
//     cameraRef.current = camera;

//     // Renderer setup
//     const renderer = new THREE.WebGLRenderer({
//       antialias: true,
//       alpha: true,
//     });
//     renderer.setClearColor(0x000000, 0);
//     renderer.setSize(mount.clientWidth, mount.clientHeight);
//     rendererRef.current = renderer;
//     mount.appendChild(renderer.domElement);

//     // Lighting
//     const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
//     scene.add(ambientLight);

//     const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
//     directionalLight.position.set(3, 3, 3);
//     scene.add(directionalLight);

//     // Load Model
//     const loader = new GLTFLoader();
//     loader.load(
//       modelUrl,
//       (gltf: GLTF) => {
//         modelRef.current = gltf.scene;
//         gltf.scene.scale.set(1, 1, 1);
//         scene.add(gltf.scene);
//       },
//       undefined,
//       (error: ErrorEvent) => {
//         console.error("Error loading GLB model:", error);
//       }
//     );

//     // Animation loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       if (modelRef.current) {
//         // modelRef.current.rotation.y += 0.01; // Rotate the model
//       }
//       renderer.render(scene, camera);
//     };
//     animate();

//     // Handle resizing
//     const handleResize = () => {
//       if (!mountRef.current || !cameraRef.current || !rendererRef.current)
//         return;

//       const { clientWidth, clientHeight } = mountRef.current;
//       cameraRef.current.aspect = clientWidth / clientHeight;
//       cameraRef.current.updateProjectionMatrix();
//       rendererRef.current.setSize(clientWidth, clientHeight);
//     };

//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);

//       if (rendererRef.current) {
//         rendererRef.current.dispose();
//         if (mount.contains(rendererRef.current.domElement)) {
//           mount.removeChild(rendererRef.current.domElement);
//         }
//       }

//       if (sceneRef.current && modelRef.current) {
//         sceneRef.current.remove(modelRef.current);
//       }
//     };
//   }, [modelUrl]);

//   return (
//     <div
//       ref={mountRef}
//       style={{
//         width: "100px",
//         height: "100px",
//       }}
//     />
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

interface AnimationProps {
  modelUrl: string;
}

export default function Animation({ modelUrl }: AnimationProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null); // Use a group to wrap the model
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const mount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;

    // Camera setup - Down-to-top 45° view
    const camera = new THREE.PerspectiveCamera(
      10,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    // Position the camera so it's slightly below the object and looking upward
    camera.position.set(-2, -1, 5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(3, 3, 3);
    scene.add(directionalLight);

    // Create a group to wrap the loaded model (for independent inner rotation)
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;
    scene.add(modelGroup);

    // Load Model
    const loader = new GLTFLoader();
    loader.load(
      modelUrl,
      (gltf: GLTF) => {
        // Clear any previous children and add the new model to the group
        modelGroup.clear();
        gltf.scene.scale.set(1, 1, 1);
        modelGroup.add(gltf.scene);
      },
      undefined,
      (error: ErrorEvent) => {
        console.error("Error loading GLB model:", error);
      }
    );

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the group that contains the model.
      // This rotation will be independent of the outer OrbitItem animation.
      if (modelGroupRef.current) {
        modelGroupRef.current.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Handle resizing
    const handleResize = () => {
      if (!mountRef.current || !cameraRef.current || !rendererRef.current)
        return;
      const { clientWidth, clientHeight } = mountRef.current;
      cameraRef.current.aspect = clientWidth / clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(clientWidth, clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);

      if (rendererRef.current) {
        rendererRef.current.dispose();
        if (mount.contains(rendererRef.current.domElement)) {
          mount.removeChild(rendererRef.current.domElement);
        }
      }

      if (sceneRef.current && modelGroupRef.current) {
        sceneRef.current.remove(modelGroupRef.current);
      }
    };
  }, [modelUrl]);

  return (
    <div
      ref={mountRef}
      style={{
        width: "100px",
        height: "100px",
      }}
    />
  );
}
