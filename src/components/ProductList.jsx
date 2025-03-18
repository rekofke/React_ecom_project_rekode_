import React from 'react';
import ProductItem from './ProductItem';
import './product-stylesheet.css'

const ProductList = ({allProducts}) => {
    return (
        <div>
            <h1>Rekode Advanced Development</h1>

            <h2>Packages & Services</h2>
            {allProducts.map((product, idx )=> {
            <div key={idx} className='products'>
                <ProductItem oneProduct={product} />
            </div>
            })}
        </div>
    )
}

export default ProductList;