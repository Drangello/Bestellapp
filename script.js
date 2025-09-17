
document.addEventListener("DOMContentLoaded", function () {
  var menuList = document.getElementById("menulist");

  var speisen = [
    { name: "Pizza Margherita", preis: 8 },
    { name: "Pasta Carbonara", preis: 10 },
    { name: "Salat", preis: 6 },
    { name: "Lasagne", preis: 12 },
    { name: "Suppe", preis: 5 }
  ];

 
  speisen.forEach(function (gericht) {
    const li = document.createElement("li");
    li.textContent = gericht.name + "➡️" + gericht.preis + " €";
    menuList.appendChild(li);
  });
});