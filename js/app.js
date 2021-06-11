import { productsArray } from '../js/store.js';
//variables
const productEl = document.querySelector(".products__flex");
const addToCartBtn = document.querySelector(".add__to__cart");
const cartItemsValue = document.querySelector(".cart__items");
//show products
function showProducts(array){
    array.forEach((product) => {
       const productCardEl = document.createElement('div');
       productCardEl.innerHTML = `
       <div class="products__card">
       <figure><img src=${product.image} alt=${product.name} class="products__image"></figure>
       <h3 class="product__heading">${product.name}</h3>
       <p class="product__description"><span class="description__bold">Description: </span>${product.description}</p>
       <div class="products__pq">
           <div class="products__price">
               <p>Price</p>
               <h2>${product.price}$</h2>
           </div>
           <div class="products__quatities">
               <p>Quantity</p>
               <i class="fas fa-less-than"></i> <span class="quantity" id="number__of__items">1</span> <i class="fas fa-greater-than"></i>
           </div>
       </div>
       <button class="add__to__cart">Add to cart</button><button class="view__product" id="view">View 
       </button>
   </div>
       `;
       productEl.append(productCardEl);
    })
}

showProducts(productsArray);

addToCartBtn.addEventListener("click" , () => {
    cartItemsValue.innerText++;
    console.log(cartItemsValue.innerText);
})
