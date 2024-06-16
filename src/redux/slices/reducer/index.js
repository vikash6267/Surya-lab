import { combineReducers } from "@reduxjs/toolkit"

import authReducer from "../authSlice"
import profileReducer from "../profileSlice"
import productReducer from "../product"


const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  product: productReducer,


  })
  
  export default rootReducer