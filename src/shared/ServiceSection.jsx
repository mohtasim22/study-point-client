import { BsBoxSeam } from 'react-icons/bs';
import { BiMoneyWithdraw, BiCoinStack } from 'react-icons/bi';
const ServiceSection = () => {
    return (
        <div>
            <div className="services-section font-rajdhani py-10">
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className="services-inner text-center">
                        <div className="icon pb-5">
                            <h1 className='inline-block text-center mx-auto' ><BsBoxSeam/></h1>                       
                        </div>
                        <div className="services-text">
                            <h1 className='font-bold text-2xl pb-5'>Free delivery</h1>
                            <p className='text-lg'>And free returns. See checkout for delivery dates.</p>
                        </div>
                    </div>
                    <div className="services-inner text-center">
                        <div className="icon pb-5">
                            <h1 className='inline-block text-center mx-auto' ><BiMoneyWithdraw/></h1>                       
                        </div>
                        <div className="services-text">
                            <h1 className='font-bold text-2xl pb-5'>Pay monthly at 0% APR</h1>
                            <p className='text-lg'>Choose to check out with Apple Card Monthly Installments.</p>
                        </div>
                    </div>
                    <div className="services-inner text-center">
                        <div className="icon pb-5">
                            <h1 className='inline-block text-center mx-auto' ><BiCoinStack/></h1>                       
                        </div>
                        <div className="services-text">
                            <h1 className='font-bold text-2xl pb-5'>Personalize it</h1>
                            <p className='text-lg'>Engrave your device with your name or a personal note</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceSection;