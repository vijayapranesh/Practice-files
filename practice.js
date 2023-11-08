// Array destructuring

// const [variable1,variable2,variable3] = array;

const numbers = [1,2,3,4,5];
const [a,b,c,...d] = numbers; // ... d - is a rest operator (restValues)
console.log(a,b,c,d);


// Object destructuring

// const {property1,property2,property3} = object;

const obj = {
    name: 'vijay',
    age: 30,
    email: 'vijay14455@gmail.com' 
}

const {name, age, email:something} = obj;
console.log(name, age, something);
