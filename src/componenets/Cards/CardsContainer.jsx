import { connect } from "react-redux";
import {sendToCartAC} from "../../redux/cartReducer";
import { fullPageAC } from "../../redux/mobileReducer";
import Cards from "./Cards"

let mapStateToProps = (state) => {
    return {
        mobilePage : state.mobilePage.currentStore,
        cartPage : state.cartPage.cartStore,
    }
}

let mapDispatchTOProps = (dispatch) => {
    return {
        sendTOCart : (item) => {
            dispatch(sendToCartAC(item))
        },
        fullPage : (item) => {
            dispatch(fullPageAC(item))
        }
    }
}
const CardsContainer = connect(mapStateToProps, mapDispatchTOProps)(Cards)

export default CardsContainer