//add ECMA 5
//기본 자바스크립트를 쓸대 넣으면 비상식적인 행위를 잡아줌
'use strict'
console.log('Hello World')

//2. Variable (w/r)
//let (added in ES6)

let name = 'jinho'
console.log(name)
name = 'suhyun'
console.log(name)

//var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
//has no block scope
{
    age=4
    var age
}
console.log(age)
//미친...

//Contant r(read only)
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysIWeek=7;

//4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function , first-class function

const count = 17;
const size = 17.1;

//number - special numberic values : infinity, -infinity, NaN
const infinity = 1/0;
const negativeInfinity = -1/0
const nAn = 'not a number' /2

console.log(infinity)
console.log(negativeInfinity)
console.log(nAn)

// bigInt (fairly new, don't use it yet)
const bigInt =12312423124n
console.log( `value: ${bigInt}, type: ${typeof bigInt}` )

//5. Dynamic typing : dynamically typed language
let text = 'hello'
console.log( `value: ${text}, type: ${typeof text}` )
text = 2
console.log( `value: ${text}, type: ${typeof text}` )