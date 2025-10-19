// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Firework({ delay }) {
//     const [showExplosion, setShowExplosion] = useState(false);
//     const [xPos] = useState(`${Math.random() * 90 + 5}%`); // random horizontal position

//     useEffect(() => {
//         const timer = setTimeout(() => setShowExplosion(true), delay + 1200);
//         return () => clearTimeout(timer);
//     }, [delay]);

//     const rocketVariants = {
//         initial: { y: "100%", opacity: 0 },
//         animate: {
//             y: ["100%", "30%"],
//             opacity: [1, 1],
//             transition: {
//                 duration: 1.2,
//                 delay: delay / 1000,
//                 ease: "easeOut",
//             },
//         },
//     };

//     const explosionVariants = {
//         hidden: { scale: 0, opacity: 1 },
//         visible: {
//             scale: [1, 1.3, 0],
//             opacity: [1, 0.8, 0],
//             transition: {
//                 duration: 0.8,
//                 ease: "easeOut",
//                 delay: delay / 1000 + 1.2,
//             },
//         },
//     };

//     const trailVariants = {
//         animate: {
//             height: ["0px", "100px"],
//             opacity: [1, 0],
//             transition: {
//                 duration: 1.2,
//                 delay: delay / 1000,
//                 ease: "easeOut",
//             },
//         },
//     };

//     const colors = ["#ff004d", "#ffdd00", "#00e1ff", "#aaff00", "#ff8c00"];

//     return (
//         <div
//             className="absolute bottom-0 left-0 w-full h-full"
//             style={{
//                 pointerEvents: "none",
//             }}
//         >
//             {/* Rocket + Trail */}
//             {!showExplosion && (
//                 <>
//                     {/* Rocket */}
//                     <motion.div
//                         className="absolute bottom-0 w-2 h-6 rounded-full bg-yellow-400 shadow-[0_0_20px_4px_rgba(255,255,100,0.8)]"
//                         variants={rocketVariants}
//                         initial="initial"
//                         animate="animate"
//                         style={{
//                             left: xPos,
//                         }}
//                     />
//                     {/* Trail */}
//                     <motion.div
//                         className="absolute bottom-0 w-1 bg-gradient-to-t from-yellow-400 via-orange-500 to-transparent"
//                         variants={trailVariants}
//                         animate="animate"
//                         style={{
//                             left: `calc(${xPos} + 0.25rem)`, // align trail under rocket
//                         }}
//                     />
//                 </>
//             )}

//             {/* Explosion */}
//             {/* {showExplosion &&
//                 colors.map((color, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute rounded-full"
//                         variants={explosionVariants}
//                         initial="hidden"
//                         animate="visible"
//                         style={{
//                             width: "10px",
//                             height: "10px",
//                             backgroundColor: color,
//                             left: xPos,
//                             top: `${Math.random() * 40 + 10}%`,
//                             boxShadow: `0 0 20px ${color}`,
//                         }}
//                     />
//                 ))} */}

//             {showExplosion &&
//                 colors.map((color, i) => (
//                     <motion.div
//                         key={i}
//                         className="absolute rounded-full"
//                         variants={explosionVariants}
//                         initial="hidden"
//                         animate="visible"
//                         style={{
//                             width: "10px",
//                             height: "10px",
//                             backgroundColor: color,
//                             left: xPos,
//                             top: `${Math.random() * 40 + 10}%`,
//                             boxShadow: `0 0 20px ${color}`,
//                             transform: `translate(${Math.cos(i * 72) * 40}px, ${Math.sin(i * 72) * 40
//                                 }px)`, // circular spread
//                         }}
//                     />
//                 ))}

//         </div>
//     );
// }







import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Firework({ delay }) {
    const [showExplosion, setShowExplosion] = useState(false);
    const [xPos] = useState(`${Math.random() * 80 + 10}%`); // random horizontal position
    const [yPos] = useState(`${Math.random() * 40 + 20}%`); // random height for explosion
    const numSparks = 20; // number of spark particles

    useEffect(() => {
        const timer = setTimeout(() => setShowExplosion(true), delay + 1200);
        return () => clearTimeout(timer);
    }, [delay]);

    // 🔥 Rocket Animation
    const rocketVariants = {
        initial: { y: "100%", opacity: 0 },
        animate: {
            y: ["100%", yPos],
            opacity: [1, 1],
            transition: {
                duration: 1.2,
                delay: delay / 1000,
                ease: "easeOut",
            },
        },
    };

    // 🌠 Spark (Explosion Particle) Animation
    const sparkVariants = (angle) => ({
        hidden: { x: 0, y: 0, opacity: 1, scale: 1 },
        visible: {
            x: Math.cos(angle) * 80,
            y: Math.sin(angle) * 80 + 20, // sparks rise slightly, then fall
            opacity: [1, 1, 0],
            scale: [1, 1.2, 0],
            transition: {
                duration: 1.8,
                ease: [0.22, 1, 0.36, 1],
                delay: delay / 1000 + 1.2,
            },
        },
    });

    // 🎨 Firework Colors
    const colors = ["#ff004d", "#ffdd00", "#00e1ff", "#aaff00", "#ff8c00"];

    // 🧨 Trail Animation (glow below rocket)
    const trailVariants = {
        animate: {
            height: ["0px", "100px"],
            opacity: [1, 0],
            transition: {
                duration: 1.2,
                delay: delay / 1000,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="absolute inset-0 pointer-events-none">
            {/* 🚀 Rocket */}
            {!showExplosion && (
                <>
                    <motion.div
                        className="absolute bottom-0 w-2 h-6 rounded-full bg-yellow-400 shadow-[0_0_25px_6px_rgba(255,255,120,0.8)]"
                        variants={rocketVariants}
                        initial="initial"
                        animate="animate"
                        style={{
                            left: xPos,
                        }}
                    />
                    {/* 🔥 Trail */}
                    <motion.div
                        className="absolute bottom-0 w-1 bg-gradient-to-t from-yellow-400 via-orange-500 to-transparent"
                        variants={trailVariants}
                        animate="animate"
                        style={{
                            left: `calc(${xPos} + 0.25rem)`,
                        }}
                    />
                </>
            )}

            {/* 💥 Explosion (Circular Sparks) */}
            {showExplosion &&
                [...Array(numSparks)].map((_, i) => {
                    const angle = (i / numSparks) * Math.PI * 2; // 360° spread
                    const color = colors[i % colors.length];
                    return (
                        <motion.div
                            key={i}
                            className="absolute rounded-full"
                            variants={sparkVariants(angle)}
                            initial="hidden"
                            animate="visible"
                            style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: color,
                                left: xPos,
                                top: yPos,
                                boxShadow: `0 0 25px ${color}`,
                            }}
                        />
                    );
                })}
        </div>
    );
}
