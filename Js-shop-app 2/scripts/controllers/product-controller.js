import { PRODUCT_OPERATIONS } from "../helpers/product-operations.js";

window.addEventListener('load', init);
function init(){
    const promise = PRODUCT_OPERATIONS.getPizza();
    promise.then(printProduct).catch(printError);
}
function printProduct(pizzas){
    console.log('Pizza is ', pizzas);
}

function createCard(){
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

function createRow(){
    const MAX_COL=3;
    const row=document.createElement('div');
    row.className='row';
    for (let j=1;j<=MAX_COL;j++)
    {
        if(pizzas.length>0)
        {
            
        }
    }

}

function createCols(){
    
}

function printError(err){
    const h1 = document.createElement('h1');
    h1.className = 'alert-danger text-center';
    h1.innerText = 'Something Went Wrong...';
    console.log('Error While Pizza Data ', err);
    document.querySelector('#error').appendChild(h1);
}