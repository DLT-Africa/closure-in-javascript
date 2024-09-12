// JS Function -> A block of codes designed to perform certain tasks, it is executed when called or invoked.

function name(parameter) {
  statement;
}

// Types of JS Functions.

// Function Declaration.
// One Params.
function multiply(number) {
  return number * number;
}

const result = multiply(5);
console.log(result);

// No Params
function sum() {
  return 9 + 5;
}

console.log(sum());

// Two Parameters
function subtraction(a, b) {
  return a - b;
}

const subResult = subtraction(5, 4);
console.log(subResult);

// Assigning value to Param
function division(c, d = 7) {
  return c / d;
}

console.log(division(21));

// ==== Function Expression ===
const greeting = function sayHi(name) {
  console.log(`Hello ${name}`);
};

greeting("Teddy");

const testing = function sum(number) {
  return number + number;
};
console.log(testing(6));

// Arrow Function.
const arrow = (x) => x * x;
console.log(arrow(4));

const example2 = () => {
  const tutor1 = "OG";
  const tutor2 = "Teddy";

  const student1 = "Mubi";
  const student2 = "Rodiat";

  return console.log(
    `Mr ${tutor1} and ${tutor2} are the tutors, while ${student1} and ${student2} are part of the cohorts`
  );
};

example2();

// Global Scope
const scope = 2;

const testScope = () => {
  const b = 10;
  console.log(scope + b);
};

testScope();

let num = 5;

const testNum = () => {
  console.log(num);
  num = 10;
};

testNum();
console.log(num);

// Local Scope
function localScope() {
  const name = "OG";
  const isPresent = true;
  const potBellied = true;

  console.log(name, isPresent, potBellied);
}
localScope();

const someFunction = () => {
  const name = "Yemi";

  const anotherFunction = (a) => {
    console.log(name);
    return a * a;
  };
  console.log(anotherFunction(5));
};
someFunction();

// Hoisting
hoistedFunction();

function hoistedFunction() {
  console.log("I am hoisted");
}

console.log(myHoistedFn(2, 5));
function myHoistedFn(a, b) {
  return a - b;
}

// CLOSURE -->

function outerFunction (outerVariable) {
  return 
  function innerFunction (innerVariable) {
      console.log(`outer Variable: ${outerVariable}`)
      console.log(`inner Variable: ${innerVariable}`)
  }
  innerFunction()
}

outerFunction()

// const newFunction = outerFunction("outside")
// newFunction("inside");


const outer  = () => {
  const outerVar = "Hello"
  const inner = () => {
    const innerVar = "Hi"
    console.log(outerVar, innerVar);
  }
  return inner()
}
outer()


const init = () => {
  const hobby = "Learn javascript"
  const displayHobby = () => {
    console.log(hobby)
  }
  return displayHobby
}
const answer = init()
answer();


function checkMate (){
  let name = "Teddy"
  console.log(`Outer Function is for ${name}`)

  function checking () {
    console.log(`The user is ${name}`)
  }
  return checking
} 
const checked = checkMate()
// checked()

const outerFn = () => {
  const example = "I am outer function"
  console.log(example)

  const innerFn = () => {
    console.log("I am inner function")

    const nestedInnerFn2 = () => {
      console.log("I am nested inner function")
    }
    return nestedInnerFn2
  }
  return innerFn
}
// outerFn()
const answer2 = outerFn()
answer2()
