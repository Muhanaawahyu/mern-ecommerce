import express from 'express';
import data from './data.js'

const app = express()
const port = process.env.PORT || 4000

app.get('/api/products', (req,res) => {
    res.send(data.products)
})

app.get('/api/product/:slug', (req,res) => {
    const product = data.products.find(x => x.slug === req.params.slug)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({message: 'Product not found'})
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})