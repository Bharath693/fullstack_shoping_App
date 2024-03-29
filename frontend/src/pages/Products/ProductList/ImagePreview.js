import React from 'react'
import "./imagePreview.scss";

const ImagePreview = ({ url, heading }) => {
  return (
    <div className='imagePreview'>
        {url.image !== "" && 
        <div>
            <h4 className='imageHeading'>{url && heading}</h4>
            <div className='imageContainer'>
                <img src={url.image && url.image} alt='Priview image'/>
            </div>
        </div>
        }
    </div>
  )
}

export default ImagePreview