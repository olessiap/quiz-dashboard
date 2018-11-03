class UserCreator {
    constructor  (name, score) {
        this.name = name
        this.score = score
    }
    increment() {
        this.score++;
    }
    login() {
        this.name = console.log(this.name);
    }
}

const user1 = new UserCreator("phil", 2);

console.log(user1);

user1.increment();

console.log(user1);

user1.login();