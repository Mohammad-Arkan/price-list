import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Feature from '../Feature/Feature';

const Price = (props) => {
const { price, name, features} = props.price
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-3'>
            <h1 className='text-4xl font-bold'>Price: {price}
            <span className='text-2xl font-semibold text-white'> /month</span></h1>
            <p className='text-2xl font-medium'>Name: {name}</p>
            <p className='text-1xl font-semibold text-white'>Up comming features: </p>
            <p className=''>
            <ch className="h-6 w-6 text-blue-500" />
                {
                    features.map((featur, idx )=> <Feature
                    key={idx}
                    featur={featur}
                    ></Feature>)

                }
            </p>
        </div>
    );
};

export default Price;