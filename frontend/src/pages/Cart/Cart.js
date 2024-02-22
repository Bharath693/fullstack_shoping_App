import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { connect } from "react-redux";
import ProductQuantity from "../Products/ProductQuantity/ProductQuantity";
import { discount } from "../../util/discount";

import { removeItemFromCart } from "../Products/store/dispatchers";
import { postPaymentData } from './store/dispatchers';
import {loadStripe} from '@stripe/stripe-js';
//react-icons
import { BsTrash } from "react-icons/bs";

//css file
import "./Cart.scss";

import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

const Cart = ({ cartData, removeItemFromCart, dopayment, paymentSession, token }) => {
 
  const navigate = useNavigate();
  //need to change the name of the removeItemFromCart to cartItems;

  //using this variable to get the CartGrandTotal;
  let totalCartPrice = 0;

  const [cartitems, setCartItems] = useState(cartData ? cartData : []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitems));
    removeItemFromCart(cartitems);
  }, [cartitems, removeItemFromCart]);

  const inc = (id) => {
    let IncFound = cartData.find((item) => item._id === id);
    if (IncFound) {
      setCartItems((prev) => {
        const updatedCart = prev.map((item) =>
          item._id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return updatedCart;
      });
    }
    // Inc_cartQuantity(id)
  };

  const dec = (id) => {
    let decFound = cartData.find((item) => item._id === id);
    if (decFound) {
      setCartItems((prev) => {
        const updatedCart = prev.map((item) =>
          item._id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return updatedCart;
      });
    }
    // Dec_cartQuantity(id)
  };

  const handleRemoveItem = (id) => {
    if (window.confirm("Are You sure do you want to delete this item")) {
      setCartItems((prevItems) => prevItems.filter((item) => item._id !== id));
      removeItemFromCart(cartitems);
    }
  };

  const handlePay = async () => {
    if(token) {
      let userDetails = jwtDecode(token);
      console.log("userDetails",userDetails)
      let datarequiredForPayment ={
        cart:cartitems,
        id: userDetails.id
      }
       dopayment(datarequiredForPayment);
    }else {
      navigate("/login")
    }
  };

  useEffect(() =>{
    if(paymentSession?.data) {
      window.location.href = paymentSession?.data?.url;
    }
   
  },[paymentSession])

  return (
    <div className="cart">
      <Header />
      <div className="continer">
        {cartitems.length > 0 ? (
          <div className="rounded-lg overflow-x-auto w-full">
            <table className="w-full">
              <thead>
                <tr className="text-left bg-gray-200">
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    image
                  </th>
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    name
                  </th>
                  <th>Color</th>
                  <th>size</th>
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    price
                  </th>
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    qunatities
                  </th>
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    total
                  </th>
                  <th className="p-4 uppercase text-xs font-bold text-gray-600 text-left">
                    delete
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartitems.map((item) => {
                  const percentage = Number(item.discount) / 100;
                  let price = Number(item.price);
                  let discountPrice = price - price * percentage;
                  totalCartPrice += discount(item) * Number(item.quantity);
                  return (
                    <tr>
                      <td className="p-4 text-sm text-gray-700">
                        <img
                          src={`http://localhost:5000/api/${item.image}`}
                          alt=""
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      </td>
                      <td className="p-4 text-sm text-gray-700 font-medium">
                        {item.title}
                      </td>
                      <td>
                        <span
                          className="block w-[15px] h-[15px] rounded-full"
                          style={{ backgroundColor: item.color }}
                        ></span>
                      </td>
                      <td>{item.size}</td>
                      <td className="p-4 text-sm text-gray-900 font-bold">
                        ₹{discountPrice}
                      </td>
                      <td>
                        <ProductQuantity
                          quantity={item.quantity}
                          inc={() => inc(item._id)}
                          dec={() => dec(item._id)}
                        />
                      </td>
                      <td className="p-4 text-sm text-gray-900 font-bold">
                        {discount(item) * Number(item.quantity)}
                      </td>
                      {/* <td></td> */}
                      <td>
                        <span className="cursor-pointer">
                          <BsTrash
                            className="text-rose-600"
                            size={20}
                            onClick={() => handleRemoveItem(item._id)}
                          />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="bg-indigo-50 p-3 flex justify-end mb-2 mx-1 mt-10 rounded-md">
              <div>
                <span className="text-lg font-semibold text-indigo-800 totalCartPrice">
                  GrandTotal = ₹{totalCartPrice}
                </span>
                <button
                  className="bg-indigo-600 py-2 px-3 text-white rounded uppercase"
                  onClick={handlePay}
                >
                  checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          "Cart is empty"
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ product, payment, login }) => {
  return {
    cartData: product.removeItemFromCart,
    paymentSession: payment.postPaymentData,
    token:login.loginDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItemFromCart: (data) => dispatch(removeItemFromCart(data)),
    dopayment: (dataForPayment) => dispatch(postPaymentData(dataForPayment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
