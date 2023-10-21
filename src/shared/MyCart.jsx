import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
"react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Providers/AuthProvider";
const MyCart = () => {

    const {user}=useContext(AuthContext);
    const products = useLoaderData();
    console.log(products);
    const filterEmail = user.email;
    const filteredProducts = products.filter((product) => product.email === filterEmail);
    console.log(filteredProducts);
    const handleDelete = _id =>{
        //send data to the server 
        fetch(`https://brand-shop-server-brown-pi.vercel.app/myCartProducts/${_id}`, {
            method: 'DELETE',
            headers:{
                'content-type':'application/json',
                // mode: 'no-cors'
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount >0){
                    toast("Product Deleted");
                    window.location.reload();
                }
            })
    }
    return (
        <div className="max-w-6xl mx-auto "> 
            <div className="services-section  text-center margin-y font-rajdhani">
                <div className="title text-center mb-10">
                    <h1 className="font-bold font-rajdhani text-6xl">My Cart Products: {filteredProducts.length}</h1>
                </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {filteredProducts.map((product)=>(
                <div key={product._id} className="card card-compact ">
                    <div className="card-img flex justify-center items-center">
                        <figure><img src={product.image}  /></figure>
                    </div>
                    
                    <div className="card-body justify-start">
                        <h2 className="text-left font-bold  text-2xl">{product.name}</h2>
                        <p className="card-txt text-lg">Brand: {product.brand}</p>
                        <p className="card-txt text-lg">Type: {product.type}</p>
                        <p className="card-txt text-lg">Rating: {product.rating}/5</p>
                        <h6 className=" font-bold text-2xl text-left">Price: {product.price}$</h6>
                        
                        <button onClick={()=>handleDelete(product._id)} className="btn">Delete Product</button>
                        
                        
                    </div>
                </div>
            ))}
                
                
            
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

export default MyCart;