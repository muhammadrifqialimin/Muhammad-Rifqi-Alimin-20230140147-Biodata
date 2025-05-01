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
      li.innerHTML = `> <strong>${cb.value}</strong>: ${
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

/* JavaScript for Interactive Elements */
document.addEventListener("DOMContentLoaded", function () {
  // Custom Cursor
  const cursor = document.createElement("div");
  cursor.classList.add("cursor");
  document.body.appendChild(cursor);

  const cursorFollower = document.createElement("div");
  cursorFollower.classList.add("cursor-follower");
  document.body.appendChild(cursorFollower);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px";
      cursorFollower.style.top = e.clientY + "px";
    }, 100);
  });

  // Header Scroll Effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Interactive Elements Hover Effects
  const interactiveElements = document.querySelectorAll(
    'a, button, input[type="submit"], .hobi-item, #hasilHobi li'
  );

  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.backgroundColor = "rgba(165, 180, 252, 0.5)";

      cursorFollower.style.width = "70px";
      cursorFollower.style.height = "70px";
      cursorFollower.style.border = "3px solid rgba(165, 180, 252, 0.3)";
    });

    el.addEventListener("mouseleave", () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.backgroundColor = "rgba(165, 180, 252, 0.7)";

      cursorFollower.style.width = "50px";
      cursorFollower.style.height = "50px";
      cursorFollower.style.border = "2px solid rgba(165, 180, 252, 0.4)";
    });
  });

  // Animate results items sequentially
  const resultItems = document.querySelectorAll("#hasilHobi li");
  resultItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
  });
});
