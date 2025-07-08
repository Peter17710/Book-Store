import Book from './Book.js';



class EBook extends Book {
    constructor(isbn, title, year, price, author, filetype) {
        super(isbn, title, year, price, author);
        this.filetype = filetype;
    }
    buy(quantity, email, address) {
        if (!this.isForSale()) {
            throw new Error("EBook not for sale.");
        }
        console.log(`MailService will send '${this.title}' to ${email}`);
        return this.price * quantity;
    }
    isForSale() {
        return true;
    }
}

export default EBook;