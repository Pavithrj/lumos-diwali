import { useState } from "react";
import Confetti from "react-confetti";

export default function ConfettiButton() {
    const [showConfetti, setShowConfetti] = useState(false);

    const handleClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    return (
        <div className="text-center mt-10">
            <button
                onClick={handleClick}
                className="bg-diwaliGold text-diwaliDark px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all"
            >
                🎉 Celebrate!
            </button>
            {showConfetti && <Confetti />}
        </div>
    );
}
