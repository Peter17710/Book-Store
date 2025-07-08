import Book from'./Book.js';

class PaperBook extends Book{
    constructor(isbn, title, year, price, author, stock) {
        super(isbn, title, year, price, author);
        this.stock = stock;
    }
    buy(quantity, email, address){
        if (!this.isForSale()){
            throw new Error("Paper book not for sale.");
        }
        if (this.stock < quantity){
            throw new Error("Not enough stock.");
        }
        this.stock -= quantity;
        console.log(`ShippingService will ship '${this.title}' to ${address}`);
        return this.price * quantity;
    }
    isForSale(){
        return this.stock > 0;
    }
}

export default PaperBook;