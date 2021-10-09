import { commerce } from "faker";

export const mount = (el) => {
  let products = "";

  for (let i = 0; i < 5; i++) {
    const name = commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#productList-dev");

  el && mount(el);
}
