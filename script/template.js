
function itemTemplate(burgerData) {
  return `
    <div>
      <h3>${burgerData.name}</h3>
      <p>${burgerData.description}</p>
      <span>${(burgerData.price)} €</span>
    </div>
  `;
}
const host = document.getElementById('menu');
host.innerHTML = itemTemplate(burgerData);