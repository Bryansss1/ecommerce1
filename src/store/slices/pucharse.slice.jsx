import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setLoading } from './isLoading.slice';
import getConfig from '../../ultis/getConfig';

export const pucharseSlice = createSlice({
    name: 'pucharseSlice',
    initialState: [],
    reducers: {
        setpucharse:(state,action)=>{
            return action.payload
        }
    }
})

export const getPucharseThunk=()=>(dispath)=>{
    dispath(setLoading(true))
    axios.get("https://e-commerce-api.academlo.tech/api/v1/purchases",getConfig())
    .then(res=>dispath(setpucharse(res.data.data.purchases)))
    .finally(()=>dispath(setLoading(false)))
}


export const { setpucharse } = pucharseSlice.actions;
export default pucharseSlice.reducer;
