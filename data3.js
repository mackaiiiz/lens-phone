Object.assign(DATA, {
  kunci: {
    aktif: true,
    jam: "auto",
    pin: "1212",
    tanggal: "",
    notif: [
      {
        app: "wa",
        judul: "Sadewa",
        teks: "Nanti jemput jam berapa?",
        jam: "14:06"
      },
      {
        app: "mail",
        judul: "Akademik FEB UJM",
        teks: "Informasi akademik Semester Gasal 2026/2027",
        jam: "11:05"
      },
      {
        app: "mail",
        judul: "Career Development UJM",
        teks: "Webinar: Preparing Your First Professional CV",
        jam: "10:45"
      }
    ]
  },

  /* ---------- KALENDER ----------
     tanggal: "TAHUN-BULAN-TANGGAL" (contoh "2026-10-25")
     jam / sampai: "10:00" (kosongkan jam = acara seharian)
     warna: warna garis acara                                    */
  acara: [
    { tanggal: "2026-10-20", judul: "Kelas pagi", jam: "07:30", sampai: "09:10", lokasi: "Gedung A", warna: "#0a84ff" },
    { tanggal: "2026-10-20", judul: "Makan siang bareng Sadewa", jam: "12:00", sampai: "13:00", lokasi: "Jagat Maya Cafe", warna: "#30d158" },
    { tanggal: "2026-10-22", judul: "Kumpul Pria Pria Pemberani", jam: "16:00", sampai: "18:00", lokasi: "Kantin FEB", warna: "#ff9f0a" },
    { tanggal: "2026-10-24", judul: "Ngumpulin tugas", jam: "23:59", lokasi: "Online", warna: "#ff3b30" },
    { tanggal: "2026-10-25", judul: "Traktir bakwan buat Bima", lokasi: "Janji Bima", warna: "#ff9f0a" },
    { tanggal: "2026-10-28", judul: "Review UTS", jam: "08:00", sampai: "10:00", lokasi: "Ruang 3.2", warna: "#ff3b30" },
    { tanggal: "2026-10-31", judul: "Nonton bareng dewaaaa", jam: "19:00", sampai: "21:30", lokasi: "Bioskop", warna: "#bf5af2" },
    { tanggal: "2026-11-03", judul: "Belanja bulanan bareng dewa", jam: "10:00", lokasi: "Supermarket", warna: "#30d158" },
    { tanggal: "2026-07-07", judul: "Ulang tahun Arjuna 🎂", warna: "#ff375f" },
    { tanggal: "2026-08-08", judul: "Ulang tahun Bima 🎂", warna: "#d437ff" },
    { tanggal: "2026-09-09", judul: "Ulang tahun Yudis 🎂", warna: "#37ff87" },
    { tanggal: "2026-12-12", judul: "Ulang tahun Dewa!! (dan aku) 🎂", warna: "#fffc37" }
  ],

  /* ---------- APLIKASI X ----------
     tema: "terang" atau "gelap"
     akunku: akun Nakula (privat: true = ada ikon gembok)
     akun  : teman-teman yang mutualan. foto: "foto/xxx.jpg" (kosong = huruf)
     postingan: urutan dari yang terbaru. oleh = handle akun.
        balasan: [{ oleh, teks, jam }]  (muncul saat postingan diketuk)
     notif jenis: "suka" | "balas" | "follow" | "ulang"          */
  x: {
    tema: "terang",
    akunku: {
      nama: "Nakula", handle: "nakulkul", foto: "foto/nakula.jpg", banner: "",
      bio: "kenapa ayam goreng cirebon hampir benar",
      privat: true, mengikuti: 4, pengikut: 4, bergabung: "Maret 2021"
    },
    akun: [
      { nama: "Sadewa", handle: "sagarant", foto: "foto/sadewa.jpg", privat: true },
      { nama: "Yudistira", handle: "gitartira", foto: "foto/yudistira.jpg", privat: true },
      { nama: "Bima", handle: "hujanbakwan", foto: "foto/bima.jpg", privat: true },
      { nama: "Arjuna", handle: "pacarASA", foto: "foto/arjuna.jpg", privat: true }
    ],
    postingan: [
    {oleh: "nakulkul",
    teks: "selamat pagi untuk semua orang kecuali deadline tugasku yang munculnya kayak mantan ga tau diri bgt AAAARHHHHHGHH",
    jam: "12m",
    suka: 2, balas: 1, ulang: 0, tayang: "42",
    balasan: [
      { oleh: "gitartira", teks: "AOKWOAKWO baru apa belom tidur ini", jam: "10m" }
    ]
    },
    {
      oleh: "nakulkul",
      teks: "katanya belajar mengelola sumber daya. sumber daya utama aku sekarang adalah kesabaran dan itu udah defisit parah",
      jam: "25m",
      suka: 3, balas: 2, ulang: 0, tayang: "106",
      balasan: [
        { oleh: "hujanbakwan", teks: "kelols uang bulsnan lu dulu massss", jam: "20m" },
        { oleh: "nakulkul", teks: "BLOCKED.", jam: "18m" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "si paling LEGO tuh",
      foto: "foto/5.jpg",
      jam: "42m",
      suka: 4, balas: 4, ulang: 0, tayang: "83",
      balasan: [
        { oleh: "hujanbakwan", teks: "ga ngajskkkk????", jam: "20m" },
        { oleh: "pacarASA", teks: "gimana ya cara bilangnya", jam: "18m" },
        { oleh: "gitartira", teks: "lego date ta iki", jam: "15m" },
        { oleh: "sagarant", teks: "Seru. Kamu juga suka hasilnya, Na.", jam: "18m" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "AKU UDAH BUKA JURNALNYA. jangan tanya udah dibaca atau belum. kita apresiasi progres kecil ya guys",
      jam: "1j",
      suka: 4, balas: 4, ulang: 0, tayang: "145",
      balasan: [
        { oleh: "gitartira", teks: "halaman 1 judul doang ya", jam: "58m" },
        { oleh: "nakulkul", teks: "SETIDAKNYA AKU TAU JUDULNYA", jam: "55m" },
        { oleh: "sagarant", teks: "Lanjut baca, Na.", jam: "50m" },
        { oleh: "nakulkul", teks: "yayaya, sini dong dew temeninn", jam: "48m" },
      ]
    },
    {
      oleh: "nakulkul",
      teks: "dewa masak nasi goreng lagi pagi ini. ga kuat bgt. orang kok bisa punya skill hidup sebanyak itu. aku masak telur aja kadang bentuknya abstrak",
      jam: "2j",
      suka: 3, balas: 2, ulang: 0, tayang: "121",
      balasan: [
        { oleh: "sagarant", teks: "Makanya belajar.", jam: "1j" },
        { oleh: "nakulkul", teks: "ga ah kan ada kamu hehehe", jam: "1j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "masakannya difoto dulu sebelum dimakan. dokumentasi penting bagi aku yang kebahagiaannya bergantung pada lauk",
      foto: "foto/26.jpg",
      jam: "2j",
      suka: 4, balas: 4, ulang: 0, tayang: "203",
      balasan: [
        { oleh: "hujanbakwan", teks: "MAS DEW PUNYSKU MANAA KRIIM SJNIII", jam: "1j" },
        { oleh: "nakulkul", teks: "YHAAA ABISS", jam: "1j" },
        { oleh: "sagarant", teks: "Dimakan, Na. Nasinya dingin nanti.", jam: "57m" },
        { oleh: "nakulkul", teks: "IYAAA FOTO DULU BENTAR", jam: "55m" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "kadang aku mikir apa aku cocok jadi mahasiswa. terus inget aku juga ga cocok jadi pengangguran jadi yaudah lanjut aja lah ya",
      jam: "3j",
      suka: 2, balas: 1, ulang: 0, tayang: "190",
      balasan: [
        { oleh: "pacarASA", teks: "REAL BANGET ANJIR", jam: "2j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "kenapa orang bisa ngetik wkwk padahal mukanya datar bgt. apakah kita semua ini aktor",
      jam: "4j",
      suka: 1, balas: 3, ulang: 0, tayang: "97",
      balasan: [
        { oleh: "gitartira", teks: "lu ngetik wkwk sambil nangis juga pernah", jam: "3j" },
        { oleh: "nakulkul", teks: "itu beda genre tolong DIAM", jam: "3j" },
        { oleh: "sagarant", teks: "???? Kapan, Na?", jam: "3j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "tadi papasan sama orang terus aku udah ngerapiin rambut ehh salah nyapa KIRAIN KENAALLL",
      jam: "5j",
      suka: 3, balas: 5, ulang: 0, tayang: "288",
      balasan: [
        { oleh: "gitartira", teks: "minimal rambut lu rapi mas, ambil hikmahnya", jam: "4j" },
        { oleh: "nakulkul", teks: "AKU GAK BUTUH ITU AKU BUTUH DUKUNGAN", jam: "4j" },
        { oleh: "hujanbakwan", teks: "gk perlu gitu udah cskep kokk mass", jam: "3j" },
        { oleh: "nakulkul", teks: "makasih loh bim, aku emang cakep", jam: "3j" },
        { oleh: "hujanbakwan", teks: "hehehe iys bakwannya 50rb ya massss", jam: "3j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "BIMA KELUAR DARI AKUN INI SEKARANG JUGA.",
      jam: "5j",
      suka: 2, balas: 1, ulang: 0, tayang: "134",
      balasan: [
        { oleh: "hujanbakwan", teks: "KOK GITY JSHATTTTTT", jam: "5j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "aku tuh kalau udah nyaman sama orang jadi banyak omong bgt. maaf ya kalau tiba-tiba ngirim belasan pesan cuma buat cerita kucing di parkiran",
      jam: "6j",
      suka: 3, balas: 3, ulang: 0, tayang: "116",
      balasan: [
        { oleh: "sagarant", teks: "Tidak apa-apa. Ceritanya lucu.", jam: "5j" },
        { oleh: "nakulkul", teks: "kalo aku lucu ga dew", jam: "5j" },
        { oleh: "sagarant", teks: "Lucu.", jam: "5j" }
      ]
    },
    {
      oleh: "hujanbakwan",
      teks: "info bakwan",
      jam: "6j",
      suka: 4, balas: 2, ulang: 0, tayang: "320",
      balasan: [
        { oleh: "gitartira", teks: "ada nih gw open jastip fee 5k/pcs", jam: "6j" },
        { oleh: "hujanbakwan", teks: "lusr biasa kikirnya", jam: "5j" }
      ]
    },
    {
      oleh: "sagarant",
      teks: "Dibilang ga naksir, tapi saya hapal betul dengan jadwalnya, makanan favoritnya, cara dia ketawa, kapan dia biasanya online, sama suara excitednya pas lagi cerita.",
      jam: "7j",
      suka: 4, balas: 5, ulang: 0, tayang: "402",
      balasan: [
        { oleh: "pacarASA", teks: "DEFINISI GA NAKSIR DARI MANA SI", jam: "6j" },
        { oleh: "gitartira", teks: "buku pengantar denial", jam: "6j" },
        { oleh: "pacarASA", teks: "ni orang perlu diteliti sumpah", jam: "6j" },
        { oleh: "hujanbakwan", teks: "MAS KULA MAS KULA", jam: "5j" },
        { oleh: "nakulkul", teks: "IH DEW SIAPAAAAA", jam: "5j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "foto langit abis kelasss",
      foto: "foto/10.jpg",
      jam: "8j",
      suka: 3, balas: 0, ulang: 0, tayang: "174"
    },
    {
      oleh: "nakulkul",
      teks: "kampus tuh indah kalau ga inget ada presensi, tugas, dan kenyataan bahwa aku bayar mahal buat duduk sambil bingung",
      jam: "9j",
      suka: 3, balas: 2, ulang: 0, tayang: "109",
      balasan: [
        { oleh: "pacarASA", teks: "ritwit", jam: "8j" },
        { oleh: "nakulkul", teks: "JUNNNNN main yuk aku ada saran kafe baru!!!!", jam: "8j" }
      ]
    },
    {
      oleh: "pacarASA",
      teks: "gw mau cepet cepet lulus dan nikah sama asa",
      jam: "10j",
      suka: 3, balas: 2, ulang: 0, tayang: "240",
      balasan: [
        { oleh: "gitartira", teks: "sama aku bisa jun sebelum lulus", jam: "9j" },
        { oleh: "pacarASA", teks: "PAANSI LU DIEM GA", jam: "9j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "bikin proposal penelitian tuh kayak PDKT. harus ada pendekatan, harus relevan, harus punya alasan kuat, dan bisa ditolak kapan saja. wow anjay",
      jam: "11j",
      suka: 4, balas: 4, ulang: 0, tayang: "371",
      balasan: [
        { oleh: "gitartira", teks: "pilih mana, ditolak dosen apa orang", jam: "10j" },
        { oleh: "nakulkul", teks: "dua-duanya jangan dong disssss", jam: "10j" },
        { oleh: "sagarant", teks: "Fokus proposal dulu, Na. Mau saya bawain makan?", jam: "9j" },
        { oleh: "nakulkul", teks: "MAUMAUMAUUU", jam: "10j" }
      ]
    },
    {
      oleh: "gitartira",
      teks: "sop kalo dibalik jadi?",
      jam: "11j",
      suka: 2, balas: 2, ulang: 0, tayang: "212",
      balasan: [
        { oleh: "pacarASA", teks: "pos", jam: "10j" },
        { oleh: "gitartira", teks: "salah, sop dibalik jadi tumpah lah jun", jam: "10j" },
        { oleh: "pacarASA", teks: "GOBLOKKKK", jam: "10j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "pengen jadi batu",
      jam: "12j",
      suka: 3, balas: 0, ulang: 0, tayang: "153"
    },
    {
      oleh: "nakulkul",
      teks: "kenapa kalau lapar semua masalah hidup terasa lebih serius ya. tadi aku hampir mempertanyakan masa depan, ternyata cuma belum makan",
      jam: "13j",
      suka: 3, balas: 2, ulang: 0, tayang: "267",
      balasan: [
        { oleh: "sagarant", teks: "Makanya, bilang ke saya.", jam: "12j" },
        { oleh: "nakulkul", teks: "iyaiya makasih ya chef pribadiku ", jam: "12j" }
      ]
    },
    {
      oleh: "sagarant",
      teks: "Kok makin hari, saya makin jatuh cinta, ya.",
      jam: "13j",
      suka: 4, balas: 4, ulang: 0, tayang: "355",
      balasan: [
        { oleh: "gitartira", teks: "gw mau muntah", jam: "13j" },
        { oleh: "pacarASA", teks: "MANA ACTIONNYA KOCAK", jam: "12j" },
        { oleh: "hujanbakwan", teks: "MAS DEWA?!?!?!?!?! CIEEEEE", jam: "12j" },
        { oleh: "nakulkul", teks: "?????", jam: "12j" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "gimana caranya ngomong serius tanpa merasa malu sendiri",
      jam: "2h",
      suka: 2, balas: 1, ulang: 0, tayang: "190",
      balasan: [
        { oleh: "sagarant", teks: "Mau ngomongin apa, Na?", jam: "1h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "kamar juna kok RAPI banget",
      foto: "foto/27.jpg",
      jam: "3h",
      suka: 2, balas: 3, ulang: 0, tayang: "130",
      balasan: [
        { oleh: "hujanbakwan", teks: "twrnysta mas jnua jorokkk hiiii", jam: "3h" },
        { oleh: "pacarASA", teks: "ESTETIKA TAU", jam: "2h" },
        { oleh: "gitartira", teks: "pantes dipipisin manya", jam: "2h" }
      ]
    },

    {
      oleh: "nakulkul",
      teks: "pernah ga sih pengen cerita sesuatu ke seseorang tapi pas udah buka chat malah mikir dia lagi sibuk ga ya terus akhirnya cuma ngetik terus dihapus lagi",
      jam: "6h",
      suka: 4, balas: 2, ulang: 0, tayang: "320",
      balasan: [
        { oleh: "sagarant", teks: "Saya ga sibuk kok.", jam: "6h" },
        { oleh: "nakulkul", teks: "kok GEER", jam: "5h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "kalau aku tiba-tiba diem bukan berarti marah ya, mungkin aku...",
      jam: "7h",
      suka: 3, balas: 3, ulang: 0, tayang: "255",
      balasan: [
        { oleh: "sagarant", teks: "Mungkin apa, Na? Capek?", jam: "6h" },
        { oleh: "nakulkul", teks: "mungkin aku kebelet eek dew", jam: "6h" },
        { oleh: "pacarASA", teks: "anjing tau anjing?", jam: "6h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "oke cukup sesi overthinking. sekarang kita kembali ke pertanyaan penting: kenapa ayam goreng cirebon hampir benar",
      jam: "9h",
      suka: 4, balas: 4, ulang: 0, tayang: "430",
      balasan: [
        { oleh: "gitartira", teks: "AOWKWOKWAOWKAOWKO", jam: "8h" },
        { oleh: "hujanbakwan", teks: "karena syamnya belum lulus sidang", jam: "8h" },
        { oleh: "pacarASA", teks: "DIEM GAKKK ANJIRRRRR", jam: "8h" },
        { oleh: "nakulkul", teks: "KENAPA SIH APA YANG LUCU", jam: "7h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "aku benci ketika ada orang yang baik sama aku karena aku langsung mikir ini orang emang baik ke semua orang atau aku spesial atau aku halu",
      jam: "11h",
      suka: 4, balas: 2, ulang: 0, tayang: "299",
      balasan: [
        { oleh: "pacarASA", teks: "JAWABANYA LU KURANG TIDUR", jam: "10h" },
        { oleh: "nakulkul", teks: "aku akan memblokir dunia", jam: "10h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "birdie",
      foto: "foto/19.jpg",
      jam: "12h",
      suka: 3, balas: 0, ulang: 0, tayang: "244"
    },
    {
      oleh: "nakulkul",
      teks: "aku ingin jadi orang yang lebih sabar. tapi kalau file word geser sendiri 1 mm aja aku langsung ingin mengundurkan diri dari kehidupan ini",
      jam: "13h",
      suka: 3, balas: 2, ulang: 0, tayang: "201",
      balasan: [
        { oleh: "hujanbakwan", teks: "ctrl z mas", jam: "12h" },
        { oleh: "nakulkul", teks: "AKU TAU BIMA", jam: "12h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "AKU KANGEN RUMAH. kangen makanan rumah, kangen kamar sendiri, kangen ga mikirin cucian, kangen masakan ibuuu :((((",
      jam: "1h",
      suka: 2, balas: 1, ulang: 0, tayang: "218",
      balasan: [
        { oleh: "sagarant", teks: "Kalau mau pulang, atur waktunya. Jangan dipaksakan sendirian. Saya bisa bantu, kok.", jam: "58m" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "tadi dewa ngasih aku makanan yang dia masak lebih. MASAKANNYA LEBIH KATANYA. AKU MERASA MENANG DALAM HIDUP INI.",
      jam: "3h",
      suka: 4, balas: 3, ulang: 0, tayang: "370",
      balasan: [
        { oleh: "hujanbakwan", teks: "SKU KAPAN DAOAT JATAHHHH", jam: "3h" },
        { oleh: "nakulkul", teks: "KAN KAMU UDAH DIKASIH BAKWAN 15 BIJI KEMARIN", jam: "2h" },
        { oleh: "sagarant", teks: "Besok kalau ada lebih, saya kasih.", jam: "2h" }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "hari ini aku berhasil mandi, makan teratur, dan ga nangis gara-gara tugas. good enough.",
      jam: "4h",
      suka: 4, balas: 0, ulang: 0, tayang: "232"
    },
    {
      oleh: "nakulkul",
      teks: "dewa kalau kamu baca ini aku mau bilang makasih ya. kamu ga pernah bikin aku merasa terlalu banyak. bahkan pas aku ngomong ngalor ngidul, kamu tetep dengerin dengan baik",
      jam: "6h",
      suka: 2, balas: 1, ulang: 0, tayang: "130",
      balasan: [
        {oleh: "nakulkul", teks: "OH TIDAK INI TERLALU JUJUR. ANGKAT TANGAN SIAPA YANG UDAH BACA. AKU MAU CLOSE AKUN INI SEKARANG.", jam: "6h", suka: 3, balas: 4, ulang: 0, tayang: "186",
          balasan: [
            { oleh: "gitartira", teks: "udah baca", jam: "6h" },
            { oleh: "nakulkul", teks: "AHWTRGWEHWHJGHGS", jam: "5h" },
            { oleh: "sagarant", teks: "Sudah baca juga. Terima kasih juga, Na. I'm so grateful to have you in my life.", jam: "6h" },
            { oleh: "nakulkul", teks: "DIAAAMMMMMM INISIAL SADEWA DNI", jam: "6h" },
            { oleh: "sagarant", teks: ":)", jam: "6h" }
          ]
        }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "ternyata level 4 terlalu pedas untuk lambungku. hidup adalah rangkaian keputusan yang tidak bisa ditarik kembali...",
      foto: "foto/28.jpg",
      jam: "8h",
      suka: 2, balas: 1, ulang: 0, tayang: "142",
      balasan: [
        { oleh: "sagarant", teks: "Minum.", jam: "8h" },
        {
          oleh: "nakulkul",
          teks: "terima kasih dewa aku sudah minum air dan sekarang aku bisa melihat masa depan lagi",
          jam: "8h",
          suka: 1, balas: 0, ulang: 0, tayang: "131"
        }
      ]
    },
    {
      oleh: "nakulkul",
      teks: "aku akan membuat keputusan besar dalam hidup hari ini",
      jam: "7h",
      suka: 1, balas: 2, ulang: 0, tayang: "98",
      balasan: [
        { oleh: "hujanbakwan", teks: "ngspain mas", jam: "7h" },
        { oleh: "nakulkul", teks: "beli ayam geprek level 4", jam: "7h" }
      ]
    }
  ]
  }
});
