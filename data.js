
const DATA = {
  namaku: "Nakula",

  jam: "auto",

  // Wallpaper: isi path foto, contoh "foto/wallpaper.jpg". Kosong = gradasi bawaan.
  wallpaper: "foto/wallpaper.jpg",
  kameraVideo: "foto/kamera.mp4",

  /* ---------- WHATSAPP ----------
     dari: "aku" (Nakula) atau "dia" (lawan chat)
     teks: isi pesan   |  foto: path gambar (opsional)  |  jam: "19:02"
     { tanggal: "Hari ini" } = penanda tanggal di tengah
     foto profil: isi "foto" di tiap kontak (kosong = huruf pertama)
     belumDibaca: angka badge hijau (0 = tidak ada)       */
 chats: [
    {
        nama: "Sadewa",
        foto: "foto/sadewa.jpg",
        belumDibaca: 2,
        pesan: [
            { tanggal: "Senin, 12 Oktober 2026" },
            { dari: "dia", teks: "Naa, bangun.", jam: "06:42" },
            { dari: "aku", teks: "udah", jam: "06:48" },
            { dari: "aku", teks: "siapa", jam: "06:48" },
            { dari: "dia", teks: "Saya.", jam: "06:49" },
            { dari: "aku", teks: "WKWKWKWK sialan cepet banget balesnya", jam: "06:49" },
            { dari: "aku", teks: "kirain masih tidur, tumben udah bangun jam segini", jam: "06:50" },
            { dari: "dia", teks: "Kebangun. Kamu udah siap belum? Jadi kan masuk pagi?", jam: "06:50" },
            { dari: "aku", teks: "jadiiii :( males banget padahal mata masih 5 watt", jam: "06:51" },
            { dari: "aku", stiker: "foto/spongebob4.jpg", jam: "06:51" },
            { dari: "dia", teks: "Mandi sana makanya. Biar seger.", jam: "06:52" },
            { dari: "aku", teks: "iya ini mau mandii", jam: "06:53" },
            { dari: "aku", teks: "dewdewdew, jemput yaaa 🥺👉👈", jam: "06:53" }, 
            { dari: "dia", teks: "Dari tadi saya udah siap di motor, Nakula. Tinggal jalan ke kosan kamu.", jam: "06:54" },
            { dari: "aku", teks: "HAH SUMPAH? kenapa gak bilang dari tadiii", jam: "06:55" },
            { dari: "aku", teks: "tuh kan kebiasaan main asal jemput ihh", jam: "06:55" },
            { dari: "dia", teks: "Biar kamu gak kepagian nunggu di gerbang. Udah, sana mandi, keburu siang. Saya tunggu di bawah.", jam: "06:56" },
            { dari: "aku", teks: "IYAA SEBENTAR YA DEWWW JANGAN DITINGGALLLL", jam: "06:56" },

            { tanggal: "Selasa, 13 Oktober 2026" },
            { dari: "aku", teks: "dewwww", jam: "12:15" },
            { dari: "aku", stiker: "foto/spongebob2.jpg", jam: "12:15" },
            { dari: "aku", teks: "lapar banget help me :(", jam: "12:16" },
            { dari: "dia", teks: "Jam berapa kelar kelas?", jam: "12:16" },
            { dari: "aku", teks: "ini baru aja beres kok! dosennya gak masuk jadi cuma ngumpulin tugas doang", jam: "12:17" },
            { dari: "aku", teks: "kamu di mana? kantin? kosan? perpustakaan?", jam: "12:17" },
            { dari: "dia", teks: "Di parkiran FEB. Sini turun.", jam: "12:18" },
            { dari: "aku", teks: "EH? kamu emang ada urusan disini??", jam: "12:19" },
            { dari: "dia", teks: "Gak ada.", jam: "12:19" },
            { dari: "aku", teks: "lah terus ngapain astagaa 😭", jam: "12:20" },
            { dari: "dia", teks: "Nungguin orang kelar kelas. Udah jalan ke sini sebelum saya tinggal.", jam: "12:20" },
            { dari: "aku", teks: "tebak inisial", jam: "12:20" },
            { dari: "dia", teks: "Nakula, 12:22 saya tinggal ya.", jam: "12:20" },
            { dari: "aku", teks: "IYAAA IH ini aku jalan ke parkiran sekarang! tunggu ya deww jangan kemana-mana!", jam: "12:21" },
            { dari: "dia", teks: "Yaa, hati-hati.", jam: "12:21" },

            { tanggal: "Rabu, 14 Oktober 2026" },
            { dari: "aku", teks: "DEWDEWDEWWWW", jam: "19:30" },
            { dari: "dia", teks: "Kenapa lagi, Na?", jam: "19:31" },
            { dari: "aku", teks: "itu sendal karet aku yang warna kuning kenapa kamu bawa pulang sih semalem??", jam: "19:31" },
            { dari: "aku", teks: "tadi aku mau pake ke minimarket malah gak ada, kirain dicuri orang kosan :(", jam: "19:32" },
            { dari: "dia", teks: "Ketinggalan di teras semalem waktu mau ngambil jemuran. Sengaja saya bawa biar gak hilang.", jam: "19:32" },
            { dari: "aku", teks: "alibi banget padahal pengen punya barang aku ya di kosan kamu?", jam: "19:33" },
            { dari: "dia", teks: "... Pede banget. Besok saya balikin.", jam: "19:34" },
            { dari: "aku", teks: "ih jangan dibalikin dulu! biarin di sana aja, biar kayak orang serumah", jam: "19:35" },
            { dari: "aku", stiker: "foto/spongebob.jpg", jam: "19:35" },
            { dari: "dia", teks: "??? Otak kamu isinya apa sih, Na.", jam: "19:36" },
            { dari: "aku", teks: "isinya kamu", jam: "19:36" },
            { dari: "aku", teks: "eh salah", jam: "19:36" },
            { dari: "aku", teks: "isinya tugasku yang numpuk", jam: "19:37" },
            { dari: "dia", teks: "Halah.", jam: "19:37" },
            { dari: "aku", teks: "pengen banget dipikirin aku??", jam: "19:38" },
            { dari: "aku", stiker: "foto/spongebob3.jpg", jam: "19:38" },
            { dari: "dia", teks: "Iya deh terserah Nakula. Ini saya lagi masak sop iga. Mau dibawain nanti malam?", jam: "19:39" },
            { dari: "aku", teks: "MAUUUU BANGET DEMI APA", jam: "19:40" },
            { dari: "aku", teks: "kamu emang paling ngerti kalau aku lagi laper ehehehe", jam: "19:40" },
            { dari: "dia", teks: "Makanya jangan suka begadang ngerjain tugas mepet deadline. Tunggu, nanti saya ke kosan kamu abis ini.", jam: "19:41" },
            { dari: "aku", teks: "SIAAPPPP", jam: "19:42" },
            { dari: "dia", stiker: "foto/spongebob9.jpg", jam: "19:50" },

            { tanggal: "Kamis, 15 Oktober 2026" },
            { dari: "aku", teks: "dew masih melek gak?", jam: "23:05" },
            { dari: "dia", teks: "Masih. Kenapa, Na? Belum tidur?", jam: "23:06" },
            { dari: "aku", teks: "gak bisa tidur sumpah :( biasanya kan kalau malam sunyi gitu jadi kepikiran tugas terus makin stres", jam: "23:07" },
            { dari: "aku", teks: "temenin ngobrol sebentar dong", jam: "23:07" },
            { dari: "dia", teks: "Mau ditemenin ngobrol apa? Sini telepon kalau gak bisa tidur.", jam: "23:08" },
            { dari: "aku", teks: "eh gak usah telepon, suara aku lagi bindeng males ah. chat aja yaa", jam: "23:09" },
            { dari: "dia", teks: "Yaudah. Mau ngobrolin apa?", jam: "23:10" },
            { dari: "aku", teks: "cerita apa aja terserah kamu. tadi siang kamu habis dari mana aja sama Juna dan yang lain? tumben gak ngabarin aku pas jam istirahat", jam: "23:11" },
            { dari: "dia", teks: "Cemburu?", jam: "23:12" },
            { dari: "aku", teks: "DIH PD BANGET siapa juga yang cemburu, nanya doang emang gak boleh?!", jam: "23:13" },
            { dari: "dia", teks: "Iya, gak boleh cemburu kalau belum ada statusnya.", jam: "23:14" },
            { dari: "aku", teks: "GAADA YANG CEMBURUUUU", jam: "23:14" },
            { dari: "aku", stiker: "foto/spongebob7.jpg", jam: "23:14" },
            { dari: "aku", teks: "ANTERIN AKU PULANG DARI KAMPUS BESOK POKOKNYA TITIK GAK TERIMA PENOLAKAN", jam: "23:15" },
            { dari: "dia", teks: "Iyaaa, Nakula. Pasti saya jemput.", jam: "23:16" },
            { dari: "aku", teks: "nyebelin banget dasarrr, tapi kangen sih dikit", jam: "23:16" },
            { dari: "dia", teks: "Dikit doang?", jam: "23:17" },
            { dari: "aku", teks: "banyak deh, puas????? udah sana tidur ah", jam: "23:18" },
            { dari: "dia", teks: "Haha. Iya, saya tidur ya. Kamu juga istirahat, lanjut besok aja tugasnya.", jam: "23:18" },
            { dari: "dia", teks: "Good night, Na.", jam: "23:18" },
            { dari: "aku", teks: "iyaa, night deww", jam: "23:19" },
            { dari: "dia", teks: "Sleep tight. Love u.", jam: "23:19" },

            { tanggal: "Jumat, 16 Oktober 2026" },
            { dari: "aku", teks: "dewwww gawat darurat", jam: "16:40" },
            { dari: "dia", teks: "Kenapa lagi, Na? Jatuh lagi?", jam: "16:40" },
            { dari: "aku", teks: "bukan ih! tadi kan aku habis dari perpus, terus pas di jalan ketemu anak yang pernah aku ceritain itu loohh, yang dari dulu suka ngajak kenalan", jam: "16:41" },
            { dari: "aku", teks: "dia ngajak aku jalan weekend besok nonton bioskop katanya :(", jam: "16:42" },
            { dari: "dia", teks: "Terus? Kamu jawab apa?", jam: "16:42" },
            { dari: "aku", teks: "ya aku bilang masih lihat jadwal dulu... tapi dia maksa minta nomor WA ulang padahal udah punya", jam: "16:43" },
            { dari: "dia", teks: "Oh. Yaudah, pergi aja kalau mau. Kenapa laporan ke saya?", jam: "16:44" },
            { dari: "aku", teks: "ih kok YAUDAH doang??? kalo aku diculik??? kamu ga peduli lagi ya dew hiks", jam: "16:45" },
            { dari: "dia", teks: "Terus saya harus jawab gimana? Kamu kan free, bukan siapa-siapa saya juga. Bebas mau jalan sama siapa aja.", jam: "16:46" },
            { dari: "aku", stiker: "foto/spongebobsedih.jpg", jam: "16:47" },
            { dari: "aku", teks: "ah udahlah aku gak jadi pergi deh males banget", jam: "16:48" },
            { dari: "dia", teks: "Kenapa gak jadi? Katanya mau nonton.", jam: "16:48" },
            { dari: "aku", teks: "gakkkk, males pokoknya males!", jam: "16:49" },
            { dari: "dia", stiker: "foto/meme.jpg", jam: "16:50" },
            { dari: "dia", teks: "Bohong kalau gak mau. Udah, jangan cemberut gitu mukanya. Saya ke kosan sekarang bawain martabak manis kesukaan kamu. Biar gak ngambek.", jam: "16:51" },
            { dari: "aku", teks: "siapa yang ngambek?! tapi martabaknya yang keju cokelat kan? awas kalau salah beli", jam: "16:52" },
            { dari: "dia", teks: "Iya, Nakula. Selalu yang itu. Tunggu di bawah, 10 menit saya sampai.", jam: "16:53" },

            { tanggal: "Sabtu, 17 Oktober 2026" },
            { dari: "aku", teks: "dewwww makasih ya buat hari ini!! makannya enak banget, terus tadi seru banget walau kakiku pegel gara-gara jalan muter-muter malem mingguan", jam: "21:15" },
            { dari: "dia", teks: "Sama-sama, Nakula. Makanya rajin rajin olahraga.", jam: "21:16" },
            { dari: "aku", teks: "ih ajak aku lah makanya???", jam: "21:17" },
            { dari: "dia", teks: "Yaudah, kapan mau jalan lagi?", jam: "21:18" },
            { dari: "aku", stiker: "foto/spongebob3.jpg", jam: "21:18" },
            { dari: "aku", teks: "MODUS", jam: "21:19" },
            { dari: "dia", teks: "Loh, katanya mau olahraga?", jam: "21:20" },
            { dari: "aku", teks: "diem dew", jam: "21:21" },
            { dari: "dia", teks: "Oke cantik.", jam: "21:22" },
            { dari: "aku", teks: "IYAAA OK OK AKU TIDUR DULU YA DEW BYE", jam: "21:23" },
            { dari: "dia", teks: "Good night, Nakula cantik. Mimpiin saya ya.", jam: "21:24" },

            { tanggal: "Minggu, 18 Oktober 2026" },
            { dari: "aku", teks: "dewwww", jam: "22.15" },
            { dari: "aku", teks: "sibuk gak?", jam: "22.15" },
            { dari: "dia", teks: "Lagi baca materi kuliah buat besok. Kenapa, Na?", jam: "22.16" },
            { dari: "aku", teks: "ehh maaf ganggu ya? yaudah lanjut aja dulu sana", jam: "22.16" },
            { dari: "dia", teks: "Gak ganggu. Kenapa tiba-tiba nyari? Kangen?", jam: "22.17" },
            { dari: "aku", teks: "DIH GEER BANGEEET", jam: "22.18" },
            { dari: "aku", stiker: "foto/spongebob6.jpg", jam: "22.18" },
            { dari: "aku", teks: "cuma mau ngasih tau tadi sore kucing kampus yang belang tiga itu ngikutin aku sampe parkiran lho", jam: "22.19" },
            { dari: "aku", teks: "lucu banget pengen aku bawa pulang ke kosan rasanya :( tapi gak dibolehin ibu kos", jam: "22.20" },
            { dari: "dia", teks: "Kosan saya masih muat kalau mau nambah satu makhluk berbulu lagi.", jam: "22.21" },
            { dari: "dia", teks: "Nambah kamu juga bisa.", jam: "22.22" },
            { dari: "aku", teks: "MAKSUD KAMU APA DEWA", jam: "22.23" },
            { dari: "aku", stiker: "foto/spongebob.jpg", jam: "22.23" },
            { dari: "aku", teks: "tapi besok jemput aku ya pagi-pagi, ada matkul jam 8 pagi dosennya killer banget males telat", jam: "22.24" },
            { dari: "dia", teks: "Iya, Nakula. Jam setengah 8 saya di depan gerbang kosan kamu. Tidur sana, jangan malah doomscrolling.", jam: "22.25" },
            { dari: "aku", teks: "iyaa good night deww", jam: "22.26" },
            { dari: "dia", teks: "Good night. Mimpiin saya.", jam: "22.26" },

            { tanggal: "Selasa, 20 Oktober 2026" },
            { dari: "aku", teks: "dew", jam: "18.30" },
            { dari: "aku", teks: "lagi apa?", jam: "18.30" },
            { dari: "dia", teks: "Baru selesai mandi. Kenapa, Na? Baru pulang kuliah?", jam: "18.32" },
            { dari: "aku", teks: "iya nih baru nyampe kosan", jam: "18.33" }, 
            { dari: "aku", teks: "capekkkk banget tugasku numpuk parah kepala mau pecah rasanya:(((", jam: "18.34" },
            { dari: "aku", teks: "mau nangis aja rasanya, dosennya galak banget ngasih revisi", jam: "18.34" },
            { dari: "aku", stiker: "foto/spongebobsedih.jpg", jam: "18.34" },
            { dari: "dia", teks: "Udah makan belum?", jam: "18.35" },
            { dari: "aku", teks: "belum sempat, tadi langsung rebahan saking lemesnya", jam: "18.35" },
            { dari: "dia", teks: "Yaudah jangan dibuka dulu laptopnya. Tunggu 15 menit, saya ke kosan kamu bawain makan malam.", jam: "18.36" },
            { dari: "aku", teks: "eh beneran?? gak usah repot-repot deww kamu kan pasti capek jg abis dari kampusnya", jam: "18.37" },
            { dari: "dia", teks: "Gak repot. Tunggu aja, jangan tidur ya.", jam: "18.38" },
            { dari: "aku", teks: "iya oke... makasih dewa...", jam: "18.39" },
            { dari: "dia", teks: "Oke. Nanti cium ya.", jam: "18.40" },
            { dari: "aku", teks: "DEWA.", jam: "18.41" },
            { dari: "dia", teks: "Hahaha. Saya jalan sekarang ya, Na.", jam: "18.42" },
            { dari: "aku", teks: "iyaa hati-hatiii", jam: "18.42" },

            { tanggal: "Rabu, 21 Oktober 2026" },
            { dari: "aku", teks: "deww udah siapp", jam: "06.54" },
            { dari: "dia", teks: "Oke, tunggu bentar ya cantik.", jam: "06.54" },
            { dari: "aku", teks: "iyaa", jam: "06.55" },
            { dari: "dia", teks: "Naaa", jam: "14.06" },
            { dari: "dia", teks: "Nanti jemputnya jam berapa?", jam: "14.06" }
        ]
    },
    {
        nama: "Yudistira",
        foto: "foto/yudistira.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Minggu, 11 Oktober 2026" },
            { dari: "dia", teks: "ada yang abis dari tempat masdew nih, cihuuyyy", jam: "14:05" },
            { dari: "aku", teks: "IH TAU DARI MANA??", jam: "14:06" },
            { dari: "dia", teks: "ya taulaah wkwk", jam: "14:07" },
            { dari: "dia", teks: "bajunya ketinggalan tuh", jam: "14:07" },
            { dari: "dia", teks: "udah siap living tugeder ya mas", jam: "14:07" },
            { dari: "aku", teks: "SEMBARANGANNN", jam: "14:08" },
            { dari: "aku", teks: "itu basah aja semalemm, jadi aku numpang jemur cuma lupaa", jam: "14:08" },
            { dari: "dia", teks: "aowkaowkwo iya percaya iya", jam: "14:09" },
            { dari: "dia", teks: "santai aja ga sih mas kalo cuma temen", jam: "14:09" },
            { dari: "dia", teks: "eh temen apa temen si", jam: "14:09" },
            { dari: "aku", teks: "AKU BLOCK YA KAMU", jam: "14:10" },
            { dari: "dia", teks: "AOWKAOWKAOWKO", jam: "14:10" }
        ]
    },
    {
        nama: "Arjuna",
        foto: "foto/arjuna.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Minggu, 11 Oktober 2026" },
            { dari: "dia", teks: "JELASIN", jam: "14:12" },
            { dari: "dia", teks: "KUL", jam: "14:12" },
            { dari: "aku", teks: "JUN SUMPAH GA NGAPA NGAPAINNN", jam: "14:13" },
            { dari: "aku", teks: "BAJUKU BASAH TERUS DIJEMUR TERUS AKU LUPA BAWA", jam: "14:13" },
            { dari: "dia", teks: "Sudahi kebohonganmu itu kawan", jam: "14:14" },
            { dari: "aku", stiker: "foto/spongebob5.jpg", jam: "14:15" }
        ]
    },
    {
        nama: "Bima",
        foto: "foto/bima.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Minggu, 11 Oktober 2026" },
            { dari: "dia", teks: "mas kstanya mas kula udsh tinggal barneg masdew???", jam: "14:20" },
            { dari: "aku", teks: "Bim.", jam: "14:20" },
            { dari: "dia", teks: "Ys mas?????", jam: "14:21" },
            { dari: "aku", teks: "mau bakwan ga? aku beliin 50 tapi kamu sumpel ke mulut yudis, deal?", jam: "14:22" },
            { dari: "dia", teks: "HAH KOK GITUUU", jam: "14:22" },
            { dari: "dia", teks: "MAU MAS", jam: "14:22" },
        ]
    },
    {
        nama: "Pria Pria Pemberani",
        foto: "foto/grup_pria.jpg",
        belumDibaca: 1,
        pesan: [
            { tanggal: "Jumat, 16 Oktober 2026" },
            { dari: "dia", pengirim: "Bima", teks: "SUMPSH", jam: "10:00" },
            { dari: "dia", pengirim: "Bima", teks: "BAKWAN DI KANTIN FIB HABIS", jam: "10:00" },
            { dari: "dia", pengirim: "Bima", teks: "INI KETERLSLUAN", jam: "10:01" },
            { dari: "dia", pengirim: "Arjuna", teks: "BIMA JAM SEPULUH PAGI LU UDAH MIKIRIN BAKWAN", jam: "10:01" },
            { dari: "dia", pengirim: "Bima", teks: "MAS JUNA GSK AKAN PAHAM", jam: "10:02" },
            { dari: "dia", pengirim: "Yudistira", teks: "wkwkwkwkwk", jam: "10:02" },
            { dari: "dia", pengirim: "Bima", teks: "GUE UDAH JALAN KE KANTIN FISIP", jam: "10:03" },
            { dari: "dia", pengirim: "Bima", teks: "DOAIN DSPETTT", jam: "10:03" },
            { dari: "aku", teks: "SEMANGAT BIMAAAA", jam: "10:03" },
            { dari: "dia", pengirim: "Bima", teks: "MAKASIH MAS KULA", jam: "10:04" },
            { dari: "dia", pengirim: "Sadewa", teks: "Na, kamu ikut-ikutan?", jam: "10:04" },
            { dari: "aku", teks: "LAH KAN AKU SUPPORT TEMENKU DEW", jam: "10:05" },
            { dari: "dia", pengirim: "Sadewa", teks: "Aneh.", jam: "10:05" },
            { dari: "aku", teks: "OFKORS", jam: "10:06" },
            { dari: "dia", pengirim: "Arjuna", teks: "GUA KELUAR AJA LAH DARI GRUP INI", jam: "10:06" },
            { dari: "dia", pengirim: "Yudistira", teks: "nama grupnya pria pria pemberani, jun", jam: "10:07" },
            { dari: "dia", pengirim: "Yudistira", teks: "bukan pria pria berpendidikan", jam: "10:07" },
            { dari: "dia", pengirim: "Bima", teks: "GUYS KANTIN FISIP ADA BAKWAN", jam: "10:10" },
            { dari: "dia", pengirim: "Bima", teks: "12 BIJI", jam: "10:10" },
            { dari: "dia", pengirim: "Bima", teks: "SKU OPEN JASTIO FEE 1K/PCS", jam: "10:10" },
            { dari: "aku", teks: "BELIIN AKU BIM", jam: "10:11" },
            { dari: "dia", pengirim: "Bima", teks: "SIAP MAS KULAAAA", jam: "10:11" }
        ]
    },
    {
        nama: "Panitia Divisi Acara",
        foto: "foto/grup_panitia.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Rabu, 21 Oktober 2026" },
            { dari: "dia", pengirim: "Naia", teks: "Guysss, ini rundown untuk technical meeting besok udah direvisi ya sama Kak Sadewa. Tolong dicek lagi yaa", jam: "10:30" },
            { dari: "dia", pengirim: "Aya", teks: "Eh iya udah aku lihat Naiii. Bagian konsumsi udah fix kan ya sama list logistiknya?", jam: "10:31" },
            { dari: "dia", pengirim: "Naia", teks: "Udah fix kok, tadi Kak Sadewa yang langsung acc pas ketemu di perpus. Katanya tinggal diprint aja kalau gak ada perubahan lagi", jam: "10:31" },
            { dari: "aku", teks: "eh iya, bentar ya aku baca duluu", jam: "10:32" },
            { dari: "dia", pengirim: "Aya", teks: "Gercep bangettt, santai aja gapapa kok kak. Lagi makan bareng kak ituu kaann? 🙂‍↕️🙂‍↕️", jam: "10:33" },
            { dari: "aku", teks: "Hahhh apaa", jam: "10:34" },
            { dari: "dia", pengirim: "Naia", teks: "Eh beneran Ayyy? Ada yang lagi ngedate?", jam: "10:34" },
            { dari: "aku", teks: "APA YAA KALIANN", jam: "10:35" },
            { dari: "dia", pengirim: "Aya", teks: "Iyaloh Naii, keliatan nih dari sini. Sumringah banget kayanya tuhh", jam: "10:35" },
            { dari: "aku", teks: "GAK ADA YAA", jam: "10:36" },
            { dari: "aku", teks: "Kita temen deket doangg", jam: "10:36" },
            { dari: "aku", teks: "Ini juga sekalian bahas rundown kokkk", jam: "10:36" },
            { dari: "dia", pengirim: "Naia", teks: "Iya deh temen dekat tapi tiap hari berdua mulu. Yaudah lanjut cek rundown ya, jangan pacaran muluuu", jam: "10:36" },
            { dari: "aku", teks: "NAI", jam: "10:36" },
            { dari: "aku", stiker: "foto/spongebob5.jpg", jam: "10:36" },
            { dari: "dia", pengirim: "Aya", teks: "WKWKWKWKW", jam: "10:37" },
        ]
    },
    {
        nama: "Rexxx",
        foto: "foto/rex.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Selasa, 20 Oktober 2026" },
            { dari: "dia", teks: "Naaa, kamu udah bikin bagian analisis segmentasi pasar buat tugas Manajemen Strategis belum?", jam: "14.12" },
            { dari: "aku", teks: "baru setengah nih rex 😭 pusing banget nentuin target demografinya", jam: "14.15" },
            { dari: "dia", teks: "Sama anjir, dosennya minta data primer pula padahal risetnya mepet banget deadline minggu depan", jam: "14.16" },
            { dari: "aku", teks: "iya tau banget, malesin parah dosen matkul itu emang suka ngasih tugas dadakan", jam: "14.17" },
            { dari: "aku", teks: "nanti malem kamu ada waktu gak? zoom meeting yuk, kita cicil barengan biar gak numpuk", jam: "14.18" },
            { dari: "dia", teks: "Boleh banget, kabari ya nanti pas kamu udah senggang. Aku tunggu link zoom-nyaa", jam: "14.19" }
        ]
    },
    {
        nama: "+62 857-3382-91xx",
        foto: "foto/default.jpg",
        belumDibaca: 1,
        pesan: [
            { tanggal: "Senin, 12 Oktober 2026" },
            { dari: "dia", teks: "Pagi kak, ini info buat pengumpulan proposal pendanaan kemarin udah dibuka ya link uploadnya", jam: "08.15" },
            { dari: "aku", teks: "eh pagi, wah makasih banyak infonya ya!", jam: "08.20" },
            { dari: "dia", teks: "Sama-sama kak Nakulaa", jam: "08.21" },
            { tanggal: "Selasa, 13 Oktober 2026" },
            { dari: "dia", teks: "Kak Nakulaa, mau tanya dong. Format lampiran surat izin peminjaman ruangannya pake ttd ketua pelaksana atau cukup tanda tangan ketua himpunan ya?", jam: "14.10" },
            { dari: "aku", teks: "pakai ttd ketua pelaksana aja dulu, nanti baru divalidasi sama bagian kesekretariatan", jam: "14.25" },
            { dari: "dia", teks: "Oalah oke kak, noted ya. Makasih banyak infonya!", jam: "14.26" },
        ]
    },
    {
        nama: "Laundry 112",
        foto: "foto/olshop.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Rabu, 14 Oktober 2026" },
            { dari: "dia", teks: "Halo Kak Nakula! Laundrynya udah beres yaa, bisa di pick up pagi ini", jam: "10.10" },
            { dari: "aku", teks: "okee kak, makasihh", jam: "10.12" },
            { dari: "dia", teks: "Baik kak, terima kasih kembali", jam: "10.15" },
        ]
    },
    {
        nama: "Abang Kurir Paket",
        foto: "foto/kurir.jpg",
        belumDibaca: 0,
        pesan: [
            { tanggal: "Jumat, 16 Oktober 2026" },
            { dari: "dia", teks: "Paket atas nama Nakula di depan gerbang kosan ya mas, titip di bapak penjaga kos ya soalnya gerbangnya dikunci", jam: "13.20" },
            { dari: "aku", teks: "wah, siap pak! makasih banyak ya pak kurir", jam: "13.25" },
            { dari: "dia", teks: "Sama-sama mas, jangan lupa di-ulas ya bintang limanya", jam: "13.26" },
            { dari: "aku", teks: "siap laksanakan pakkk bintang 5", jam: "13.27" },
        ]
    },
    {
        nama: "+62 813-7721-xx10",
        foto: "foto/default.jpg",
        belumDibaca: 1,
        pesan: [
            { tanggal: "Senin, 19 Oktober 2026" },
            { dari: "dia", teks: "Halo Kak Nakula, maaf mengganggu malam-malam. Ini aku Rani dari divisi sponsorship sempro kemarin", jam: "20.15" },
            { dari: "aku", teks: "eh iya malam Rani, gak ganggu kok santai aja. Ada apa ya?", jam: "20.20" },
            { dari: "dia", teks: "Mau nanya laporan pertanggungjawaban (LPJ) keuangan yang bagian dana usaha udah masuk ke kakak belum ya? Takutnya terlewat", jam: "20.21" },
            { dari: "aku", teks: "coba aku cek file drive dulu ya, kemarin kayaknya udah dikirim rekapnya sama bendahara", jam: "20.25" },
            { dari: "aku", teks: "eh iya ini udah masuk kok foldernya, aman ya ran!", jam: "20.28" },
            { dari: "dia", teks: "Okayyy. Makasih banyak ya kak Nakula atas bantuannya!", jam: "20.29" },
            { dari: "aku", teks: "sama-sama Raniii", jam: "20.30" },
        ]
    },
    {
        nama: "+62 896-5541-xx88",
        foto: "foto/default.jpg",
        belumDibaca: 2,
        pesan: [
            { tanggal: "Minggu, 18 Oktober 2026" },
            { dari: "dia", teks: "Pagi kak Nakula, maaf mau tanya. Buku pengantar bisnis digital semester lalu masih dipake gak ya? Mau pinjam buat referensi tugas bab 4 boleh?", jam: "09.00" },
            { dari: "dia", teks: "Atau kalau ada e-booknya boleh banget minta tolong dikirim PDF-nya kak 🥺", jam: "09.01" },
            { dari: "aku", teks: "pagi! wah bentaaar aku cari dulu di rak buku kosan ya", jam: "09.45" },
            { dari: "aku", teks: "adaa nih, aku bawain aja yaa nanti ambil di gedung D bisa?", jam: "09.48" },
            { dari: "dia", teks: "WAAAH MAKASIH BANYAK KAK NAKULAAA 😭🙏", jam: "09.50" },
            { dari: "dia", teks: "Bisaa kakk, makasih yaa maaf ngerepotinn🙏", jam: "09.50" },
        ]
    },
],

  /* ---------- FOTO ----------
     Tambah path foto satu per satu. Kosong ([]) = 15 kotak placeholder. */
  galeri: [
    "foto/1.jpg",
    "foto/2.jpg",
    "foto/3.jpg",
    "foto/4.jpg",
    "foto/5.jpg",
    "foto/6.jpg",
    "foto/7.jpg",
    "foto/8.jpg",
    "foto/9.jpg",
    "foto/10.jpg",
    "foto/11.jpg",
    "foto/12.jpg",
    "foto/13.jpg",
    "foto/14.jpg",
    "foto/15.jpg",
    "foto/16.jpg",
    "foto/17.jpg",
    "foto/18.jpg",
    "foto/19.jpg",
    "foto/20.jpg",
    "foto/21.jpg",
    "foto/22.jpg",
    "foto/23.jpg",
    "foto/24.jpg",
    "foto/25.jpg"
  ],

  /* ---------- CATATAN ---------- */
  catatan: 
