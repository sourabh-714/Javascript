import { API_CLIENT } from "../services/api-client.js"
import { CONFIG } from "../utils/config.js";
import Product from "../models/product.js";

export const PRODUCT_OPERATIONS = {
    async getPizza(){
        try{
        const response = await API_CLIENT.getProduct(CONFIG.PIZZA_URL);
        const data = await response.json();
        const pizzaArray = data['Vegetarian'];
        // Conversion Code
        const pizzas = pizzaArray.map(pizza=>{
            console.log('Pizza JSON is ', pizza);
            const product = new Product(pizza['id'], pizza['name'], pizza['price'], pizza['menu_description'], pizza['assets']['product_details_page'][0]['url']);
            return product;
        });
        return pizzas;
        }
        catch(err){
            throw err;
        }
    },
    getDrinks(){

    },
    getBurger(){

    }
}