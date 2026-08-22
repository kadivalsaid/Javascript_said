// const tinderUser = new Object();
const tinderUser = {}

 tinderUser.id = '123abc';
 tinderUser.name = 'said';
tinderUser.isLoggedIn = false;


// console.log(tinderUser);
const regularUser = {
    email: "sum@example.com",
    fullName: {
        userFullName: {
            firstName: "danish",
            lastName: "khan"
        }
    } 
}
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "e", 6: "f"};

// const obj3 = { obj1,obj2};
// const obj3 =Object.assign({}, obj1, obj2,obj4);

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "KADIVAL@.COM"
    },
      {
        id: 1,
        email: "KADIVAL@.COM"
    },
      {
        id: 1,
        email: "KADIVAL@.COM"
    },
]
// users[1].email = "kadival@.com";
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));


const course = {
    courseName: "js in hindi",
    price: 999,
    courseInstructor: "hitesh choudhary",
}

const {courseInstructor : ir} = course;
console.log(ir);

// {
//     "name": "said",
//     "coursename": "js in hindi",
//     "price": 999
   
// }

