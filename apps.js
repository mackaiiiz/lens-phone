/* App tambahan: Telepon + layar panggilan, Pesan, Kamera, dan app template (isi dari data.js) */
const fotoDari = n => (D.chats.find(c => c.nama === n) || {}).foto || '';

/* ---------- layar panggilan ---------- */
function call(nama, foto, jenis) {
  if ($('.callv')) return;
  const ph = $('#phone'), h = hue(nama);
  const btn = (e, t) => `<div class="cb"><button>${e}</button><small>${t}</small></div>`;
  const v = E('div', 'callv', `<div class="who"><small class="ky">${X(jenis)}</small>${av(nama, foto, 96)}<b>${X(nama)}</b><span class="st">memanggil…</span></div>
    <div class="cg">${btn('🎙️', 'bisukan')}${btn('⌗', 'papan tombol')}${btn('🔊', 'speaker')}${btn('＋', 'tambah')}${btn('📹', 'FaceTime')}${btn('👤', 'kontak')}</div>
    <button class="end" aria-label="Akhiri panggilan">📞</button>`);
  v.style.background = `linear-gradient(180deg,hsl(${h} 25% 32%),hsl(${h} 30% 9%))`;
  const st = v.querySelector('.st'); let s = 0, tm;
  const w = setTimeout(() => {
    st.textContent = '00:00';
    tm = setInterval(() => { s++; st.textContent = String(s / 60 | 0).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); }, 1000);
  }, 2200);
  v.querySelectorAll('.cb button').forEach(b => b.onclick = () => b.classList.toggle('on'));
  v.querySelector('.end').onclick = () => {
    clearTimeout(w); clearInterval(tm); st.textContent = 'Panggilan berakhir';
    ph.classList.remove('call'); setTimeout(() => v.remove(), 900);
  };
  ph.classList.add('call'); ph.append(v);
}

/* ---------- Telepon ---------- */
function keypad(p) {
  p.innerHTML = `<div class="num"></div><div class="keys">${[...'123456789*0#'].map(k => `<button>${k}</button>`).join('')}</div>
    <div class="act"><i style="width:76px"></i><button class="go" aria-label="Telepon">📞</button><button class="del" aria-label="Hapus">⌫</button></div>`;
  const n = p.querySelector('.num');
  p.querySelectorAll('.keys button').forEach(b => b.onclick = () => n.textContent += b.textContent);
  p.querySelector('.del').onclick = () => n.textContent = n.textContent.slice(0, -1);
  p.querySelector('.go').onclick = () => n.textContent && call(n.textContent, '', 'seluler');
}
function teleponApp(a) {
  a.innerHTML = `<div class="scroll"><h1></h1><div class="pane"></div></div><nav class="tabs"></nav>`;
  const h = a.querySelector('h1'), p = a.querySelector('.pane'), nav = a.querySelector('.tabs');
  const jenisTxt = { masuk: '↙ masuk', keluar: '↗ keluar', 'tak terjawab': '✕ tak terjawab' };
  const row = (n, s, j, cls) => {
    const r = E('div', 'row', `${av(n, fotoDari(n), 40)}<div class="rb"><div class="r1"><b class="${cls || ''}">${X(n)}</b><small>${X(j || '')}</small></div><small>${X(s || '')}</small></div>`);
    r.onclick = () => call(n, fotoDari(n), 'seluler'); return r;
  };
  [['🕘', 'Terbaru', () => D.panggilan.forEach(c => p.append(row(c.nama, jenisTxt[c.jenis], c.jam, c.jenis === 'tak terjawab' ? 'mis' : '')))],
   ['👤', 'Kontak', () => D.chats.forEach(c => p.append(row(c.nama, 'seluler')))],
   ['⌗', 'Papan Tombol', () => keypad(p)]
  ].forEach(([e, t, f]) => {
    const s = E('span', '', `${e}<b>${t}</b>`);
    s.onclick = () => { p.innerHTML = ''; h.textContent = t; [...nav.children].forEach(x => x.classList.remove('on')); s.classList.add('on'); f(); };
    nav.append(s);
  });
  nav.children[0].click();
}

