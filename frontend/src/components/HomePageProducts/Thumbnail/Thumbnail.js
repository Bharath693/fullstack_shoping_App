import React from 'react';
import Animate from "../Animate/Animate";
import "./Thumbnail.scss";

const Thumbnail = () => {
  return (
    <div className='flex flex-wrap -mx-4 w-full h-[150px] thumbnail'>
        {[1,2,3,4,5].map((num) =>{
            return(
                <div className='w-6/12 sm:w-4/12 md:w-3/12 lg:w[20%] xl:w-2/12 p-4 rounded-md mr-4 bg-indigo-50 relative'>
                    <Animate />
                </div>
            )
        })}
    </div>
  )
}

export default Thumbnail