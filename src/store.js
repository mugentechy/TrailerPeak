import { configureStore  } from '@reduxjs/toolkit'
import magnet from "./features/magnet/magnetSlice"



const store = configureStore({
  reducer: {
    magnet
  
  },
  devTools: process.env.NODE_ENV !== 'production',
})
export default store