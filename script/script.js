function renderMenuContener() {
  const refBurger = document.getElementById('menu');
  refBurger.innerHTML = "";
  let burgerItem = "";
  for (let index = 0; index < burgerData.length; index++) {
    const element = burgerData[index];
    burgerItem += itemTemplate(element);
  }
  refBurger.innerHTML = burgerItem;
}

// Damit es sofort nach dem Laden angezeigt wird:
document.addEventListener("DOMContentLoaded", renderMenuContener);