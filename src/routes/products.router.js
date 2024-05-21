import { Router } from "express";
import { productManager } from "../index.js";

const productsRouter = Router()

productsRouter.get('/', async (req, res ) =>{
    try {
        const {limit} = req.query;
        const product = productManager.getProducts()

        if(limit){
            const limitedProducts = products.slice(0, limit)
            return res.json(limitedProducts)

        }

        return res.json(product)
        
    } catch (error) {
        console.log('error');
        res.send('error al recibir los productos')

        
    }
})

productsRouter.get('/:pid', async(req, res)=>{
    try {
        const {pid} = req.params;
        const products = productManager.getProductBiId(pid)
        res.json(products)

    } catch (error) {
        console.log('error');
        res.send('error al recibir el producto por id')
        
    }
})

productsRouter.post('/', async (req, res)=>{

    try {
        const {title, description, price, thumbnail, code, stock, status, category} = req.body;
        const response = await productManager.addProduct({title, description, price, thumbnail, code, stock, status, category})
        res.json(response)
    } catch (error) {
        console.log(error)
        res.send('no se pudo agregar el producto')
    }
})

productsRouter.put('/:pid', async (req, res)=> {
    const {pid} = req.params;
try {
    const {title, description, price, thumbnail, code, stock, status, category} = req.body;
    const response = await productManager.updateProduct(id, {title, description, price, thumbnail, code, stock, status, category})
    res.json(response)
    
} catch (error) {
    console.log(error)
    res.send('no se pudo editar el producto')
}
})

productsRouter.delete('/', async (req, res)=>  {
    const {pid} = req.params;
try {
    await productManager.deleteProduct(id)
    res.send('producto eliminado')
} catch (error) {

    console.log(error)
    res.send('no se pudo eliminar el producto')
    
}})







export {productsRouter}