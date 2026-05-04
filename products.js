import express from express
const router=express.Router()
const productsRouter=require('./products')

router.get('/',(req,res)=>{
    res.json([
        {
            id: 1,name: 'laptop',price: 4000
        },
        {
            id: 2,name: 'mouse',price: 150
        }
    ])
})

router.get('/:id',(req,res)=>{
    const id=Number(req.params.id)

    const products=[
        {id: 1,name: 'laptop',price: 4000},
        {id: 2,name: 'mouse',price: 150}
    ]
    const requestedProduct=products.find((products)=>products.id===id)
    res.json(requestedProduct)
})
router.post('/',(req,res)=>{
    const {name,price}=req.body
    const newProduct={
        name,
        price
    }
    console.log(newProduct)
    res.json({message:"New Product added",products:newProduct})
})
module.exports=router