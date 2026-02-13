import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  fadeDir: number;
  speed: number;
  r: number;
  g: number;
  b: number;
  hasGlow: boolean;
  hasCross: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  cosA: number;
  sinA: number;
  life: number;
  maxLife: number;
}

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const staticCanvas = staticRef.current;
    if (!canvas || !staticCanvas) return;
    const ctx = canvas.getContext('2d');
    const sCtx = staticCanvas.getContext('2d');
    if (!ctx || !sCtx) return;

    let animationId: number;
    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let tick = 0;
    let w = 0;
    let h = 0;

    const colors: [number, number, number][] = [
      [255, 255, 255],
      [234, 179, 8],
      [200, 200, 230],
      [170, 150, 255],
      [255, 210, 140],
      [140, 180, 255],
    ];

    const resize = () => {
      w = canvas.width = staticCanvas.width = window.innerWidth;
      h = canvas.height = staticCanvas.height = window.innerHeight;
      drawStatic();
    };

    const drawStatic = () => {
      sCtx.clearRect(0, 0, w, h);
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        const size = Math.random() * 25 + 10;
        const isGold = Math.random() > 0.6;
        const glow = sCtx.createRadialGradient(x, y, 0, x, y, size);
        glow.addColorStop(0, isGold ? 'rgba(234,179,8,0.02)' : 'rgba(160,160,200,0.015)');
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        sCtx.fillStyle = glow;
        sCtx.beginPath();
        sCtx.arc(x, y, size, 0, Math.PI * 2);
        sCtx.fill();
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    for (let i = 0; i < 200; i++) {
      const z = Math.random();
      const c = colors[Math.floor(Math.random() * colors.length)];
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z,
        size: z * 2 + 0.2,
        baseOpacity: z * 0.7 + 0.1,
        opacity: Math.random() * 0.5,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.005 + 0.001,
        r: c[0], g: c[1], b: c[2],
        hasGlow: z > 0.5,
        hasCross: z > 0.7,
      });
    }

    const spawnShootingStar = () => {
      const fromRight = Math.random() > 0.5;
      const angle = fromRight
        ? (Math.random() * 20 + 160) * (Math.PI / 180)
        : (Math.random() * 20 + 10) * (Math.PI / 180);
      shootingStars.push({
        x: fromRight ? w * 0.6 + Math.random() * w * 0.4 : Math.random() * w * 0.4,
        y: Math.random() * h * 0.3,
        length: Math.random() * 150 + 80,
        speed: Math.random() * 10 + 5,
        opacity: 1,
        cosA: Math.cos(angle),
        sinA: Math.sin(angle),
        life: 0,
        maxLife: Math.random() * 50 + 30,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.05;
      m.y += (m.targetY - m.y) * 0.05;
      const px = (m.x - w / 2) / w;
      const py = (m.y - h / 2) / h;

      for (let i = 0; i < 200; i++) {
        const s = stars[i];
        s.opacity += s.fadeDir * s.speed;
        if (s.opacity >= s.baseOpacity) s.fadeDir = -1;
        if (s.opacity <= 0.03) s.fadeDir = 1;

        const sx = s.x + px * s.z * 25;
        const sy = s.y + py * s.z * 25;

        if (s.hasGlow) {
          const glowSize = s.size * 4;
          ctx.globalAlpha = s.opacity * 0.25;
          ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
          ctx.beginPath();
          ctx.arc(sx, sy, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        if (s.hasCross && s.opacity > 0.3) {
          ctx.globalAlpha = s.opacity * 0.12;
          ctx.strokeStyle = `rgb(${s.r},${s.g},${s.b})`;
          ctx.lineWidth = 0.5;
          const cr = s.size * 3;
          ctx.beginPath();
          ctx.moveTo(sx - cr, sy);
          ctx.lineTo(sx + cr, sy);
          ctx.moveTo(sx, sy - cr);
          ctx.lineTo(sx, sy + cr);
          ctx.stroke();
        }

        ctx.globalAlpha = s.opacity;
        ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (tick % 150 === 0 && Math.random() > 0.2) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += ss.cosA * ss.speed;
        ss.y += ss.sinA * ss.speed;

        const p = ss.life / ss.maxLife;
        ss.opacity = p < 0.1 ? p * 10 : 1 - (p - 0.1) / 0.9;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tx = ss.x - ss.cosA * ss.length;
        const ty = ss.y - ss.sinA * ss.length;

        const grad = ctx.createLinearGradient(tx, ty, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.6, `rgba(234,179,8,${ss.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.opacity})`);

        ctx.lineWidth = 1.5;
        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        ctx.lineWidth = 5;
        ctx.strokeStyle = `rgba(234,179,8,${ss.opacity * 0.12})`;
        ctx.beginPath();
        ctx.moveTo(tx, ty);
        ctx.lineTo(ss.x, ss.y);
        ctx.stroke();

        ctx.globalAlpha = ss.opacity;
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] rounded-full opacity-[0.07]"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(100,50,0,0.15) 20%, rgba(40,10,80,0.08) 45%, transparent 65%)' }}
      />

      <div
        className="absolute top-[-25%] left-[55%] w-[1200px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(80,40,160,0.08) 0%, rgba(50,15,100,0.03) 40%, transparent 70%)',
          animation: 'nebulaFloat1 40s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      <div
        className="absolute bottom-[-15%] left-[-15%] w-[1000px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(15,60,160,0.07) 0%, rgba(10,30,80,0.03) 40%, transparent 70%)',
          animation: 'nebulaFloat2 45s ease-in-out infinite',
          filter: 'blur(70px)',
        }}
      />

      <div
        className="absolute top-[55%] right-[-8%] w-[700px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(160,40,70,0.06) 0%, rgba(100,15,50,0.02) 40%, transparent 70%)',
          animation: 'nebulaFloat3 35s ease-in-out infinite',
          filter: 'blur(80px)',
        }}
      />

      <div
        className="absolute top-[15%] left-[20%] w-[400px] h-[400px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.04) 0%, transparent 60%)', animation: 'breathe 8s ease-in-out infinite' }}
      />
      <div
        className="absolute top-[50%] right-[15%] w-[350px] h-[350px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(140,180,255,0.03) 0%, transparent 60%)', animation: 'breathe 10s ease-in-out infinite 3s' }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 38%, transparent 0%, rgba(0,0,0,0.75) 100%)' }} />

      <canvas ref={staticRef} className="absolute inset-0 w-full h-full" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25" />

      <style>{`
        @keyframes nebulaFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(80px, 40px) rotate(1deg) scale(1.05); }
          50% { transform: translate(20px, 80px) rotate(2deg) scale(1); }
          75% { transform: translate(-40px, 30px) rotate(-1deg) scale(0.95); }
        }
        @keyframes nebulaFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg) scale(1); }
          25% { transform: translate(-60px, -30px) rotate(-1deg) scale(1.03); }
          50% { transform: translate(30px, -70px) rotate(1deg) scale(0.97); }
          75% { transform: translate(50px, -20px) rotate(2deg) scale(1.02); }
        }
        @keyframes nebulaFloat3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.08); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;
