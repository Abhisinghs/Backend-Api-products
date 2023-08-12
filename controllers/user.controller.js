const Product = require('../models/user.model')


//take product data and create database and store
const createProduct = async(req,res)=>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(err){
        res.status(500).json(`something went wrong product data not store `)
    }
}

//take single product data from database 
const getProduct = async(req,res)=>{
    try{
        const {name} = req.params
        const product = await Product.find({name})
        if(!product){
            res.status(404).json(`product not found of  ${name}`)
        }
        res.status(200).json(product)
    }catch(err){
        res.status(404).json({message:`error while search the product  ${err.message}`})
    }
}

//take all the product from the database 
const getProducts = async(req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json(products)
    }catch(err){
        res.status(500).json(`Error occur while searching `)
    }
}


//update product value 
const updateProduct = async(req,res)=>{
    try{
        const {id}=req.params
        const product = await Product.findByIdAndUpdate(id,req.body)

        if(!product){
            res.status(404).json({message:`product not found of  id : ${id}`});
        }
        const updateProduct= product;
        res.status(200).json(updateProduct);
    }catch(err){
        res.status(500).json(`error occur : ${err.message}`)
    }
}

//delete product from database 
const deleteProduct = async(req,res)=>{
    try{
        const {name}=req.params
        const product = await Product.findOneAndDelete(name,{name :name})

        if(!product){
            return res.status(404).json({message:`product not found of  id : ${name}`});
        }
        const deleteProduct= product;
        res.status(200).json({message:`product delete successfully ${deleteProduct}`});
    }catch(err){
         res.status(500).json('Error while deleting ')
    }
}

//delete all 
const deleteAllProduct=async (req,res)=>{
    Product.deleteMany()
    res.status(200).json('all data will be delete')
}
//export module so other file can access 
module.exports= {
    createProduct,
    getProduct,
    getProducts,
    updateProduct,
    deleteProduct,deleteAllProduct
}