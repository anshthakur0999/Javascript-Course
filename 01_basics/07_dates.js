let myDate = new Date();
//console.log(myDate);
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toJSON());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleString());
//console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

//let myCreatedDate = new Date(2023,0,23);
//console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date(2023,0,23,5,3);
//console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("2023-01-12");
//console.log(myCreatedDate.toLocaleString());
//console.log(myCreatedDate.getTime());

let myTimeStamp = Date.now();
//console.log(myTimeStamp);
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate.toDateString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",

})