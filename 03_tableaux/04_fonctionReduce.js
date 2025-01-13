const table = [1, 2, 3, 4];

// Somme de tous les chiffres du tableau
const sommeTableau = table.reduce(
  (total, currentValue) => total + currentValue,
  //   Valeur initial --> 5
  5
);
console.log(sommeTableau);

// Exercice
// Somme de tous les chiffres élevés au carré

const sommeCarre = table.reduce(
  (total, currentValue) => total + currentValue * currentValue,
  0
);

console.log(sommeCarre);
