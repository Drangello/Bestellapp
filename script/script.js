
document.addEventListener("DOMContentLoaded", () => {
  const menuSection = document.querySelector(".menu");

  for (let i = 0; i < burgerDaten.length; i++) {
    const burger = burgerDaten[i];
    const div = document.createElement("div");

    if (burger.preis > 6) {
      div.innerHTML = `<h3>${burger.name} ⭐</h3><p>${burger.beschreibung}</p><strong>${burger.preis} €</strong>`;
    } else {
      div.innerHTML = `<h3>${burger.name}</h3><p>${burger.beschreibung}</p><strong>${burger.preis} €</strong>`;
    }

    menuSection.appendChild(div);
  }
});