/**
 * Celebratory Confetti Particle System for NeuroScan AI
 */
window.triggerConfetti = function () {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const width = (canvas.width = window.innerWidth);
  const height = (canvas.height = window.innerHeight);

  const colors = ['#00f0ff', '#00e676', '#ff1744', '#ffd600', '#8b5cf6', '#ffffff'];
  const pieces = [];
  const COUNT = 120;

  for (let i = 0; i < COUNT; i++) {
    pieces.push({
      x: width / 2 + (Math.random() - 0.5) * 60,
      y: height / 2 + (Math.random() - 0.5) * 40,
      w: Math.random() * 9 + 5,
      h: Math.random() * 5 + 3,
      vx: (Math.random() - 0.5) * 16,
      vy: (Math.random() - 0.5) * 16 - 8,
      gravity: 0.28,
      rotation: Math.random() * 360,
      vRotation: (Math.random() - 0.5) * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 1,
    });
  }

  let animationId;
  function render() {
    ctx.clearRect(0, 0, width, height);

    let activeCount = 0;
    for (let p of pieces) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.vRotation;

      if (p.y < height) {
        activeCount++;
      } else {
        p.alpha -= 0.05;
      }

      if (p.alpha > 0) {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    }

    if (activeCount > 0) {
      animationId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, width, height);
      cancelAnimationFrame(animationId);
    }
  }

  render();
};
