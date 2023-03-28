import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from '../features/counterSlice'
// import UserReducer from '../features/counter/userSlice'
// import ProductReducer from '../features/counter/productSlice'

export default configureStore({
    reducer: {
        counter: CounterReducer,
        // user: UserReducer,
        // product: ProductReducer
    }
})