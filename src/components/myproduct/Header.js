import './Product.css';
import React from 'react'
import cart from './myimages/cart.png'

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >
                <h1>Shopping Cart App</h1>
            </div>
            <div onClick={() => props.handleShow(true)}> 
                <img src={cart} style={{height:"4rem", width:"4rem"}}/>
                <sup><span style={{marginLeft:"1rem",fontSize:"28px", color:"red", backgroundColor:"yellow", border:"1px solid yellow", borderRadius:"50%",}}>{props.count} </span></sup>
            </div>
        </div>
    );
}

export default Header;