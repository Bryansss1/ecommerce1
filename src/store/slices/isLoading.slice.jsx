import { createSlice } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoadingSlice',
    initialState: false,
    reducers: {
        setLoading:(state,action)=>{
            return action.payload
        }


        
    }
})

export const { setLoading  } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
