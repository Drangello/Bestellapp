
function itemTemplate(item) {
  return `
    <article class="burger-item">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
      <span>${item.price.toFixed(2).replace('.', ',')} €</span>
    </article>
  `;
}


