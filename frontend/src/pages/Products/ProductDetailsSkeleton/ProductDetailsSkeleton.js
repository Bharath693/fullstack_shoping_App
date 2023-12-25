import React from 'react';
import Thumbnail from '../../../components/HomePageProducts/Thumbnail/Thumbnail';
import Text from '../../../components/HomePageProducts/Text/Text';
import Circle from '../../../components/HomePageProducts/Circle/Circle';

const ProductDetailsSkeleton = () => {
  return (
    <div className='w-full flex flex-wrap'>
    <div className='sm:w-6/12 p-5'>
       <div className='w-full'>
          <div className='flex flex-wrap -mx-1'>
              <Thumbnail height="300px"/>
          </div>
       </div>
    </div>
    <div className='sm:w-6/12 p-5'>
        <Text />
        <Text mt="12px"/>
         <div className='flex'>
            <div className='m-2'>
               <Circle />
            </div>
            <div className='m-2'>
               <Circle />
            </div>
         </div>
    </div>
    </div>
  )
}

export default ProductDetailsSkeleton