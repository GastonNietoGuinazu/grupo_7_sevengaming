const fs = require("fs");

const user = {
    fileName:"/data/user.json",
    getData: () => {
        fs.readFileSync(this.fileName,"utf-8");
    },
    create: (userData) => {

    }
}
console.log(user.getData());