[
  {
    judul: "dianuin",
    tanggal: "Kamis, 15 Oktober 2026",
    isi: "- beli rak kecil buat meja\n- beli galon\n- ganti sprei\n- cari tempat makan murah sekitar kampus\n- nabung buat sepatu baru"
  },
  {
    judul: "evaluasi diri",
    tanggal: "Senin, 12 Oktober 2026",
    isi: "aku harus berani nolak, kalo gamau ya bilang gamau. jangan maksa kerjain semuanya sendiri.\n\nbeli ksk ah abis ini"
  },
  {
    judul: "pengeluaran oktober",
    tanggal: "Sabtu, 10 Oktober 2026",
    isi: "Uang makan: catat di sps.\nTransportasi: catat di sps.\nKopi dan jajan: PLEASE DICATATT.\nPrint materi: catat di sps.\nPengeluaran impulsif: JANGAN diulaangggg nakuullllll!!!!.\n\nnakula, bulan ini jangan sampai akhir bulan hidup dari mi instan dan penyesalan (walaupun pasti ada dewa yang masakin)"
  },
  {
    judul: "d",
    tanggal: "Selasa, 6 Oktober 2026",
    isi: "aku seneng banget punya Sadewa yang selalu ngertiin aku... makasih ya dew hueheuheue AKU SAYANG BANGET TAPI GENGSI AARRGHHH"
  },
  {
    judul: "rencana akhir pekan",
    tanggal: "Jumat, 2 Oktober 2026",
    isi: "- beresin kamar kos\n- nyicil proposal penelitian\n- beli bahan makanan\n- cari suasana baru buat belajar\n- telepon rumah\n- kalau semua selesai, boleh rebahan tanpa mikirin deadline"
  },
],

  /* ---------- TELEPON: riwayat panggilan ----------
     jenis: "masuk" | "keluar" | "tak terjawab"
     Kontak di Telepon otomatis diambil dari daftar chats. */
  panggilan: [
  { nama: "Sadewa", jenis: "masuk", jam: "09:01" },
  { nama: "Yudistira", jenis: "tak terjawab", jam: "Kemarin" },
  { nama: "Sadewa", jenis: "keluar", jam: "Kemarin" },
  { nama: "Arjuna", jenis: "keluar", jam: "Minggu" },
  { nama: "Bima", jenis: "masuk", jam: "Sabtu" },
  { nama: "Sadewa", jenis: "masuk", jam: "Sabtu" },
  { nama: "Sadewa", jenis: "tak terjawab", jam: "Jumat" },
  { nama: "Yudistira", jenis: "keluar", jam: "Kamis" },
  { nama: "Sadewa", jenis: "keluar", jam: "Rabu" },
  { nama: "Arjuna", jenis: "masuk", jam: "Selasa" },
  { nama: "Sadewa", jenis: "masuk", jam: "Senin" },
  { nama: "Bima", jenis: "tak terjawab", jam: "Minggu" }
],

  /* ---------- PESAN (SMS/iMessage) ---------- */
  
