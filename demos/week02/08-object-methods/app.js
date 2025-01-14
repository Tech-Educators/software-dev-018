

let cow = {
    name: 'Daisy',
    age: 4,


    // when an object has a function on it, we call that function a method
    eat : function() {
        console.log('Yum, grass is nice')
    },

    getAge: function() {
        console.log(this)
        // this refers to the object
        return this.age
        // return cow.age
    },

    moo: function(person) {
        console.log(`${this.name} moos at ${person} ${5 + 5}`)
        console.log(this.name + ' moos at ' + person + ' ' + 5 + 5)
    }
}

cow.moo('Sam')


let fish = {
    type: 'Tuna',
    swim: function() {
        // whatever object 'this' is used in, 'this' then refers to that object.
        console.log(this)
        console.log(`${this.type} swims around`)
        console.log(`${fish.type} swims around`)
    }
}

// we can call methods on a function
cow.eat() //Yum, grass is nice'


cow.getAge() // returns 4


fish.swim()
