import { PRODUCT_OPERATIONS } from "../helpers/product-operations.js";

window.addEventListener('load', function(){
    const promise = PRODUCT_OPERATIONS.getPizza();
        promise.then(printProduct).catch(printError);
});
// function init(){
//     const promise = PRODUCT_OPERATIONS.getPizza();
//     promise.then(printProduct).catch(printError);
// }
function printProduct(pizzas){
   // console.log('PRINT ~~~~~~~ Pizza is ', pizzas.length);
    
    //console.log('PRINT OBJ ~~~~~~~ Pizza is ', PRODUCT_OPERATIONS.pizzas.length);


    let rows = Math.ceil(pizzas.length/3);
    const productDiv = document.querySelector('#products');
    for(let i = 1; i<=rows; i++){
        const row = createRow(pizzas);
        productDiv.appendChild(row);
    }
}

function addPizzaToCart(){
    const pizzaId = this.getAttribute('product-id');
    console.log('Current Button Clicked ', pizzaId);
    const pizza = PRODUCT_OPERATIONS.search(pizzaId);
    console.log('Pizza ', pizza);
    PRODUCT_OPERATIONS.addToCart(pizza);
    printCart();
}

function computeTax(total){
    const carts = document.querySelector('#carts');
    const pTag = document.createElement('p');
    pTag.innerText = `Tax 18%  ${(total * 0.18).toFixed(2)}`;
    carts.appendChild(pTag);
}

function totalSummary(){
    const total = PRODUCT_OPERATIONS.carts.reduce((acc, product)=>acc+parseFloat(product.price),0).toFixed(2);
    const carts = document.querySelector('#carts');
    const pTag = document.createElement('p');
    pTag.innerText = `Total ${total}`;
    computeTax(total);
    carts.appendChild(pTag);
}

function printCart(){
    const carts = document.querySelector('#carts');
    carts.innerHTML = '';
    PRODUCT_OPERATIONS.carts.forEach(product=>{
        const pTag = document.createElement('p');
        pTag.innerText = `${product.name} ${product.price}`;
        carts.appendChild(pTag);
    });
    totalSummary();
}

function createCard(pizza){
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
    const image = document.createElement('img');

   // console.log('C Pizza ', pizza);
   
    image.src = pizza.url; 
    card.appendChild(image);

    // Prepare Card Body
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerText = pizza.name;
    const addToCart = document.createElement('button');
    addToCart.setAttribute('product-id', pizza.id);
    addToCart.addEventListener('click', addPizzaToCart);
    addToCart.className = 'btn btn-primary';
    addToCart.innerText = 'Add to Cart';
    cardBody.appendChild(h5);
    cardBody.appendChild(addToCart);
    card.appendChild(cardBody);
    return card;

    /*
     <div class="card" style="width: 18rem;">
                            <img src="https://cdn.romanspizza.co.za/images/root/v2/pizza/famished/pizza-fetaroni-pan.png" class="card-img-top" alt="Pan Pizza">
                            <div class="card-body">
                              <h5 class="card-title">Pan Pizza</h5>
                              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                              <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                          </div>
    */
}

function createRow(pizzas){
    const MAX_COL = 3;
    const row = document.createElement('div');
    row.className = 'row';
    for(let j= 1; j<=MAX_COL ; j++){
        if(pizzas.length>0){
            const column = createCol();
            const currentPizza = pizzas[0];
            //console.log('CUrrent Pizza ', currentPizza);
            const card = createCard(currentPizza);
            pizzas.shift(); 
            column.appendChild(card);
            row.appendChild(column)
        }
       
    }
    
    return row;
}

function createCol(){
    const div = document.createElement('div');
    div.className = 'col';
    return div;
}

function printError(err){
    const h1 = document.createElement('h1');
    h1.className = 'alert-danger text-center';
    h1.innerText = 'Something Went Wrong...';
    //console.log('Error While Pizza Data ', err);
    document.querySelector('#error').appendChild(h1);
}