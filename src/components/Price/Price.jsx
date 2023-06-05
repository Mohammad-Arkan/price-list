import React from 'react';

const Price = (props) => {
const { price, name, features} = props.price
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-3'>
            <h1 className='text-4xl font-bold'>Price: {price}
            <span className='text-2xl font-semibold'> /month</span></h1>
            <p className='text-2xl font-medium'>Name: {name}</p>
            <p className='text-1xl font-semibold'>Up comming features: </p>
            <p>
                {
                    features.map(featur => <li>{featur}</li>)

                }
            </p>
        </div>
    );
};

export default Price;