//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a, b;
};

//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dubllin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};

console.log(user.printPlacesLived());

//Challenge area

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number*this.multiplyBy);
    }
};

console.log(multiplier.multiply());