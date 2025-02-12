//Singleton
//object.create


//object literals

const mysym = Symbol('key1');
const JsUser = {
    name:'ansh',
    'full name':'ansh thakur',
    [mysym] : 'mykey1',
    age: 21,
    location: 'chennai',
    email:'ansh@google.com',
    isLoggedIn: false,
    lastLoggeInDays: ['monday','saturday']
}

console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser['full name']);
console.log(typeof JsUser[mysym]);
//Object.freeze(JsUser);

JsUser.greetings = function (){
    console.log('hello js user');
}

JsUser.greetingstwo = function (){
    console.log(`hello js user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingstwo());

