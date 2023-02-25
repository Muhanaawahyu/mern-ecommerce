import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    const params = useParams();
    console.log(params)
    const { slug } = params
    return (
        <div>
            <h1>{slug}</h1>
        </div>
    )
}

export default ProductPage