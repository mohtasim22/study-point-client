import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import LogIn from "../shared/LogIn";
import Register from "../shared/Register";
import NotFoundPage from "../shared/NotFoundPage";
import AddProduct from "../shared/AddProduct";
import MyCart from "../shared/MyCart";
import UpdateProduct from "../shared/UpdateProduct";
import ProductDetails from "../shared/ProductDetails";
import Products from "../shared/Products";
import Brands from "../shared/brands";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <NotFoundPage></NotFoundPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://brand-shop-server-brown-pi.vercel.app/brands'),
        },
        {
            path: "/brands",
            element: <Brands></Brands>,
            loader: () => fetch('https://brand-shop-server-brown-pi.vercel.app/brands'),
        },
        {
            path: "/myCart",
            element: <PrivateRoutes><MyCart></MyCart></PrivateRoutes> ,
            loader: () => fetch('https://brand-shop-server-brown-pi.vercel.app/myCartProducts')
                        
        },
        {
            path: "/addProduct",
            element: <PrivateRoutes><AddProduct></AddProduct></PrivateRoutes> 
                        
        },
        {
            path: "/products/:brand",
            element: <Products></Products>,
            loader: ({params}) => fetch(`https://brand-shop-server-brown-pi.vercel.app/products/${params.brand}`)            
        },
        {
            path: "/productDetails/:id",
            element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes> ,
            loader: ({params}) => fetch(`https://brand-shop-server-brown-pi.vercel.app/product/${params.id}`)
                        
        },
        {
            path: "/updateProduct/:id",
            element: <PrivateRoutes><UpdateProduct></UpdateProduct></PrivateRoutes> ,
            loader: ({params}) => fetch(`https://brand-shop-server-brown-pi.vercel.app/product/${params.id}`)
                      
        },
        {
            path: "/login",
            element: <LogIn></LogIn>
            
        },
        {
            path: "/register",
            element: <Register></Register>
        },
      ]
    },
  ]);

  export default router;