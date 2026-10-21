/* Setelan, Peta, Mail dengan layout ala iOS. Dimuat setelah apps.js */

/* ---------- helper ---------- */
const sw = on => `<span class="sw${on ? ' on' : ''}"><i></i></span>`;
const grp = (rows, head) => {
  const g = E('div', 'sgw', head ? `<div class="sh">${X(head)}</div>` : '');
  const l = E('div', 'sg'); rows.forEach(r => l.append(r)); g.append(l); return g;
};

/* ---------- SETELAN ---------- */
function setPage(a, o) {
  const s = E('div', 'sub set', `<div class="stop"><button class="back">‹ Setelan</button><b>${X(o.judul)}</b></div><div class="sbody"></div>`);
  const b = s.querySelector('.sbody');
  if (o.toggle !== undefined) {
    const r = E('div', 'srow', `<span class="sj">${X(o.judul)}</span>${sw(o.toggle)}`);
    r.onclick = () => r.querySelector('.sw').classList.toggle('on'); b.append(grp([r]));
  }
  if (o.daftar) {
    const rows = o.daftar.map(n => E('div', 'srow', `<span class="ck">${n === o.pilih ? '✓' : ''}</span><span class="sj">${X(n)}</span><span class="ch">ⓘ</span>`));
    rows.forEach(r => r.onclick = () => { rows.forEach(x => x.querySelector('.ck').textContent = ''); r.querySelector('.ck').textContent = '✓'; });
    b.append(grp(rows, o.kepala || 'Perangkat Saya'));
  }
  s.querySelector('.back').onclick = () => pop(s); a.append(s);
}
function setRow(a, r) {
  const aksi = r.toggle !== undefined && !r.anak;
  const e = E('div', 'srow', `<span class="si" style="background:${r.warna || '#8e8e93'}"><b>${r.ikon || ''}</b></span><span class="sj">${X(r.judul)}</span>${aksi ? sw(r.toggle) : `<span class="sn">${X(r.nilai || '')}</span><span class="ch">›</span>`}`);
  if (aksi) e.onclick = () => e.querySelector('.sw').classList.toggle('on');
  else if (r.anak) e.onclick = () => setPage(a, r.anak);
  return e;
}
function setelanApp(a) {
  const S = D.setelan, p = S.profil;
  a.classList.add('sett');
  a.innerHTML = `<div class="scroll"><h1>Setelan</h1><div class="srch">🔍 Cari</div>
    <div class="prof">${av(p.nama, p.foto, 60)}<div><b>${X(p.nama)}</b><small>${X(p.ket)}</small></div><span class="ch">›</span></div><div class="gs"></div></div>`;
  S.grup.forEach(g => a.querySelector('.gs').append(grp(g.map(r => setRow(a, r)))));
}

