import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counterSlice'
// import UserReducer from '../features/userSlice'
// import ProductReducer from '../features/productSlice'

export default configureStore({
    reducer: {
        counter: CounterReducer,
        // user: UserReducer,
        // product: ProductReducer
    }
})