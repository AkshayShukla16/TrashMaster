import './Product.css';
import React from 'react'
import { Button } from 'react-bootstrap';
function ProductList({ product,addToCart }) {
    return (
        <div className='flex'>
            {
                product.map((productItem, productIndex) => {
                    return (
                        <div style={{ width: '20%'}}>
                            <div className='product-item'>
                                <img src={productItem.url} style={{width:"9rem", height:"9rem",margin:"1rem" }}/>
                                <h5 style={{fontWeight:'bold',color:"rgb(243, 32, 99)" }}>{productItem.name}</h5>
                                <h5 style={{color:"rgb(159, 96, 232)"}}> {productItem.seller} </h5>
                                <h5> Rs. {productItem.price} /-</h5>
                                <Button
                                    onClick={() => addToCart(productItem)}
                                >Add To Cart</Button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList