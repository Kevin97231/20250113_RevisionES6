const firstName = "John";
const LastName = "Doe";

const message = `Bonjour ${firstName} ${LastName}`;

console.log(message);

const table = [1, 2, 3, 4];
const sommeArrayTxt = `La somme de l'ensemble des éléments de mon tableau est ${table.reduce(
  (total, currentValue) => total + currentValue
)}`;

console.log(sommeArrayTxt);
