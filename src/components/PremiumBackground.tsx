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

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.3,
        speedX: (Math.random() - 0.5) * 0.2,
        speedY: (Math.random() - 0.5) * 0.2,
        opacity: Math.random() * 0.35,
        fadeDir: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.fadeDir * 0.002;

        if (p.opacity >= 0.4) p.fadeDir = -1;
        if (p.opacity <= 0.03) p.fadeDir = 1;

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
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(234, 179, 8, ${0.03 * (1 - dist / 100)})`;
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
        className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.6) 0%, rgba(234,179,8,0.1) 30%, transparent 65%)',
        }}
      />

      <div
        className="absolute top-[-30%] left-[-20%] w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,1) 0%, transparent 60%)',
          animation: 'floatOrb1 25s ease-in-out infinite',
        }}
      />

      <div
        className="absolute bottom-[-20%] right-[-15%] w-[700px] h-[700px] rounded-full opacity-[0.025]"
        style={{
          background: 'radial-gradient(circle, rgba(161,161,170,1) 0%, transparent 60%)',
          animation: 'floatOrb2 30s ease-in-out infinite',
        }}
      />

      <div
        className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,1) 0%, transparent 60%)',
          animation: 'floatOrb3 22s ease-in-out infinite',
        }}
      />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 50%, transparent 0%, rgba(0,0,0,0.6) 100%)' }} />

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      <div className="absolute top-[12%] left-[6%] w-px h-[250px] bg-gradient-to-b from-transparent via-zinc-800/20 to-transparent" />
      <div className="absolute top-[20%] right-[8%] w-px h-[180px] bg-gradient-to-b from-transparent via-yellow-500/8 to-transparent" />
      <div className="absolute bottom-[25%] left-[15%] w-px h-[120px] bg-gradient-to-b from-transparent via-zinc-700/15 to-transparent" />
      <div className="absolute top-[45%] right-[25%] w-px h-[160px] bg-gradient-to-b from-transparent via-zinc-800/15 to-transparent" />

      <div className="absolute top-[8%] right-[12%] w-1 h-1 rounded-full bg-yellow-500/25" style={{ animation: 'twinkle 5s ease-in-out infinite' }} />
      <div className="absolute top-[25%] left-[8%] w-1 h-1 rounded-full bg-zinc-500/30" style={{ animation: 'twinkle 7s ease-in-out infinite 1s' }} />
      <div className="absolute bottom-[35%] right-[20%] w-0.5 h-0.5 rounded-full bg-yellow-500/15" style={{ animation: 'twinkle 6s ease-in-out infinite 2s' }} />
      <div className="absolute top-[55%] left-[25%] w-1 h-1 rounded-full bg-zinc-600/25" style={{ animation: 'twinkle 8s ease-in-out infinite 0.5s' }} />
      <div className="absolute top-[15%] left-[45%] w-0.5 h-0.5 rounded-full bg-yellow-500/20" style={{ animation: 'twinkle 5.5s ease-in-out infinite 3s' }} />
      <div className="absolute bottom-[50%] right-[40%] w-0.5 h-0.5 rounded-full bg-zinc-500/20" style={{ animation: 'twinkle 9s ease-in-out infinite 1.5s' }} />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

      <style>{`
        @keyframes floatOrb1 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(100px, 50px); }
          66% { transform: translate(-50px, 100px); }
        }
        @keyframes floatOrb2 {
          0%, 100% { transform: translate(0, 0); }
          33% { transform: translate(-80px, -40px); }
          66% { transform: translate(50px, -80px); }
        }
        @keyframes floatOrb3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-60px, 40px); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.8); }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;
