const name = 'Ansh ';
const repoCount = 50;
//console.log(name + repoCount + ' value');

console.log(`Hello my name is ${name} and my repocount is ${repoCount}.`);

const gameName = new String('Anshthakur');
//console.log(gameName[2]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());

console.log(gameName.charAt(3));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(2,6);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "     Ansh       Thakur     ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://ansh.com/ansh%20thakur";
console.log(url.replace('%20', '-'));
console.log(url.split('/'));