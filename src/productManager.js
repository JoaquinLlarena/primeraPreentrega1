import { response } from 'express';
import { promises as fs } from 'fs'
import {v4 as uuidv4} from 'uuid'

export class ProductManager {

    constructor() {
        this.path = 'products.json';
        this.products = [];
    }

    addProduct = async ({title, description, price, thumbnail, code, stock, status, category}) => {
        const id = uuidv4()
        let newProduct = {id, title, description, price, thumbnail, code, stock, status, category}

        this.products = await this.getProducts

        this.products.push(newProduct)
        
        await fs.writeFile(this.path, JSON.stringify(this.products))

        return newProduct;
    } 

    getProducts = async () => {
        const reponse = await fs.readFile(this.path, 'utf8')
        const reponseJSON = JSON.parse(response)
        return responseJSON;
    }

    getProductBiId = async (id) => {
        const response = this.getProducts()

        const product = response.find (product => product.id === id) 
        if(product ) {
            return product
        } else {
            console.log('no se encontro el producto')
        }
    }

    updateProduct = async (id, {...data}) => {
        const reponse = this.getProducts()
        const index = response.findIndex(product => product.id === id)

        if ( index !== -1 ){
            response[index] = {id, ...data}
            await fs.writeFile(this.path. JSON.stringify(response))
            return response[index]

        } else {
            console.log('no se encontro el producto')
        }
    }

    deleteProduct = async (id) => {
        const response = await this.getProducts();
        const index = response.findIndex(product => product.id === id);

        if (index !== -1) {
            response.splice(index, 1); // Elimina el producto del array
            await fs.writeFile(this.path, JSON.stringify(response));
            return true; // Indica que se eliminó correctamente
        } else {
            console.log('No se encontró el producto');
            return false; // Indica que no se encontró el producto
        }
    }




}