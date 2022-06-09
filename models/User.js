const fs = require("fs");

const User = {
    fileName: "./data/user.json",
    
    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },
    findAll: function () {
        return this.getData();
    },
    findByPk: function (id){
let allUsers = this.findAll();
let userFound = allUsers.find(oneUser => onseUser.id === id);
return userFound;
    },
    findByPk: function (id){
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => onseUser.id === id);
        return userFound;
            },
    create: function (userData) {

    }
}

console.log(User.getData());