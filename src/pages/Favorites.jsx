import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPucharseThunk } from '../store/slices/pucharse.slice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Favorites = () => {
const pucharse=useSelector(state=>state.pucharse)
const dispatch=useDispatch(); 

useEffect(()=>{
dispatch(getPucharseThunk())
},[])

console.log(pucharse)
    return (
        <div>
            <h2 style={{textAlign:"center"}}>purchases</h2>
            {pucharse.map(pucharse=>{
                return(
                    <div className='pucharse-card' key={pucharse.cartId}>
                        <p>{pucharse.createdAt}</p>
                        {pucharse.cart.products.map((product,index)=>{
                            return(
                                <ul key={index}>
                                    <Link to={`/product/${product.id}`}>
                                    <li>{product.title} {product.brand}</li>
                                    </Link>
                                    <li>Quantity:{product.productsInCart.quantity}</li>
                                    <li>Total Price:{product.price*product.productsInCart.quantity}$</li>
                                </ul>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
};

export default Favorites;