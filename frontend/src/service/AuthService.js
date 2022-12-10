import axios from "axios";


export const postApiCalling = (url,data) => {
  const url_post = process.env.REACT_APP_BASE_URL+url;
 const headers = AuthHeaders();
  return new Promise(async (resolve,reject)=>{
   await axios.post(url_post, data,{headers}).then((res) =>{
       return resolve(res)
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

const AuthHeaders = () =>{
   let headerToken = getSessionToken();
     const headers = {
        "Accept": "application/json",
        "Content-Type":"application/json", 
       "authorization": "Bearer " + headerToken
      }
   return headers;
}

function getSessionToken(){
   // let token = localStorage.getItem('token-data');
   let token = document.cookie;
   console.log(token)
   return token
}





