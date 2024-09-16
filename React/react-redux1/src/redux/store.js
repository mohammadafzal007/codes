import {configureStore} from '@reduxjs/toolkit'
import cartslice from './slice/cartslice';
const store=configureStore({
    reducer:{
    cart:cartslice

    }
})


export default store;