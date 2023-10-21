import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";
const ProductDetails = () => {
    const product = useLoaderData();
    const {user}=useContext(AuthContext);
        
    const handleAddToCart = e =>{
        e.preventDefault();  
        const name= product.name;
        const email= user.email;
        const image=product.image;
        const brand=product.brand;
        const type=product.type;
        const price=product.price;
        const rating=product.rating;
        const description=product.description;
        const newProduct={name,email,image,brand,type,price,rating,description};
        console.log(newProduct);
        //send data to the server 

        fetch('https://brand-shop-server-brown-pi.vercel.app/myCartProducts', {
            method: 'POST',
            // mode: 'no-cors',
            headers:{
                'content-type':'application/json',
                // 'Access-Control-Allow-Origin':'*',
                // 'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
                // 'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.insertedId){
                    toast("Product Added to Cart");
                }
            })
    }


    return (
        <div>
            <div className="services-section max-w-6xl mx-auto py-16 font-rajdhani text-center">
                <div className="title text-center mb-10">
                    <h1 className="font-bold font-rajdhani text-6xl">Product: {product.name}</h1>
                </div>
                <div className="grid grid-cols-1">
                    
                    <div className="card card-compact ">
                        <figure><img src={product.image}  /></figure>
                        <div className="card-body justify-start">
                            <h2 className="text-left font-bold  text-2xl">{product.name}</h2>
                            <p className="card-txt text-lg">Brand: {product.brand}</p>
                            <p className="card-txt text-lg">Type: {product.type}</p>
                            <p className="card-txt text-lg">Rating: {product.rating}/5</p>
                            <p className="card-txt">{product.description}</p>

                            <h5>Price: {product.price}$</h5>
                            
                            <button onClick={handleAddToCart} className="btn">Add to Cart</button>
                            
                            
                        </div>
                    </div>
                    
                
                </div>
            
            </div>
            <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
        </div>
    );
};

export default ProductDetails;