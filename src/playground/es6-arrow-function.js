const square = function (x){
    return x * x;
}

console.log(square(8));

// const squareArrow = (x) => {
//     return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const fullName = "Daniel Perez";
// let firstName;

const getFirstName = (name) => {
    return name.split(' ')[0];
}

console.log(getFirstName(fullName));

const getFirstNameShort = (name) => name.split(' ')[0];

console.log(getFirstNameShort(fullName));