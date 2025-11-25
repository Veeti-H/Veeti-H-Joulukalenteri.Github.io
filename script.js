// Luodaan 24 luukkua
const calendar = document.getElementById("calendar");
const today = new Date().getDate();  // nykyinen päivä (1–31)

const messages = [
  "Luukku 1", "Luukku 2", "Luukku 3", "Luukku 4",
  "Luukku 5", "Luukku 6", "Luukku 7", "Luukku 8",
  "Luukku 9", "Luukku 10","Luukku 11","Luukku 12",
  "Luukku 13","Luukku 14","Luukku 15","Luukku 16",
  "Luukku 17","Luukku 18","Luukku 19","Luukku 20",
  "Luukku 21","Luukku 22","Luukku 23","Luukku 24"
];

for (let i = 1; i <= 24; i++) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.textContent = i;

  // tulevien päivien estäminen
  if (i > today) {
    box.classList.add("locked");
  }

  box.addEventListener("click", () => {
    if (i > today) return; // ei avaudu ennen oikeaa päivää
    openModal(messages[i - 1]);
  });

  calendar.appendChild(box);
}

// Modal-ikkunan toiminnot
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("close");

function openModal(text) {
  modalText.textContent = text;
  modal.classList.remove("hidden");
}

closeBtn.onclick = () => modal.classList.add("hidden");
modal.onclick = (e) => {
  if (e.target === modal) modal.classList.add("hidden");
};