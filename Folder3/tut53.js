// Functions

//definition
// Return noting takes something
function greet(name, greettext = "Defaut text") {     
    let loc = "temp";   //local varianle
    console.log(greettext + " "+ name);
    console.log(name + " is a good coder")
}

// takes something and returns something
function sum(a,b,c)
{
    let d = a+b+c;
    return d;
}

let name = "Mayank";    //global variable
let name1 = "Suraj";
let name2 = "Pratham";
let name3 = "Ujjwal";
let name4 = "Sarag";
let txt = "Gud Mrng";

greet(name, txt);    //Function calling
greet(name1, txt);
greet(name2, txt);
greet(name3, txt);
greet(name4);

let add = sum(1,2,3);
console.log(add);

// console.log(name + " is a good boy");
// console.log(`is a good boy ${name}`);   


/*
Fuction -> define and call
Fucntion -> only takes , both takes and returns
variables -> local and global
-> default value of a local parameter in function calling
*/
