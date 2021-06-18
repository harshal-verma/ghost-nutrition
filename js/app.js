import { productsArray } from '../js/store.js';
//variables
const productEl = document.querySelector(".products__flex");

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
               <h2>$ <span class="price">${product.price}</span></h2>
           </div>
           <div class="products__quatities">
           <p>Quantity</p>
           <i class="fas fa-less-than"></i> <span class="number-quantity">1</span> <i class="fas fa-greater-than"></i>
       </div>
       </div>
       
       <a href="#signup-modal" class="add__to__cart">Add to cart</a>
   </div>
       `;
       productEl.append(productCardEl);
    })
}

showProducts(productsArray);
// const subBtn = document.querySelectorAll('.fa-less-than');
// const moreBtn = document.querySelectorAll('.fa-greater-than');
// const quantity = document.querySelectorAll('.number-quantity');
// const price = document.querySelectorAll(".price");
// const itemPrice = parseInt(price.innerText);
// subBtn.addEventListener("click", () => {
//     quantity.innerText--;
//     if( quantity.innerText <= 1){
//         quantity.innerText = 1;
//         price.innerText = 7;
//     }
//     const itemPricesubBtn = parseInt(price.innerText);
//     price.innerText = itemPricesubBtn - itemPrice;
//     if( price.innerText  == 0){
//         price.innerText = 7;
//     }
// })

// moreBtn.addEventListener("click" , () => {
//     quantity.innerText++;
//     if( quantity.innerText > 5){
//         quantity.innerText = 5;
//     }
//     let itemQuantity = parseInt(quantity.innerText);
//     price.innerText = itemPrice*itemQuantity;
// })
