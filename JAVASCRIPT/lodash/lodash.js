import problem from "lodash"
let std = {
    name: "John Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    },
    fuck : function(){
        console.log("ma chuda");
    }
}

let copy = problem.cloneDeep(std)
console.log(copy);
copy.fuck();