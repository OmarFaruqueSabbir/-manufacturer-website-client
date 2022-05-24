import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ tool }) => {
    const {_id, name, price, img, description, minimumQuantity, availableQuantity } = tool;
    const navigate = useNavigate();
    const handleToolPurchase = id => {
        navigate(`/tool/${id}`)
    }
    return (
        <div>

            <div className='w-[400px] bg-white p-4 mt-3 mb-5'>
                <div className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <div className="w-1/2 bg-cover flex self-center">
                        <img
                            alt='profile'
                            src={img}
                            className='mx-auto object-cover'
                        />
                    </div>

                    <div className="w-full p-4 md:p-4">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-white text-left">{name}</h1>
                        <p className="text-base text-black text-justify font-medium"> </p>

                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-justify">{description}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-left"><strong>Min. Quantity: </strong>{minimumQuantity}</p>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-left"><strong>Available Quantity: </strong> {availableQuantity}</p>

                        <div className="flex justify-between mt-3 items-center">
                            <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price} <span className='text-sm'>per unit</span></h1>
                            <button onClick={() => handleToolPurchase(_id)} className="px-2 py-1 text-xs font-bold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tool;