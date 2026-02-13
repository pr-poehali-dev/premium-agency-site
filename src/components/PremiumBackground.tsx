import { useEffect, useRef } from 'react';

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeDir: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeDir * 0.003;

        if (p.opacity >= 0.5) p.fadeDir = -1;
        if (p.opacity <= 0.05) p.fadeDir = 1;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(234, 179, 8, ${p.opacity})`;
        ctx.fill();
      });

      particles.forEach((p, i) => {
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(234, 179, 8, ${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

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
        className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,1) 0%, transparent 70%)',
          animation: 'floatOrb1 20s ease-in-out infinite',
        }}
      />

      <div
        className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(161,161,170,1) 0%, transparent 70%)',
          animation: 'floatOrb2 25s ease-in-out infinite',
        }}
      />

      <div
        className="absolute top-[40%] right-[20%] w-[300px] h-[300px] rounded-full opacity-[0.025]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,1) 0%, transparent 70%)',
          animation: 'floatOrb3 18s ease-in-out infinite',
        }}
      />

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="absolute top-[15%] left-[8%] w-px h-[200px] bg-gradient-to-b from-transparent via-zinc-800/30 to-transparent" />
      <div className="absolute top-[25%] right-[12%] w-px h-[150px] bg-gradient-to-b from-transparent via-yellow-500/10 to-transparent" />
      <div className="absolute bottom-[30%] left-[20%] w-px h-[100px] bg-gradient-to-b from-transparent via-zinc-700/20 to-transparent" />

      <div
        className="absolute top-[10%] right-[15%] w-1 h-1 rounded-full bg-yellow-500/30"
        style={{ animation: 'twinkle 4s ease-in-out infinite' }}
      />
      <div
        className="absolute top-[30%] left-[10%] w-1 h-1 rounded-full bg-zinc-500/40"
        style={{ animation: 'twinkle 6s ease-in-out infinite 1s' }}
      />
      <div
        className="absolute bottom-[40%] right-[25%] w-0.5 h-0.5 rounded-full bg-yellow-500/20"
        style={{ animation: 'twinkle 5s ease-in-out infinite 2s' }}
      />
      <div
        className="absolute top-[60%] left-[30%] w-1 h-1 rounded-full bg-zinc-600/30"
        style={{ animation: 'twinkle 7s ease-in-out infinite 0.5s' }}
      />
      <div
        className="absolute top-[20%] left-[50%] w-0.5 h-0.5 rounded-full bg-yellow-500/25"
        style={{ animation: 'twinkle 4.5s ease-in-out infinite 3s' }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(80px, 40px); }
          66% { transform: translate(-40px, 80px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-60px, -30px); }
          66% { transform: translate(40px, -60px); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-50px, 30px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;
