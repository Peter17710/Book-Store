class Book {
    constructor(isbn, title, year, price, author){
        this.isbn = isbn;
        this.title = title;
        this.year = year;
        this.price = price;
        this.author = author;
    }
    buy(quantity, email, address){
        throw new Error("Not implemented.");
    }
    isForSale(){
        return false;
    }
}

export default Book;