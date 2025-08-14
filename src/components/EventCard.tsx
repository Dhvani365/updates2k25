// "use client";

// import { cn } from "@/lib/utils";
// import BlurFade from "./magicui/blur-fade";
// import { BorderBeam } from "./magicui/border-beam";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const Card = ({
//   title,
//   tagline,
//   coverImage,
// }: {
//   title: string;
//   tagline: string;
//   coverImage: string;
// }) => {
//   return (
//     <BlurFade inView className="overflow-hidden mx-auto">
//       {/* Card Container */}
//       <motion.div
//         whileHover={{ scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 200, damping: 15 }}
//         className="max-w-xs w-full rounded-lg shadow-[0_0_15px_hsl(var(--primary))] hover:shadow-[0_0_25px_hsl(var(--secondary))] bg-brickDark/80 border-2 border-primary/80 relative overflow-hidden"
//       >
//         {/* Brick Overlay */}
//         <div className="absolute inset-0 opacity-15 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2230%22 viewBox=%220 0 60 30%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Crect width=%2260%22 height=%2230%22 fill=%22none%22 stroke=%22hsl(300,100%25,65%25)%22 stroke-width=%222%22/%3E%3C/svg%3E')] pointer-events-none"></div>

//         {/* Card Content */}
//         <div
//           className={cn(
//             "group w-full cursor-pointer overflow-hidden relative h-fit md:h-96 rounded-md mx-auto flex flex-col justify-between gap-6 py-6 px-4"
//           )}
//         >
//           {/* Image */}
//           <div className="relative overflow-hidden rounded border border-primary/50 shadow-lg shadow-primary/30">
//             <Image
//               src={coverImage}
//               alt={`cover image for event ${title}`}
//               width={1080}
//               height={1920}
//               className="object-cover h-48 aspect-video transition-transform duration-500 group-hover:scale-110"
//               priority
//             />
//           </div>

//           {/* Text */}
//           <div className="text relative z-50 text-center">
//             <h1 className="font-bold text-xl md:text-2xl uppercase text-primary drop-shadow-[0_0_8px_hsl(var(--primary))]">
//               {title}
//             </h1>
//             <p className="font-medium text-secondary text-sm drop-shadow-[0_0_6px_hsl(var(--secondary))]">
//               {tagline}
//             </p>
//           </div>

//           {/* Border Beam Animation */}
//           <BorderBeam size={250} duration={48} delay={9} className="" />
//         </div>
//       </motion.div>
//     </BlurFade>
//   );
// };

// export default Card;

"use client";

import { cn } from "../lib/utils";
import BlurFade from "./magicui/blur-fade";
import { BorderBeam } from "./magicui/border-beam";
import Image from "next/image";
import { motion } from "framer-motion";

const Card = ({
  title,
  tagline,
  coverImage,
}: {
  title: string;
  tagline: string;
  coverImage: string;
}) => {
  return (
    <BlurFade inView className="overflow-hidden mx-auto">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative max-w-xs w-full rounded-none shadow-[0_0_15px_hsl(var(--primary))] hover:shadow-[0_0_25px_hsl(var(--secondary))] border-2 border-primary/80 overflow-hidden"
      >
        {/* Inline Neon Brick SVG Background */}
        <div className="absolute inset-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 300 400"
            preserveAspectRatio="none"
          >
            <defs>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Dark Base */}
            <rect width="300" height="400" fill="#0a0000" />

            {/* Neon Brick Pattern */}
            {Array.from({ length: 10 }).map((_, row) => (
              <g key={`row-${row}`} filter="url(#glow)">
                {Array.from({ length: row % 2 === 0 ? 6 : 7 }).map((_, col) => {
                  const x = row % 2 === 0 ? col * 60 : col * 60 - 30;
                  return (
                    <rect
                      key={`brick-${row}-${col}`}
                      x={x}
                      y={row * 40}
                      width={60}
                      height={40}
                      fill="none"
                      stroke="#00ffff"
                      strokeWidth="2"
                    />
                  );
                })}
              </g>
            ))}
          </svg>
        </div>

        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 -z-5 bg-[#0a0000] opacity-60"></div>

        {/* Card Content */}
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative h-fit md:h-96 mx-auto flex flex-col justify-between gap-6 py-6 px-4"
          )}
        >
          {/* Image */}
          <div className="relative overflow-hidden rounded border border-primary/50 shadow-lg shadow-primary/30">
            <Image
              src={coverImage}
              alt={`cover image for event ${title}`}
              width={1080}
              height={1920}
              className="object-cover h-48 aspect-video transition-transform duration-500 group-hover:scale-110"
              priority
            />
          </div>

          {/* Text */}
          <div className="text relative z-50 text-center">
            <h1 className="font-bold text-xl md:text-2xl uppercase text-white drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
              {title}
            </h1>
            <p className="font-medium text-sm text-gray-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.6)]">
              {tagline}
            </p>
          </div>

          {/* Border Beam Animation */}
          <BorderBeam size={250} duration={48} delay={9} className="" />
        </div>
      </motion.div>
    </BlurFade>
  );
};

export default Card;

