import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import { CheckproductCartThunk, DeleteproductCartThunk, getCartThunk } from '../store/slices/productCart.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SideCart = ({show,handleClose}) => {

const navigate=useNavigate()    
const dispath=useDispatch()
const cart=useSelector(state=>state.cart)
const [totall,setTotal]=useState(null)

useEffect(()=>{

let total=0
cart.forEach(pro => {
    total+=pro.price*pro.productsInCart.quantity
});

setTotal(total)
},[cart])


    return (
        <>
       <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart<i className='bx bxs-shopping-bags'></i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            
            {cart.map(pro=>{

                return(
                <ul key={pro.title} className='product-cart'>
                        <li>
                            <div style={{display:"flex"}}><h4>{pro.title}</h4>
                                <Button onClick={()=>{
                                navigate(`product/${pro.id}`)

                                }} style={{borderRadius:"8px"}}>Info<i className='bx bx-question-mark'></i>
                                </Button>
                                    
                                </div>
                            <span>quantity:{pro.productsInCart.quantity}</span>
                            <p>Price/Uni:{pro.price}$</p>
                            <p>Total price: {pro.price*pro.productsInCart.quantity}$</p>
                            <Button  onClick={()=>dispath(DeleteproductCartThunk(pro))} style={{borderRadius:"8px"}}>Delete<i className='bx bxs-trash'></i></Button>
                        </li>
                </ul>
                )
            })}
                    <p style={{color:"green"}}>{totall}$</p>
                    <Button style={{width:"100%",borderRadius:"8px"}} onClick={()=>dispath(CheckproductCartThunk())}>Checkout<i className='bx bx-check'></i></Button>
        </Offcanvas.Body>
      </Offcanvas> 
        </>
    );
};

export default SideCart;