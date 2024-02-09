//Задача 1
let x1 = 2;
let y1 = 3 ;

let x2 = 10;
let y2 = 5;
 
let cathetus1 = Math.abs (x1 - x2);
let cathetus2 = Math.abs (y1 - y2);

console.log(Math.sqrt(
    Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2)
))
let rentagleArea = Math.abs(x1 - x2) * Math.abs(y1 - y2);
console.log(rentagleArea);

// Задача 2
let first = 13.123456789;
let second = 2.123;
let precision = 5;

let firstNormalized = Math.floor(
    ( first - Math.floor(first) ) * Math.pow(10, precision)
);
let secondNormalized = Math.floor(
    ( second - Math.floor(second) )* Math.pow(10, precision)
);

console.log(firstNormalized);
console.log(secondNormalized);

// Задача 3
//let maxmin = max - min;

//let number = Math.floor(Math.random ( )* 100 * maxmin / 2) * 2 + 1  ;

let n = 0;
let m = 100;
let min = Math.min(n, m);
 let max = Math.max(n, m);

let numberInRange = Math.floor(Math.random() * ( Math.max(n, m) - Math.min(n, m) + 1)) + Math.min(n, m);

numberInRange += numberInRange % 2 === 0;
console.log (numberInRange);