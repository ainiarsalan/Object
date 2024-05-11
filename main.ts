type user ={ //type allius and object declaration
    name: string
    age: number
    role: string
    children:{
        name: string
        age: number
    },

}
let user1: user= {name: "Ahmed", // object initialization
age: 36,
role: "father",
children: { //nested object
    name:"Ali",
    age: 9,

}};


console.log(user1);

