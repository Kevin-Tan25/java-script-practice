/*
// How to create variables
// let var const

let myName = "Kevin"
var iLike = "pizza"
const PI = 3.141

myName = "something  else"
iLike = "something else too"
// PI = 3.14 this is an error. Const cannot be changed
*/


/*
// Types of data types
let string = "This is a normal string"
let number = 42
let bool = false
let array = [1, 2, 3, 4, 5, "a", "b", "c"]
    // How to access
    // array [0] = 1
    // array [6] = "b"
let _undefined = undefined
let _null = null
let _NaN = NaN

let object = {
    keyname: value
        // need to put "" if there is space or other chars
        // "keyname 1 2 -": "123"

    // How to access
    // object.keyname
    // object["keyname 1 2-"]
}
*/


/*
// Functions
function myAwesomeFunction() {
    // all of code
}

// this is how to call a function
myAwesomeFunction() 
*/


/*
// Function body
function myAwesomeFunction() {
    console.log("Abcd")
}

myAwesomeFunction()
myAwesomeFunction()
// console will log "Abcd" twice
*/

/*
// Function parameter
function myAwesomeFunction1(myString) {
    console.log(myString)
}

myAwesomeFunction1("abcdefgh")
myAwesomeFunction1(12345)
// console will log "abcdefgh" and 12345

function myAwesomeFunction2(myString1, myString2) {
    console.log(myString1)
    console.log(myString2)
}

myAwesomeFunction2("abcdefgh", "one")
// console will log "abcdefgh" and "one"
myAwesomeFunction2(12345)
// console will log 12345 and undefined because nothing for second param

function myAwesomeFunction3(myString1, myString2 = 0) {
    console.log(myString1)
    console.log(myString2)
}

myAwesomeFunction3(12345)
// console will log 12345 and 0 because myString2 = 0 makes default value = 0
*/

/*
// Returns

function myAwesomeFunction3(myString1, myString2 = 0) {
    return 100
    // you can return objects and functions as well
    console.log(myString1)
    console.log(myString2)
}

let myResult = myAwesomeFunction3("abc", "def")
console.log(myResult)
// console will log 100 because anything below return will not be evaluated
*/

/*
// Scoping
var myVariable = 100
var myAge = 20

console.log(iWant)

if(myAge == 20){
    var iWant = "pizza"
    // iWant is a global variable (declaration is global)
    // iWant is console logged as undefined
    // not block scope because lives outside
}

if(myAge == 20){
    let iWant = "pizza"
    // iWant only lives inside the block
}

// if - else - switch

console.log(myVariable)
console.log(myAge)
console.log(iWant)

let iWant ="coke"

if(myAge == 20){
    let iWant = "pizza"
    console.log(iWant)
    // console logs "pizza"
}

console.log(iWant)
// console logs "coke"
*/

/*
// Built in functions
alert("hi")
// popup text

confirm("Are you sure you want to delete this?")
// confirm message | returns boolean

prompt('Are you sure you wanna delete this?')
// prompts the user to type in result
*/

/*
// Objects
let obj = {
    keyname: "value1",
    keyname2: "value2"
}

console.log(obj.keyname)
console.log(obj["keyname2"])
// console logs "value1 and "value2

obj.keyname = "another value"
console.log(obj.keyname)
// console logs "another value"

delete obj.keyname2
console.log(obj)
// removes keyname2 from obj

*/

/*
// Object and Arrays continued
let obj = {
    0: "Hello",
    1: "World"
}

let arr = ["Hello", "World"]

console.log(obj[0] + obj[1])
console.log(arr[0] + arr[1])

arr[3] = "!!"
// arr is now "Hello", "World", undefined, "!!"
// arr[2] = undefined

arr["mykey"] = "!!"
// changed to object

console.log(arr)
console.log(arr.length)
// primitive to find lenght of array
console.log(obj)
*/

/*
// If, else if

let myName = "Kevin"
myName = "Something else"
myName = "asflakjf"

if (myName == "Kevin") {
    console.log("Well, the variable is still " + "Kevin")
} else if (myName == "Something else") {
    console.log("The value of the variable changed!")
} else {
    console.log("????")
}
*/

/*
// Switch


switch(expression){
    case<1>:
    case<2>:
    default:
}


let myAge = 16

switch (myAge) {
    case 16:
    case 17:
    case 18:
    case 19:
        //waterfalls down
    case 20:
        console.log("You are less than 21")
        break; //stops the waterfall effect
    case 21:
        console.log("You're 21")
        break;
    default:
        console.log("You're neither 20 nor 21")
}
*/

