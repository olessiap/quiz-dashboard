function UserCreator(name, score){
    this.name = name;
    this.score = score;
    //returns Obj automatically bc of "new"
}

UserCreator.prototype.increment = function(){
    const add1 = () => {
        this.score++
    }
    add1()
};

const user1 = new UserCreator("Oli", 1000);

console.log(user1);

user1.increment();
console.log(user1.score);

console.log(user1);