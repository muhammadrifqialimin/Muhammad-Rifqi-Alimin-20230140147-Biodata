console.log("Website siap digunakan!");

function tampilkanHobi(event) {
  event.preventDefault();
  const checkboxes = document.querySelectorAll('input[name="hobi"]:checked');
  const hasilDiv = document.getElementById("hasilHobi");

  if (checkboxes.length === 0) {
    hasilDiv.innerHTML = "<p>Anda belum memilih hobi apa pun.</p>";
  } else {
    let hobiList = "<p>Hobi yang Anda pilih:</p><ul>";
    checkboxes.forEach((cb) => {
      hobiList += `<li>✔ ${cb.value}</li>`;
    });
    hobiList += "</ul>";
    hasilDiv.innerHTML = hobiList;
  }
}
