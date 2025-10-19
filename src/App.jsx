// import Navbar from "./components/Navbar";
// import Diya from "./components/Diya";
// import Fireworks from "./components/Fireworks";
// import ConfettiButton from "./components/ConfettiButton";

// export default function App() {
//   return (
//     <div className="relative min-h-screen bg-gradient-to-b from-diwaliDark to-diwaliPurple text-center overflow-hidden">
//       <Fireworks />
//       <Navbar />
//       <div className="flex flex-col items-center justify-center mt-20">
//         <h1 className="text-5xl font-bold text-diwaliGold mb-8 drop-shadow-[0_0_10px_rgba(255,204,0,0.9)]">
//           🪔 Happy Diwali 🪔
//         </h1>
//         <Diya />
//         <ConfettiButton />
//       </div>
//     </div>
//   );
// }







// import { useState, useEffect } from "react";
// import Firework from "./components/Firework";

// export default function App() {
//   const [isFiring, setIsFiring] = useState(false);
//   const [fireworks, setFireworks] = useState([]);

//   // const launchFireworks = () => {
//   //   setIsFiring(true);
//   //   const rockets = Array.from({ length: 10 }, (_, i) => i); // 10 rockets
//   //   setFireworks(rockets);

//   //   setTimeout(() => {
//   //     setIsFiring(false);
//   //     setFireworks([]);
//   //   }, 8000); // 8 seconds
//   // };


//   const launchFireworks = () => {
//     // Clear any previous fireworks
//     setFireworks([]);

//     // 🚀 Launch 6 rockets in sequence (each delayed by 300ms)
//     for (let i = 0; i < 5; i++) {
//       setTimeout(() => {
//         setFireworks((prev) => [...prev, { delay: i * 300 }]);
//       }, i * 300);
//     }
//   };

//   return (
//     // <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">

//     // <div className="relative min-h-screen bg-gradient-to-b from-black via-[#060606] to-black flex flex-col items-center justify-center overflow-hidden">

//     //   {/* <h1 className="text-5xl sm:text-6xl font-bold text-yellow-400 drop-shadow-[0_0_15px_rgba(255,255,0,0.7)] mb-8">
//     //     🪔 Happy Diwali 🪔
//     //   </h1> */}

//     //   <button
//     //     onClick={launchFireworks}
//     //     className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full shadow-[0_0_15px_rgba(255,255,0,0.8)] hover:scale-105 transition-transform"
//     //   >
//     //     🎆 Launch Fireworks
//     //   </button>

//     //   {/* Render multiple fireworks */}
//     //   {isFiring &&
//     //     fireworks.map((f, i) => (
//     //       <Firework key={i} delay={i * 300} />
//     //     ))}
//     // </div>


//     <div className="relative min-h-screen bg-gradient-to-b from-black via-[#070a13] to-black flex flex-col items-center justify-center overflow-hidden">
//       {/* <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 drop-shadow-[0_0_10px_#ffda44] mb-6">
//         Happy Diwali 🎆
//       </h1>
//       <p className="text-white/70 mb-8">
//         Celebrate the festival of lights with digital fireworks!
//       </p> */}

//       <button
//         onClick={launchFireworks}
//         className="px-6 py-3 bg-yellow-500 text-black rounded-2xl font-semibold hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_#fcd34d]"
//       >
//         Launch Fireworks 🚀
//       </button>

//       {fireworks.map((fw, index) => (
//         <Firework key={index} delay={fw.delay} />
//       ))}
//     </div>
//   );
// }








// import FireworksCanvas from "./components/FireworksCanvas";
import FireworksCanvas from "./components/FireworksCanvas";

export default function App() {
  return (
    // <div className="relative min-h-screen bg-black flex items-center justify-center">
    <div>
      <FireworksCanvas />
    </div>
  );
}
