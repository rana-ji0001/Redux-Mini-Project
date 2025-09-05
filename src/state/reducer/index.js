import { combineReducers } from "redux";
import amtReducer from "./amtReducer";
const reducer = combineReducers ({
    amount: amtReducer
})

export default reducer