import { Link, useLoaderData } from "react-router-dom";

const Brands = () => {
    const brands = useLoaderData();

    console.log(brands);

    return (
        <div className="brands-section py-14">
            <div className="title text-center mb-10">
                <h1 className="font-bold font-rajdhani text-6xl">Brands</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                {brands.map((brand)=>(
                    
                    <div key={brand._id} className="brand-card flex justify-center items-center flex-col my-5">
                        <div className="brand-img flex justify-center items-center">
                            <Link to={`/products/${brand.brand}`} ><img className="w-3/5 mx-auto" src={brand.image} alt="" /></Link>
                            
                        </div>
                        <div className="brand-title">
                            <h1 className="text-xl font-bold font-rajdhani mt-5">{brand.brand}</h1>
                        </div>                    
                    </div>
                ))}
                
            </div>
        </div>
    );
};

export default Brands;