let user = {
    name: "ABI",
    sayHi() {
        console.log(`${user.name} WARNING!`);
    }
}
user.sayHi();

let stuff = user;
// stuff.name = "Starry";
// console.log(user.name);
user = null;
stuff.sayHi();