import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterPrice, filtersearch, filterSeccionThunk, getProducstThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const navigatee=useNavigate()
    const dispatchh=useDispatch()
    const products=useSelector(state=>state.products)
    const[categorys,setCategorys]=useState([])
    const [inputsearch,setSearch]=useState("")
    const [barCateg,setbarCateg]=useState(false)
    const[filterbag,setbagFilter]=useState(false)

    const [from,setfrom]=useState("")
    const [to,setTo]=useState("")

    useEffect(()=>{
        dispatchh(getProducstThunk())
        axios.get("https://e-commerce-api.academlo.tech/api/v1/products/categories")
        .then(res=>setCategorys(res.data.data.categories))
    },[])


    return (
        <div>
            <section className='home-interfaz'>

            <article className='categories-home'>

            <div className='filter-price'>
            <p onClick={()=>setbagFilter(!filterbag)}>Filter Price{filterbag?"▼":"▲"}</p>
              <form style={{display:`${filterbag?"":"none"}`}} action="">
              <input type="text" placeholder='from' value={from} onChange={(e)=>setfrom(e.target.value)}/>
              <input type="text" placeholder='to' value={to} onChange={(e)=>setTo(e.target.value)}/>
              <Button onClick={()=>dispatchh(filterPrice({from ,to}))}>filter</Button>
              </form>
            </div>

<div>
            <small style={{cursor:"pointer"}} onClick={()=>dispatchh(getProducstThunk())}>All</small>
            <p onClick={()=>setbarCateg(!barCateg)}>Categories <span>{barCateg?"▼":"▲"}</span></p>
            <ul style={{display:`${barCateg?"block":"none"}`,borderRight:`${barCateg?"1px solid gray":"none"}`}}>
            {categorys?.map(cate=><li onClick={()=>{
              dispatchh(filterSeccionThunk(cate))
              setbarCateg(false)
              }} key={cate.name}>{cate.name}</li>)}
            </ul>
</div>
              </article>

            <InputGroup className="mb-3 homepin">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)}
          value={inputsearch}
        />
        <Button onClick={()=>dispatchh(filtersearch(inputsearch))} variant="outline-secondary" id="button-addon2">
        <i className='bx bx-search-alt'></i>search
        </Button>
      </InputGroup>
    </section>
  
  <section className='cards-grid'>
            {products.map(prod=>{  
    return(
      <ul style={{height:"280px"}} key={prod.id} className='card'>
        <li style={{overflow:"auto"}}>{prod.title}</li>
        <li> {prod.category.name}</li>
        <img src={prod.productImgs[0]}alt=""/>
        <li className='priceee'>{prod.price}$</li>
        <Button onClick={()=>navigatee(`/product/${prod.id}`)} variant="primary"><i className='bx bx-shopping-bag'></i> Go in details</Button>
        </ul>
        )
    })}
 </section>


    </div>  
 );

};


export default Home;