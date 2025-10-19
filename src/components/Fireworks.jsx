import { motion } from "framer-motion";

export default function Fireworks() {
    const fireworkVariants = {
        animate: {
            y: [0, -40, 0],
            opacity: [1, 0.6, 1],
            transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        },
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-diwaliGold rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    variants={fireworkVariants}
                    animate="animate"
                />
            ))}
        </div>
    );
}
