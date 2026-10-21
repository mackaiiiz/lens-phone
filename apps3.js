/* Lockscreen (PIN), Kalender ala iOS, aplikasi X. Dimuat paling akhir. */
const pad = n => String(n).padStart(2, '0');
const XPATH = 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z';
ICONS.x = ['#000', `<svg viewBox="-3 -3 30 30" width="100%" height="100%" fill="#fff" aria-hidden="true"><path d="${XPATH}"/></svg>`];

/* ---------- KALENDER ---------- */
function kalApp(a) {
  a.classList.add('kal');
  const t0 = new Date(); let y = t0.getFullYear(), m = t0.getMonth();
  const key = (yy, mm, d) => `${yy}-${pad(mm + 1)}-${pad(d)}`;
  const hari = key(y, m, t0.getDate());
  let sel = hari;
  const ev = k => (D.acara || []).filter(e => e.tanggal === k).sort((p, q) => (p.jam || '').localeCompare(q.jam || ''));
  const draw = () => {
    const f = (new Date(y, m, 1).getDay() + 6) % 7, t = new Date(y, m + 1, 0).getDate();
    let g = '<i></i>'.repeat(f);
    for (let d = 1; d <= t; d++) {
      const k = key(y, m, d);
      g += `<button class="kd${k === hari ? ' td' : ''}${k === sel ? ' sl' : ''}" data-k="${k}"><span>${d}</span><u>${ev(k).length ? '<s></s>' : ''}</u></button>`;
    }
    const [yy, mm, dd] = sel.split('-').map(Number), es = ev(sel);
    const jd = new Date(yy, mm - 1, dd).toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
    a.innerHTML = `<div class="kh"><div><b>${new Date(y, m, 1).toLocaleDateString('id-ID', { month: 'long' })}</b> <span>${y}</span></div><div class="kn"><button class="pv" aria-label="Bulan sebelumnya">‹</button><button class="nx" aria-label="Bulan berikutnya">›</button></div></div>
      <div class="kw">${[...'SSRKJSM'].map(c => `<b>${c}</b>`).join('')}</div><div class="kg">${g}</div>
      <div class="kl"><div class="kj">${X(jd)}</div>${es.length ? es.map(e => `<div class="ke"><div class="kt2"><b>${X(e.jam || 'seharian')}</b><small>${X(e.sampai || '')}</small></div><i style="background:${e.warna || '#0a84ff'}"></i><div><b>${X(e.judul)}</b><small>${X(e.lokasi || '')}</small></div></div>`).join('') : '<p class="ko">Tidak ada acara</p>'}</div>
      <div class="ktb"><button class="hi2">Hari Ini</button></div>`;
    a.querySelectorAll('.kd').forEach(b => b.onclick = () => { sel = b.dataset.k; draw(); });
    a.querySelector('.pv').onclick = () => { if (--m < 0) { m = 11; y--; } sel = key(y, m, 1); draw(); };
    a.querySelector('.nx').onclick = () => { if (++m > 11) { m = 0; y++; } sel = key(y, m, 1); draw(); };
    a.querySelector('.hi2').onclick = () => { y = t0.getFullYear(); m = t0.getMonth(); sel = hari; draw(); };
  };
  draw();
}

