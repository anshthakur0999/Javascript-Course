const score = 400;
console.log(score);

const balance = new Number(300);
console.log(balance);

console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(3));

const otherNumber = 28.2966;
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(5));

const hundreds = 1000000;
console.log(hundreds.toLocaleString());

//console.log(Math);
//console.log(Math.abs(-4));
//console.log(Math.abs(4));
//console.log(Math.round(4.5));
//console.log(Math.ceil(4.5));
//console.log(Math.floor(4.5));

console.log((Math.random()*10)+1);