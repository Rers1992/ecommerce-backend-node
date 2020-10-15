const ctrl = {}
const { getProductByCode } = require("../service/product-service");


// funcion de checkout
ctrl.checkout = async (req, res) => {
    const productos = req.body.productos
    const cliente = req.body.cliente
    let productosArray = []
    descuentoTotal = 0, subTotal = 0, totalConDescuento = 0
    //map el cual se encarga de recorrer los productos enviados desde el lado del cliente
    productos.map(e => {
        const product = getProductByCode(e.code); //
        //si se envia un producto que no existe, se retornara el mensaje
        if (!product) return res.status(404).send("Product not found");
        product.cantidad = e.cantidad
        product.subTotal = product.price * e.cantidad
        product.descuentoTotal = product.discount * e.cantidad
        product.totalConDescuento = product.subTotal - product.descuentoTotal
        productosArray = [
            ...productosArray,
            product
        ]
        //productosArray.push(product)
        subTotal += product.subTotal
        descuentoTotal += product.descuentoTotal
        totalConDescuento += product.totalConDescuento 
    });
    const respuesta = {'cliente': cliente,'productos' : productosArray, 'subTotal': subTotal, 
    'descuentoTotal': descuentoTotal, 'total': totalConDescuento}
    
    //return res.status(201).send("Checkout Generado con Exito");
    res.json(respuesta)
}

module.exports=ctrl