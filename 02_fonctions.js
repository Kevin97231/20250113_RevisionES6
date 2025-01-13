function hello() {
  return "Hello";
}

let x = hello();
console.log(x);

function hello2(name) {
  return "Hello " + name;
}

let y = hello2("Kévin");
console.log(y);

// Les fonctions fléchées

// Avec les fonctions fléchées le 'return' est implicite si je ne mets pas d'accolades
// Attention: Si je met des accolades, j'aurais besoin d'utiliser le 'return'
const helloFLechee = (name) => "Hello " + name;

let z = helloFLechee("Kévin");
console.log(z);

// MOyenne d'un tableau

const myTable = [12, 15, 16, 8];

const moyenne = (tableau) => {
  let x = 0;

  for (let i = 0; i < tableau.length; i++) {
    x += tableau[i];
  }

  return x / tableau.length;
};

moyenne(myTable);

const somme = (a, b = 10) => a + b;

console.log(somme(5));
console.log(somme(5, 5));
