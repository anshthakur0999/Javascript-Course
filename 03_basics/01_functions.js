function saymyname () {
    console.log('a');
    console.log('n');
    console.log('s');
    console.log('h');
}

// saymyname();

// function addTwoNum(num1,num2) {
//     console.log(num1+num2);
// }

function addTwoNum(num1,num2) {
    let result = num1+num2;
    return result;
}

// const result = addTwoNum(3,7);
// console.log("Result: ",result);

function loginUserMsg(username){
    if(username === undefined){
        console.log('Please enter a Username');
        return;
    }
    return `${username} just logged in`;
}
console.log(loginUserMsg("Ansh"));
console.log(loginUserMsg());  //if nothing is passed to function it shows undefined

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,500,300));

const userObject = {
    username : "Ansh",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(userObject);
handleObject({
    username : "Raj",
    price : 299
})

const newArray = [100,200,300,400]

function SecondValue(anyArray){
    return anyArray[1];
}

console.log(SecondValue(newArray));