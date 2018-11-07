function userCreator(name, score) {
    const newUser = Object.create(userFunctions);
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

userFunctions = {
    increaseScore: function() {
        this.score++
    },
    greet: function(){
        console.log('hi ' + this.name);
    }
}

function paidUser(paidName, paidScore, accountBalance){
    const newPaidUser = userCreator(paidName, paidScore); //right now proto is pointing at userFuntions
    Object.setPrototypeOf(newPaidUser, paidUserFunctions); // changes proto to paidUserFunction
    newPaidUser.accountBalance = accountBalance; // not sure about this one 
    return newPaidUser;
}

paidUserFunctions = {
    changeAccountBalance: function() {
        this.accountBalance *= 2;
    }
}

Object.setPrototypeOf(paidUserFunctions, userFunctions) // sets paidUserFunction's prototype chain to look up to userFunctions


var user1 = userCreator("oli", 2);

var user2 = paidUser("seba", 5, 100);
console.log(user2);

user2.changeAccountBalance();
user2.greet();
console.log(user2);


//user1.greet;
//subclassing with factory functions
//add paidUser class that has the same properites and functions of UserCreator 
//with its own parameters of 'paidName', 'paidScore', 'accountBalance' and increaseBalance method