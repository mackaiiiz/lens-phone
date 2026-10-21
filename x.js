/* X – layout mobile mirip aslinya. Menggantikan app X dari apps3.js (muat setelah apps3.js). */

/* Data tambahan (opsional). Boleh dipindah ke blok x di data3.js. */
(() => {
  const x = DATA.x;
  x.jumlahPostingan ??= 484;
  x.analitik ??= { tayang: "3,9 rb", hari: 7 };
  x.permintaan ??= [];
  x.tren ??= [
    { kat: "Sedang tren di Indonesia", judul: "Haze" },
    { kat: "Sedang tren di Indonesia", judul: "#2TahunDikeroyokRezim" },
    { kat: "Sedang tren di Indonesia", judul: "KEBAKARAN" }
  ];
})();

/* ---------- ikon ---------- */
const XP = {
  reply: ['f', '<path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"/>'],
  repost: ['f', '<path d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"/>'],
  like: ['f', '<path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>'],
  liked: ['f', '<path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"/>'],
  views: ['f', '<rect x="3" y="12" width="2.600" height="9" rx="1"/><rect x="8.600" y="3" width="2.600" height="18" rx="1"/><rect x="14.200" y="8" width="2.600" height="13" rx="1"/><rect x="19.800" y="14" width="2.600" height="7" rx="1"/>'],
  bookmark: ['f', '<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"/>'],
  bookmarked: ['f', '<path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"/>'],
  share: ['f', '<path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"/>'],
  more: ['f', '<circle cx="5" cy="12" r="1.800"/><circle cx="12" cy="12" r="1.800"/><circle cx="19" cy="12" r="1.800"/>'],
  lock: ['f', '<rect x="5" y="10" width="14" height="11" rx="2.500"/><path d="M8 10V7a4 4 0 0 1 8 0v3" fill="none" stroke="currentColor" stroke-width="2.400"/>'],
  phone: ['f', '<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>'],
  home: ['s', '<path d="M3 10.500L12 3l9 7.500V21h-6v-6H9v6H3z"/>'],
  search: ['s', '<circle cx="11" cy="11" r="7"/><path d="M16.500 16.500L21 21"/>'],
  bell: ['s', '<path d="M6 17v-6a6 6 0 0 1 12 0v6l2 2H4z"/><path d="M10 21.500h4"/>'],
  chat: ['s', '<rect x="3" y="5" width="18" height="14" rx="2.500"/><path d="M3 7.500l9 6 9-6"/>'],
  grok: ['s', '<circle cx="12" cy="12" r="7.500"/><path d="M4.500 19.500L19.500 4.500"/>'],
  back: ['s', '<path d="M20 12H4M10 6l-6 6 6 6"/>'],
  close: ['s', '<path d="M6 6l12 12M18 6L6 18"/>'],
  chev: ['s', '<path d="M6 9l6 6 6-6"/>'],
  person: ['s', '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7"/>'],
  personplus: ['s', '<circle cx="10" cy="8" r="4"/><path d="M2 21c0-4 3.500-7 8-7M18 8v6M15 11h6"/>']
};
const xi = (n, s = 18) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" aria-hidden="true" ${XP[n][0] === 'f' ? 'fill="currentColor"' : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"'}>${XP[n][1]}</svg>`;

