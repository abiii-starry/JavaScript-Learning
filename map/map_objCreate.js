let obj = {
    name: "abi",
    
}
console.log(Object.entries(obj));  // [ [ 'name', 'abi' ] ] 

let myMap = new Map(Object.entries(obj));
console.log(myMap);