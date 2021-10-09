import faker from "faker";

export const mount = (el) => {
  const cartText = `<div>You have ${faker.datatype.number(
    20
  )} items in your cart.</div>`;

  el.innerHTML = cartText;
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#shoppingCart-dev");

  el && mount(el);
}
