import { produceWithPatches } from 'immer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getProducstThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from 'react-router-dom';
const Newsdetail = () => {
    const navigatee=useNavigate()
    const {id}=useParams()
    const dispatch=useDispatch()
    const products=useSelector(state=>state.products)

    useEffect(()=>{
        dispatch(getProducstThunk())
    },[])

    const productDetail=products.find(pro=>pro.id==id)
    const [imagesele,setImage]=useState(productDetail?.productImgs[0])

    const sugeridos=products.filter(pro=>pro.category.id==productDetail.category.id)
    console.log(productDetail)
    return (
        <div>

            <h2 className='detail-title title-prod'>{productDetail?.title}</h2>
            <ul>
                <li>Product {productDetail?.category.name}</li>
                <li className='priceee'>{productDetail?.price}$</li>
            </ul>

            <section className='card-detail'>
            <img className='image-detail' src={imagesele} alt="imagenprincipal" />
            <ul>
                <li>{productDetail?.description}</li>
            </ul>
            </section>

            <div className='detail-button-buy'>
            <button className='buy-details'>Buy <i className='bx bxs-shopping-bags'></i></button>
            </div>

            <div className='imagenes-detailpro'>
                        {productDetail?.productImgs.map((img,index)=><img onClick={()=>setImage(img)} key={index} src={img} alt='' width="100px"/>)}
            </div>

            <h3 className='suggered-title'>you may also like...</h3>

         <section className='cards-grid'>
            

                {sugeridos.map(prod=>{
                    return(
                <ul key={prod.id} className='card'>
                         <li>{prod.title}</li>
                        <li> {prod.category.name}</li>
                    <img src={prod.productImgs[0]}alt=""/>
                     <li className='priceee'>{prod.price}$</li>
                    <Button onClick={()=>{
                        setImage(prod.productImgs[0])
                        navigatee(`/product/${prod.id}`)
                        }} variant="primary"><i className='bx bx-shopping-bag'></i> Go in details
                    </Button>
                </ul>
                    )
                })}

            </section>
        </div>
    );
};

export default Newsdetail;