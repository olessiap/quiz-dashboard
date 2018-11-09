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
const user2 = new paidUserCreator("Seba", 1, 100);

user1.login();
user2.increaseScore();
user2.increaseAccountBalance();

//document.cookie = 'name=oli; expires=Fri, 31 Dec 2024 23:59:59 GMT';
// console.log(document.cookie);
// console.log("suuuuup");


var myCookies = {};
var user = document.getElementById("user");
var age = document.getElementById("age");
var output = document.getElementById('output');

function saveCookie() {
    myCookies["_user"] = user.value;
    myCookies["_uage"] = age.value;
    document.cookie = ""; 
    
    //set up expiary 
    var expiration = new Date(Date.now() +60 * 1000).toString();
    console.log(expiration);
}