/*
    --First--
    All men are mortal
    Socrates is a man.
    Therefore, socrates is mortal.

    --Second--
    This cake is either vanilla or chocolate.
    This cake is not chocolate.
    Therefore, this cake is vanilla.

*/

//First method
const mortal = (gender, ...name) => {
  if (gender === "man") {
    name.map((n) => {
      console.log(true);
    });
  } else if (gender === "woman") {
    name.map((n) => {
      console.log(false);
    });
  } else
    name.map((n) => {
      console.log(false);
    });
};
mortal("man", "marius", "gabi", "vlad");

//Second method for the first syllogism
const mortal2 = (...nameOfPerson) => {
  nameOfPerson.map((j) => {
    console.log(true);
  });
};
mortal2("ion", "cristi ", "darius", "chivu");

//Method for the second syllogism
function cakeGlaze(arrCake, ...hasChocolate) {
  hasChocolate.map((i) => {
    if (i === true) {
      console.log("Cake is with " + arrCake[1]);
    } else {
      console.log("Cake is with " + arrCake[0]);
    }
  });
}

cakeGlaze(["vanilla", "chocolate"], true, false, true, true, false);
