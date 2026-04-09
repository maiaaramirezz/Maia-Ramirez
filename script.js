// script.js

// 1. Establecer fecha automática
(function setDate() {
  const d = new Date();
  const months = ['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
  const el = document.getElementById('fecha');
  if(el) el.textContent = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
})();

// 2. Cargar habilidades dinámicamente
const SKILLS = [
  { name: 'Python', color: '#3A7A28' },
  { name: 'JavaScript', color: '#BA7517' },
  { name: 'SQL', color: '#185FA5' },
  { name: 'Git', color: '#A32D2D' }
];

const container = document.getElementById('badgeContainer');
if(container) {
  SKILLS.forEach(skill => {
    const badge = document.createElement('div');
    badge.className = 'badge';
    badge.innerHTML = `<span class="badge-dot" style="background:${skill.color}"></span>${skill.name}`;
    container.appendChild(badge);
  });
}
