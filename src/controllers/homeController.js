const homeController = {

    home: (req, res) => {
        res.sendFile("../views/home")
    }
}

module.exports = homeController;