import { createBrowserRouter } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import Products from "../../pages/Products/Products";

export const router = createBrowserRouter([
    {
        path : '/',
        element : <Layout />,
        children : [
            {
                index : true,
                element : <Home />
            },
            {
                path : '/products',
                element : <Products />
            }
        ]
    }
])