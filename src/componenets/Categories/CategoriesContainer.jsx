import { connect } from "react-redux";
import Categories from "./Categories";
import {filterCategoryAC} from "../../redux/mobileReducer"

let mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        filterCategory : (key) => {
            dispatch(filterCategoryAC(key))
        }
    }
}
const CategoriesContainer = connect(mapStateToProps, mapDispatchToProps)(Categories);
export default CategoriesContainer