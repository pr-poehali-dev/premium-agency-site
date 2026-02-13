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
  color: string;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  angle: number;
  life: number;
  maxLife: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    const dustParticles: Particle[] = [];
    let tick = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const colors = [
      '255,255,255',
      '234,179,8',
      '200,200,230',
      '170,150,255',
      '255,210,140',
      '140,180,255',
    ];

    for (let i = 0; i < 300; i++) {
      const z = Math.random();
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        z,
        size: z * 2.2 + 0.2,
        baseOpacity: z * 0.7 + 0.1,
        opacity: Math.random() * 0.6,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.006 + 0.001,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    for (let i = 0; i < 40; i++) {
      dustParticles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.1 - 0.02,
        size: Math.random() * 30 + 10,
        opacity: Math.random() * 0.03,
        color: Math.random() > 0.6 ? '234,179,8' : '160,160,200',
        life: 0,
        maxLife: 9999,
      });
    }

    const spawnShootingStar = () => {
      const fromRight = Math.random() > 0.5;
      shootingStars.push({
        x: fromRight ? w * 0.6 + Math.random() * w * 0.4 : Math.random() * w * 0.4,
        y: Math.random() * h * 0.3,
        length: Math.random() * 180 + 80,
        speed: Math.random() * 12 + 6,
        opacity: 1,
        angle: fromRight
          ? (Math.random() * 20 + 160) * (Math.PI / 180)
          : (Math.random() * 20 + 10) * (Math.PI / 180),
        life: 0,
        maxLife: Math.random() * 50 + 30,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const parallaxX = (mx - w / 2) / w;
      const parallaxY = (my - h / 2) / h;

      dustParticles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -50) p.x = w + 50;
        if (p.x > w + 50) p.x = -50;
        if (p.y < -50) p.y = h + 50;
        if (p.y > h + 50) p.y = -50;

        p.opacity = 0.015 + Math.sin(tick * 0.005 + p.x * 0.01) * 0.01;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        glow.addColorStop(0, `rgba(${p.color}, ${p.opacity})`);
        glow.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      stars.forEach((s) => {
        s.opacity += s.fadeDir * s.speed;
        if (s.opacity >= s.baseOpacity) s.fadeDir = -1;
        if (s.opacity <= 0.03) s.fadeDir = 1;

        const px = s.x + parallaxX * s.z * 30;
        const py = s.y + parallaxY * s.z * 30;

        if (s.size > 1.0) {
          const glowSize = s.size * (3 + Math.sin(tick * 0.02 + s.x) * 1.5);
          const glow = ctx.createRadialGradient(px, py, 0, px, py, glowSize);
          glow.addColorStop(0, `rgba(${s.color}, ${s.opacity * 0.35})`);
          glow.addColorStop(0.5, `rgba(${s.color}, ${s.opacity * 0.1})`);
          glow.addColorStop(1, `rgba(${s.color}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(px, py, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        if (s.size > 1.5 && s.opacity > 0.3) {
          ctx.strokeStyle = `rgba(${s.color}, ${s.opacity * 0.15})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(px - s.size * 3, py);
          ctx.lineTo(px + s.size * 3, py);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(px, py - s.size * 3);
          ctx.lineTo(px, py + s.size * 3);
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(px, py, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`;
        ctx.fill();
      });

      if (tick % 120 === 0 && Math.random() > 0.2) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;

        const progress = ss.life / ss.maxLife;
        ss.opacity = progress < 0.1 ? progress * 10 : 1 - (progress - 0.1) / 0.9;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'rgba(255,255,255,0)');
        grad.addColorStop(0.3, `rgba(180,150,255,${ss.opacity * 0.1})`);
        grad.addColorStop(0.7, `rgba(234,179,8,${ss.opacity * 0.5})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = `rgba(234,179,8,${ss.opacity * 0.15})`;
        ctx.lineWidth = 6;
        ctx.stroke();

        const headGlow = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 12);
        headGlow.addColorStop(0, `rgba(255,255,255,${ss.opacity})`);
        headGlow.addColorStop(0.3, `rgba(234,179,8,${ss.opacity * 0.6})`);
        headGlow.addColorStop(1, 'rgba(234,179,8,0)');
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 12, 0, Math.PI * 2);
        ctx.fill();
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
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.4) 0%, rgba(100,50,0,0.15) 20%, rgba(40,10,80,0.08) 45%, transparent 65%)',
        }}
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
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.04) 0%, transparent 60%)',
          animation: 'breathe 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[50%] right-[15%] w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(140,180,255,0.03) 0%, transparent 60%)',
          animation: 'breathe 10s ease-in-out infinite 3s',
        }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 65% 55% at 50% 38%, transparent 0%, rgba(0,0,0,0.75) 100%)' }} />

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
