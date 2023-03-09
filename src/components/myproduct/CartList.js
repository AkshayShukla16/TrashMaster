import { useEffect, useState } from 'react';
import './Product.css';
import { Button } from 'react-bootstrap';

function CartList({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])

    return (
        <div>
            {
                CART?.map((cartItem, cartindex) => {
                    return (
                        <div>
                            <img src={cartItem.url} style={{height:"6rem", width:"6rem"}} />
                            <span style={{fontSize: "20px", fontWeight:"bold", padding:"2rem", color:"rgb(94, 49, 117)"}}> {cartItem.name} </span>
                            <Button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</Button>
                            <span style={{fontSize: "15px", fontWeight:"bold", padding:"1rem"}}> {cartItem.quantity} </span>
                            <Button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</Button>
                            <span style={{fontSize: "18px", fontWeight:"bold", padding:"1.5rem", color:"rgb(243, 32, 99)"}}> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                    )
                })
            }
   <br />
            <h3 style={{color:"red", border:"2px solid yellow", borderRadius:"30px"}}> Total: ₹ <span>
                 {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </span>
            </h3>
        </div >
    )
}

export default CartList