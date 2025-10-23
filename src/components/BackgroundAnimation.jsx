import React, { useEffect, useRef } from "react";

export default function BackgroundAnimation() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const diyas = [];
        const lanterns = [];

        for (let i = 0; i < 8; i++) {
            diyas.push({
                x: Math.random() * width,
                y: height - Math.random() * 150 - 50,
                glow: Math.random(),
            });
        }

        for (let i = 0; i < 5; i++) {
            lanterns.push({
                x: Math.random() * width,
                y: Math.random() * height,
                speed: 0.3 + Math.random() * 0.4,
            });
        }

        const drawDiya = (d) => {
            const gradient = ctx.createRadialGradient(d.x, d.y - 5, 0, d.x, d.y - 5, 25);
            gradient.addColorStop(0, `rgba(255, 200, 80, ${0.8 + Math.sin(d.glow) * 0.2})`);
            gradient.addColorStop(1, "rgba(255, 100, 0, 0)");
            ctx.beginPath();
            ctx.fillStyle = gradient;
            ctx.arc(d.x, d.y - 5, 25, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = "#ff8c00";
            ctx.beginPath();
            ctx.arc(d.x, d.y, 20, 0, Math.PI, true);
            ctx.fill();
        };

        const drawLantern = (l) => {
            ctx.save();
            ctx.translate(l.x, l.y);
            ctx.fillStyle = "rgba(255, 180, 80, 0.8)";
            ctx.fillRect(-10, -20, 20, 25);
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            lanterns.forEach((l) => {
                l.y -= l.speed;
                if (l.y < -30) l.y = height + 30;
                drawLantern(l);
            });

            diyas.forEach((d) => {
                d.glow += 0.05;
                drawDiya(d);
            });

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <canvas ref={canvasRef} className="absolute top-0 left-0" />
}