/* ---------- X ---------- */
function xApp(a) {
  const XD = D.x, me = XD.akunku;
  a.classList.add('xapp'); if (XD.tema === 'gelap') a.classList.add('dark');
  const acc = h => h === me.handle ? me : (XD.akun.find(k => k.handle === h) || { nama: h, handle: h });
  a.innerHTML = `<div class="xtop"><div class="xh"><button class="xav" aria-label="Profil"></button><svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true"><path d="${XPATH}"/></svg><span style="width:32px"></span></div>
    <div class="xt"><span class="on">Untuk Anda</span><span>Mengikuti</span></div></div><div class="xf"></div>
    <button class="fab" aria-label="Tulis postingan">✎</button><nav class="xn"><span class="on">🏠</span><span>🔍</span><span>🔔</span><span>✉️</span></nav>`;
  const feed = a.querySelector('.xf');
  a.querySelector('.xav').innerHTML = av(me.nama, me.foto, 32);
  a.querySelectorAll('.xtop .xt span').forEach(s => s.onclick = () => { a.querySelectorAll('.xtop .xt span').forEach(x => x.classList.remove('on')); s.classList.add('on'); });

  const post = (p, noOpen) => {
    const u = acc(p.oleh);
    const e = E('div', 'xp', `${av(u.nama, u.foto, 40)}<div class="xb"><div class="xl"><b>${X(u.nama)}</b>${u.privat ? '<i class="lk">🔒</i>' : ''}<span>@${X(u.handle)} · ${X(p.jam || '')}</span></div>
      <div class="xx">${X(p.teks).replace(/\n/g, '<br>')}</div>${p.foto ? `<img class="xi" src="${X(p.foto)}" alt="" onerror="this.remove()">` : ''}
      <div class="xa"><span>💬 ${p.balas || 0}</span><span>🔁 ${p.ulang || 0}</span><span class="lv${p.liked ? ' on' : ''}">${p.liked ? '❤️' : '🤍'} ${(p.suka || 0) + (p.liked ? 1 : 0)}</span><span>📊 ${X(p.tayang || '')}</span><span>⬆️</span></div></div>`);
    e.querySelector('.lv').onclick = ev => { ev.stopPropagation(); p.liked = !p.liked; e.replaceWith(post(p, noOpen)); };
    if (!noOpen) e.onclick = () => detail(p);
    return e;
  };
  const home = () => { feed.innerHTML = ''; XD.postingan.forEach(p => feed.append(post(p))); };
  const notif = () => {
    feed.innerHTML = '';
    (XD.notif || []).forEach(n => {
      const u = acc(n.oleh);
      feed.append(E('div', 'xp', `<span class="nk">${({ suka: '❤️', balas: '💬', follow: '👤', ulang: '🔁' })[n.jenis] || '🔔'}</span><div class="xb">${av(u.nama, u.foto, 32)}<div class="xx"><b>${X(u.nama)}</b> ${X(n.teks)} <small>· ${X(n.jam || '')}</small></div></div>`));
    });
  };
  const detail = p => {
    const s = E('div', 'sub xd', `<div class="xs"><button class="back">‹</button><b>Postingan</b></div><div class="xr"></div>`);
    const r = s.querySelector('.xr'); r.append(post(p, true));
    (p.balasan || []).forEach(b => r.append(post(b, true)));
    s.querySelector('.back').onclick = () => pop(s); a.append(s);
  };
  const profil = () => {
    const s = E('div', 'sub xd', `<div class="xs"><button class="back">‹</button><b>${X(me.nama)}</b></div><div class="xr">
      <div class="ban" style="${me.banner ? `background-image:url('${X(me.banner)}')` : ''}"></div>
      <div class="pr">${av(me.nama, me.foto, 76)}<button class="ed">Edit profil</button></div>
      <div class="pi"><b>${X(me.nama)}</b>${me.privat ? ' <i class="lk">🔒</i>' : ''}<small>@${X(me.handle)}</small><p>${X(me.bio || '')}</p><small>📅 Bergabung ${X(me.bergabung || '')}</small>
      <div class="fc"><span><b>${me.mengikuti}</b> Mengikuti</span><span><b>${me.pengikut}</b> Pengikut</span></div></div>
      <div class="xt"><span class="on">Postingan</span><span>Balasan</span><span>Media</span><span>Suka</span></div><div class="pl"></div></div>`);
    XD.postingan.filter(p => p.oleh === me.handle).forEach(p => s.querySelector('.pl').append(post(p)));
    s.querySelector('.back').onclick = () => pop(s); a.append(s);
  };
  const nav = a.querySelectorAll('.xn span');
  const go = i => {
    if (i === 1 || i === 3) return toast((i === 1 ? 'Pencarian' : 'Pesan') + ' belum diisi');
    nav.forEach((s, j) => s.classList.toggle('on', j === i));
    i === 0 ? home() : notif();
  };
  nav.forEach((s, i) => s.onclick = () => go(i));
  a.querySelector('.xav').onclick = profil;
  a.querySelector('.fab').onclick = () => {
    const s = E('div', 'sub xd cm', `<div class="xs"><button class="back">Batal</button><button class="pst">Posting</button></div><div class="cp">${av(me.nama, me.foto, 40)}<textarea placeholder="Ada kabar apa?" rows="6"></textarea></div>`);
    const ta = s.querySelector('textarea');
    s.querySelector('.back').onclick = () => pop(s);
    s.querySelector('.pst').onclick = () => {
      if (!ta.value.trim()) return;
      XD.postingan.unshift({ oleh: me.handle, teks: ta.value.trim(), jam: 'baru saja', suka: 0, balas: 0, ulang: 0, tayang: '1' });
      go(0); pop(s);
    };
    a.append(s); ta.focus();
  };
  home();
}

