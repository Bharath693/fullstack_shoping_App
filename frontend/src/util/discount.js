import React from 'react'

export const discount = (getProductName) => {
    const percentage =
    getProductName &&
    Number(getProductName?.discount) / 100;
  let price = Number(getProductName?.price);
   return price - price * percentage;
}
