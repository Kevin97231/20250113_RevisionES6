let myArray = [];
let names = ["Riri", "Fifi", "Loulou"];
let myArray2 = new Array(5);

console.log(myArray, names, myArray2);

// Ajout d'un élément
myArray.push("toto");
names.push("toto");
myArray2.push("toto");

console.log(myArray, names, myArray2);

// Supprimer un élément
// 'splice()' prend en paramètre 2 éléments:
// - 1er: l'index du 1er éléments à supprimer
// - 2nd  nombre d'éléments à supprimer

myArray.splice(1, 1);
names.splice(1, 1);
myArray2.splice(1, 1);

console.log(myArray, names, myArray2);

// A savoir -> splice() retourne un tableau contenant les éléments supprimés
let elementsSupprime = names.splice(0, 1);
console.log(elementsSupprime);

// La boucle for of
for (element of names) {
  console.log(element);
}

// La boucle forEach
names.forEach(function (currentValue, index, arr) {
  console.log(index + ": " + currentValue + " présent dans le tableau " + arr);
});

names.forEach((currentValue, index, arr) => {
  console.log(index + ": " + currentValue + " présent dans le tableau " + arr);
});

names.forEach((currentValue) => {
  console.log(currentValue);
});
