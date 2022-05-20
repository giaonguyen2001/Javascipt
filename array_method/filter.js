// filter() : create a new array with element that pass test implemented.

let users = [
    { name: "Giao", age : 21},
    { name: "Quyen", age: 20},
    { name: "Quy", age: 25},
    { name: "Lam", age: 31}
]

let result = users.filter((user) => {
    return user && user.age < 23;
});

console.log(users)

console.log(result)


