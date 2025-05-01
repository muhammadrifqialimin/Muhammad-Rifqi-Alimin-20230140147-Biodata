const deskripsiHobi = {
  Menulis:
    "Menulis adalah kegiatan menuangkan pikiran dan perasaan ke dalam bentuk tulisan.",
  Membaca:
    "Membaca adalah kegiatan memahami informasi dari buku, artikel, atau media lainnya.",
  Ngoding:
    "Ngoding adalah aktivitas menulis kode program untuk membuat aplikasi atau sistem.",
  Basket:
    "Basket adalah olahraga tim yang dimainkan dengan memasukkan bola ke dalam ring.",
  Criket:
    "Criket adalah permainan bola dan tongkat yang populer di beberapa negara seperti India dan Inggris.",
  SepakBola:
    "Sepak bola adalah olahraga yang dimainkan oleh dua tim dengan tujuan mencetak gol.",
  Memasak: "Memasak adalah kegiatan menyiapkan dan mengolah makanan.",
  BermainGame:
    "Bermain game adalah aktivitas hiburan yang melibatkan interaksi dengan media permainan.",
  BermainMusik:
    "Bermain musik adalah kegiatan memainkan alat musik atau bernyanyi untuk hiburan dan ekspresi.",
};

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const daftarHobi = document.getElementById("daftarHobi");

function tampilkanHobi() {
  daftarHobi.innerHTML = "";
  checkboxes.forEach((cb) => {
    if (cb.checked) {
      const li = document.createElement("li");
      li.innerHTML = `✔ <strong>${cb.value}</strong>: ${
        deskripsiHobi[cb.value] || "Deskripsi belum tersedia"
      }`;
      daftarHobi.appendChild(li);
    }
  });
}

document
  .querySelector("input[type='submit']")
  .addEventListener("click", function (e) {
    e.preventDefault();
    tampilkanHobi();
  });
