var str = "10.00";
var num = 10;

console.log(str);
console.log(Number(str));
console.log(parseInt(str));
console.log(Number.parseInt(str));

console.log(num.toString());
console.log(String(num));
console.log(Boolean(num));

console.log(Boolean(-Infinity));
console.log(Boolean(Infinity));

console.log("**********************");

console.log(Boolean(""));
console.log(Boolean("Something"));

console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(0));
console.log(Boolean(451));
