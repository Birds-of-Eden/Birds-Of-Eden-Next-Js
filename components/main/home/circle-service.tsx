"use client";

import { OrbitPath, OrbitItem } from "react-orbit-component";
import { GiDeliveryDrone } from "react-icons/gi";
import { SiOpenai } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import Image from "next/image";

export default function CircleServices() {
  return (
    <div className="relative flex w-full size-[450px] flex-col items-center justify-center lg:h-[700px]">
      <OrbitPath
        type="circle"
        className="absolute size-[350px] xl:size-[450px] rounded-full border-2 dark:border-white/10"
      >
        <OrbitItem
          direction="clockwise"
          startAngle={0}
          className="size-16 text-[64px] md:size-[100px] md:text-[100px] rounded-full"
        >
          <div className="animate-spin-clockwise">
            {" "}
            {/* সংশোধিত ক্লাস */}
            <SiOpenai
              style={{
                boxShadow:
                  "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 0px, rgb(255 255 255) 0px 0px 50px, rgb(255 255 255) 0px 0px 100px",
              }}
              className="shrink-0 rounded-full bg-black p-4 text-white ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm"
            />
          </div>
        </OrbitItem>
        {/* বাকি আইকনগুলোর জন্য একই পরিবর্তন করুন */}
        <OrbitItem
          direction="clockwise"
          startAngle={72}
          className="size-16 text-[64px] md:size-[100px] md:text-[100px] rounded-full"
        >
          <div className="animate-spin-clockwise">
            <GiDeliveryDrone
              style={{
                boxShadow:
                  "rgb(251 191 36 / 70%) 0px 0px 5px, rgb(251 191 36 / 70%) 0px 0px 0px, rgb(251 191 36 / 70%) 0px 0px 50px, rgb(251 191 36 / 70%) 0px 0px 100px",
              }}
              className="shrink-0 rounded-full p-4 text-amber-400 ring-2 ring-amber-400 ring-offset-2 ring-offset-transparent backdrop-blur-sm"
            />
          </div>
        </OrbitItem>
        <OrbitItem
          direction="clockwise"
          startAngle={144}
          className="size-16 text-[64px] md:size-[100px] md:text-[100px] rounded-full"
        >
          <div className="animate-spin-clockwise">
            <FaReact
              style={{
                boxShadow:
                  "0 0 5px #03e9f4, 0 0 0px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
              }}
              className="shrink-0 rounded-full p-4 text-[#61DAFB] ring-1 ring-[#61DAFB] ring-offset-2 ring-offset-transparent"
            />
          </div>
        </OrbitItem>
        <OrbitItem
          direction="clockwise"
          startAngle={216}
          className="size-16 text-[64px] md:size-[100px] md:text-[100px] rounded-full"
        >
          <div className="animate-spin-clockwise">
            <SiNextdotjs
              style={{
                boxShadow:
                  "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 0px, rgb(255 255 255) 0px 0px 50px, rgb(255 255 255) 0px 0px 100px",
              }}
              className="shrink-0 rounded-full bg-white text-black ring-2 ring-white ring-offset-2 ring-offset-transparent backdrop-blur-sm"
            />
          </div>
        </OrbitItem>
        <OrbitItem
          direction="clockwise"
          startAngle={288}
          className="size-16 md:size-[100px] md:text-[100px] rounded-full"
        >
          <div className="animate-spin-clockwise">
            <div
              className="rounded-full p-4 ring-2"
              style={{
                boxShadow:
                  "0 0 5px #346F9D, 0 0 0px #346F9D, 0 0 50px #346F9D, 0 0 100px #346F9D, 0 0 5px #F7D654, 0 0 0px #F7D654, 0 0 50px #F7D654, 0 0 100px #F7D654",
              }}
            >
              <Image
                src="/python-logo.png"
                alt="python-logo"
                width="100"
                height="100"
              />
            </div>
          </div>
        </OrbitItem>
      </OrbitPath>
    </div>
  );
}

// "use client";

// import { OrbitPath, OrbitItem } from "react-orbit-component";
// import dynamic from "next/dynamic";

// // Dynamically import the Three.js component
// const Animation = dynamic(() => import("./Animation"), { ssr: false });

// export default function CircleServices() {
//   return (
//     <div className="relative flex w-full h-[450px] flex-col items-center justify-center lg:h-[700px]">
//       <OrbitPath
//         type="circle"
//         // Remove any background color or dark styles
//         className="absolute size-[350px] xl:size-[450px] rounded-full border-2 dark:border-white/10"
//       >
//         {/* 1. ChatGPT Model */}
//         <OrbitItem
//           direction="clockwise"
//           startAngle={0}
//           className="rounded-full p-2 ring-2 bg-gray-300"
//           style={{
//             boxShadow:
//               "0 0 5px #E3286F, 0 0 0px #FF2700, 0 0 50px #6FC700, 0 0 100px #00AED0",
//           }}
//         >
//           <Animation modelUrl="/3dmodel/chatgpt3.glb" />
//         </OrbitItem>

//         {/* 2. Drone Model */}
//         <OrbitItem
//           direction="clockwise"
//           startAngle={72}
//           className="rounded-full p-2 ring-2"
//           style={{
//             boxShadow:
//               "rgb(251 191 36 / 70%) 0px 0px 5px, rgb(251 191 36 / 70%) 0px 0px 0px, rgb(251 191 36 / 70%) 0px 0px 50px, rgb(251 191 36 / 70%) 0px 0px 100px",
//           }}
//         >
//           <Animation modelUrl="/3dmodel/drone1.glb" />
//         </OrbitItem>

//         {/* 3. React Model */}
//         <OrbitItem
//           direction="clockwise"
//           startAngle={144}
//           className="rounded-full p-2 ring-2"
//           style={{
//             boxShadow:
//               "0 0 5px #03e9f4, 0 0 0px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4",
//           }}
//         >
//           <Animation modelUrl="/3dmodel/react1.glb" />
//         </OrbitItem>

//         {/* 4. Next.js Model */}
//         <OrbitItem
//           direction="clockwise"
//           startAngle={216}
//           className="rounded-full p-2 ring-2"
//           style={{
//             boxShadow:
//               "rgb(255 255 255) 0px 0px 5px, rgb(255 255 255) 0px 0px 0px, rgb(255 255 255) 0px 0px 50px, rgb(255 255 255) 0px 0px 100px",
//           }}
//         >
//           <Animation modelUrl="/3dmodel/nextjs1.glb" />
//         </OrbitItem>

//         {/* 5. Python Model */}
//         <OrbitItem
//           direction="clockwise"
//           startAngle={288}
//           className="rounded-full p-2 ring-2"
//           style={{
//             boxShadow:
//               "0 0 5px #346F9D, 0 0 0px #346F9D, 0 0 50px #346F9D, 0 0 100px #346F9D, 0 0 5px #F7D654, 0 0 0px #F7D654, 0 0 50px #F7D654, 0 0 100px #F7D654",
//           }}
//         >
//           <Animation modelUrl="/3dmodel/python1.glb" />
//         </OrbitItem>
//       </OrbitPath>
//     </div>
//   );
// }
