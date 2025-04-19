//! Arithmetic Operator

// + - * / % ++ -- = == === != !==
// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// % : Modulus (Remainder)
// ++ : Increment
// -- : Decrement
// + : Concatenation (String)
// - : Negation (Unary Minus)
// * : Multiplication (Numeric)
// / : Division (Numeric)
// % : Modulus (Numeric)
// ++ : Increment (Numeric)
// -- : Decrement (Numeric)

console.log(10 / 3); // 3.3333333333333335
console.log(10 % 3); // 1

var a = 10;
console.log(a++);
console.log(a++);
console.log(a++);
// console.log(a);
var b = 10;
console.log(++b);
console.log(++b);
console.log(++b);

a = 10;
console.log(a--);
console.log(a--);

b = 10;
console.log(--b);
console.log(--b);

a = 10;
b = "10";

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);

console.log((a -= b));

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
