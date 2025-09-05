import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer"
import { thunk } from "redux-thunk"



const store = configureStore({
    reducer, // shorthand for reducer: reducer
      middleware: () => [thunk], // replaces default list

})

export default store