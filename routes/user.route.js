const express =require('express');
const {getProduct,createProduct,getProducts,updateProduct,deleteProduct,deleteAllProduct} = require('../controllers/user.controller');

const routes= express();


//middle ware 
routes.use(express.json());
routes.use(express.urlencoded({extended:false}))

//define routes 
routes.get('/',(req,res)=>{
    res.status(200)
    res.send('Hello world!')
})

//take user product data and store into database
routes.put('/product',createProduct)

//take single product from database 
routes.get('/products/:name',getProduct)

//take all the product from database 
routes.get('/products',getProducts)

//update the product value 
routes.put('/products/:id',updateProduct)

//delete product from database 
routes.delete('/products/:name',deleteProduct)

routes.delete('/products/delete',deleteAllProduct)

module.exports = routes