Object.assign(OPEN, { kalender: kalApp, x: xApp });
$('#grid').append(icon(['x', 'X'], true));

/* ---------- LOCKSCREEN ---------- */
/* ---------- LOCKSCREEN ---------- */
(() => {
  const K = D.kunci; if (!K || !K.aktif) return;
  const n = K.pin.length, ABC = ['', 'ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  let buf = '';
  const key = k => `<button data-k="${k}" aria-label="${k}"><b>${k}</b><small>${k === '0' ? '' : ABC[k - 1]}</small></button>`;
  const tgl = K.tanggal || new Date().toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long' });
  const l = E('div', 'lock', `<div class="lw"></div>
    <section class="l1"><div class="lh"><small>${X(tgl)}</small><div class="lc"></div></div>
      <div class="ln">${(K.notif || []).map(x => { const ic = ICONS[x.app] || ['#888', '']; return `<div class="nt"><i class="ni" style="background:${ic[0]}">${ic[1]}</i><div><div class="n1"><b>${X(x.judul)}</b><small>${X(x.jam || 'sekarang')}</small></div><span>${X(x.teks)}</span></div></div>`; }).join('')}</div>
      <div class="lg">Geser ke atas untuk membuka</div></section>
    <section class="l2"><div class="lpt"><b>Masukkan Kode Sandi</b><div class="dots">${'<i></i>'.repeat(n)}</div></div>
      <div class="pk">${[1, 2, 3, 4, 5, 6, 7, 8, 9].map(key).join('')}<span class="lb">Darurat</span>${key('0')}<span class="lb bt">Batal</span></div></section>`);
  l.querySelector('.lw').style.cssText = $('#wall').style.cssText;

  const clk = () => {
    const j = K.jam || D.jam;
    l.querySelector('.lc').textContent = j === 'auto' ? now() : j;
  };
  clk();
  const tm = setInterval(() => l.isConnected ? clk() : clearInterval(tm), 5000);

  const draw = () => {
    l.querySelectorAll('.dots i').forEach((d, i) => d.classList.toggle('on', i < buf.length));
    l.querySelector('.bt').textContent = buf ? 'Hapus' : 'Batal';
  };
  const show = () => l.classList.add('pwd');
  const hide = () => { l.classList.remove('pwd'); buf = ''; draw(); };
  const press = k => {
    if (buf.length >= n) return;
    buf += k; draw();
    if (buf.length < n) return;
    setTimeout(() => {
      if (buf === K.pin) { l.classList.add('buka'); setTimeout(() => l.remove(), 450); return; }
      const d = l.querySelector('.dots'); d.classList.add('shake'); navigator.vibrate?.(200);
      setTimeout(() => { d.classList.remove('shake'); buf = ''; draw(); }, 500);
    }, 120);
  };
  l.querySelectorAll('.pk button').forEach(b => b.onclick = () => press(b.dataset.k));
  l.querySelector('.bt').onclick = () => buf ? (buf = buf.slice(0, -1), draw()) : hide();
  const l1 = l.querySelector('.l1'); let y0 = 0;
  l1.onclick = show;
  l1.addEventListener('touchstart', e => y0 = e.touches[0].clientY, { passive: true });
  l1.addEventListener('touchend', e => { if (y0 - e.changedTouches[0].clientY > 40) show(); });
  $('#bar').addEventListener('click', () => { if (l.isConnected && !l.classList.contains('pwd')) show(); });
  addEventListener('keydown', e => {
    if (!l.isConnected) return;
    if (!l.classList.contains('pwd')) return e.key === 'Enter' && show();
    if (/^\d$/.test(e.key)) press(e.key);
    else if (e.key === 'Backspace') { buf = buf.slice(0, -1); draw(); }
    else if (e.key === 'Escape') hide();
  });
  $('#phone').append(l);
})();
