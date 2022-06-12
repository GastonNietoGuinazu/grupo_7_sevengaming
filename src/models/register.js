const { JSON } = require("express");
const fs = require("fs");

const register = {
    fileName:"/data/user.json",
    getData: () => {
        JSON.parse(fs.readFileSync(this.fileName,"utf-8"))
    },
    generateId: () => {
        let allUsers = this.findAll();
        let lastUser = allUsers.pop();
        if (lastUser){
            return lastUser.id + 1;
        }
        return 1;
    },
    findAll: () => {
        this.getData()
    },
    findByPk: (id) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser.id === id)
        return userFound
    },
    findByField: (field, text) => {
        let allUsers = this.findAll();
        let userFound = allUsers.find(oneUser => oneUser[field] === text)
        return userFound
    },
    create: (userData) => {
        let allUsers = this.findAll();
        let newUser = {
            id: this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.findByField(this.fileName, JSON.stringify(allUsers, null, ""));
        return newUser;
    },
    delete: (id) => {
        let allUsers = this.findAll()
        let finalUsers = allUsers.filter(oneUser => oneUser.id !== id);
        fs.findByField(this.fileName, JSON.stringify(finalUsers, null, ""));
        return true;
    }
}
module.exports = register;