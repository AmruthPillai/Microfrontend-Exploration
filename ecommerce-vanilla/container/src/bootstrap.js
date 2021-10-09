import { mount as mountProducts } from "products/ProductsList";
import { mount as mountShoppingCart } from "cart/ShoppingCart";

mountProducts(document.querySelector("#productList"));
mountShoppingCart(document.querySelector("#shoppingCart"));
