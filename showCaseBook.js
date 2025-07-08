import Book from './Book.js';
class ShowcaseBook extends Book {
    constructor(isbn, title, year, price, author) {
        super(isbn, title, year, price, author);
    }
    buy(quantity, email, address) {
        throw new Error("Showcase book is not for sale.");
    }
    isForSale() {
        return false;
    }
}

export default ShowcaseBook;