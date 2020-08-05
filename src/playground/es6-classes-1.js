class Person {
    constructor(name="Anónimo", age=0){
        this.name = name;
        this.age = age;
    }

    getGretting(){
        return `Hola, soy ${this.name}.`;
    }

    getDescription(){
        return `${this.name } tiene ${this.age } años`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();
        
        if(this.hasMajor()) {
            description += ` Su especialidad es ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGretting() {
        let gretting = super.getGretting();

        if(this.homeLocation){
            gretting += ` Vengo de ${this.homeLocation}.`
        }

        return gretting;
    }
}

const me = new Traveler("Daniel Pérez", 21, "Mérida");
console.log(me.getGretting());

const otherPerson = new Traveler( undefined, undefined, "Nowhere");
console.log(otherPerson.getGretting());