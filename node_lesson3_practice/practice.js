const fs = require("fs")

const readFileIntoArray = (path) => {
    try {
        const data = fs.readFileSync(path, "utf8")
        return data.split(", ")
    } catch (err) {
        console.error(err);
    }
}

let path = "./files/input.txt"

const addUserIntoLastList = (user) => {
    let arr = readFileIntoArray(path)
    arr.push(user)
    let list = arr.join(", ")

    fs.writeFile("./files/output.txt", list, err => {
        if (err) 
          console.error(err)
    });
}

const addUserIntoFirstList = (user) => {
    let arr = readFileIntoArray(path)
    arr.unshift(user)
    let list = arr.join(", ")

    fs.writeFile("./files/output.txt", list, err => {
        if (err) 
          console.error(err);
    })
}

const addUserToAnyPosition = (user, position) => {
    let arr = readFileIntoArray(path)

    arr.splice(position, 0, user);
    let list = arr.join(", ")

    fs.writeFile("./files/output.txt", list, err => {
        if (err) 
          console.error(err);
    })
}

const removeUsersByName = (username) => {
    let arr = readFileIntoArray(path)
    let list = arr.filter(function(item){
        return item !== username
    })
    
    let listUser = list.join(", ")

    fs.writeFile("./files/output.txt", listUser, err => {
        if (err) 
          console.error(err);
    }) 
}

const getListFromAToB = (a, b) => {
    let arr = readFileIntoArray(path);
    let list = arr.slice(a, b)

    let stringList = list.join(", ")
    console.log(list)
    fs.writeFile("./files/output.txt", stringList, err => {
        if (err) 
          console.error(err);
    }) 
}

const updateList = (username, newUsername) => {
    let arr = readFileIntoArray(path)

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === username){
            arr[i] = newUsername
            break
        }
    }
    let list = arr.join(", ")
    fs.writeFile("./files/output.txt", list, err => {
        if (err) 
          console.error(err);
    }) 
}

// addUserIntoLastList("Lâm")
// addUserIntoFirstList("Quý")
// addUserToAnyPosition("Giao", 2)
// removeUsersByName("Hoàng")
// getListFromAToB(0, 2)
updateList("Huy", 'Minh')


