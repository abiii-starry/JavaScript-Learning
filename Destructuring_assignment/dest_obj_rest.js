let obj = {
    name: "abi",
    date: "2023-10-22",
    isAdmin: true,
    pet: "starry"
}

let {date, ...rest} = obj;
console.log(date);
console.log(rest.pet);
console.log(rest);