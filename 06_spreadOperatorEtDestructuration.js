const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];

// le spread operator --> '...'

console.log(...numbersOne);
console.log(numbersOne);

// Pour un copie 'propre' d'un type complexe (dans notre cas, un tableau)
const numbersCopy = [...numbersOne];

const numbersComined = [...numbersOne, ...numbersTwo];

console.log("numbersCopy", numbersCopy);
console.log("numbersComined", numbersComined);

// La destructuration
const cars = ["mustang", "f-150", "expedition"];

const [car, truck, suv] = cars;

//EQquivalent de la ligne ci-dessus
// const car = cars[0];
// const truck = cars[1];
// const suv = cars[2];

console.log(car, truck, suv);

// Destructuration + spread operator
const [one, two, ...rest] = numbersComined;
console.log(one);
console.log(two);
console.log(rest);

const calculate = (a, b) => {
  const add = () => a + b;
  const substract = () => a - b;
  const multiply = () => a * b;
  const divide = () => a / b;

  return [add, substract, multiply, divide];
};

const [add, substract, multiply, divide] = calculate(4, 7);
console.log(
  `add: ${add()} substract: ${substract()} multiply: ${multiply()} divide: ${divide()}`
);

const [somme] = calculate(4, 7);
console.log(somme());

const [, soustraction, , division] = calculate(4, 7);
console.log(soustraction(), division());

// La destructuration sur les Objets
const person = { name: "John", age: 30, city: "New York" };
let name = "Toto";

const { city } = person;
console.log(city);

const { age, name: firstName } = person;
console.log(age, firstName);

// Copie propre  Equivalent de Object.assign
const person2 = { ...person };

// copie en modifiant la valeur d'un des attributs
const person3 = { ...person, name: "Martin" };
console.log(person3);

const personInfo = ({ name, age }) => console.log(name, age);

personInfo({ name: "John", age: 30 });

personInfo(person2);
