// Exemple 1: la librairie

const book1 = {
  title: "The Great Gatsby",
  author: "F.Scott Fitzgerald",
};
const book2 = {
  title: "The GeeksforGeeks",
  author: "Geek",
};

const myLibrary = {
  name: "My Library",
  books: [book1, book2],

  addBook: function (book) {
    this.books.push(book);
  },

  displayBooks: function () {
    console.log(this.name);

    this.books.forEach((book, index) =>
      console.log(`${index}: Title: ${book.title}, author: ${book.author}`)
    );
  },
};

// Utiliser votre displayBook
myLibrary.displayBooks();

// Ajouter un nouveau livre avec notre 'addBook'
const book3 = {
  title: "2023",
  author: "George Orwell",
};

myLibrary.addBook(book3);

// myLibrary.addBook({
//   title: "2023",
//   author: "George Orwell",
// });

// Utiliser une 2e fois votre displayBook pour vérifier que le livre s'est bien ajouté
myLibrary.displayBooks();

// Exemple 2
function Player(name, age) {
  this.name = name;
  this.age = age;
}

const player1 = new Player("Kumar", 31);
console.log(player1);

// L'héritage
class Car {
  constructor(name) {
    this.name = name;
  }

  present() {
    return `I have a ${this.name}`;
  }
}

// Je créée une classe qui hérite de la classe 'Car'
class Model extends Car {
  constructor(name, model) {
    super(name);
    this.model = model;
  }

  show() {
    return this.present() + " it's a " + this.model;
  }
}

const car1 = new Car("Peugeot");
const model1 = new Model("Peugeot", 206);

console.log(car1);
console.log(model1);

console.log(model1.present());
console.log(model1.show());

// Encapsulation et utilisation des getters et setters

class Person {
  #name;
  #age;

  constructor(name, age) {
    // Sans passer par les setter
    // this.#name = name;
    // this.#age = age;

    // EN passant par le setter de 'age'
    this.#name = name;
    this.age = age;
  }

  get name() {
    console.log("a l'intérieur du get name");
    return this.#name;
  }

  get age() {
    console.log("a l'intérieur du get age");
    return this.#age;
  }

  set age(newAge) {
    if (newAge > 0 && newAge < 99) {
      this.#age = newAge;
    } else throw new Error("L'age doit être compris entre 9 et 99ans");
  }
}

console.log("CONSTRUCTION OBJET PERSON 'user1' ");

try {
  const user1 = new Person("John", 105);
  console.log("accès via .name et .age -> ");
  console.log(user1.name);
  console.log(user1.age);

  console.log("accès via .#name et .#age -> ");
  console.log(user1.name);
  console.log(user1.age);

  // Sans setter, une variable privé de peut etre modifiée, mais essayer de la modifier ne déclenchera aucune erreur
  user1.name = "Jean";
  user1.age = 25;

  console.log(user1.name, user1.age);
} catch {
  console.log("DANS LE CATCH");
  console.error("L'age doit être compris entre 9 et 99ans");
}
