import PaperBook from './PaperBook.js';
import EBook from './EBook.js';
import ShowcaseBook from './ShowcaseBook.js';
import AudioBook from './AudioBook.js';
import Inventory from './Inventory.js';

class BookStore {
    static run(){
        const inventory = new Inventory();

        inventory.addBook(new PaperBook("1", "Physics", 2015, 50, "Peter", 10));
        inventory.addBook(new EBook("2", "CS", 2024, 30, "John", "pdf"));
        inventory.addBook(new ShowcaseBook("3", " Null", 2010, 0, "Carole"));
        inventory.addBook(new AudioBook("4", " AA", 2025, 40, "Ahmed", 120));

        inventory.removeOutdatedBooks(10);

        try {
            inventory.buyBook("1", 2, "peteratef177@gmail.com", "");
        } catch (e) {
         console.log(e.message);
        }

        try {
            inventory.buyBook("2", 1, "peteratef177@gmail.com", "");
        } catch (e) {
            console.log(e.message);
        }

        try {
            inventory.buyBook("3", 1, "peteratef177@gmail.com", "");
        } catch (e) {
              console.log(e.message);
        }

        try {
            inventory.buyBook("4", 1, "peteratef177@gmail.com", "");
        } catch (e) {
            console.log(e.message);
        }
    }
}

BookStore.run();