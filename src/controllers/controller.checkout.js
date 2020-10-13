const ctrl = {}
const { getProductByCode } = require("../service/product-service");


// funcion de checkout
ctrl.checkout = async (req, res) => {
    var productos = req.body.productos
    var cliente = req.body.cliente
    var productosArray = []
    descuentoTotal = 0, subTotal = 0, totalConDescuento = 0
    //for el cual se encarga de recorrer los productos enviados desde el lado del cliente
    for(let i = 0; i < productos.length ; i++){
        var product = getProductByCode(productos[i].code);
        //si se envia un producto que no existe, se retornara el mensaje
        if (!product) return res.status(404).send("Product not found");
        product.subTotal = product.price * productos[i].cantidad
        product.descuentoTotal = product.discount * productos[i].cantidad
        product.totalConDescuento = product.subTotal - product.descuentoTotal
        productosArray.push(product)
        subTotal += product.subTotal
        descuentoTotal += product.descuentoTotal
        totalConDescuento += product.totalConDescuento 
    }
    var respuesta = {'cliente': cliente,'productos' : productosArray, 'subTotal': subTotal, 
    'descuentoTotal': descuentoTotal, 'total': totalConDescuento}
    
    //return res.status(201).send("Checkout Generado con Exito");
    res.json(respuesta)
}

module.exports=ctrl