// La fonction map
// La fonction map permet de DUPLIQUER en appliquant une opération sur chacun des éléments du tableau

const person = { firstName: "John", lastName: "Doe" };

const persons = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Malcolm", lastName: "Frye" },
  { firstName: "Jayne", lastName: "Cobb" },
];

const personsFullName = persons.map((user) =>
  [user.firstName, user.lastName].join(" ")
);

console.log(persons);
console.log(personsFullName);

const values = [1, 2, 3, 4, 5];

// Exercice : Faire une fonction qui
//  - prend en paramètre un tableau
//  - retourne un tableau contenant les carrés des valeurs du tableau passé en paramètre

// ==> si j'ai [1,2,3,4,5], la fonction doit retourner le tableau suivant: [1,4,9,16,25]

function carre(tableau) {
  return tableau.map((val) => val * val);
}

console.log(carre(values));

// FLatMap()
let mapEx = values.map((val) => [val * val]);
console.log(mapEx);
let flatMapEx = values.flatMap((val) => [val * val]);
console.log(flatMapEx);