/* ---------- app generik: daftar -> detail (dipakai banyak app) ---------- */
function generik(a, o) {
  a.classList.add('gn');
  a.innerHTML = `<div class="scroll"><h1>${X(o.judul)}</h1>${o.hero || ''}<div class="list"></div></div>`;
  const l = a.querySelector('.list');
  (o.rows || []).forEach(r => {
    const e = E('div', 'nrow', `${r.ikon ? `<span class="ri">${r.ikon}</span>` : ''}<div><b>${X(r.judul)}</b><span>${X(r.ket || '')}</span></div>`);
    e.onclick = () => {
      if (r.fn) return r.fn();
      if (!r.isi) return;
      const s = E('div', 'sub note', `<button class="back">‹ ${X(o.judul)}</button><div class="nb"><h2>${X(r.judul)}</h2><p>${X(r.isi).replace(/\n/g, '<br>')}</p></div>`);
      s.querySelector('.back').onclick = () => pop(s); a.append(s);
    };
    l.append(e);
  });
}
const G = (judul, key, hero) => a => generik(a, { judul, hero: hero && hero(), rows: D[key] });
const kalHero = () => {
  const n = new Date(), f = new Date(n.getFullYear(), n.getMonth(), 1).getDay(), t = new Date(n.getFullYear(), n.getMonth() + 1, 0).getDate();
  let h = `<div class="cal"><h3>${n.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })}</h3>${[...'MSSRKJS'].map(x => `<b>${x}</b>`).join('')}${'<i></i>'.repeat(f)}`;
  for (let i = 1; i <= t; i++) h += `<span class="${i === n.getDate() ? 'td' : ''}">${i}</span>`;
  return h + '</div>';
};
let au = null;

Object.assign(OPEN, {
  telepon: teleponApp,
  pesan: a => { waApp(a, D.pesan, true); a.classList.add('im'); a.querySelector('h1').textContent = 'Pesan'; a.querySelector('.srch').textContent = '🔍 Cari'; },
  mail: G('Mail', 'email'), safari: G('Safari', 'safari'), peta: G('Peta', 'tempat'),
  dompet: G('Dompet', 'kartu'), kesehatan: G('Kesehatan', 'kesehatan'), setelan: G('Setelan', 'setelan'),
  kalender: G('Kalender', 'acara', kalHero),
  jam: G('Jam', 'alarm', () => `<div class="bigjam">${now()}</div>`),
  cuaca: a => {
    const c = D.cuaca;
    generik(a, { judul: 'Cuaca', rows: c.perjam, hero: `<div class="wx"><b>${X(c.kota)}</b><div>${X(c.suhu)}°</div><span>${X(c.kondisi)}</span><small>T:${X(c.tinggi)}° R:${X(c.rendah)}°</small></div>` });
    a.classList.add('cu');
  },
  musik: a => generik(a, { judul: 'Musik', rows: D.lagu.map(l => ({ ...l, ikon: '🎵', fn: () => { au && au.pause(); if (l.file) { au = new Audio(l.file); au.play().catch(() => toast('File musik tidak ditemukan')); } toast('▶ ' + l.judul); } })) }),
  kamera: a => {
    a.classList.add('cam');
    a.innerHTML = `<video autoplay playsinline muted loop></video><div class="shut"><button aria-label="Ambil foto"></button></div>`;
    const v = a.querySelector('video');
    if (D.kameraVideo) {
      v.src = D.kameraVideo; v.style.transform = 'none';
      v.play().catch(() => toast('Video tidak ditemukan'));
    } else {
      navigator.mediaDevices?.getUserMedia({ video: { facingMode: 'user' } })
        .then(s => { v.srcObject = s; a._st = s; }).catch(() => toast('Kamera tidak diizinkan'));
    }
    a.querySelector('button').onclick = () => { a.classList.add('fl'); setTimeout(() => a.classList.remove('fl'), 150); };
  }
});
