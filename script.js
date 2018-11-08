class userCreator {
    constructor(name, score) {  
        this.name = name;
        this.score = score;
    }
    login () {
        console.log("you've been logged in, " + this.name)
        }   
    increaseScore () {
        this.score++
        }
}



class paidUserCreator extends userCreator {
    constructor(paidName, paidScore, accountBalance) {
        super(paidName, paidScore)
        this.accountBalance = accountBalance
    }
    increaseAccountBalance () {
        this.accountBalance++
    }
}


const user1 = new userCreator("Oli", 2);

console.log(user1);
user1.login();
//

const user2 = new paidUserCreator("Seba", 1, 100);
console.log(user2);

user2.increaseScore();
console.log(user2);

user2.increaseAccountBalance();
console.log(user2);
