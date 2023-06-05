import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({featur}) => {
    
    return (
        <div className='flex p-1'>
             <CheckCircleIcon className="h-6 w-6 text-white mr-1" />
           <span>{featur}</span>
        </div>
    );
};

export default Feature;