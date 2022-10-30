import React from 'react'
// import { config_data } from "../config/config"
import axios from "axios";

export const postApiCalling = (url,data) => {
  const url_post = process.env.REACT_APP_BASE_URL+url;
  return new Promise(async (resolve,reject)=>{
   await axios.post(url_post,data).then((res) =>{
       return resolve(res)
      //   console.log(res)
     }).catch((err) =>{
        console.log(err)
     })
  })
}

export const getApiCalling = async (url,data) =>{
   const url_post = process.env.REACT_APP_BASE_URL+url;
   try {
      return await new Promise(async (resolve, reject) => {
         await axios.get(url_post, data).then((res) => {
            resolve(res);
         });
      });
   } catch (err) {
      console.log(err);
   }
}
