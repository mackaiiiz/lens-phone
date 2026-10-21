/* Safari – riwayat dengan isi pencarian + pratinjau situs langsung terlihat.
   Muat paling akhir (setelah x.js). CSS-nya sudah ikut di file ini. */

(() => {
  const css = `
.sf{background:#f2f2f7}
.sfq{display:flex;align-items:center;gap:8px;background:#7676801f;border-radius:10px;padding:8px 12px;margin:2px 0 8px}
.sfq input{flex:1;min-width:0;border:0;outline:0;background:transparent;font:inherit;font-size:17px}
.sfh{font-size:20px;font-weight:700;margin:16px 4px 6px}
.sfg{background:#fff;border-radius:12px;overflow:hidden}
.sfr{display:flex;align-items:flex-start;gap:12px;padding:10px 12px;cursor:pointer;position:relative}
.sfr+.sfr::before{content:"";position:absolute;left:52px;right:0;top:0;border-top:1px solid #0001}
.sfi{width:28px;height:28px;border-radius:7px;background:#f2f2f7;display:grid;place-items:center;font-size:16px;font-weight:600;color:#6b6b70;flex:none;margin-top:2px}
.sfb{flex:1;min-width:0}
.sfb b{display:block;font-size:16px}
.sfb>span{display:block;font-size:13px;color:#8a8a8e}
.sfb p{margin-top:3px;font-size:14.5px;line-height:1.3;color:#3c3c43;display:-webkit-box;-webkit-line-clamp:3;line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.sfb small{color:#8a8a8e;font-size:12px}
.sft{position:relative;flex:none;width:54px;height:72px;border-radius:8px;overflow:hidden;background:#fff;border:1px solid #0002}
.sft::before{content:"";position:absolute;left:0;right:0;top:0;height:20px;background:hsl(var(--h) 55% 62%)}
.sft b{position:absolute;top:22px;left:6px;font-size:18px;color:hsl(var(--h) 45% 40%)}
.sft i{position:absolute;left:6px;right:6px;height:4px;border-radius:2px;background:#e3e3e8}
.sft i:nth-of-type(1){top:48px}.sft i:nth-of-type(2){top:56px;right:16px}.sft i:nth-of-type(3){top:64px;right:10px}
.sft img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:top;background:#fff}
.sfk{padding:30px;text-align:center;color:#8a8a8e}
.sfp{background:#fff;display:flex;flex-direction:column}
.sfa{flex:none;display:flex;align-items:center;gap:10px;padding:calc(var(--top) + 30px) 12px 8px;border-bottom:1px solid #0001;background:#f9f9f9}
.sfa .back{font-size:30px;line-height:1;color:#0a84ff;padding:0 4px}
.sfu{flex:1;min-width:0;text-align:center;background:#7676801f;border-radius:10px;padding:7px 10px;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.sfv{flex:1;overflow:auto}
.sfv>img{display:block;width:100%}
.sfw{padding:20px 18px}
.sfx{font-size:26px;font-weight:700;padding:18px;border-radius:14px;color:#fff;background:hsl(var(--h) 55% 55%);margin-bottom:16px}
.sfs{border:1px solid #0002;border-radius:22px;padding:10px 16px;margin-bottom:14px;font-size:16px}
.sfw p{font-size:16.5px;line-height:1.5}
.sfn{flex:none;display:flex;justify-content:space-around;padding:10px 0 30px;background:#f9f9f9;border-top:1px solid #0001;color:#0a84ff;font-size:20px}
`;
  document.head.append(Object.assign(document.createElement('style'), { textContent: css }));
})();

/* Aturan tampilan:
   - baris menampilkan: judul, alamat (ket), lalu "cari" (kalau ada) atau "isi" – tanpa perlu diketuk
   - gambar: screenshot situs (opsional) → jadi pratinjau di kanan baris dan isi halaman saat diketuk
   - hari: judul kelompok ("Hari ini", "Kemarin"); jam: waktu kecil di bawah */
function safariApp(a) {
  const rows = D.safari || [], PR = D.safariPratinjau !== false;
  a.classList.add('sf');
  a.innerHTML = `<div class="scroll"><h1>Riwayat</h1><div class="sfq"><span>🔍</span><input placeholder="Cari Riwayat" aria-label="Cari Riwayat"></div><div class="sfl"></div></div>`;
  const list = a.querySelector('.sfl'), inp = a.querySelector('input');

  const item = r => {
    const dom = r.ket || r.url || r.judul || '?';
    const snip = r.cari ? '🔍 ' + r.cari : (r.isi || '');
    const thumb = PR ? `<div class="sft" style="--h:${hue(dom)}"><i></i><i></i><i></i><b>${X(dom[0].toUpperCase())}</b>${r.gambar ? `<img src="${X(r.gambar)}" alt="" onerror="this.remove()">` : ''}</div>` : '';
    const e = E('div', 'sfr', `<span class="sfi">${r.ikon ? X(r.ikon) : X(dom[0].toUpperCase())}</span>
      <div class="sfb"><b>${X(r.judul || dom)}</b><span>${X(r.ket || r.url || '')}</span>${snip ? `<p>${X(snip).replace(/\n/g, ' ')}</p>` : ''}${r.jam ? `<small>${X(r.jam)}</small>` : ''}</div>${thumb}`);
    e.onclick = () => page(r);
    return e;
  };
  const paint = () => {
    const q = inp.value.trim().toLowerCase(); let card = null, last = null, n = 0;
    list.innerHTML = '';
    rows.forEach(r => {
      if (q && ![r.cari, r.judul, r.ket, r.url, r.isi].join(' ').toLowerCase().includes(q)) return;
      if (!card || (!q && r.hari && r.hari !== last)) {
        if (!q && r.hari) list.append(E('div', 'sfh', X(r.hari)));
        card = E('div', 'sfg'); list.append(card); last = r.hari;
      }
      card.append(item(r)); n++;
    });
    if (!n) list.append(E('p', 'sfk', 'Tidak ada hasil'));
  };
  inp.oninput = paint; paint();

  const page = r => {
    const url = r.url || r.ket || '';
    const s = E('div', 'sub sfp', `<div class="sfa"><button class="back" aria-label="Kembali">‹</button><div class="sfu">🔒 ${X(url)}</div><span>↻</span></div>
      <div class="sfv">${r.gambar ? `<img src="${X(r.gambar)}" alt="">` : `<div class="sfw"><div class="sfx" style="--h:${hue(url || r.judul || '')}">${X(r.judul || '')}</div>${r.cari ? `<div class="sfs">🔍 ${X(r.cari)}</div>` : ''}<p>${X(r.isi || '').replace(/\n/g, '<br>')}</p></div>`}</div>
      <div class="sfn"><span>‹</span><span>›</span><span>⬆️</span><span>📖</span><span>⧉</span></div>`);
    s.querySelector('.back').onclick = () => pop(s); a.append(s);
  };
}
Object.assign(OPEN, { safari: safariApp });