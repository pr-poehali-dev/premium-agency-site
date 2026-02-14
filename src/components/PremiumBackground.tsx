import { useEffect, useRef } from 'react';

interface CodeLine {
  text: string;
  x: number;
  y: number;
  opacity: number;
  speed: number;
  color: string;
}

interface DesignElement {
  type: 'circle' | 'rect' | 'line';
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
}

interface MarketingIcon {
  icon: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
}

const PremiumBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let tick = 0;
    let w = 0;
    let h = 0;

    const codeLines: CodeLine[] = [];
    const designElements: DesignElement[] = [];
    const marketingIcons: MarketingIcon[] = [];

    const codeSnippets = [
      'const component = () => {',
      '  return <div>',
      '    <h1>Hello</h1>',
      '  </div>',
      '}',
      'function API() {',
      '  const data = fetch()',
      '  return data',
      '}',
      'class Model:',
      '  def __init__(self):',
      '    self.data = []',
      'SELECT * FROM users',
      'WHERE active = true',
      'npm install react',
      'git commit -m "feat"',
      'docker build -t app',
    ];

    const marketingTexts = ['📊', '📈', '💰', '🎯', '📱', '💡', '🚀', '⭐'];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Инициализация кода
    for (let i = 0; i < 20; i++) {
      codeLines.push({
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * w,
        y: Math.random() * h,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 0.3 + 0.1,
        color: '#4ade80',
      });
    }

    // Инициализация дизайн элементов
    for (let i = 0; i < 15; i++) {
      designElements.push({
        type: ['circle', 'rect', 'line'][Math.floor(Math.random() * 3)] as 'circle' | 'rect' | 'line',
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 80 + 20,
        color: ['#fbbf24', '#f59e0b', '#fb923c'][Math.floor(Math.random() * 3)],
        opacity: Math.random() * 0.2 + 0.05,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    // Инициализация маркетинг иконок
    for (let i = 0; i < 12; i++) {
      marketingIcons.push({
        icon: marketingTexts[Math.floor(Math.random() * marketingTexts.length)],
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 30 + 20,
        opacity: Math.random() * 0.3 + 0.1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);
      tick++;

      // Анимация кода (левая треть)
      ctx.font = '14px monospace';
      ctx.textAlign = 'left';
      for (let i = 0; i < codeLines.length; i++) {
        const line = codeLines[i];
        line.y += line.speed;

        if (line.y > h + 50) {
          line.y = -50;
          line.x = Math.random() * (w / 3);
          line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }

        ctx.globalAlpha = line.opacity;
        ctx.fillStyle = line.color;
        ctx.fillText(line.text, line.x, line.y);
      }

      // Анимация дизайна (центральная треть)
      for (let i = 0; i < designElements.length; i++) {
        const el = designElements[i];
        el.rotation += el.rotationSpeed;

        ctx.save();
        ctx.translate(el.x + w / 3, el.y);
        ctx.rotate(el.rotation);
        ctx.globalAlpha = el.opacity;

        if (el.type === 'circle') {
          ctx.strokeStyle = el.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(0, 0, el.size, 0, Math.PI * 2);
          ctx.stroke();
        } else if (el.type === 'rect') {
          ctx.strokeStyle = el.color;
          ctx.lineWidth = 2;
          ctx.strokeRect(-el.size / 2, -el.size / 2, el.size, el.size);
        } else {
          ctx.strokeStyle = el.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(-el.size / 2, 0);
          ctx.lineTo(el.size / 2, 0);
          ctx.stroke();
        }

        ctx.restore();
      }

      // Анимация маркетинга (правая треть)
      ctx.font = '32px Arial';
      ctx.textAlign = 'center';
      for (let i = 0; i < marketingIcons.length; i++) {
        const icon = marketingIcons[i];
        icon.x += icon.vx;
        icon.y += icon.vy;

        if (icon.x < (w * 2) / 3 - 50) icon.x = (w * 2) / 3;
        if (icon.x > w + 50) icon.x = (w * 2) / 3;
        if (icon.y < -50) icon.y = h + 50;
        if (icon.y > h + 50) icon.y = -50;

        ctx.globalAlpha = icon.opacity;
        ctx.fillText(icon.icon, icon.x, icon.y);
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
    </div>
  );
};

export default PremiumBackground;
