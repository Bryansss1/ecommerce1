import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../ultis/getConfig';
import { setLoading } from './isLoading.slice';
import { useNavigate } from 'react-router-dom';
export const productCartSlice = createSlice({
    name: 'CartSlice',
    initialState: [],
    reducers: {
        setCart:(state,action)=>{
            return action.payload
        }
    }
})


export const getCartThunk=()=>dispath=>{
    dispath(setLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/cart", getConfig())
    .then(res=>dispath(setCart(res.data.data.cart.products)))
    .catch(error=>console.log(error.response?.data))
    .finally(dispath(setLoading(false)))
}

export const addproductCartThunk=(data)=>dispath=>{
    dispath(setLoading(true))
    axios.post("https://e-commerce-api.academlo.tech/api/v1/cart",data,getConfig())
    .then(res=>dispath(getCartThunk()))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>{
        
        dispath(setLoading(false))
    }
    )
}

export const DeleteproductCartThunk=(data)=>dispath=>{
    dispath(setLoading(true))
    axios.delete(`https://e-commerce-api.academlo.tech/api/v1/cart/${data.id}`,getConfig())
    .then(()=>dispath(getCartThunk()))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>{
        dispath(setLoading(false))
    }
    )
}

export const CheckproductCartThunk=()=>dispath=>{
    dispath(setLoading(true))
    axios.post("https://e-commerce-api.academlo.tech/api/v1/purchases",{},getConfig())
    .then(()=>dispath(setCart([])))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>{
        dispath(setLoading(false))
    }
    )
}







export const updateproductCartThunk=(data)=>dispath=>{
    dispath(setLoading(true))
    axios.patch(`https://e-commerce-api.academlo.tech/api/v1/cart/`,data,getConfig())
    .then(res=>dispath(setCart(res.data.data.cart.products)))
    .catch(error=>console.log(error.response?.data))
    .finally(()=>{
        dispath(setLoading(false))
    }
    )
}

export const { setCart } = productCartSlice.actions;

export default productCartSlice.reducer;
