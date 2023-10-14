let user = {
    name: "abi",
    sayHi () {
        console.log(`Hello! I am ${this.name}`);
    }
};

user.sayHi();