import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import { connect } from 'react-redux'
import ProductQuantity from '../Products/ProductQuantity/ProductQuantity';
import { discount } from '../../util/discount';
import { BsTrash } from "react-icons/bs";
import { IncCartQuantity, DecCartQuantity } from "../Products/store/dispatchers";

const Cart = ({cartData, Inc_cartQuantity, Dec_cartQuantity }) => {
  const [cartitems, setCartItems] = useState(cartData);

  const inc = (id) =>{
    let IncFound = cartData.find((item) =>item._id === id);
    if(IncFound) {
      setCartItems((prev) => {
        const updatedCart = prev.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      });
    }
    // Inc_cartQuantity(id)
  }

  const dec = (id) =>{
    let decFound = cartData.find((item) =>item._id === id);
    console.log("dec",decFound.quantity)
    if(decFound) {
      setCartItems((prev) => {
        const updatedCart = prev.map((item) =>
          item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        return updatedCart;
      });
    }
    // Dec_cartQuantity(id)
  }

  return (
    <div>
        <Header />
        <div className='continer'>
          {cartitems.length > 0 ?
          <div className='rounded-lg overflow-x-auto w-full'>
             <table className='w-full'>
                <thead>
                    <tr className='text-left bg-gray-200'>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        image
                      </th>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        name
                      </th>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        price
                      </th>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        qunatities
                      </th>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        total
                      </th>
                      <th className='p-4 uppercase text-xs font-bold text-gray-600 text-left'>
                        delete
                      </th>
                    </tr>
                </thead>
                <tbody>
                    {cartitems.map((item) =>{
                        const percentage =
                        
                        Number(item.discount) / 100;
                      let price = Number(item.price);
                      let discountPrice =  price - price * percentage;
                        return(
                            <tr>
                                <td className='p-4 text-sm text-gray-700'>
                                    <img 
                                    src={`http://localhost:5000/api/${item.image}`} 
                                    alt=''
                                    className='w-12 h-12 object-cover rounded-full'
                                    />
                                </td>
                                <td className='p-4 text-sm text-gray-700 font-medium'>
                                   {item.title}
                                </td>
                                <td className='p-4 text-sm text-gray-900 font-bold'>
                                    ₹{discountPrice}
                                </td>
                                <td>
                                    <ProductQuantity 
                                    quantity={item.quantity} 
                                    inc={() =>inc(item._id)} 
                                    dec={() =>dec(item._id)}/>
                                </td>
                                <td className='p-4 text-sm text-gray-900 font-bold'>
                                    {discount(item)* Number(item.quantity)}
                                </td>
                                {/* <td></td> */}
                                <td>
                                    <span className='cursor-pointer'>
                                      <BsTrash className='text-rose-600' size={20}/>
                                    </span>

                                </td>
                            </tr>
                        )
                    })}
                </tbody>
             </table>
          </div>
          :
          "Cart is empty"
          }
        </div>
    </div>
  )
}

const mapStateToProps = ({ product }) =>{
    return {
        cartData: product.addCartItem
    }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    Inc_cartQuantity:(id) => dispatch(IncCartQuantity(id)),
    Dec_cartQuantity:(id) => dispatch(DecCartQuantity(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)