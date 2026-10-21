Object.assign(DATA, {
  setelan: {
    profil: { nama: "Nakula", ket: "Apple ID, iCloud+, Media & Pembelian", foto: "" },
    grup: [
      [
        { ikon: "✈️", warna: "#ff9f0a", judul: "Mode Pesawat", toggle: false },
        { ikon: '<svg viewBox="0 0 24 24" width="18" height="18"><path fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" d="M3 9a13 13 0 0 1 18 0M6 12.5a8.5 8.5 0 0 1 12 0M9 16a4 4 0 0 1 6 0"/><circle cx="12" cy="19.5" r="1.5"/></svg>', warna: "#0a84ff", judul: "Wi-Fi", nilai: "Rumah",
          anak: { judul: "Wi-Fi", toggle: true, kepala: "Jaringan Saya", daftar: ["Rumah", "Kampus", "Kafe Biru"], pilih: "Rumah" } },
        { ikon: "🎧", warna: "#0a84ff", judul: "Bluetooth", nilai: "Aktif",
          anak: { judul: "Bluetooth", toggle: true, kepala: "Perangkat Saya", daftar: ["AirPods Nakula", "Speaker Kamar"], pilih: "" } },
        { ikon: "📡", warna: "#30d158", judul: "Seluler" },
        { ikon: "🔗", warna: "#30d158", judul: "Hotspot Pribadi", nilai: "Mati" }
      ],
      [
        { ikon: "🔔", warna: "#ff3b30", judul: "Notifikasi" },
        { ikon: "🔊", warna: "#ff2d55", judul: "Suara & Haptik" },
        { ikon: "🌙", warna: "#5e5ce6", judul: "Fokus" },
        { ikon: "⏳", warna: "#5e5ce6", judul: "Durasi Layar" }
      ],
      [
        { ikon: "⚙️", warna: "#8e8e93", judul: "Umum" },
        { ikon: '<svg viewBox="0 0 24 24" width="18" height="18"><rect x="3" y="5" width="18" height="5" rx="2.5" fill="none" stroke="#000" stroke-width="2"/><circle cx="16" cy="7.5" r="1.8"/><rect x="3" y="14" width="18" height="5" rx="2.5" fill="none" stroke="#000" stroke-width="2"/><circle cx="8" cy="16.5" r="1.8"/></svg>', warna: "#8e8e93", judul: "Pusat Kontrol" },
        { ikon: '<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="4.5"/><path stroke="#000" stroke-width="2" stroke-linecap="round" d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/></svg>', warna: "#0a84ff", judul: "Layar & Kecerahan" },
        { ikon: "🖼️", warna: "#32ade6", judul: "Wallpaper" },
        { ikon: "🔒", warna: "#30d158", judul: "Face ID & Kode Sandi" },
        { ikon: "🔋", warna: "#30d158", judul: "Baterai", nilai: "87%" },
        { ikon: "✋", warna: "#0a84ff", judul: "Privasi & Keamanan" }
      ],
      [
        { ikon: "✉️", warna: "#0a84ff", judul: "Mail" },
        { ikon: "👤", warna: "#8e8e93", judul: "Kontak" },
        { ikon: "🗓️", warna: "#ff3b30", judul: "Kalender" },
        { ikon: "📝", warna: "#ffb800", judul: "Catatan" },
        { ikon: "📞", warna: "#30d158", judul: "Telepon" },
        { ikon: "💭", warna: "#30d158", judul: "Pesan" }
      ]
    ]
  },

  peta: {
    gambar: "",
    lokasiku: { x: 50, y: 52 },
    tempat: [
      { ikon: "🏠", nama: "Rumah", tipe: "Favorit", alamat: "Jl. In Aja Dulu, Jagat Maya", jarak: "1,2 km", x: 28, y: 30 },
      { ikon: "🎓", nama: "Kampus", tipe: "Universitas", alamat: "Jl. Jl. Dengan Sepatu Rodaku, Jagat Maya", jarak: "3,4 km", x: 72, y: 24 },
      { ikon: "☕", nama: "Kafe Langganan", tipe: "Kafe", alamat: "Jl. Apa Hayo No. 7, Jagat Maya", jarak: "800 m", x: 66, y: 62 },
      { ikon: "📍", nama: "Rumah Sadewa", tipe: "Rumah", alamat: "Jl. Antara, Jagat Maya", jarak: "2,1 km", x: 24, y: 66 }
    ]
  },

  /* ---------- MAIL ----------
     belumDibaca: true = titik biru + hitungan di ikon Mail   */
  email: [
    { dari: "Akademik FEB UJM", surel: "akademik@feb.jagatmaya.ac.id", subjek: "[FEB UJM] Pengingat Pengisian Evaluasi Perkuliahan", jam: "08.15", belumDibaca: true,
  isi: "Yth. Nakula Nalendra,\n\nKami mengingatkan bahwa pengisian evaluasi dosen dan proses pembelajaran Semester Ganjil 2026/2027 telah dibuka.\n\nMahasiswa Fakultas Ekonomika dan Bisnis diharapkan mengisi evaluasi melalui portal akademik sebelum periode pengisian berakhir.\n\nTerima kasih atas partisipasi Anda.\n\nBiro Akademik\nFakultas Ekonomika dan Bisnis\nUniversitas Jagat Maya" },

    { dari: "LMS Universitas Jagat Maya", surel: "notifikasi@lms.jagatmaya.ac.id", subjek: "Materi Pertemuan 7 — Manajemen Operasi", jam: "Kemarin", belumDibaca: true,
      isi: "Halo, Nakula Nalendra!\n\nMateri pertemuan ke-7 untuk mata kuliah Manajemen Operasi telah diunggah oleh dosen pengampu.\n\nSilakan akses LMS untuk melihat materi, instruksi diskusi, dan informasi tugas terbaru.\n\nSelamat belajar!\n\nLearning Management System\nUniversitas Jagat Maya" },

    { dari: "Biro Akademik UJM", surel: "akademik@jagatmaya.ac.id", subjek: "Jadwal Ujian Tengah Semester Ganjil 2026/2027", jam: "19 Okt", belumDibaca: true,
      isi: "Yth. Mahasiswa Universitas Jagat Maya,\n\nJadwal Ujian Tengah Semester (UTS) Ganjil Tahun Akademik 2026/2027 telah diterbitkan.\n\nMahasiswa diharapkan memeriksa jadwal, ruang ujian, serta ketentuan pelaksanaan melalui portal akademik masing-masing.\n\nPastikan tidak ada jadwal ujian yang terlewat.\n\nSalam,\nBiro Akademik\nUniversitas Jagat Maya" },

    { dari: "Himpunan Mahasiswa Manajemen", surel: "hmm@feb.jagatmaya.ac.id", subjek: "[HMM UJM] Open Recruitment Management Week", jam: "16 Okt", belumDibaca: false,
      isi: "Halo, Mahasiswa Manajemen!\n\nPendaftaran staf kepanitiaan Management Week resmi dibuka.\n\nTersedia beberapa divisi yang dapat dipilih sesuai minat dan pengalaman, antara lain Acara, Operasional, Publikasi dan Dokumentasi, Sponsorship, serta Hubungan Eksternal.\n\nBagi mahasiswa yang ingin menambah pengalaman organisasi dan memperluas relasi, jangan lewatkan kesempatan ini.\n\nInformasi pendaftaran dapat diakses melalui akun resmi HMM UJM.\n\nSalam,\nHimpunan Mahasiswa Manajemen\nFakultas Ekonomika dan Bisnis UJM" },

    { dari: "Career Center FEB UJM", surel: "careercenter@feb.jagatmaya.ac.id", subjek: "Career Preparation for Future Business Leaders", jam: "14 Okt", belumDibaca: false,
      isi: "Halo, Nakula Nalendra!\n\nCareer Center FEB UJM mengundang mahasiswa untuk mengikuti sesi persiapan karier yang akan membahas:\n\n- Penyusunan CV dan portofolio\n- Persiapan wawancara kerja\n- Strategi mencari kesempatan magang\n- Personal branding di dunia profesional\n\nKegiatan ini terbuka bagi mahasiswa FEB, khususnya mahasiswa semester 5 yang mulai mempersiapkan pengalaman profesional.\n\nInformasi mengenai jadwal dan pendaftaran tersedia melalui portal kemahasiswaan.\n\nSalam,\nCareer Center FEB UJM" },

    { dari: "Manajemen Pemasaran", surel: "manajemen.pemasaran@feb.jagatmaya.ac.id", subjek: "Tugas Kelompok — Analisis Strategi Pemasaran", jam: "12 Okt", belumDibaca: true,
      isi: "Halo, Nakula Nalendra.\n\nMohon diperhatikan kembali instruksi tugas kelompok untuk mata kuliah Manajemen Pemasaran.\n\nSetiap kelompok diminta menganalisis strategi pemasaran suatu perusahaan, termasuk segmentasi pasar, target konsumen, positioning, serta bauran pemasaran yang digunakan.\n\nPastikan laporan disusun berdasarkan sumber yang relevan dan dikumpulkan dalam format PDF melalui LMS sesuai tenggat yang telah ditentukan.\n\nTerima kasih.\n\nDosen Pengampu Manajemen Pemasaran" },

    { dari: "Direktorat Kemahasiswaan UJM", surel: "kemahasiswaan@jagatmaya.ac.id", subjek: "Pembukaan Program Kreativitas Mahasiswa Internal UJM", jam: "9 Okt", belumDibaca: false,
      isi: "Yth. Mahasiswa Universitas Jagat Maya,\n\nDirektorat Kemahasiswaan membuka pendaftaran Program Kreativitas Mahasiswa Internal UJM.\n\nProgram ini bertujuan mendorong mahasiswa mengembangkan ide inovatif dalam bidang bisnis, teknologi, sosial, pendidikan, dan kewirausahaan.\n\nMahasiswa dapat mengajukan proposal secara individu maupun berkelompok sesuai ketentuan yang berlaku.\n\nPanduan dan jadwal pendaftaran dapat dilihat melalui portal kemahasiswaan.\n\nSalam,\nDirektorat Kemahasiswaan\nUniversitas Jagat Maya" },

    { dari: "Perpustakaan UJM", surel: "perpustakaan@jagatmaya.ac.id", subjek: "Pengingat Pengembalian Buku Perpustakaan", jam: "7 Okt", belumDibaca: true,
      isi: "Halo, Nakula Nalendra!\n\nKami ingin mengingatkan bahwa masa peminjaman salah satu koleksi perpustakaan yang terdaftar atas nama Anda akan segera berakhir.\n\nMohon periksa akun perpustakaan untuk melihat judul buku dan tanggal pengembalian.\n\nBuku yang terlambat dikembalikan dapat dikenai ketentuan keterlambatan sesuai peraturan perpustakaan.\n\nTerima kasih telah menggunakan layanan Perpustakaan Universitas Jagat Maya." },

    { dari: "UJM Internship Office", surel: "internship@jagatmaya.ac.id", subjek: "Internship Opportunities — Business & Management", jam: "2 Okt", belumDibaca: false,
      isi: "Halo, Nakula Nalendra!\n\nTerdapat sejumlah kesempatan magang yang dapat dipertimbangkan oleh mahasiswa Universitas Jagat Maya, khususnya dari Fakultas Ekonomika dan Bisnis.\n\nBidang yang tersedia meliputi:\n\n- Business Development\n- Marketing\n- Human Resources\n- Operations\n- Market Research\n\nMahasiswa dapat memeriksa kualifikasi, durasi magang, dan prosedur pendaftaran melalui portal karier UJM.\n\nSalam,\nUJM Internship Office" },

    { dari: "Sistem Informasi Akademik UJM", surel: "sia@jagatmaya.ac.id", subjek: "Konfirmasi KRS Semester Ganjil 2026/2027", jam: "29 Sep", belumDibaca: false,
      isi: "Halo, Nakula Nalendra.\n\nKartu Rencana Studi (KRS) Semester Ganjil Tahun Akademik 2026/2027 telah tercatat dalam sistem.\n\nSilakan periksa kembali daftar mata kuliah, jumlah SKS, dan jadwal perkuliahan yang telah dipilih.\n\nApabila terdapat ketidaksesuaian data, silakan menghubungi dosen pembimbing akademik atau Biro Akademik FEB.\n\nEmail ini dikirim secara otomatis oleh Sistem Informasi Akademik Universitas Jagat Maya." },

    { dari: "Fakultas Ekonomika dan Bisnis UJM", surel: "humas.feb@jagatmaya.ac.id", subjek: "Kuliah Umum: Navigating Business in the Digital Era", jam: "25 Sep", belumDibaca: false,
      isi: "Yth. Mahasiswa Fakultas Ekonomika dan Bisnis,\n\nFEB Universitas Jagat Maya mengundang mahasiswa untuk menghadiri kuliah umum bertema Navigating Business in the Digital Era.\n\nKegiatan ini akan membahas transformasi digital, perubahan perilaku konsumen, serta strategi perusahaan dalam menghadapi persaingan ekonomi digital.\n\nMahasiswa Manajemen sangat dianjurkan untuk mengikuti kegiatan ini sebagai tambahan wawasan di luar perkuliahan.\n\nInformasi mengenai pembicara, waktu, dan lokasi kegiatan akan disampaikan melalui kanal resmi fakultas.\n\nSalam,\nHumas FEB UJM" },

    { dari: "Keuangan Universitas Jagat Maya", surel: "keuangan@jagatmaya.ac.id", subjek: "Informasi Status Administrasi Keuangan Semester Ganjil", jam: "18 Sep", belumDibaca: false,
      isi: "Yth. Nakula Nalendra,\n\nAnda dapat memeriksa status administrasi keuangan Semester Ganjil 2026/2027 melalui portal mahasiswa.\n\nApabila terdapat informasi pembayaran yang belum sesuai, silakan menghubungi bagian keuangan dengan menyertakan bukti transaksi yang diperlukan.\n\nTerima kasih atas perhatian Anda.\n\nBagian Keuangan\nUniversitas Jagat Maya" },

    { dari: "Career Center FEB UJM", surel: "careercenter@feb.jagatmaya.ac.id", subjek: "UJM Career & Internship Fair 2026", jam: "10 Sep", belumDibaca: false,
      isi: "Halo, Mahasiswa FEB!\n\nPendaftaran UJM Career & Internship Fair 2026 telah dibuka.\n\nAcara ini menghadirkan berbagai perusahaan dan mitra industri untuk memberikan informasi mengenai peluang karier, program magang, serta kebutuhan kompetensi di dunia kerja.\n\nAkan tersedia pula sesi konsultasi CV dan diskusi bersama praktisi industri.\n\nMahasiswa dapat melakukan pendaftaran melalui portal Career Center.\n\nSampai bertemu di acara!\n\nCareer Center FEB UJM" },

    { dari: "Biro Akademik FEB UJM", surel: "akademik@feb.jagatmaya.ac.id", subjek: "Panduan Akademik Semester Ganjil 2026/2027", jam: "3 Sep", belumDibaca: false,
      isi: "Yth. Mahasiswa Fakultas Ekonomika dan Bisnis,\n\nPanduan Akademik Semester Ganjil Tahun Akademik 2026/2027 telah tersedia.\n\nDokumen ini memuat kalender akademik, ketentuan evaluasi pembelajaran, layanan administrasi, serta prosedur akademik yang perlu diperhatikan mahasiswa.\n\nMahasiswa diharapkan membaca panduan tersebut untuk menghindari kekeliruan dalam menjalani kegiatan akademik.\n\nSalam,\nBiro Akademik FEB UJM" },

    { dari: "Sistem Informasi Akademik UJM", surel: "sia@jagatmaya.ac.id", subjek: "Jadwal Perkuliahan Semester Ganjil 2026/2027", jam: "27 Agu", belumDibaca: false,
      isi: "Halo, Nakula Nalendra!\n\nJadwal perkuliahan Semester Ganjil 2026/2027 untuk Program Studi Manajemen telah dipublikasikan.\n\nSilakan masuk ke portal akademik untuk melihat jadwal kelas, nama dosen pengampu, dan lokasi perkuliahan.\n\nPastikan untuk memeriksa jadwal secara berkala apabila terdapat perubahan ruang atau waktu kuliah.\n\nSistem Informasi Akademik\nUniversitas Jagat Maya" },

    { dari: "Himpunan Mahasiswa Manajemen", surel: "hmm@feb.jagatmaya.ac.id", subjek: "Undangan Welcoming Party Mahasiswa Manajemen", jam: "21 Agu", belumDibaca: false,
      isi: "Halo, teman-teman Manajemen!\n\nKami mengundang mahasiswa untuk menghadiri Welcoming Party Mahasiswa Manajemen sebagai ajang silaturahmi dan perkenalan antarmahasiswa lintas angkatan.\n\nAkan ada sesi perkenalan, permainan, serta berbagai kegiatan ringan untuk mempererat hubungan mahasiswa di lingkungan program studi.\n\nInformasi waktu dan lokasi kegiatan akan disampaikan melalui kanal komunikasi HMM UJM.\n\nSampai bertemu!\n\nHimpunan Mahasiswa Manajemen" },

    { dari: "Direktorat Kemahasiswaan UJM", surel: "kemahasiswaan@jagatmaya.ac.id", subjek: "Informasi Program Beasiswa dan Bantuan Pendidikan", jam: "12 Agu", belumDibaca: false,
      isi: "Yth. Mahasiswa Universitas Jagat Maya,\n\nUniversitas menyediakan informasi mengenai berbagai program beasiswa prestasi dan bantuan pendidikan untuk mahasiswa yang memenuhi persyaratan.\n\nMahasiswa dapat memeriksa persyaratan umum, dokumen yang diperlukan, serta jadwal seleksi melalui portal kemahasiswaan.\n\nPastikan seluruh dokumen disiapkan sesuai ketentuan masing-masing program.\n\nSalam,\nDirektorat Kemahasiswaan UJM" },

    { dari: "Fakultas Ekonomika dan Bisnis UJM", surel: "humas.feb@jagatmaya.ac.id", subjek: "Pemberitahuan Pemeliharaan Fasilitas Gedung FEB", jam: "30 Jul", belumDibaca: false,
      isi: "Yth. Sivitas Akademika FEB UJM,\n\nAkan dilaksanakan pemeliharaan fasilitas pada beberapa area gedung Fakultas Ekonomika dan Bisnis.\n\nSelama proses berlangsung, sejumlah ruang kelas dan area diskusi mungkin tidak dapat digunakan untuk sementara waktu.\n\nMahasiswa dimohon memperhatikan informasi perubahan ruang yang disampaikan melalui papan pengumuman dan portal akademik.\n\nTerima kasih atas pengertiannya.\n\nFakultas Ekonomika dan Bisnis UJM" },

    { dari: "Sistem Informasi Akademik UJM", surel: "sia@jagatmaya.ac.id", subjek: "Verifikasi Data Mahasiswa Berhasil", jam: "20 Jul", belumDibaca: false,
      isi: "Halo, Nakula Nalendra.\n\nPembaruan data mahasiswa Anda telah berhasil diproses oleh Sistem Informasi Akademik Universitas Jagat Maya.\n\nPastikan alamat email dan nomor kontak yang tercatat tetap aktif agar Anda dapat menerima informasi akademik dan administrasi.\n\nEmail ini dibuat secara otomatis. Anda tidak perlu membalas pesan ini.\n\nSistem Informasi Akademik UJM" },

    { dari: "Biro Akademik UJM", surel: "akademik@jagatmaya.ac.id", subjek: "Pengingat Periode Pengisian KRS Semester Ganjil", jam: "13 Jul", belumDibaca: false,
      isi: "Yth. Mahasiswa Universitas Jagat Maya,\n\nPeriode pengisian Kartu Rencana Studi Semester Ganjil 2026/2027 akan segera dibuka.\n\nMahasiswa diharapkan memeriksa kurikulum program studi serta berkonsultasi dengan dosen pembimbing akademik apabila memerlukan arahan dalam pemilihan mata kuliah.\n\nPerhatikan jadwal pengisian dan batas waktu perubahan KRS agar proses registrasi akademik berjalan lancar.\n\nSalam,\nBiro Akademik UJM" },

    { dari: "LMS Universitas Jagat Maya", surel: "notifikasi@lms.jagatmaya.ac.id", subjek: "Rekap Nilai Akhir Semester Genap 2025/2026", jam: "24 Jun", belumDibaca: false,
      isi: "Halo, Nakula!\n\nNilai akhir mata kuliah Semester Genap Tahun Akademik 2025/2026 telah dipublikasikan oleh dosen pengampu.\n\nSilakan masuk ke portal akademik untuk melihat hasil evaluasi masing-masing mata kuliah.\n\nApabila terdapat pertanyaan mengenai nilai, mahasiswa dapat menghubungi dosen pengampu sesuai prosedur akademik yang berlaku.\n\nTerima kasih.\n\nLMS Universitas Jagat Maya" },

    { dari: "Pengantar Ekonomi Makro", surel: "ekonomimakro@feb.jagatmaya.ac.id", subjek: "Pengumpulan Tugas Akhir — Analisis Ekonomi Indonesia", jam: "16 Jun", belumDibaca: true,
      isi: "Halo, Nakula Nalendra.\n\nMohon pastikan laporan akhir untuk mata kuliah Pengantar Ekonomi Makro telah dikumpulkan sesuai instruksi.\n\nLaporan harus memuat analisis terhadap indikator ekonomi yang dipilih, menggunakan data dari sumber yang dapat dipertanggungjawabkan, serta menyertakan daftar referensi.\n\nBerkas dikumpulkan dalam format PDF melalui LMS sebelum tenggat yang telah ditentukan.\n\nTerima kasih.\n\nDosen Pengampu Pengantar Ekonomi Makro" },

    { dari: "Himpunan Mahasiswa Manajemen", surel: "hmm@feb.jagatmaya.ac.id", subjek: "Dokumentasi dan Sertifikat Management Talk #03", jam: "8 Jun", belumDibaca: false,
      isi: "Halo, Nakula Nalendra!\n\nTerima kasih telah berpartisipasi dalam Management Talk #03.\n\nSertifikat peserta dan dokumentasi kegiatan kini tersedia. Silakan mengakses tautan yang dibagikan panitia untuk melihat dan mengunduh berkas.\n\nSemoga materi yang disampaikan dapat bermanfaat untuk pengembangan wawasan dan kompetensi di bidang manajemen.\n\nSalam,\nPanitia Management Talk #03" },

    { dari: "Biro Akademik FEB UJM", surel: "akademik@feb.jagatmaya.ac.id", subjek: "Jadwal Ujian Akhir Semester Genap 2025/2026", jam: "25 Mei", belumDibaca: false,
      isi: "Yth. Mahasiswa Fakultas Ekonomika dan Bisnis,\n\nJadwal Ujian Akhir Semester Genap Tahun Akademik 2025/2026 telah diterbitkan.\n\nMahasiswa dimohon memeriksa jadwal ujian, ruang pelaksanaan, serta ketentuan yang berlaku pada setiap mata kuliah.\n\nHarap datang tepat waktu dan membawa perlengkapan yang diperlukan sesuai ketentuan dosen pengampu.\n\nSemoga seluruh mahasiswa dapat mengikuti ujian dengan lancar.\n\nBiro Akademik FEB UJM" },

    { dari: "FEB UJM — Student Development", surel: "studentdevelopment@feb.jagatmaya.ac.id", subjek: "Business Case Competition 2026 — Call for Participants", jam: "12 Mei", belumDibaca: false,
      isi: "Halo, Mahasiswa FEB!\n\nPendaftaran Business Case Competition 2026 telah dibuka bagi mahasiswa yang tertarik mengembangkan kemampuan analisis dan pemecahan masalah bisnis.\n\nPeserta akan bekerja dalam tim untuk menganalisis kasus, menyusun rekomendasi strategis, dan mempresentasikan solusi di hadapan dewan juri.\n\nMahasiswa Manajemen dianjurkan memanfaatkan kesempatan ini untuk mengasah kemampuan berpikir kritis, komunikasi, dan kerja sama tim.\n\nInformasi pendaftaran tersedia melalui kanal resmi FEB UJM." },

    { dari: "Himpunan Mahasiswa Manajemen", surel: "hmm@feb.jagatmaya.ac.id", subjek: "Minutes of Meeting — Rapat Koordinasi Program Kerja April", jam: "27 Apr", belumDibaca: false,
      isi: "Halo, pengurus HMM!\n\nTerlampir notulensi rapat koordinasi program kerja bulan April.\n\nMohon setiap divisi memeriksa kembali pembagian tugas, tenggat pelaksanaan, kebutuhan anggaran, dan tindak lanjut yang telah disepakati dalam rapat.\n\nApabila terdapat koreksi terhadap notulensi, silakan menyampaikannya kepada sekretaris sebelum rapat koordinasi berikutnya.\n\nTerima kasih atas kerja samanya.\n\nSekretaris HMM UJM" },

    { dari: "Universitas Jagat Maya", surel: "informasi@jagatmaya.ac.id", subjek: "Pemberitahuan Libur dan Penyesuaian Layanan Akademik", jam: "16 Mar", belumDibaca: false,
      isi: "Yth. Sivitas Akademika Universitas Jagat Maya,\n\nSehubungan dengan hari libur nasional dan cuti bersama, sejumlah layanan administrasi universitas akan menyesuaikan jam operasional.\n\nMahasiswa diharapkan memeriksa pengumuman fakultas masing-masing untuk mengetahui penyesuaian jadwal perkuliahan dan layanan akademik.\n\nLayanan daring tetap dapat diakses sesuai ketentuan yang berlaku.\n\nSalam,\nUniversitas Jagat Maya" },

    { dari: "Sistem Informasi Akademik UJM", surel: "sia@jagatmaya.ac.id", subjek: "KRS Semester Genap 2025/2026 Berhasil Disimpan", jam: "23 Feb", belumDibaca: false,
      isi: "Halo, Nakula Nalendra.\n\nKartu Rencana Studi Semester Genap Tahun Akademik 2025/2026 telah berhasil disimpan dalam sistem.\n\nSilakan memeriksa kembali mata kuliah dan jumlah SKS yang tercatat. Simpan salinan KRS sebagai arsip pribadi apabila diperlukan untuk keperluan akademik.\n\nTerima kasih telah menggunakan Sistem Informasi Akademik Universitas Jagat Maya." },

    { dari: "Career Center UJM", surel: "careercenter@jagatmaya.ac.id", subjek: "Workshop: Building Your Professional Profile", jam: "10 Feb", belumDibaca: false,
      isi: "Halo, Nakula!\n\nCareer Center Universitas Jagat Maya mengundang mahasiswa untuk mengikuti workshop Building Your Professional Profile.\n\nMateri akan mencakup penyusunan CV, personal branding, persiapan wawancara, dan pengembangan profil profesional untuk kebutuhan magang maupun rekrutmen kerja.\n\nKegiatan terbuka bagi mahasiswa aktif dari seluruh fakultas.\n\nInformasi pendaftaran dapat diperoleh melalui portal Career Center UJM." },

    { dari: "Perpustakaan UJM", surel: "perpustakaan@jagatmaya.ac.id", subjek: "Pengingat Pengembalian Buku", jam: "12 Jan", belumDibaca: false,
      isi: "Halo, Nakula!\n\nBuku yang Anda pinjam dari Perpustakaan Universitas Jagat Maya akan segera memasuki batas waktu pengembalian.\n\nMohon periksa tanggal jatuh tempo melalui akun perpustakaan dan kembalikan buku sesuai jadwal.\n\nApabila buku masih diperlukan, silakan memeriksa ketentuan perpanjangan masa pinjam.\n\nTerima kasih." }
      ]
    }
);
