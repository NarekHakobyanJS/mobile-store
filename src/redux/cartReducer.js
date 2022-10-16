const SEND_CART = "SEND_CART";
const DELETE_CART = "DELETE_CART";

let initialState = {
    cartStore : [

    ]
}
const cartReducer = (state = initialState, action ) => {
    switch(action.type) {
        case SEND_CART : 
            return {
                ...state,
                cartStore : [...state.cartStore, action.item]
            }
        case DELETE_CART : 
            return {
                cartStore : [...state.cartStore.filter(el => el.id !== action.id)]

            }
    }
    return state
}

export const sendToCartAC = (item) => ({type : SEND_CART, item : item})
export const deleteCartAC = (id) => ({type : DELETE_CART, id : id})
export default cartReducer;