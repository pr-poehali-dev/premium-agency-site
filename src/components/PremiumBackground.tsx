import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
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

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];
    let tick = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      '255,255,255',
      '234,179,8',
      '200,200,220',
      '180,160,255',
      '255,220,150',
    ];

    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.2,
        opacity: Math.random() * 0.8,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
        speed: Math.random() * 0.004 + 0.001,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.4,
        length: Math.random() * 120 + 60,
        speed: Math.random() * 8 + 4,
        opacity: 1,
        angle: (Math.random() * 30 + 15) * (Math.PI / 180),
        life: 0,
        maxLife: Math.random() * 60 + 40,
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      stars.forEach((s) => {
        s.opacity += s.fadeDir * s.speed;
        if (s.opacity >= 0.9) s.fadeDir = -1;
        if (s.opacity <= 0.05) s.fadeDir = 1;

        if (s.size > 1.2) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 4);
          glow.addColorStop(0, `rgba(${s.color}, ${s.opacity * 0.3})`);
          glow.addColorStop(1, `rgba(${s.color}, 0)`);
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color}, ${s.opacity})`;
        ctx.fill();
      });

      if (tick % 180 === 0 && Math.random() > 0.3) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.life++;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity = 1 - ss.life / ss.maxLife;

        if (ss.life >= ss.maxLife) {
          shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.7, `rgba(234,179,8,${ss.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255,255,255,${ss.opacity})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        const headGlow = ctx.createRadialGradient(ss.x, ss.y, 0, ss.x, ss.y, 6);
        headGlow.addColorStop(0, `rgba(255,255,255,${ss.opacity})`);
        headGlow.addColorStop(1, `rgba(234,179,8,0)`);
        ctx.fillStyle = headGlow;
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 6, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[35%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-[0.06]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.5) 0%, rgba(100,50,0,0.2) 25%, rgba(40,10,80,0.1) 50%, transparent 70%)',
        }}
      />

      <div
        className="absolute top-[-30%] left-[60%] w-[1000px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(ellipse, rgba(100,50,180,0.8) 0%, rgba(60,20,120,0.3) 40%, transparent 70%)',
          animation: 'nebulaFloat1 35s ease-in-out infinite',
          filter: 'blur(40px)',
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[500px] rounded-full opacity-[0.035]"
        style={{
          background: 'radial-gradient(ellipse, rgba(20,80,180,0.8) 0%, rgba(10,40,100,0.3) 40%, transparent 70%)',
          animation: 'nebulaFloat2 40s ease-in-out infinite',
          filter: 'blur(50px)',
        }}
      />

      <div
        className="absolute top-[60%] right-[-5%] w-[600px] h-[400px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(ellipse, rgba(180,50,80,0.6) 0%, rgba(120,20,60,0.2) 40%, transparent 70%)',
          animation: 'nebulaFloat3 30s ease-in-out infinite',
          filter: 'blur(60px)',
        }}
      />

      <div
        className="absolute top-[20%] left-[30%] w-[300px] h-[300px] rounded-full opacity-[0.025]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,1) 0%, transparent 60%)',
          animation: 'nebulaFloat3 25s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

      <style>{`
        @keyframes nebulaFloat1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(60px, 30px) rotate(2deg); }
          66% { transform: translate(-30px, 60px) rotate(-1deg); }
        }
        @keyframes nebulaFloat2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-50px, -25px) rotate(-2deg); }
          66% { transform: translate(40px, -50px) rotate(1deg); }
        }
        @keyframes nebulaFloat3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 30px); }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;
