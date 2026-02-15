import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulse: number;
  pulseSpeed: number;
}

interface DataPacket {
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
  opacity: number;
}

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const staticRef = useRef<HTMLCanvasElement>(null);
  const location = useLocation();

  const pageColors: { [key: string]: { primary: string; secondary: string } } = {
    '/': { primary: 'rgba(255,107,107,0.5)', secondary: 'rgba(238,90,82,0.3)' },
    '/portfolio': { primary: 'rgba(78,205,196,0.5)', secondary: 'rgba(68,179,170,0.3)' },
    '/design': { primary: 'rgba(149,225,211,0.5)', secondary: 'rgba(124,201,185,0.3)' },
    '/development': { primary: 'rgba(255,230,109,0.5)', secondary: 'rgba(246,213,92,0.3)' },
    '/marketing': { primary: 'rgba(255,140,66,0.5)', secondary: 'rgba(230,126,60,0.3)' },
    '/ai': { primary: 'rgba(167,139,250,0.5)', secondary: 'rgba(150,118,232,0.3)' },
    '/pricing': { primary: 'rgba(52,211,153,0.5)', secondary: 'rgba(42,184,122,0.3)' },
    '/team': { primary: 'rgba(96,165,250,0.5)', secondary: 'rgba(79,143,232,0.3)' },
    '/reviews': { primary: 'rgba(244,114,182,0.5)', secondary: 'rgba(226,95,160,0.3)' },
    '/partners': { primary: 'rgba(129,140,248,0.5)', secondary: 'rgba(107,118,230,0.3)' },
    '/contact': { primary: 'rgba(45,212,191,0.5)', secondary: 'rgba(38,186,170,0.3)' },
    '/about': { primary: 'rgba(56,189,248,0.5)', secondary: 'rgba(46,167,230,0.3)' },
    '/quiz': { primary: 'rgba(251,191,36,0.5)', secondary: 'rgba(233,174,30,0.3)' },
    '/faqs': { primary: 'rgba(192,132,252,0.5)', secondary: 'rgba(169,111,232,0.3)' },
  };

  const currentColor = pageColors[location.pathname] || pageColors['/'];

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    const isHomePage = location.pathname === '/';
    if (isMobile || !isHomePage) return;

    const canvas = canvasRef.current;
    const staticCanvas = staticRef.current;
    if (!canvas || !staticCanvas) return;
    const ctx = canvas.getContext('2d');
    const sCtx = staticCanvas.getContext('2d');
    if (!ctx || !sCtx) return;

    let animationId: number;
    let tick = 0;
    let w = 0;
    let h = 0;

    const nodes: Node[] = [];
    const packets: DataPacket[] = [];
    const connectionDist = 220;
    const nodeCount = 70;

    const resize = () => {
      w = canvas.width = staticCanvas.width = window.innerWidth;
      h = canvas.height = staticCanvas.height = window.innerHeight;
      drawGrid();
    };

    const drawGrid = () => {
      sCtx.clearRect(0, 0, w, h);
      const gridSize = 60;
      sCtx.strokeStyle = 'rgba(0,240,255,0.025)';
      sCtx.lineWidth = 0.5;
      for (let x = 0; x < w; x += gridSize) {
        sCtx.beginPath();
        sCtx.moveTo(x, 0);
        sCtx.lineTo(x, h);
        sCtx.stroke();
      }
      for (let y = 0; y < h; y += gridSize) {
        sCtx.beginPath();
        sCtx.moveTo(0, y);
        sCtx.lineTo(w, y);
        sCtx.stroke();
      }

      const bigGrid = 180;
      sCtx.strokeStyle = 'rgba(0,240,255,0.045)';
      sCtx.lineWidth = 0.5;
      for (let x = 0; x < w; x += bigGrid) {
        sCtx.beginPath();
        sCtx.moveTo(x, 0);
        sCtx.lineTo(x, h);
        sCtx.stroke();
      }
      for (let y = 0; y < h; y += bigGrid) {
        sCtx.beginPath();
        sCtx.moveTo(0, y);
        sCtx.lineTo(w, y);
        sCtx.stroke();
      }

      for (let x = 0; x < w; x += bigGrid) {
        for (let y = 0; y < h; y += bigGrid) {
          sCtx.fillStyle = 'rgba(0,240,255,0.06)';
          sCtx.beginPath();
          sCtx.arc(x, y, 1.5, 0, Math.PI * 2);
          sCtx.fill();
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    const spawnPacket = () => {
      if (packets.length > 8) return;
      const from = Math.floor(Math.random() * nodeCount);
      let to = from;
      let bestDist = Infinity;
      for (let i = 0; i < nodeCount; i++) {
        if (i === from) continue;
        const dx = nodes[i].x - nodes[from].x;
        const dy = nodes[i].y - nodes[from].y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < connectionDist && d < bestDist) {
          bestDist = d;
          to = i;
        }
      }
      if (to !== from) {
        packets.push({
          fromNode: from,
          toNode: to,
          progress: 0,
          speed: Math.random() * 0.015 + 0.008,
          opacity: 1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      tick++;

      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += n.pulseSpeed;

        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;
      }

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < connectionDist) {
            const alpha = (1 - d / connectionDist) * 0.12;
            ctx.strokeStyle = `rgba(0,240,255,${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const pulseAlpha = Math.sin(n.pulse) * 0.15 + 0.15;

        ctx.globalAlpha = pulseAlpha;
        ctx.fillStyle = 'rgba(0,240,255,1)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 4, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = n.opacity * 0.6 + Math.sin(n.pulse) * 0.2;
        ctx.fillStyle = 'rgba(0,240,255,1)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = (n.opacity * 0.4 + Math.sin(n.pulse) * 0.15) * 0.7;
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      if (tick % 60 === 0) spawnPacket();

      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          packets.splice(i, 1);
          continue;
        }
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        const x = from.x + (to.x - from.x) * p.progress;
        const y = from.y + (to.y - from.y) * p.progress;
        const alpha = p.progress < 0.1 ? p.progress * 10 : p.progress > 0.9 ? (1 - p.progress) * 10 : 1;

        ctx.globalAlpha = alpha * 0.3;
        ctx.fillStyle = 'rgba(0,240,255,1)';
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = alpha * 0.8;
        ctx.fillStyle = 'rgba(255,255,255,1)';
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {isHomePage ? (
        <>
          <div
            className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-[0.08] transition-all duration-700"
            style={{ background: `radial-gradient(circle, ${currentColor.primary} 0%, ${currentColor.secondary} 30%, transparent 60%)` }}
          />

          <div
            className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${currentColor.primary.replace('0.5', '0.05')} 0%, transparent 60%)`,
              animation: 'techPulse 12s ease-in-out infinite',
            }}
          />

          <div
            className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full transition-all duration-700"
            style={{
              background: `radial-gradient(circle, ${currentColor.secondary.replace('0.3', '0.04')} 0%, transparent 60%)`,
              animation: 'techPulse 15s ease-in-out infinite 4s',
            }}
          />

          <canvas ref={staticRef} className="absolute inset-0 w-full h-full" />
          <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />
        </>
      ) : (
        <div 
          className="absolute inset-0 transition-all duration-700"
          style={{ 
            background: `linear-gradient(135deg, ${currentColor.primary.replace('0.5', '0.15')} 0%, ${currentColor.secondary.replace('0.3', '0.08')} 100%)`
          }}
        />
      )}

      <style>{`
        @keyframes techPulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default PremiumBackground;