/* ---------- PETA ---------- */
const mapSvg = () => `<svg viewBox="0 0 400 800" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true">
  <rect width="400" height="800" fill="#f1eee6"/>
  <g fill="#e8e3d8"><rect x="125" y="265" width="55" height="55" rx="4"/><rect x="205" y="185" width="55" height="60" rx="4"/><rect x="285" y="345" width="45" height="55" rx="4"/><rect x="55" y="345" width="45" height="50" rx="4"/><rect x="205" y="425" width="55" height="50" rx="4"/><rect x="125" y="585" width="60" height="45" rx="4"/></g>
  <path d="M0 650q120-40 200 20t200 10V800H0z" fill="#a8d5e5"/>
  <g fill="#cde8c3"><rect x="40" y="90" width="120" height="90" rx="14"/><rect x="285" y="440" width="85" height="110" rx="14"/><rect x="20" y="450" width="70" height="70" rx="12"/></g>
  <g fill="none" stroke="#fff" stroke-linecap="round"><path stroke-width="9" d="M-10 250H410M-10 400H410M-10 560H410M110-10V810M270-10V810"/><path stroke-width="5" d="M-10 170H410M-10 330H410M190-10V810M340-10V810M40-10V810"/></g>
  <path d="M-10 700L410 120" stroke="#ffd98a" stroke-width="12" fill="none"/>
  <path d="M-10 700L410 120" stroke="#f0b94a" stroke-width="1.200" fill="none"/>
</svg>`;
function petaApp(a) {
  const P = D.peta; a.classList.add('map');
  a.innerHTML = `<div class="mapbg">${P.gambar ? `<img src="${X(P.gambar)}" alt="">` : mapSvg()}</div><div class="mpins"></div>
    <div class="mctl"><button aria-label="Info">ⓘ</button><button aria-label="Lokasiku">➤</button></div>
    <div class="sheet"><div class="grab"></div><div class="mq">🔍 Cari di Peta</div><div class="mbody"></div></div>`;
  const body = a.querySelector('.mbody'), sh = a.querySelector('.sheet'), pins = a.querySelector('.mpins');
  const list = () => {
    sh.classList.remove('det');
    pins.querySelectorAll('.pin').forEach(p => p.classList.remove('sel'));
    body.innerHTML = '<div class="mh">Terakhir</div>';
    P.tempat.forEach((t, i) => {
      const r = E('div', 'mrow', `<span class="mi"><b>${t.ikon || '📍'}</b></span><div><b>${X(t.nama)}</b><small>${X(t.alamat || '')}${t.jarak ? ' · ' + X(t.jarak) : ''}</small></div>`);
      r.onclick = () => pick(i); body.append(r);
    });
  };
  const pick = i => {
    const t = P.tempat[i];
    sh.classList.remove('full'); sh.classList.add('det');
    pins.querySelectorAll('.pin').forEach((p, j) => p.classList.toggle('sel', j === i));
    body.innerHTML = `<div class="dh"><div><b>${X(t.nama)}</b><small>${X(t.tipe || 'Tempat')}${t.jarak ? ' · ' + X(t.jarak) : ''}</small></div><button class="x" aria-label="Tutup">✕</button></div>
      <div class="dbtn"><button class="rt">🚗 Rute</button><button>📞 Telepon</button><button>🔖 Simpan</button></div><div class="mh">Alamat</div><p class="ad">${X(t.alamat || '-')}</p>`;
    body.querySelector('.x').onclick = list;
    body.querySelector('.rt').onclick = () => toast('Rute ke ' + t.nama);
  };
  P.tempat.forEach((t, i) => {
    const p = E('button', 'pin', t.ikon || '📍');
    p.style.left = (t.x ?? 20 + hue(t.nama) % 60) + '%'; p.style.top = (t.y ?? 20 + hue(t.nama) * 7 % 60) + '%';
    p.onclick = () => pick(i); pins.append(p);
  });
  const me = E('div', 'me'); me.style.left = (P.lokasiku?.x ?? 50) + '%'; me.style.top = (P.lokasiku?.y ?? 55) + '%'; pins.append(me);
  const buka = () => { if (sh.classList.contains('det')) list(); sh.classList.toggle('full'); };
  a.querySelector('.grab').onclick = a.querySelector('.mq').onclick = buka;
  list();
}

/* ---------- MAIL ---------- */
function badgeMail() {
  const n = (D.email || []).filter(m => m.belumDibaca).length;
  document.querySelectorAll('.ic[data-id="mail"]').forEach(ic => { ic.querySelector('.bd')?.remove(); if (n) ic.append(E('div', 'bd', n)); });
}
function mailDetail(a, m) {
  const s = E('div', 'sub md', `<div class="mt"><button class="back">‹ Kotak Masuk</button><span class="bl">▲ &nbsp; ▼</span></div>
    <div class="mbd"><h2>${X(m.subjek)}</h2><div class="mh2">${av(m.dari, m.foto || '', 40)}<div><b>${X(m.dari)}</b><small>Kepada: Saya</small></div><small class="tj">${X(m.jam)}</small></div><p>${X(m.isi).replace(/\n/g, '<br>')}</p></div>
    <div class="mtb"><span>🗑️</span><span>📁</span><span>↩︎</span><span>✎</span></div>`);
  s.querySelector('.back').onclick = () => pop(s); a.append(s);
}
function mailApp(a) {
  const M = D.email, cnt = () => M.filter(m => m.belumDibaca).length;
  a.classList.add('mail');
  a.innerHTML = `<div class="scroll"><div class="mt"><span class="bl">‹ Kotak Surat</span><span class="bl">Edit</span></div><h1>Kotak Masuk</h1><div class="srch">🔍 Cari</div><div class="ml"></div></div>
    <div class="mtb"><span>☰</span><small>Diperbarui Baru Saja<br><i class="mu">${cnt()} Belum Dibaca</i></small><span>✎</span></div>`;
  M.forEach(m => {
    const r = E('div', 'mr', `<i class="dot${m.belumDibaca ? ' on' : ''}"></i><div class="mb"><div class="r1"><b>${X(m.dari)}</b><small>${X(m.jam)}</small></div><div class="ms">${X(m.subjek)}</div><div class="mp">${X((m.isi || '').replace(/\n+/g, ' '))}</div></div>`);
    r.onclick = () => {
      m.belumDibaca = false; r.querySelector('.dot').classList.remove('on');
      a.querySelector('.mu').textContent = cnt() + ' Belum Dibaca'; badgeMail(); mailDetail(a, m);
    };
    a.querySelector('.ml').append(r);
  });
}
badgeMail();

Object.assign(OPEN, { setelan: setelanApp, peta: petaApp, mail: mailApp });
