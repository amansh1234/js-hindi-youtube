//primitive  7 types
// string, Number, Boolean , null , undefined, symbol , bigInt

//Reference (Non primitive)
// arrays, Objects,Functions

const score=100 

let userEmail;


const id= Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

//++++++++++++++++
// stack(primitive) , heap(non primitive)
// example

let myyoutubename= "Amanchauhancom"

let anothername = myyoutubename
anothername = "chaiorcode"
console.log(myyoutubename);
console.log(anothername);

// heap example
// In heap value is changed but in stack value is not changed in stack we only get copy of the variable 
let Aman ={
email: "aman@gmail.com"
}
let puranprakash =Aman
Aman.email ="rohan@gmail.com"
console.log(Aman);
console.log(puranprakash);