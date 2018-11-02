function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore); //creates newUser object
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

//creates an object of user functionality
const userFunctionStore = { 
    increment: function() {
        this.score++;
    }
}

const user1 = userCreator("Seba", 1000);

console.log(user1);

user1.increment();

console.log(user1);