import { useEffect, useRef } from 'react';

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

  useEffect(() => {
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
    let lastFrameTime = 0;
    const targetFPS = 30;
    const frameInterval = 1000 / targetFPS;

    const isMobile = window.innerWidth < 768;
    const isLowEnd = isMobile && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;

    const nodes: Node[] = [];
    const packets: DataPacket[] = [];
    const connectionDist = isMobile ? 180 : 220;
    const nodeCount = isLowEnd ? 25 : isMobile ? 35 : 70;
    const maxPackets = isMobile ? 4 : 8;

    const resize = () => {
      const dpr = isMobile ? Math.min(window.devicePixelRatio, 2) : window.devicePixelRatio;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      staticCanvas.width = w * dpr;
      staticCanvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      staticCanvas.style.width = w + 'px';
      staticCanvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      sCtx.scale(dpr, dpr);
      drawGrid();
    };

    const drawGrid = () => {
      if (isLowEnd) return;
      
      sCtx.clearRect(0, 0, w, h);
      const gridSize = isMobile ? 80 : 60;
      const bigGrid = isMobile ? 240 : 180;
      
      sCtx.strokeStyle = 'rgba(234,179,8,0.025)';
      sCtx.lineWidth = 0.5;
      sCtx.beginPath();
      for (let x = 0; x < w; x += gridSize) {
        sCtx.moveTo(x, 0);
        sCtx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += gridSize) {
        sCtx.moveTo(0, y);
        sCtx.lineTo(w, y);
      }
      sCtx.stroke();

      sCtx.strokeStyle = 'rgba(234,179,8,0.045)';
      sCtx.beginPath();
      for (let x = 0; x < w; x += bigGrid) {
        sCtx.moveTo(x, 0);
        sCtx.lineTo(x, h);
      }
      for (let y = 0; y < h; y += bigGrid) {
        sCtx.moveTo(0, y);
        sCtx.lineTo(w, y);
      }
      sCtx.stroke();

      if (!isMobile) {
        sCtx.fillStyle = 'rgba(234,179,8,0.06)';
        for (let x = 0; x < w; x += bigGrid) {
          for (let y = 0; y < h; y += bigGrid) {
            sCtx.beginPath();
            sCtx.arc(x, y, 1.5, 0, Math.PI * 2);
            sCtx.fill();
          }
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
      if (packets.length >= maxPackets) return;
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

    const animate = (timestamp: number) => {
      if (timestamp - lastFrameTime < frameInterval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = timestamp;

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

      if (!isMobile || tick % 2 === 0) {
        ctx.beginPath();
        for (let i = 0; i < nodeCount; i++) {
          for (let j = i + 1; j < nodeCount; j++) {
            const dx = nodes[j].x - nodes[i].x;
            const dy = nodes[j].y - nodes[i].y;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < connectionDist) {
              const alpha = (1 - d / connectionDist) * (isMobile ? 0.08 : 0.12);
              ctx.strokeStyle = `rgba(234,179,8,${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.stroke();
            }
          }
        }
      }

      for (let i = 0; i < nodeCount; i++) {
        const n = nodes[i];
        const pulseAlpha = Math.sin(n.pulse) * 0.15 + 0.15;

        if (!isLowEnd) {
          ctx.globalAlpha = pulseAlpha;
          ctx.fillStyle = 'rgba(234,179,8,1)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.globalAlpha = n.opacity * 0.6 + Math.sin(n.pulse) * 0.2;
        ctx.fillStyle = 'rgba(234,179,8,1)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();

        if (!isMobile) {
          ctx.globalAlpha = (n.opacity * 0.4 + Math.sin(n.pulse) * 0.15) * 0.7;
          ctx.fillStyle = 'rgba(255,255,255,1)';
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1;

      if (tick % (isMobile ? 90 : 60) === 0) spawnPacket();

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

        if (!isLowEnd) {
          ctx.globalAlpha = alpha * 0.3;
          ctx.fillStyle = 'rgba(234,179,8,1)';
          ctx.beginPath();
          ctx.arc(x, y, isMobile ? 4 : 6, 0, Math.PI * 2);
          ctx.fill();
        }

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
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, rgba(234,179,8,0.5) 0%, rgba(234,179,8,0.1) 30%, transparent 60%)' }}
      />

      <div
        className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.04) 0%, transparent 60%)',
          animation: 'techPulse 12s ease-in-out infinite',
        }}
      />

      <div
        className="absolute bottom-[-10%] left-[-5%] w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(234,179,8,0.03) 0%, transparent 60%)',
          animation: 'techPulse 15s ease-in-out infinite 4s',
        }}
      />

      <canvas ref={staticRef} className="absolute inset-0 w-full h-full" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, transparent 0%, rgba(0,0,0,0.7) 100%)' }} />

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