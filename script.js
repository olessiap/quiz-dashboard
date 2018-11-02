function UserCreator(name, score){
    this.name = name;
    this.score = score;
    //returns Obj automatically bc of "new"
}

UserCreator.prototype.increment = function(){
    this.score++;
}

const user1 = new UserCreator("Oli", 345432);

console.log(user1);


user1.increment();

console.log(user1);