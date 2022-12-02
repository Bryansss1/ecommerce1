import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser:(state,action)=>{
            return action.payload
        },
    }
})      

export const {  } = userSlice.actions;

export default userSlice.reducer;
