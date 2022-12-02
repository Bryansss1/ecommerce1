import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './isLoading.slice';

export const productsSlice = createSlice({
    name: 'productsSlice',
    initialState: [],
    reducers: {
        setProduct:(state,action)=>{
            return action.payload
        },
        filterPrice:(state,action)=>{
            //lo destructuru en un objeto lo coloco en un objeto
            const {from,to}=action.payload
                return state.filter(pro=>(pro.price> Number(from)&& pro.price< Number(to)))
        }
    }
})

export const { setProduct,filterPrice } = productsSlice.actions;

export const getProducstThunk=()=>dispatch=>{
    dispatch(setLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res=>dispatch(setProduct(res.data.data.products)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>dispatch(setLoading(false)))
}

export const filterSeccionThunk=(data)=>dispatch=>{
    dispatch(setLoading(true))
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products/?category=${data.id}`)
    .then(res=>dispatch(setProduct(res.data.data.products)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>dispatch(setLoading(false)))
}

export const filtersearch=(data)=>dispatch=>{
    const dateca=data[0].toUpperCase();
    dispatch(setLoading(true))
    axios.get(`https://e-commerce-api.academlo.tech/api/v1/products?query=${dateca}`)
    .then(res=>dispatch(setProduct(res.data.data.products)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>dispatch(setLoading(false)))

}
export default productsSlice.reducer;
