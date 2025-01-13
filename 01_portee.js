// const myConst = 6;
// let myLet = 4;
// var myVar = 5;

// console.log(myConst, myLet, myVar);

function test() {
  if (true) {
    const myConst = 6;
    let myLet = 4;
    var myVar = 5;

    console.log("myConst", myConst);
    console.log("myLet", myLet);
    console.log("myVar", myVar);
  }

  //   console.log("myConst", myConst);
  //   console.log("myLet", myLet);
  console.log("myVar", myVar);
}

test();

var x = 10;
console.log("1", x); // x: 10

{
  let x = 2;
  console.log("2", x); // x: 2

  var y = 5;
  const z = 6;
}

console.log("3", x); // x: 10

console.log("4", y); // y: 5 / pas définit

console.log("5", z); // z: pas définit  / z:6
