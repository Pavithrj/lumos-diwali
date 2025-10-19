import { useEffect, useRef } from "react";

export default function FireworksCanvas({ width, height }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        let SCREEN_WIDTH = width || window.innerWidth;
        let SCREEN_HEIGHT = height || window.innerHeight;
        canvas.width = SCREEN_WIDTH;
        canvas.height = SCREEN_HEIGHT;

        let rockets = [];
        let particles = [];
        const MAX_PARTICLES = 400;

        class Particle {
            constructor(pos) {
                this.pos = { x: pos?.x || 0, y: pos?.y || 0 };
                this.vel = { x: 0, y: 0 };
                this.shrink = 0.97;
                this.size = 2;
                this.resistance = 1;
                this.gravity = 0;
                this.flick = false;
                this.alpha = 1;
                this.fade = 0;
                this.color = 0;
            }
            update() {
                this.vel.x *= this.resistance;
                this.vel.y *= this.resistance;
                this.vel.y += this.gravity;
                this.pos.x += this.vel.x;
                this.pos.y += this.vel.y;
                this.size *= this.shrink;
                this.alpha -= this.fade;
            }
            render(c) {
                if (this.alpha < 0.1 || this.size < 1) return;
                c.save();
                c.globalCompositeOperation = "lighter";
                const x = this.pos.x;
                const y = this.pos.y;
                const r = this.size / 2;
                const gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
                gradient.addColorStop(0.1, `rgba(255,255,255,${this.alpha})`);
                gradient.addColorStop(0.8, `hsla(${this.color},100%,50%,${this.alpha})`);
                gradient.addColorStop(1, `hsla(${this.color},100%,50%,0.1)`);
                c.fillStyle = gradient;
                c.beginPath();
                c.arc(x, y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
                c.closePath();
                c.fill();
                c.restore();
            }
        }

        class Rocket extends Particle {
            constructor(x) {
                super({ x, y: SCREEN_HEIGHT });
                this.explosionColor = 0;
                this.vel.y = Math.random() * -3 - 4;
                this.vel.x = Math.random() * 6 - 3;
                this.size = 8;
                this.shrink = 0.999;
                this.gravity = 0.01;
            }
            explode() {
                const count = Math.random() * 10 + 80;
                for (let i = 0; i < count; i++) {
                    const particle = new Particle(this.pos);
                    const angle = Math.random() * Math.PI * 2;
                    const speed = Math.cos(Math.random() * Math.PI / 2) * 15;
                    particle.vel.x = Math.cos(angle) * speed;
                    particle.vel.y = Math.sin(angle) * speed;
                    particle.size = 10;
                    particle.gravity = 0.2;
                    particle.resistance = 0.92;
                    particle.shrink = Math.random() * 0.05 + 0.93;
                    particle.flick = true;
                    particle.color = this.explosionColor;
                    particles.push(particle);
                }
            }
            render(c) {
                if (this.alpha < 0.1 || this.size < 1) return;
                c.save();
                c.globalCompositeOperation = "lighter";
                const x = this.pos.x;
                const y = this.pos.y;
                const r = this.size / 2;
                const gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
                gradient.addColorStop(0.1, `rgba(255,255,255,${this.alpha})`);
                gradient.addColorStop(1, `rgba(0,0,0,${this.alpha})`);
                c.fillStyle = gradient;
                c.beginPath();
                c.arc(x, y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
                c.closePath();
                c.fill();
                c.restore();
            }
        }

        const launchRocket = (x) => {
            if (rockets.length < 10) {
                const r = new Rocket(x);
                r.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
                rockets.push(r);
            }
        };

        const loop = () => {
            if (SCREEN_WIDTH !== window.innerWidth) canvas.width = SCREEN_WIDTH = window.innerWidth;
            if (SCREEN_HEIGHT !== window.innerHeight) canvas.height = SCREEN_HEIGHT = window.innerHeight;

            ctx.fillStyle = "rgba(0,0,0,0.05)";
            ctx.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

            const existingRockets = [];
            rockets.forEach((r) => {
                r.update();
                r.render(ctx);
                if (r.pos.y < SCREEN_HEIGHT / 5 || r.vel.y >= 0 || Math.random() < 0.01) {
                    r.explode();
                } else {
                    existingRockets.push(r);
                }
            });
            rockets = existingRockets;

            const existingParticles = [];
            particles.forEach((p) => {
                p.update();
                if (p.alpha > 0.1 && p.size >= 1) {
                    p.render(ctx);
                    existingParticles.push(p);
                }
            });
            particles = existingParticles;
            while (particles.length > MAX_PARTICLES) particles.shift();

            requestAnimationFrame(loop);
        };

        const interval = setInterval(() => launchRocket(SCREEN_WIDTH / 2), 800);
        loop();

        return () => clearInterval(interval);
    }, [width, height]);

    // return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />;

    return <canvas ref={canvasRef} />;
}
