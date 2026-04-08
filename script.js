// ============================================================
//  STARDEW VALLEY - PERFIL TECNICO EN PROGRAMACION
//  script.js
// ============================================================

// ---- FECHA ACTUAL ----
(function setDate() {
  const d = new Date();
  const months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  const el = document.getElementById('fecha');
  if (el) el.textContent = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
})();

// ---- BADGES (editá este array con tus tecnologias) ----
const SKILLS = [
  { name: 'Python',     color: '#3A7A28' },
  { name: 'JavaScript', color: '#BA7517' },
  { name: 'SQL',        color: '#185FA5' },
  { name: 'HTML/CSS',   color: '#993C1D' },
  { name: 'React',      color: '#5DCAA5' },
  { name: 'Django',     color: '#6BBF59' },
  { name: 'Git',        color: '#A32D2D' },
  { name: 'Docker',     color: '#0F6E56' },
  { name: 'Linux',      color: '#5F5E5A' },
];

(function renderBadges() {
  const container = document.getElementById('badgeContainer');
  if (!container) return;

  SKILLS.forEach(skill => {
    const btn = document.createElement('div');
    btn.className = 'badge';

    const dot = document.createElement('span');
    dot.className = 'badge-dot';
    dot.style.background = skill.color;

    const txt = document.createTextNode(skill.name);

    btn.appendChild(dot);
    btn.appendChild(txt);
    container.appendChild(btn);
  });
})();

// ---- TOOLTIP en icard ----
(function initTooltips() {
  const tooltip = document.getElementById('tooltip');
  const cards = document.querySelectorAll('.icard[data-tooltip]');

  cards.forEach(card => {
    card.addEventListener('mouseenter', e => {
      tooltip.textContent = card.dataset.tooltip;
      tooltip.classList.add('show');
    });

    card.addEventListener('mousemove', e => {
      tooltip.style.left = (e.clientX + 14) + 'px';
      tooltip.style.top  = (e.clientY - 10) + 'px';
    });

    card.addEventListener('mouseleave', () => {
      tooltip.classList.remove('show');
    });
  });
})();

// ---- CLICK AVATAR → lluvia de estrellas ----
(function initAvatarClick() {
  const av = document.querySelector('.avbox');
  if (!av) return;

  av.addEventListener('click', e => {
    spawnStars(e.clientX, e.clientY, 12);
  });
})();

function spawnStars(cx, cy, count) {
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'star-particle';

    // colores aleatorios tipo Stardew
    const colors = ['#F4D903','#6BBF59','#5DCAA5','#7F77DD','#D4537E','#F4D9A0'];
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    s.style.left = cx + 'px';
    s.style.top  = cy + 'px';

    const angle  = (Math.random() * Math.PI * 2);
    const dist1  = 30 + Math.random() * 40;
    const dist2  = 60 + Math.random() * 60;
    s.style.setProperty('--dx',  Math.cos(angle) * dist1 + 'px');
    s.style.setProperty('--dy',  Math.sin(angle) * dist1 + 'px');
    s.style.setProperty('--dx2', Math.cos(angle) * dist2 + 'px');
    s.style.setProperty('--dy2', Math.sin(angle) * dist2 + 'px');

    document.body.appendChild(s);
    setTimeout(() => s.remove(), 750);
  }
}

// ---- CLICK en proyectos → efecto pixelado ----
(function initFarmItems() {
  const items = document.querySelectorAll('.fitem');
  items.forEach(item => {
    item.addEventListener('click', () => {
      item.style.background = '#F4D903';
      setTimeout(() => item.style.background = '', 300);
    });
  });
})();

// ---- EASTER EGG: escribir "stardew" activa modo arco iris ----
(function initKonamiEgg() {
  let typed = '';
  const secret = 'stardew';

  document.addEventListener('keydown', e => {
    typed += e.key.toLowerCase();
    if (typed.length > secret.length) typed = typed.slice(-secret.length);

    if (typed === secret) {
      activateRainbowMode();
      typed = '';
    }
  });
})();

function activateRainbowMode() {
  const cards = document.querySelectorAll('.icard');
  const palette = ['#F4D9A0','#C8E6C9','#B3E5FC','#F8BBD0','#E1BEE7','#FFE0B2','#B2EBF2'];
  cards.forEach((card, i) => {
    card.style.background = palette[i % palette.length];
    setTimeout(() => card.style.background = '', 2000);
  });

  // lluvia de estrellas central
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      spawnStars(
        window.innerWidth / 2 + (Math.random() - 0.5) * 200,
        window.innerHeight / 2 + (Math.random() - 0.5) * 200,
        6
      );
    }, i * 150);
  }
}

// ============================================================
//  FORMULARIO DE CONTACTO → n8n WEBHOOK
// ============================================================

// 👇 REEMPLAZÁ con la URL de tu webhook de n8n
const N8N_WEBHOOK_URL = 'https://TU-INSTANCIA.n8n.cloud/webhook/portfolio-contact';

(function initContactForm() {
  const form      = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');
  const statusBox = document.getElementById('cfStatus');

  if (!form) return;

  function showStatus(type, msg) {
    statusBox.className     = 'cf-status ' + type;
    statusBox.textContent   = msg;
    statusBox.style.display = 'block';
  }

  function resetStatus() {
    statusBox.style.display = 'none';
    statusBox.className     = 'cf-status';
  }

  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    resetStatus();

    const name    = document.getElementById('cf-name').value.trim();
    const email   = document.getElementById('cf-email').value.trim();
    const subject = document.getElementById('cf-subject').value.trim();
    const message = document.getElementById('cf-message').value.trim();

    if (!name || !email || !message) {
      showStatus('error', '⚠ Completá nombre, email y mensaje.');
      return;
    }

    submitBtn.disabled    = true;
    submitBtn.textContent = '⏳ ENVIANDO...';
    showStatus('loading', '▶ Enviando mensaje, aguardá...');

    try {
      const res  = await fetch(N8N_WEBHOOK_URL, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        showStatus('success', `✔ ¡Gracias ${name}! Mensaje recibido. Te respondo pronto.`);
        form.reset();
        spawnStars(
          submitBtn.getBoundingClientRect().left + submitBtn.offsetWidth / 2,
          submitBtn.getBoundingClientRect().top,
          14
        );
      } else {
        showStatus('error', '✘ ' + (data.message || 'Algo salió mal, intentá de nuevo.'));
      }
    } catch (err) {
      showStatus('error', '✘ Sin conexión o el servidor no responde.');
    } finally {
      submitBtn.disabled    = false;
      submitBtn.textContent = '▶ ENVIAR MENSAJE';
    }
  });
})();
