// nested objects are objects within objects

const  user ={
    name : "satya",
    address : {
        city : "indore",
        state : "MP",
        country : "India",
        location :{
            lat : "456789",
            long : "123456",
        },
    },
};

// to access nested object properties we use dot notation
console.log(user.address.city); // indore
console.log(user.address.location.lat); // 456789

// Object destructuring for nested objects
const { lat , long } = user.address.location;
console.log(lat); // 456789
console.log(long); // 123456

