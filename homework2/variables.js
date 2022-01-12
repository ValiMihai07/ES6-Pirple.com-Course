/*
Hoisting is when you use a variable before you declare it , hoisting it's not working with let and const
Variable declare with "Let" have Block Scope and the variable can be modify in the block , can't be use outside the block
Variable declare with "const" need to assign a value when it's declareted , can have Block Scope , can'd be modify and can't use outside the block
Variable declare with "var" are from ES5 and can't have Block Scope , it's Global
*/

//Exemple for hoisting

function sayAge() {
  bornYear = 1988;
  thisYear = 2021;
  console.log(thisYear - bornYear);

  var bornYear;
  var thisYear;
  /*   
    let bornYear;
    let thisYear;

    const bornYear;
    const thisYear;

    these won't work
*/
}

//Exemple for let

function sayName() {
  if (true) {
    let name = "Vali";
    console.log(name);
  }

  //  name = "Ion";   console.log(name); don't work if you put this after block
}

//Exemple for const

function sayLastName() {
  const lastName = "Ion";
  console.log(lastName);
  // lastName= "Maria" don't work because const can't be modify
}

//Exemple for var

function sayAdress() {
  var address = "Valea Rosie";
  console.log(address);
  if (true) {
    address = "1 Mai";
    console.log(address);
  }
  address = "Bresti";
  console.log(address);
}

sayAge();
sayName();
sayLastName();
sayAdress();
