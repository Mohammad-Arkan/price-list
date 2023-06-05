import React, { useEffect, useState } from 'react';
import Price from '../Price/Price';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(()=>{
        fetch('prices.json')
        .then( res => res.json())
        .then( data => setPrices(data))
    },[])
    return (
        <div>
            <h2 className='text-5xl text-center p-4 text-purple-950 bg-purple-300 font-bold'>Awesome Affordable Prices</h2>
           <div className='grid grid-cols-3 gap-4 p-12'>
           {
                prices.map(price=> <Price
                key={price.id}
                price={price}
                ></Price>)
            }
           </div>
        </div>
    );
};

export default PriceList;