/*
// Expressions

let number1 = 100
let number2 = 200

console.log("Add: ", number1 + number2)
console.log("Subtract: ", number1 - number2)
console.log("Multiply: ", number1 * number2)
console.log("Divide: ", number2 / number1)
console.log("Exponentation: ", number1 ** 2)
console.log("Increment: ", ++number1) //Directly operates the variable
// ++number1 increments first
// number1++ performs function first
console.log("Decrement: ", --number1)
*/

// OR AND NOT
// Or: ||
// And: &&
// Not: !

/*
// Binary
let num1 = 6 // -> 1 1 0
let num2 = 3 // -> 0 1 1
             // -> _ _ _
             // -> 1 0 1

console.log(num1 | num2)
// 5
*/

/*
// for loop

for ( ; ; ){

}

console.log(i)
for (var i = 0; i < 10; i++) {
    // var makes the i accesible globally
    console.log(i)
}

console.log("---")
console.log(i)
*/

/*
// While loop
var i = 0;

while (i < 20) {
    console.log(i)
    i++
}

console.log("---")
console.log(i)
*/

/*
// DO while loop
var i = 100

do {
    console.log("Great!")
    i++
} while (i < 10)

// run at least once
*/

/*
// continue, break, return
for (let i = 0; i < 10; i++) {
    console.log(i)
    if (i == 5) {
        //break
        continue
        // does not evaluate below
    }
    console.log("Done")
}

function myLoop() {
    for (let i = 0; i < 10; i++) {
        console.log(i)
        if (i == 5) {
            return
            //  get out of everything
        }
        console.log("Done")
    }
}

myLoop()
*/

/*
// Array functions

let array1 = [1, 2, 3, 4, 5]
let array2 = array1.map((element => {
    // for every element in array1 apply function
    return element * 2
}))

console.log(array2)

// function myFunction(){

// }

// let myFunction = () =>{
//     // set variable equal to result of function
// }

let array = [1, 2, 3, 4, 5]
    // let newArray = array.filter(element => {
    //     if (element > 2)
    //         return true
    //     return false
    // })

let newArray = array.filter(element => {
    if (element > 2)
        return true
    return false
})

console.log(newArray)


let array = ["Kevin", "Jay", "Zack"]

array.forEach((element) => {
    //element
    console.log(element)
})
*/


/*
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] // -> 55
let count = 0

const res = array.reduce((accumulator, currentValue) => {
        count++
        return currentValue + accumulator
    }, 0)
    // 0 is the initializer


console.log(count)
console.log(res)
*/


/*
// Accesss array of objects
let myFavFoods = ["pizza", "burger", "pasta"]

console.log(myFavFoods.indexOf("pizza"))
console.log(myFavFoods.indexOf("biscuit") > -1)
console.log(myFavFoods.includes("biscuit"))
    // returns -1 if index not found

let students = [{
        name: "ABC",
        age: 15
    },
    {
        name: "DEF",
        age: 16
    }
]

const student = students.find(s => {
    return s.age == 15
})
// find finds an object inside list 

console.log(student)
*/

/*
// == vs ===

let a = 2
let b = "2"
    // same works for array

console.log(a == b)
    // converts type

console.log(a === b)
    // type not the same

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
    // different memory location
*/

/*
// DOM
Document is the top element of a tree – the root
You can access text in a couple ways
1. ACCESS BY ID
getElementById("idname") gives you element
getElementById("idname").innerText gives you the specific text
There are also methods like:

2. ACCESS BY CLASSNAME
e.g. let selectors = document.getElementsByClassName("classname")
returns array of all elements with particular class name
select the element you want to operate on and change the value
selectors[0].innerText = "new text"

3. ACCESS BY TAGNAME
e.g.
let elements = document.getElementsByTagName("p")
returns array of all elements with tag name
elements[0].innerText = "new text"
Use .innerText if you want to bold/ stylize
*/

/*
// setInterval and setTimeout
// delays execution of code

console.log("Program Starts")

setTimeout(() => {
        document.getElementById("name").innerText = "My name is something else"
    }, 2000)
    // duration in milliseconds




let i = 0;
setInterval(() => {
    document.getElementById("name").innerText = i++
}, 1000)

// program runs every 1000 ms

setTimeout(() => {
    document.getElementById("name").innerText = i++
}, 1000)
// updates once

/*
console.log("Program Ends")

let i = 0

let id = setInterval(() => {
    document.getElementById("name").innerText = ++i

    if (i == 100) {
        clearInterval(id)
    }
}, 100)*/

/*
// Key Handler
const elem = document.getElementById('name')

elem.ondblclick = function() {
    console.log("Clicked!!")
}

function myFunction() {
    console.log("Something else clicked")
}
*/

/*
// try catch -> error handler
let i = 100
let j = 0

try {
    if (j == 0) {
        throw "j cannot be zero"
    }
    console.log(i / j)
} catch (err) {
    console.log(err)
        // throws error
}

console.log("Nice little statement")
// runs even if first case fails
*/