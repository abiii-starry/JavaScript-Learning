let abi = { name: "abi" };
let starry = { name: "starry" };

function sayName() {
    console.log(this.name);
}
abi.sayName = sayName;
starry.sayName = sayName;

sayName();  // undefined
abi.sayName();
starry.sayName();