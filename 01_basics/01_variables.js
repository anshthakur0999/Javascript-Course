const accountId = 144553;
let accountEmail = "anshthakur0999@gmail.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

//accountId = 3;   Not allowed
//console.log(accountId);

accountEmail = "ansh@ansh.com";
accountPassword = "1223322";
accountCity = "bengaluru";

//Prefer not to use var because of issue in block scope and functional scope

console.table([accountId , accountPassword , accountEmail , accountCity , accountState]);
