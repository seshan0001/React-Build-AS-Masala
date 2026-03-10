import style from './style.module.css';
import { useEffect, useRef } from "react";
import gsap from "gsap";

const MASALA_COLORS = [
  "#D32F2F",
  "#FF6F00",
];

export default function MasalaCursor() {
  const canvasRef = useRef(null);
  const cursorRef = useRef(null);

  const mouse = useRef({ x: 0, y: 0, moved: false });
  const pos = useRef({ x: 0, y: 0 });
  const trail = useRef([]);
  const particles = useRef([]);
  const lastEmit = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.moved = true;
    };
    window.addEventListener("mousemove", onMouseMove);

    const emitParticles = (x, y) => {
      const now = performance.now();
      if (now - lastEmit.current < 30) return;
      lastEmit.current = now;

      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x,
          y,
          vx: gsap.utils.random(-0.2, 0.2),
          vy: gsap.utils.random(1, 2),
          life: gsap.utils.random(30, 60),
          size: gsap.utils.random(1, 2),
          color: MASALA_COLORS[Math.floor(Math.random() * MASALA_COLORS.length)],
        });
      }
    };

    const ticker = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.25;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.25;

      trail.current.push({ x: pos.current.x, y: pos.current.y });
      if (trail.current.length > 20) trail.current.shift();

      cursorRef.current.style.transform = `translate(${pos.current.x - 7}px, ${pos.current.y - 7}px)`;

      if (mouse.current.moved) {
        emitParticles(pos.current.x, pos.current.y);
        mouse.current.moved = false;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((t, i) => {
        const alpha = i / trail.current.length;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 111, 0, ${alpha * 0.3})`;
        ctx.arc(t.x, t.y, 6 * alpha, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;

        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      particles.current = particles.current.filter((p) => p.life > 0);
    };

    gsap.ticker.add(ticker);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", resize);
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <>
      <canvas className={style.canvas} ref={canvasRef}/>
      <div className={style.cursor} ref={cursorRef}/>
    </>
  );
}
