const words = ["spray", "elite", "exuberant", "destruction", "present"];

const wordsFilter = words.filter((word) => word.length > 6);

console.log(words);
console.log(wordsFilter);

const filtreTexte = (entreeUtilisateur) => {
  return words.filter((word) => word.indexOf(entreeUtilisateur) !== -1);
};

console.log(filtreTexte("es")); //
console.log(filtreTexte("s"));

const numbers = [1, 2, 3, 4, 5];

// Faire un filter pour créer un tableau qui ne contiendra que les valeurs supérieurs à 3
const numbersFilter = numbers.filter((number) => number > 3);

console.log(numbersFilter);
