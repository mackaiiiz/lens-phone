/* Ikon ala iOS: [background, SVG]. Semua vektor, tajam di layar apa pun. */
const ICONS = (() => {
  const g = (s, full) => `<svg viewBox="${full ? '0 0 24 24' : '-3 -3 30 30'}" width="100%" height="100%" fill="#fff" aria-hidden="true">${s}</svg>`;
  const grad = (a, b) => `linear-gradient(180deg,${a},${b})`;
  const n = new Date();
  const hari = ['MIN', 'SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB'][n.getDay()];
  const jm = (n.getHours() % 12 + n.getMinutes() / 60) * 30, mn = n.getMinutes() * 6;
  const phone = 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z';
  const heart = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
  const petals = ['#ff9f0a', '#ffd60a', '#30d158', '#64d2ff', '#0a84ff', '#bf5af2', '#ff375f', '#ff453a']
    .map((c, i) => `<ellipse cx="12" cy="7" rx="3" ry="4.6" fill="${c}" style="mix-blend-mode:multiply" transform="rotate(${i * 45} 12 12)"/>`).join('');
  const ticks = [...Array(12)].map((_, i) => `<path d="M12 2.4v1.4" stroke="#111" stroke-width=".5" transform="rotate(${i * 30} 12 12)"/>`).join('');
  return {
    telepon: [grad('#67e07b', '#1fb83a'), g(`<path d="${phone}"/>`)],
    pesan: [grad('#67e07b', '#1fb83a'), g('<ellipse cx="12" cy="11" rx="10" ry="8"/><path d="M5 16l-2.500 5 6-3z"/>')],
    safari: [grad('#5ac8fa', '#0a6cf0'), g('<circle cx="12" cy="12" r="10" fill="none" stroke="#fff" stroke-width="1.6"/><path d="M17 7l-3.500 6.500L7 17l3.500-6.500z"/><path d="M17 7l-3.500 6.500-3-3z" fill="#ff3b30"/>')],
    mail: [grad('#5ac8fa', '#0a6cf0'), g('<path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>')],
    wa: [grad('#5be584', '#0aa150'), g(`<path d="M12 2.500a9.500 9.500 0 0 0-8.100 14.400L2.500 21.500l4.800-1.300A9.500 9.500 0 1 0 12 2.500z" fill="none" stroke="#fff" stroke-width="1.800"/><g transform="translate(7 6.800) scale(.42)"><path d="${phone}"/></g>`)],
    foto: ['#fff', g(petals, true)],
    catatan: ['#fff', g('<rect width="24" height="7" fill="#ffd60a"/><path d="M3 11.500h18M3 15.500h18M3 19.500h18" fill="none" stroke="#d1d1d6" stroke-width=".5"/>', true)],
    kalender: ['#fff', g(`<text x="12" y="6.600" font-size="4" font-weight="600" fill="#ff3b30" text-anchor="middle" font-family="sans-serif">${hari}</text><text x="12" y="19.800" font-size="13.500" font-weight="300" fill="#111" text-anchor="middle" font-family="sans-serif">${n.getDate()}</text>`, true)],
    kamera: [grad('#a1a1a6', '#5e5e63'), g('<path d="M8 6.500L9.500 4h5L16 6.500z"/><rect x="2" y="6" width="20" height="14" rx="3"/><circle cx="12" cy="13" r="4.500" fill="#5e5e63"/><circle cx="12" cy="13" r="3" fill="#fff"/><circle cx="12" cy="13" r="1.600" fill="#3a3a3c"/>', true)],
    musik: [grad('#ff6a7d', '#fa233b'), g('<path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.790-4 4s1.790 4 4 4 4-1.790 4-4V7h4V3h-6z"/>')],
    peta: ['#e9f5e1', g('<path d="M-2 18L26 8" stroke="#ffd86b" stroke-width="3.500"/><path d="M9 26L15-2" stroke="#fff" stroke-width="2.500"/><path d="M-2 6l10 4" stroke="#7ec8ff" stroke-width="3"/><circle cx="15" cy="10.500" r="3.800" fill="#ff3b30"/><circle cx="15" cy="10.500" r="1.400"/>', true)],
    jam: ['#000', g(`<circle cx="12" cy="12" r="10.800" fill="#fff"/>${ticks}<path d="M12 12V6.500" stroke="#111" stroke-width="1" stroke-linecap="round" transform="rotate(${jm} 12 12)"/><path d="M12 12V4.500" stroke="#111" stroke-width=".8" stroke-linecap="round" transform="rotate(${mn} 12 12)"/><circle cx="12" cy="12" r=".9" fill="#ff9f0a"/>`, true)],
    cuaca: [grad('#4fb8ff', '#1f6fe5'), g('<circle cx="8.500" cy="8" r="4" fill="#ffd60a"/><path d="M7 20a4 4 0 0 1 0-8 5.500 5.500 0 0 1 10.500 1.200A3.400 3.400 0 0 1 17 20z"/>')],
    dompet: ['#000', g('<rect x="3" y="4" width="18" height="7" rx="2" fill="#ff9f0a"/><rect x="3" y="7" width="18" height="7" rx="2" fill="#ff453a"/><rect x="3" y="10" width="18" height="7" rx="2" fill="#30d158"/><rect x="3" y="13" width="18" height="8" rx="2.500" fill="#2c2c2e"/>', true)],
    kesehatan: ['#fff', g(`<path fill="#ff375f" d="${heart}"/>`)],
    setelan: [grad('#a7a7ad', '#6b6b72'), g('<circle cx="12" cy="12" r="8.800" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="3.500 2.400"/><circle cx="12" cy="12" r="7.200"/><circle cx="12" cy="12" r="3.200" fill="#76767c"/>')]
  };
})();
