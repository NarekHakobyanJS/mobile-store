import { connect } from "react-redux";
import { deleteCartAC } from "../../redux/cartReducer";
import Carts from "./Carts";

let mapStateToProps = (state) => {
    return {
        cartPage : state.cartPage.cartStore
    }
}

let mapDispatchTOProps = (dispatch) => {
    return {
        deleteCart : (id) => {
            dispatch(deleteCartAC(id))
        }
    }
}

let CartsContainer = connect(mapStateToProps, mapDispatchTOProps)(Carts);
export default CartsContainer