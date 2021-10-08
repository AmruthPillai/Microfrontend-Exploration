import { commerce } from "faker";

let products = "";

for (let i = 0; i < 5; i++) {
  const name = commerce.productName();
  products += `<div>${name}</div>`;
}

document.querySelector("#productList").innerHTML = products;
