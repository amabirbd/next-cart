import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import appointmentReducer from '../features/appointment/appointmentSlice'
import cartReducer from './cart/cartSlice'
import productsReducer from './product/productSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
    cart: cartReducer,
    products: productsReducer,
  },
})
