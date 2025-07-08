class Inventory {
    constructor() {
        this.books = new Map();
    }
    addBook(book) {
        this.books.set(book.isbn, book);
        console.log(`Added '${book.title}' by ${book.author}`);
    }
    removeOutdatedBooks(maxAge) {
        const currentYear = new Date().getFullYear();
        const removed = [];
        for (let [isbn, book] of this.books.entries()) {
            if (currentYear - book.year > maxAge) {
                removed.push(this.books.get(isbn));
                this.books.delete(isbn);
                console.log(`Removed outdated book '${book.title}'`);
            }
        }
        return removed;
    }
    buyBook(isbn, quantity, email, address) {
        if (!this.books.has(isbn)) {
            throw new Error("Book not found.");
        }
        const book = this.books.get(isbn);
        const amount = book.buy(quantity, email, address);
        console.log(`'${book.title}' bought, paid amount: ${amount}`);
        return amount;
    }
}

export default Inventory;