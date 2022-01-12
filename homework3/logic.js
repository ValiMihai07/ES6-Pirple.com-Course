/* First sylogism

All men are mortal
Socrates is a man.
Therefore, socrates is mortal.

*/

let man = true;
let mortal = man;
let socrates = man;
if (mortal === socrates) {
  console.log("Socrates is mortal");
} else {
  console.log("socrates is not mortal");
}

/* Second sylogism

This cake is either vanilla or chocolate.
This cake is not chocolate.
Therefore, this cake is vanilla.

*/

let vanilla = true;
let chocolate = false;
let cake = true;

if (cake === vanilla || cake === chocolate) {
  console.log("Cake is vanilla");
}
