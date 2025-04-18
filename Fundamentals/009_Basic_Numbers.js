var a = 9;
var b = 9;
var c = 9.0;
console.log(parseFloat(a + b + c)); // 27

var aa = Number("9");
var bb = Number("9");
var cc = Number(9.14);

console.log(parseInt(aa + bb + cc));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);

//! Infinity and NaN
console.log(1 / 0); // Infinity
console.log(-1 / 0); // -Infinity
console.log(0 / 0); // NaN
console.log(1 / "a"); // NaN
