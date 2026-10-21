const D = DATA, $ = s => document.querySelector(s);
const E = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; };
const X = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const hue = s => [...s].reduce((a, c) => a + c.charCodeAt(0), 0) * 37 % 360;
const av = (n, f, sz = 50) => `<div class="av" style="width:${sz}px;height:${sz}px;background:hsl(${hue(n)} 45% 62%)">${X(n[0])}${f ? `<img src="${X(f)}" alt="" onerror="this.remove()">` : ''}</div>`;
const pop = s => { s.classList.add('out'); setTimeout(() => s.remove(), 250); };
const now = () => { const d = new Date(); return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0'); };

/* ---------- status bar & wallpaper ---------- */
const tick = () => $('#clock').textContent = D.jam === 'auto' ? now() : D.jam;
tick(); setInterval(tick, 10000);
if (D.wallpaper) $('#wall').style.setProperty('--wp', `url("${D.wallpaper}")`);

/* ---------- ikon home ---------- */
const APPS = [
  ['wa', 'WhatsApp', '💬', '#5be584,#0aa150'], ['foto', 'Foto', '🖼️', '#ffd86b,#ff7aa8'],
  ['catatan', 'Catatan', '📝', '#fff3a6,#f5c518'], ['kalender', 'Kalender', '🗓️', '#fff,#e8e8ea'],
  ['kamera', 'Kamera', '📷', '#8e8e93,#48484a'], ['musik', 'Musik', '🎵', '#ff6b81,#e5173f'],
  ['peta', 'Peta', '🗺️', '#9be7a1,#4aa3ff'], ['jam', 'Jam', '⏰', '#3a3a3c,#000'],
  ['cuaca', 'Cuaca', '⛅', '#6ec1ff,#2a6fdb'], ['dompet', 'Dompet', '👛', '#555,#111'],
  ['kesehatan', 'Kesehatan', '❤️', '#fff,#ffe1e6'], ['setelan', 'Setelan', '⚙️', '#b0b0b5,#6e6e73']
];
const DOCK = [
  ['telepon', 'Telepon', '📞', '#5be584,#0aa150'], ['pesan', 'Pesan', '💭', '#6ee07a,#1db954'],
  ['safari', 'Safari', '🧭', '#6ec1ff,#2a6fdb'], ['mail', 'Mail', '📧', '#5ab0ff,#1a64e0']
];
const icon = ([id, n, e, c], label) => {
  const el = E('div', 'ic', `<i style="background:${ICONS[id][0]}">${ICONS[id][1]}</i>${label ? `<span>${n}</span>` : ''}`);
  el.dataset.id = id;
  el.tabIndex = 0; el.onclick = () => openApp(id, n, el);
  el.onkeydown = ev => ev.key === 'Enter' && el.click();
  return el;
};
APPS.forEach(a => $('#grid').append(icon(a, true)));
DOCK.forEach(a => $('#dock').append(icon(a, false)));

/* ---------- buka / tutup app ---------- */
const OPEN = { wa: waApp, foto: fotoApp, catatan: catApp };
let cur = null;
function toast(t) { const el = $('#toast'); el.textContent = t; el.classList.add('on'); clearTimeout(toast.t); toast.t = setTimeout(() => el.classList.remove('on'), 1800); }
function openApp(id, nama, src) {
  if (cur) return;
  if (!OPEN[id]) return toast(nama + ' belum diisi');
  const r = $('#phone').getBoundingClientRect(), b = src.getBoundingClientRect();
  const a = E('div', 'app');
  a.style.setProperty('--ox', b.left + b.width / 2 - r.left + 'px');
  a.style.setProperty('--oy', b.top + b.height / 2 - r.top + 'px');
  OPEN[id](a); $('#apps').append(a); cur = a;
  $('#phone').classList.add('lt'); $('#home').classList.add('bg');
}
function goHome() {
  if (!cur) return;
  cur._st?.getTracks().forEach(t => t.stop());
  pop(cur); cur = null;
  $('#phone').classList.remove('lt'); $('#home').classList.remove('bg');
}
$('#bar').onclick = goHome;
addEventListener('keydown', e => e.key === 'Escape' && goHome());

/* ---------- WHATSAPP ---------- */
function waApp(a, list = D.chats, im) {
  a.innerHTML = `<div class="scroll"><h1>Chat</h1><div class="srch">🔍 Tanya Meta AI atau cari</div><div class="rows"></div></div>
  <nav class="tabs"><span>◔<b>Pembaruan</b></span><span>📞<b>Panggilan</b></span><span>👥<b>Komunitas</b></span><span class="on">💬<b>Chat</b></span><span>⚙️<b>Setelan</b></span></nav>`;
  const rows = a.querySelector('.rows');
  list.forEach(c => {
    const last = [...c.pesan].reverse().find(m => !m.tanggal) || {};
    const r = E('div', 'row', `${av(c.nama, c.foto)}<div class="rb">
      <div class="r1"><b>${X(c.nama)}</b><small class="${c.belumDibaca ? 'g' : ''}">${X(last.jam || '')}</small></div>
      <div class="r2"><span>${last.dari === 'aku' ? '<i class="tk">✓✓</i> ' : last.pengirim ? X(last.pengirim) + ': ' : ''}${X(last.teks || (last.foto ? '📷 Foto' : last.stiker ? 'Stiker' : ''))}</span>${c.belumDibaca ? `<em>${c.belumDibaca}</em>` : ''}</div></div>`);
    r.onclick = () => {
      c.belumDibaca = 0;
      r.querySelector('em')?.remove();
      r.querySelector('.r1 small').classList.remove('g');
      badge();
      room(a, c, im);
    };
    rows.append(r);
  });
}
function room(a, c, im) {
  const s = E('div', 'sub chatv' + (im ? ' im' : ''), `<header><button class="back" aria-label="Kembali">‹</button>${av(c.nama, c.foto, 36)}<div><b>${X(c.nama)}</b><small>online</small></div><span class="hi"><button class="vc" aria-label="Video">📹</button><button class="vc" aria-label="Telepon">📞</button></span></header>
    <div class="msgs"></div><footer><span>＋</span><input placeholder="Ketik pesan" enterkeyhint="send"><span>🎤</span></footer>`);
  const box = s.querySelector('.msgs');
  let prev = '';
  const add = m => {
    if (m.tanggal) { prev = ''; return box.append(E('div', 'day', X(m.tanggal))); }
    const nm = m.pengirim && m.pengirim !== prev
      ? `<small class="pg" style="color:hsl(${hue(m.pengirim)} 60% 38%)">${X(m.pengirim)}</small>` : '';
    prev = m.pengirim || '';
    if (m.stiker) return box.append(E('div', 'st ' + m.dari, nm +
      `<img src="${X(m.stiker)}" alt="" onerror="this.outerHTML='<div class=sph>😀</div>'"><span class="t">${X(m.jam || '')}</span>`));
    box.append(E('div', 'b ' + m.dari, nm +
      (m.foto ? `<img src="${X(m.foto)}" alt="" onerror="this.outerHTML='<div class=ph>🖼️</div>'">` : '') +
      (m.teks ? `<p>${X(m.teks)}</p>` : '') +
      `<span class="t">${X(m.jam || '')}${m.dari === 'aku' ? ' <i>✓✓</i>' : ''}</span>`));
  };
  c.pesan.forEach(add);
  const inp = s.querySelector('input');
  inp.onkeydown = e => {
    if (e.key === 'Enter' && inp.value.trim()) {
      add({ dari: 'aku', teks: inp.value.trim(), jam: now() });
      inp.value = ''; box.scrollTop = box.scrollHeight;
    }
  };
  s.querySelector('.back').onclick = () => pop(s);
  s.querySelectorAll('.vc').forEach((b, i) => b.onclick = () => call(c.nama, c.foto, i ? 'WhatsApp audio' : 'WhatsApp video'));
  a.append(s); box.scrollTop = box.scrollHeight;
}

/* ---------- FOTO ---------- */
function fotoApp(a) {
  a.classList.add('fo');
  const g = D.galeri.length ? D.galeri : Array(15).fill('');
  a.innerHTML = `<div class="scroll"><h1>Foto</h1><p class="cap">${D.galeri.length} foto</p><div class="gal"></div></div>`;
  g.forEach((f, i) => {
    const t = E('div', 'tile', f ? `<img src="${X(f)}" alt="" loading="lazy" onerror="this.remove()">` : '');
    t.style.background = `hsl(${i * 47 % 360} 40% 78%)`;
    t.onclick = () => {
      const v = E('div', 'view', f ? `<img src="${X(f)}" alt="" onerror="this.outerHTML='🖼️'">` : '🖼️');
      v.onclick = () => v.remove(); a.append(v);
    };
    a.querySelector('.gal').append(t);
  });
}

/* ---------- CATATAN ---------- */
function catApp(a) {
  a.classList.add('ct');
  a.innerHTML = `<div class="scroll"><h1>Catatan</h1><div class="list"></div></div>`;
  D.catatan.forEach(n => {
    const r = E('div', 'nrow', `<b>${X(n.judul)}</b><span>${X(n.tanggal || '')} &nbsp; ${X((n.isi || '').split('\n')[0])}</span>`);
    r.onclick = () => {
      const s = E('div', 'sub note', `<button class="back">‹ Catatan</button><div class="nb"><h2>${X(n.judul)}</h2><p>${X(n.isi).replace(/\n/g, '<br>')}</p></div>`);
      s.querySelector('.back').onclick = () => pop(s); a.append(s);
    };
    a.querySelector('.list').append(r);
  });
}
function badge() {
  [['wa', D.chats], ['pesan', D.pesan]].forEach(([id, list]) => {
    const n = (list || []).reduce((s, c) => s + (c.belumDibaca || 0), 0);
    document.querySelectorAll(`.ic[data-id="${id}"]`).forEach(ic => {
      ic.querySelector('.bd')?.remove();
      if (n) ic.append(E('div', 'bd', n > 99 ? '99+' : n));
    });
  });
}
badge();