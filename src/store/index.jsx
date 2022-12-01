import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice from './slices/isLoading.slice'
import productCartSlice  from './slices/productCart.slice'
import productsSlice from './slices/products.slice'
import  pucharseSlice  from './slices/pucharse.slice'

export default configureStore({
    reducer: {
        loading:isLoadingSlice,
        products:productsSlice,
        pucharse:pucharseSlice,
        cart:productCartSlice,
    }
})
