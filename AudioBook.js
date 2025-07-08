import Book from './Book.js';

class AudioBook extends Book {
    constructor(isbn, title, year, price, author, duration) {
        super(isbn, title, year, price, author);
        this.duration = duration; 


    }
    buy(quantity, email, address) {
        if (!this.isForSale()) {
            throw new Error("AudioBook not for sale.");}
        console.log(`MailService will send audio book '${this.title}' to ${email}`);
        return this.price * quantity;
    }
    isForSale() {
        return true;
    }}
export default AudioBook;