/* ---------- aplikasi ---------- */
function xApp2(a) {
  const XD = D.x, me = XD.akunku;
  a.classList.add('xapp'); if (XD.tema !== 'terang') a.classList.add('dark');
  const acc = h => h === me.handle ? me : (XD.akun.find(k => k.handle === h) || { nama: h, handle: h });
  const lk = u => u.privat ? `<span class="ylk">${xi('lock', 15)}</span>` : '';
  const tx = s => X(s).replace(/(@\w+|https?:\/\/\S+)/g, '<span class="ln">$1</span>').replace(/\n/g, '<br>');
  const c = v => v || '';

  a.innerHTML = `<div class="ytop"><div class="yh"><button class="xav" aria-label="Menu"></button><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="${XPATH}"/></svg><span style="width:32px"></span></div><div class="ytabs"></div></div>
    <div class="yf"></div><button class="yfab" aria-label="Tulis postingan">＋</button>
    <nav class="yn">${['home', 'search', 'grok', 'bell', 'chat'].map((n, i) => `<span class="${i ? '' : 'on'}" data-i="${i}">${xi(n, 26)}</span>`).join('')}</nav>`;
  const top = a.querySelector('.ytabs'), feed = a.querySelector('.yf');
  a.querySelector('.xav').innerHTML = av(me.nama, me.foto, 32);
  const unread = () => (XD.notif || []).filter(n => !n.dibaca).length;
  const badge = () => {
    const b = a.querySelector('.yn [data-i="3"]'); b.querySelector('.ybd')?.remove();
    if (unread()) b.append(E('i', 'ybd', unread()));
  };

  /* --- komponen postingan --- */
  const act = (p, big) => `<div class="yact${big ? ' big' : ''}"><span data-a="rp">${xi('reply')}${c(p.balas)}</span>
    <span data-a="ul" class="rp${p.ulangKu ? ' on' : ''}">${xi('repost')}${c((p.ulang || 0) + (p.ulangKu ? 1 : 0))}</span>
    <span data-a="lk" class="lv${p.liked ? ' on' : ''}">${xi(p.liked ? 'liked' : 'like')}${c((p.suka || 0) + (p.liked ? 1 : 0))}</span>
    ${big ? '' : `<span data-a="vw">${xi('views')}${X(p.tayang || '')}</span>`}
    <span class="bkg"><i data-a="bm" class="bkm${p.disimpan ? ' on' : ''}">${xi(p.disimpan ? 'bookmarked' : 'bookmark')}</i><i data-a="sh">${xi('share')}</i></span></div>`;
  const toggle = (k, p) => {
    if (k === 'lk') p.liked = !p.liked; else if (k === 'ul') p.ulangKu = !p.ulangKu; else if (k === 'bm') p.disimpan = !p.disimpan; else return false;
    return true;
  };
  const media = (p, cls) => (p.foto ? `<img class="${cls}" src="${X(p.foto)}" alt="" onerror="this.remove()">` : '') +
    (p.kutip ? `<div class="yq">${X(p.kutip === true ? 'Postingan ini tidak tersedia.' : p.kutip)}</div>` : '');
  const row = (p, o = {}) => {
    const u = acc(p.oleh);
    const e = E('div', 'yp', `<div class="ya">${av(u.nama, u.foto, 40)}${o.line ? '<i class="yln"></i>' : ''}</div>
      <div class="yb"><div class="yl"><b>${X(u.nama)}</b>${lk(u)}<span class="hm">@${X(u.handle)} · ${X(p.jam || '')}</span><span class="yr2">${xi('grok')}${xi('more')}</span></div>
      ${p.balasKe ? `<div class="ybk">Membalas <span class="ln">@${X(p.balasKe)}</span></div>` : ''}
      <div class="yx">${tx(p.teks)}</div>${media(p, 'yi')}${act(p)}</div>`);
    e.onclick = ev => {
      const t = ev.target.closest('[data-a]');
      if (t) {
        ev.stopPropagation();
        if (t.dataset.a === 'rp') return detail(p);
        return toggle(t.dataset.a, p) ? e.replaceWith(row(p, o)) : toast('Tautan disalin');
      }
      if (!o.noOpen) detail(p);
    };
    return e;
  };

  /* --- halaman detail postingan --- */
  const detail = p => {
    const s = E('div', 'sub xd', `<div class="ys"><button class="back" aria-label="Kembali">${xi('back', 22)}</button><b>Postingan</b></div><div class="yr"></div>`);
    const r = s.querySelector('.yr'), u = acc(p.oleh);
    r.innerHTML = `<div class="ydp"><div class="ydh">${av(u.nama, u.foto, 40)}<div class="ydn"><b>${X(u.nama)}${lk(u)}</b><small>@${X(u.handle)}</small></div><span class="yr2">${xi('grok')}${xi('more')}</span></div>
      <div class="ydt">${tx(p.teks)}</div>${media(p, 'yi')}<div class="ydw">${X(p.waktu || p.jam || '')} · <b>${X(p.tayang || '0')}</b> Tayangan</div>${act(p, true)}</div>
      <div class="yrp">${av(me.nama, me.foto, 40)}<input placeholder="Tulis balasanmu" aria-label="Tulis balasanmu"><button>Balas</button></div><div class="rl"></div>`;
    const inp = r.querySelector('input'), btn = r.querySelector('.yrp button'), rl = r.querySelector('.rl');
    const bind = () => r.querySelector('.ydp .yact').onclick = ev => {
      const t = ev.target.closest('[data-a]'); if (!t) return;
      if (t.dataset.a === 'rp') return inp.focus();
      if (toggle(t.dataset.a, p)) { r.querySelector('.ydp .yact').outerHTML = act(p, true); bind(); } else toast('Tautan disalin');
    };
    const list = () => { rl.innerHTML = ''; (p.balasan || []).forEach((b, i, arr) => rl.append(row(b, { line: i < arr.length - 1, noOpen: true }))); };
    inp.oninput = () => btn.classList.toggle('on', !!inp.value.trim());
    btn.onclick = () => {
      if (!inp.value.trim()) return;
      (p.balasan ||= []).push({ oleh: me.handle, teks: inp.value.trim(), jam: 'baru saja', suka: 0 });
      p.balas = (p.balas || 0) + 1; inp.value = ''; btn.classList.remove('on');
      r.querySelector('.ydp .yact').outerHTML = act(p, true); bind(); list();
    };
    bind(); list();
    s.querySelector('.back').onclick = () => pop(s); a.append(s);
  };

  /* --- profil --- */
  const profil = () => {
    const balasanSaya = () => XD.postingan.flatMap(p => (p.balasan || []).filter(b => b.oleh === me.handle).map(b => ({ ...b, balasKe: p.oleh })));
    const mine = () => XD.postingan.filter(p => p.oleh === me.handle);
    const sets = [mine, balasanSaya, () => XD.postingan.filter(p => p.diulang), () => mine().filter(p => p.foto)];
    const s = E('div', 'sub xd', `<div class="ys"><button class="back" aria-label="Kembali">${xi('back', 22)}</button><div><b class="nb">${X(me.nama)}${lk(me)}</b><small>${me.jumlahPostingan ?? XD.jumlahPostingan} postingan</small></div><span class="sp">${xi('search', 22)}</span></div>
      <div class="yr"><div class="ybn" style="${me.banner ? `background-image:url('${X(me.banner)}')` : ''}"></div>
      <div class="ypr">${av(me.nama, me.foto, 76)}<button class="yed">Edit profil</button></div>
      <div class="ypi"><h2>${X(me.nama)}${lk(me)}</h2><small>@${X(me.handle)}</small><p>${tx(me.bio || '')}</p><small>📅 Bergabung ${X(me.bergabung || '')}</small>
      <div class="fc"><span><b>${me.mengikuti}</b> Mengikuti</span><span><b>${me.pengikut}</b> Pengikut</span></div></div>
      <div class="yan"><div class="ya1"><small>Pribadi untuk Anda</small><button class="xc" aria-label="Tutup">${xi('close', 18)}</button></div>
        <b>${X(XD.analitik.tayang)} tayangan pada postinganmu dalam ${XD.analitik.hari} hari terakhir</b><button class="yub">${xi('lock', 14)} Buka Analitik</button></div>
      <div class="yt">${['Postingan', 'Balasan', 'Posting ulang', 'Media'].map((n, i) => `<span class="${i ? '' : 'on'}"><b>${n}${i ? '' : ' ' + xi('chev', 16)}</b></span>`).join('')}</div><div class="pl"></div></div>`);
    const pl = s.querySelector('.pl');
    const fill = i => { pl.innerHTML = ''; const d = sets[i](); d.length ? d.forEach(p => pl.append(row(p, { noOpen: !!p.balasKe }))) : pl.append(E('p', 'ykos', 'Belum ada apa-apa di sini.')); };
    s.querySelectorAll('.yt span').forEach((t, i) => t.onclick = () => { s.querySelectorAll('.yt span').forEach(x => x.classList.remove('on')); t.classList.add('on'); fill(i); });
    s.querySelector('.xc').onclick = () => s.querySelector('.yan').remove();
    s.querySelector('.yub').onclick = () => toast('Analitik belum diisi');
    s.querySelector('.back').onclick = () => pop(s); fill(0); a.append(s);
  };

  /* --- permintaan pengikut (akun privat) --- */
  const req = () => {
    const s = E('div', 'sub xd', `<div class="ys"><button class="back" aria-label="Kembali">${xi('back', 22)}</button><b>Permintaan pengikut</b></div><div class="yr"></div>`);
    const r = s.querySelector('.yr');
    const paint = () => {
      r.innerHTML = XD.permintaan.length ? '' : '<p class="ykos">Tidak ada permintaan pengikut.</p>';
      XD.permintaan.forEach((q, i) => {
        const e = E('div', 'yrq', `${av(q.nama, q.foto, 44)}<div><b>${X(q.nama)}</b><small>@${X(q.handle)}</small></div><button class="bt2">Terima</button><button class="bt3">Tolak</button>`);
        e.querySelector('.bt2').onclick = () => { XD.permintaan.splice(i, 1); me.pengikut++; toast('@' + q.handle + ' sekarang mengikutimu'); paint(); };
        e.querySelector('.bt3').onclick = () => { XD.permintaan.splice(i, 1); paint(); };
        r.append(e);
      });
    };
    paint(); s.querySelector('.back').onclick = () => pop(s); a.append(s);
  };

  /* --- menu samping (klik foto profil) --- */
  const drawer = () => {
    const rows = [['person', 'Profil', profil], ['personplus', 'Ikuti'], ['chat', 'Chat'], ['phone', 'Panggilan'], ['grok', 'Grok'], ['personplus', 'Permintaan pengikut', req, XD.permintaan.length], ['more', 'Lainnya']];
    const d = E('div', 'ydr', `<aside><div class="dtop">${av(me.nama, me.foto, 44)}</div><b>${X(me.nama)}${lk(me)}</b><small>@${X(me.handle)}</small>
      <div class="fc"><span><b>${me.mengikuti}</b> Mengikuti</span><span><b>${me.pengikut}</b> Pengikut</span></div>
      <nav>${rows.map((r, i) => `<div class="dr" data-i="${i}">${xi(r[0], 26)}<span>${r[1]}</span>${r[3] ? `<em>${r[3]}</em>` : ''}</div>`).join('')}</nav></aside><div class="ydb"></div>`);
    const tutup = () => { d.classList.add('out'); setTimeout(() => d.remove(), 250); };
    d.querySelector('.ydb').onclick = tutup;
    d.querySelectorAll('.dr').forEach(el => el.onclick = () => { const r = rows[el.dataset.i]; tutup(); r[2] ? r[2]() : toast(r[1] + ' belum diisi'); });
    a.append(d);
  };

  /* --- tab bawah --- */
  const tabs = names => `<div class="yt">${names.map((n, i) => `<span class="${i ? '' : 'on'}"><b>${n}</b></span>`).join('')}</div>`;
  const bindTabs = () => top.querySelectorAll('.yt span').forEach(s => s.onclick = () => { top.querySelectorAll('.yt span').forEach(x => x.classList.remove('on')); s.classList.add('on'); });
  const home = () => { top.innerHTML = tabs(['Untuk Anda', 'Mengikuti']); bindTabs(); feed.innerHTML = ''; XD.postingan.forEach(p => feed.append(row(p))); };
  const explore = () => {
    top.innerHTML = `<div class="yse">${xi('search', 16)} Cari</div>`;
    feed.innerHTML = '<div class="yhd">Apa yang sedang hangat</div>';
    XD.tren.forEach(t => feed.append(E('div', 'ytr', `<div><small>${X(t.kat)}</small><b>${X(t.judul)}</b></div>${xi('more')}`)));
  };
  const notif = () => {
    top.innerHTML = tabs(['Semua', 'Disebut']); bindTabs(); feed.innerHTML = '';
    const ik = { suka: ['liked', '#f91880'], balas: ['reply', '#1d9bf0'], follow: ['personplus', '#1d9bf0'], ulang: ['repost', '#00ba7c'] };
    (XD.notif || []).forEach(n => {
      const u = acc(n.oleh), k = ik[n.jenis] || ['bell', '#1d9bf0'];
      feed.append(E('div', 'ynt' + (n.dibaca ? '' : ' nw'), `<span style="color:${k[1]}">${xi(k[0], 26)}</span><div>${av(u.nama, u.foto, 32)}<p><b>${X(u.nama)}</b> ${X(n.teks)} <small>· ${X(n.jam || '')}</small></p></div>`));
    });
    (XD.notif || []).forEach(n => n.dibaca = true); badge();
  };
  const go = i => {
    if (i === 2 || i === 4) return toast((i === 2 ? 'Grok' : 'Chat') + ' belum diisi');
    a.querySelectorAll('.yn span').forEach((s, j) => s.classList.toggle('on', j === i));
    [home, explore, null, notif][i]();
  };
  a.querySelectorAll('.yn span').forEach((s, i) => s.onclick = () => go(i));
  a.querySelector('.xav').onclick = drawer;

  /* --- tulis postingan --- */
  a.querySelector('.yfab').onclick = () => {
    const s = E('div', 'sub xd', `<div class="ys cmh"><button class="back">Batal</button><button class="ypst">Posting</button></div><div class="ycp">${av(me.nama, me.foto, 40)}<textarea placeholder="Ada kabar apa?" rows="6"></textarea></div>`);
    const ta = s.querySelector('textarea');
    s.querySelector('.back').onclick = () => pop(s);
    s.querySelector('.ypst').onclick = () => {
      if (!ta.value.trim()) return;
      XD.postingan.unshift({ oleh: me.handle, teks: ta.value.trim(), jam: 'baru saja', suka: 0, balas: 0, ulang: 0, tayang: '1' });
      go(0); pop(s);
    };
    a.append(s); ta.focus();
  };
  home(); badge();
}
Object.assign(OPEN, { x: xApp2 });
