import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product'

const products = [
    {id:1, name:"MacBook Pro", description: "Apple branded Laptop", price: '$150', image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-hero-select-202011?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5%2C0.5&.v=1604709293000"},
    {id:2, name:"AirPods", description: "Apple branded headphones", price: '$4500',image:"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-space-select-201911?wid=452&hei=420&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1572825197207"},
]
const Products = () => {
    return (
        <main>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products
