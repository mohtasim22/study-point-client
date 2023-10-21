import { Link, useLoaderData } from "react-router-dom";

const Products = () => {

    const products = useLoaderData();
    console.log(products);
    let x=0;
    if(products.length==0){
        x =1;
    }

    return (
        <div>
            <div className="services-section max-w-6xl mx-auto text-center my-16 font-rajdhani">
                <div className="title text-center mb-10">
                    <h1 className="font-bold font-rajdhani text-6xl">Products: {products.length}</h1>
                </div>
                <div className="slider my-10">
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/8jq0qwh/apple-ad.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a> 
                            <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/8M840LF/oneplus-ad.png" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a> 
                            <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div> 
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Z8rSqDZ/Sony-ad.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a> 
                            <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            
                {x==1?
                <div className="mx-auto text-center font-extrabold text-3xl pt-16">
                    <h1>Product Stock Out.</h1>
                </div>
                : 
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {products.map((product)=>(
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
                            
                            <Link to={`/productDetails/${product._id}`} ><button className="btn">Product Details</button></Link>
                            <Link to={`/updateProduct/${product._id}`} ><button className="btn">Update Product</button></Link>
                            
                            
                        </div>
                    </div>
                ))}
                    
                    
                
                </div>
                }

            
            
        </div>
        </div>
    );
};

export default Products;