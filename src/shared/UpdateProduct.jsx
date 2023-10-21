import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const UpdateProduct = () => {
    const product = useLoaderData();
    console.log(product);

    const handleUpdateProduct = e =>{
        e.preventDefault();
        const form= new FormData(e.currentTarget);
        const name=form.get('name');
        const image=form.get('image');
        const brand=form.get('brand');
        const type=form.get('type');
        const price=form.get('price');
        const rating=form.get('rating');
        const updatedProduct={name,image,brand,type,price,rating}   

        //send data to the server 
        fetch(`https://brand-shop-server-brown-pi.vercel.app/product/${product._id}`, {
            method: 'PUT',
            // mode: 'no-cors',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                    toast("Product Updated");
                }
            })
    }

    return (
        <div className="update-product-section max-w-6xl mx-auto py-16 font-rajdhani">
            <div className="title text-center mb-10">
                <h1 className="font-bold font-rajdhani text-6xl">Update Product: {product.name}</h1>
            </div>
            <div className="w-full p-8 mt-6 overflow-hidden bg-white rounded-md border-2 border-red-500  sm:rounded-lg mx-auto">
                    <form onSubmit={handleUpdateProduct}  className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Product Image
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.image}
                                    name="image"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.name}
                                    name="name"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <label
                                htmlFor="brand"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Brand Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.brand}
                                    name="brand"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <label
                                htmlFor="type"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Type
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.type}
                                    name="type"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <label
                                htmlFor="price"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Price
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.price}
                                    name="price"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>
                        <div>
                            <label
                                htmlFor="rating"
                                className="block text-md font-semibold text-gray-800 undefined"
                            >
                                Rating
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    defaultValue={product.rating}
                                    name="rating"
                                    className="block w-full px-4 py-2 mt-3 text-red-500 bg-white border rounded-md focus:border-red-500 focus:ring-red-500 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            
                        </div>
                        
                        
                        <div className="flex items-center mt-4 col-span-2">
                            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-red-500 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 text-2xl font-bold">
                                Update Product
                            </button>
                        </div>
                    </form>
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

export default UpdateProduct;