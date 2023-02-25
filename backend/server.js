import express from 'express';
import data from './data.js'

const app = express()
const port = process.env.PORT || 4000

app.get('/api/products', (req,res) => {
    res.send(data.products)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})