const pruebaController ={
    add: (req,res) => {
        res.render("formCreateProduct");
    },
    formCreate: (req,res) => {
        console.log(req.body)
    }
};

module.exports = pruebaController;