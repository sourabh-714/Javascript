// Name, Price, desc,url , isveg, id
 class Product{
    constructor(id, name, price, desc="", url, isVeg=true){
        // Member Variable Access (this) = Local Variable
        this.id = id;
        this.name = name;
        this.price = price;
        this.desc = desc;
        this.url = url;
        this.isVeg = isVeg;
    }
}
export default Product;
