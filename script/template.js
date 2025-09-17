
function itemTemplate(burgerItem) {
    return `
    <div>
      <h3>${burgerItem.name}</h3>
      <p>${burgerItem.description}</p>
      <span>${(burgerItem.price)} €</span>
      <button data-id="${burgerItem.id}"></button>
    </div>
  `;
}