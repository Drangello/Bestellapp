
function renderMenuContener(){
  const refBurger = document.getElementById('menu');
  refBurger.innerHTML = ""
  let burgerItem = ""
  for (let index = 0; index < burgerData.length; index++) {
    const element = burgerData[index];
    burgerItem += burgerDataTemplate
  }

}