pesan: [
  {
    nama: "Kurir",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Paketmu sudah sampai di lobi.", jam: "10:12" }
    ]
  },
  {
    nama: "GoMakan",
    foto: "",
    belumDibaca: 2,
    pesan: [
      { dari: "dia", teks: "Laper, Kak Nakula? Diskon hingga 50% untuk menu pilihan hari ini 🍔", jam: "12:04" },
      { dari: "dia", teks: "Promo berakhir malam ini. Yuk cek menu favoritmu!", jam: "17:30" }
    ]
  },
  {
    nama: "ShopYuk",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Kak, ada voucher gratis ongkir buat kamu hari ini! Jangan lupa cek keranjangmu 👀", jam: "11:45" }
    ]
  },
  {
    nama: "JG Coffee",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Temani deadline-mu dengan kopi favorit. Ada promo spesial untuk pembelian kedua ☕", jam: "08:15" }
    ]
  },
  {
    nama: "GOODSKIN",
    foto: "",
    belumDibaca: 3,
    pesan: [
      { dari: "dia", teks: "MID MONTH SALE! Diskon hingga 40% untuk produk pilihan ✨", jam: "09:20" },
      { dari: "dia", teks: "Keranjang skincare-mu masih menunggu, Kak. Siapa tahu hari ini berjodoh 🫶", jam: "13:10" },
      { dari: "dia", teks: "Last call! Promo berakhir pukul 23.59 malam ini.", jam: "18:00" }
    ]
  },
  {
    nama: "JMShop",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Waktunya checkout! Cek voucher belanja yang tersedia di akunmu.", jam: "14:22" }
    ]
  },
  {
    nama: "JM Mart",
    foto: "",
    belumDibaca: 0,
    pesan: [
      { dari: "dia", teks: "Ada promo camilan dan minuman favorit minggu ini. Mampir, yuk!", jam: "Kemarin" }
    ]
  },
  {
    nama: "YukBayar",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Jangan lewatkan promo cashback untuk transaksi pilihan. Cek syarat dan ketentuannya di aplikasi.", jam: "16:35" }
    ]
  },
  {
    nama: "Fashion Jagat Maya",
    foto: "",
    belumDibaca: 2,
    pesan: [
      { dari: "dia", teks: "New arrivals are here! Temukan outfit kampus favoritmu mulai dari harga spesial.", jam: "10:30" },
      { dari: "dia", teks: "Diskon tambahan menanti untuk produk pilihan. Belanja sekarang!", jam: "15:40" }
    ]
  },
  {
    nama: "PizzaHooray",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Pizza night? 🍕 Ada penawaran spesial untuk menu pilihan hari ini.", jam: "17:45" }
    ]
  },
  {
    nama: "TicketGo",
    foto: "",
    belumDibaca: 1,
    pesan: [
      { dari: "dia", teks: "Butuh short escape setelah minggu yang sibuk? Cek promo perjalanan dan hotel pilihan.", jam: "12:50" }
    ]
  },
  {
    nama: "BeliBeli",
    foto: "",
    belumDibaca: 0,
    pesan: [
      { dari: "dia", teks: "Promo spesial untuk kebutuhan elektronik dan perlengkapan harian tersedia sekarang.", jam: "Senin" }
    ]
  }
],


  email: [
    { ikon: "✉️", judul: "Selamat datang", ket: "tim@contoh.com · 08:00", isi: "Halo Nakula,\n\nIni contoh isi email. Ganti di data.js." }
  ],
  safari: [
  { ikon: "🌐", judul: "Google", ket: "google.com", isi: "ide hadiah ulang tahun untuk orang spesial" },
  { ikon: "💐", judul: "Pinterest", ket: "pinterest.com", isi: "gift ideas for someone you love" },
  { ikon: "💌", judul: "Google", ket: "google.com", isi: "cara mengetahui seseorang suka sama kita atau cuma ramah" },
  { ikon: "💗", judul: "Google", ket: "google.com", isi: "kenapa kalau chatan sama orang suka senyum sendiri" },
  { ikon: "🫠", judul: "Google", ket: "google.com", isi: "tanda tanda orang kangen tapi gengsi bilang" },
  { ikon: "🌷", judul: "Pinterest", ket: "pinterest.com", isi: "small things to give your friend without making it obvious" },
  { ikon: "🐔", judul: "Google", ket: "google.com", isi: "ayam duluan atau telur duluan penjelasan ilmiah" },
  { ikon: "🤔", judul: "Google", ket: "google.com", isi: "kalau kita menutup mata apakah kita masih bisa melihat kegelapan" },
  { ikon: "🦆", judul: "Google", ket: "google.com", isi: "kenapa bebek jalannya lucu tapi tidak pernah jatuh" },
  { ikon: "🧠", judul: "Google", ket: "google.com", isi: "kalau bumi bulat kenapa kita tidak merasa miring" },
  { ikon: "🍜", judul: "Google", ket: "google.com", isi: "rekomendasi makanan tengah malam yang murah dan enak" },
  { ikon: "🎧", judul: "Spotify", ket: "open.spotify.com", isi: "songs that remind you of someone you can't have" },
  { ikon: "🌙", judul: "Google", ket: "google.com", isi: "kenapa susah tidur kalau kepikiran seseorang" },
  { ikon: "🪞", judul: "Google", ket: "google.com", isi: "cara berhenti overthinking setelah ngobrol sama crush" },
  { ikon: "📱", judul: "Google", ket: "google.com", isi: "arti kalau seseorang online tapi tidak membalas chat" },
  { ikon: "🧸", judul: "Pinterest", ket: "pinterest.com", isi: "cute handmade gifts for someone special" },
  { ikon: "💬", judul: "Google", ket: "google.com", isi: "topik obrolan biar chat tidak kering" },
  { ikon: "🦖", judul: "Google", ket: "google.com", isi: "kalau dinosaurus masih hidup apakah ayam termasuk dinosaurus" },
  { ikon: "🪿", judul: "Google", ket: "google.com", isi: "kenapa angsa galak padahal kelihatannya lucu" },
  { ikon: "☕", judul: "Google", ket: "google.com", isi: "rekomendasi kopi untuk orang yang tidak suka kopi pahit" },
  { ikon: "🎁", judul: "Google", ket: "google.com", isi: "hadiah untuk orang yang bilang tidak usah dibelikan apa apa" },
  { ikon: "🫀", judul: "Google", ket: "google.com", isi: "kenapa jantung berdebar saat bertemu orang yang disukai" },
  { ikon: "🐈", judul: "Google", ket: "google.com", isi: "apakah kucing tahu kalau kita sedang sedih" },
  { ikon: "📚", judul: "Google", ket: "google.com", isi: "cara mengerjakan tugas kuliah saat tidak ada motivasi" },
  { ikon: "🛌", judul: "Google", ket: "google.com", isi: "cara tidur cepat tanpa memikirkan kejadian memalukan lima tahun lalu" },
  { ikon: "💭", judul: "Google", ket: "google.com", isi: "is it possible to miss someone you barely know" },
  { ikon: "🪐", judul: "Google", ket: "google.com", isi: "kalau alien melihat bumi apakah mereka juga menganggap kita alien" },
  { ikon: "🧃", judul: "Google", ket: "google.com", isi: "kenapa minuman terasa lebih enak kalau punya orang lain" },
  { ikon: "❤️‍🩹", judul: "Google", ket: "google.com", isi: "how to act normal around your crush after embarrassing yourself" }
],
  tempat: [
    { ikon: "📍", judul: "Rumah", ket: "Jagat Maya", isi: "Alamat lengkap tempat ini." },
    { ikon: "📍", judul: "Kafe langganan", ket: "Dekat kampus", isi: "Tempat nongkrong bareng Sadewa." }
  ],
  alarm: [
    { ikon: "⏰", judul: "06:30", ket: "Bangun · Setiap hari" },
    { ikon: "⏰", judul: "22:00", ket: "Tidur · Senin–Jumat" }
  ],
  kartu: [
    { ikon: "💳", judul: "Kartu Debit", ket: "•••• 0000", isi: "Rp271.000.000,00" }
  ],
  kesehatan: [
    { ikon: "👣", judul: "Langkah", ket: "6.240 langkah hari ini" },
    { ikon: "🔥", judul: "Energi aktif", ket: "320 kkal" },
    { ikon: "🌙", judul: "Tidur", ket: "7 jam 20 menit" }
  ],
  setelan: [
    { ikon: "✈️", judul: "Mode Pesawat", ket: "Mati" },
    { ikon: "📶", judul: "Wi-Fi", ket: "Rumah" },
    { ikon: "🔔", judul: "Notifikasi", ket: "" },
    { ikon: "🔋", judul: "Baterai", ket: "87%" }
  ],
  acara: [
    { ikon: "🗓️", judul: "Ketemu Sadewa", ket: "Besok · 10:00", isi: "Di kafe langganan." }
  ],
  lagu: [
    // file: path mp3 di folder "musik/" (opsional). Kosong = hanya tampil.
    { judul: "An Art Gallery Could Never Be As Unique As You", ket: "mrld", file: "musik/mrld_-_An_Art_Gallery_Could_Never_Be_As_Unique_As_You_(mp3.pm).mp3" },
    { judul: "Sweet Boy", ket: "Malcolm Todd", file: "musik/Malcolm Todd - Sweet Boy (Lyrics).mp3" }
  ],
  cuaca: {
    kota: "Jagat Maya", suhu: 31, kondisi: "Sebagian cerah", tinggi: 33, rendah: 24,
    perjam: [
      { ikon: "⛅", judul: "Sekarang", ket: "31°" },
      { ikon: "☀️", judul: "14:00", ket: "33°" },
      { ikon: "🌧️", judul: "17:00", ket: "28°" }
    ]
  }
};
