class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  toString() {
    return `nom: ${this.name}, year: ${this.year}`;
  }
}

const myCar = new Car("Peugeot", 2006);
console.log(myCar);
console.log(myCar.toString());

// Accès aux attributs
console.log(myCar.name);
console.log(myCar["name"]);

// Attention, on peut très facilement rajouter de nouveaux attributs à nos objets :
myCar.naame = "Toto";
console.log(myCar);

// Copie d'objets

// Attrention, à évtier !! on ne copie pas une vairable complexe (objet, tableau, fonction) avec un simple '='
// const myCar2 = myCar;

let myCar2 = {};
Object.assign(myCar2, myCar);

// Copie propre avec spreadOperator (voir chapitre suivant)
const myCar3 = { ...myCar };

// Le Object.assign copie tous les attributs mais pas les méthodes de classe
console.log(`car 1 ${myCar} et car 2 ${myCar2.name} ${myCar2.year}`);

myCar2.name = "Citroën";
console.log(myCar2.name, myCar.name);
