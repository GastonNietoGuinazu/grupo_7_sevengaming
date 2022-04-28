const productsController = {

    compra: (req, res) => {
        res.send("Compra exitosa")
    },

    venta: (req, res) => {
        res.send("Venta exitosa")
    },

    detalle: (req, res) => {
        let productoId = req.params.num;
        res.send("Detalle del producto " + productoId);
    }
}

module.exports = productsController;