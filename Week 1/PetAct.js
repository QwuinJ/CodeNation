const pet = {
    name: "Bob",
    typeOfPet: "ferret",
    age: 5,
    colour: "white",
    eat: function() {
        return `${this.name} the ${this.typeOfPet} is eating. *Nomnomnom*`
    },
    drink: function() {
        return `${this.name} the ${this.typeOfPet} is drinking. *Slurp*`
    }
}

console.log(pet.eat());
console.log(pet.drink());
