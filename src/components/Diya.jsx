import { motion } from "framer-motion";

export default function Diya() {
    return (
        <div className="flex flex-col items-center mt-8">
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-8 h-8 rounded-full bg-yellow-400 shadow-[0_0_25px_8px_rgba(255,200,0,0.8)]"
            />
            <div className="w-20 h-10 bg-orange-600 rounded-t-full mt-2 shadow-[0_0_15px_3px_rgba(255,111,0,0.8)]"></div>
            <p className="text-diwaliGold mt-4 text-xl font-semibold">Light up your day!</p>
        </div>
    );
}
