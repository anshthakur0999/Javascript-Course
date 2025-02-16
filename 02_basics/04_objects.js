// const tinderUser = new Object();

const tinderUser = {};
tinderUser.id = 'abc123';
tinderUser.name = 'sam';
tinderUser.isLoggedin = false;

// console.log(tinderUser);

const regularUser = {
    email : 'someone@gmail.com',
    fullname : {
        userfullname : {
            firstname : 'ansh',
            lastname : 'thakur'
        }
    }
}

// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
    1 : 'a',
    2 : 'b'
};

const obj2 = {
    3 : 'a',
    4 : 'b'
};

// const obj3 = {obj1,obj2};  //doesn't join 2 objects properly

// const obj3 = Object.assign({},obj1,obj2);  //joins to object properly
const obj3 = {...obj1,...obj2};   //spread method to join two objects 
// console.log(obj3);

const users = [
    {
        id:'1',
        email:'me@email.com'
    },
    {
        id:'1',
        email:'me@email.com'
    },
    {
        id:'1',
        email:'me@email.com'
    },
    {
        id:'1',
        email:'me@email.com'
    }
]

// console.log(users[1].id);
// console.log(users[1].email);

// console.log(Object.keys(regularUser));
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedin'));
// console.log(tinderUser.hasOwnProperty('isLoggedout'));


//Destructuring

const course = {
    coursename : 'JS Course',
    coursefee : '599',
    courseInstructor : 'Ansh'
};

// const {coursefee} = course;
const {coursefee : fee} = course;

console.log(fee);

