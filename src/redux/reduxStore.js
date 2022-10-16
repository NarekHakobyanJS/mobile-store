import {createStore, combineReducers} from "redux";
import mobileReducer from "./mobileReducer";
import cartReducer from "./cartReducer";

let reducers = combineReducers({
    mobilePage : mobileReducer,
    cartPage : cartReducer
})

let store = createStore(reducers)
window.store = store
export default store;