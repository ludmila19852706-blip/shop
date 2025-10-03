// products.js - масив товарів і допоміжні функції

function priceFor(id) {
  const m = (id * 73) % 11; 
  return 100 + m * 10; 
}

function descFor(id) {
  return "Гарний подарунок для особливих моментів.";
}

const products = [];
for (let i = 1; i <= 5; i++) {
  products.push({
    id: i,
    назва: "Подарунок " + i,
    фото: i + ".jpg",
    ціна: priceFor(i),
    опис: descFor(i)
  });
}

function getProductById(id) {
  return products.find(p => p.id === Number(id));
}

window.shopData = {
  products,
  getProductById
};
