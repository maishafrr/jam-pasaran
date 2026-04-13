function tampilkanWaktu() {
  let sekarang = new Date();

  // Hari & bulan
  let hariList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  let bulanList = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];

  let hari = hariList[sekarang.getDay()];
  let tanggal = sekarang.getDate();
  let bulan = bulanList[sekarang.getMonth()];
  let tahun = sekarang.getFullYear();

  // Jam
  let jam = sekarang.getHours().toString().padStart(2, "0");
  let menit = sekarang.getMinutes().toString().padStart(2, "0");
  let detik = sekarang.getSeconds().toString().padStart(2, "0");

  // 🔹 Weton Jawa
  let pasaran = ["Wage","Kliwon","Legi","Pahing","Pon"];
  let epoch = new Date(1970,0,1);
  let selisihHari = Math.floor((sekarang - epoch) / (1000 * 60 * 60 * 24));
  let indeksPasaran = selisihHari % 5;
  let weton = pasaran[indeksPasaran];

  // Tampilkan
  document.getElementById("tanggal").innerHTML =
   hari + " " +weton + ", " + tanggal + " " + bulan + " " + tahun;

  document.getElementById("jam").innerHTML = jam + ":" + menit + ":" + detik; }

// Update tiap detik
setInterval(tampilkanWaktu, 1000);
