import { ProductsService } from "../services/products-service.js";

export class ProductsView{

    constructor(){

    }

    static async displayProducts(){
        const products = await ProductsService.findAll();
        products.forEach((product) => this.#displayProduct(product));
    }

    static #displayProduct(product){
        const productsContainer = document.querySelector(".products");
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
        <div class="product-line">
            <p>
            <span>${product.name}</span>
            <span>${product.owner}</span>
            <span>${product.bid}</span>€</span>
            <button class="bid-button" data-id="${product.id}">Enchérir</button>
            </p>
        </div>`;
        productsContainer.appendChild(productElement);
    }
}


