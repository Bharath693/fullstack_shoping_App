import axios from "axios";
import { connect } from "react-redux";
import Cookies from "universal-cookie";

export const postApiCalling = (url, data) => {
  const url_post = process.env.REACT_APP_BASE_URL + url;
  const headers = AuthHeaders();
  return new Promise(async (resolve, reject) => {
    await axios
      .post(url_post, data, { headers })
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const postApiCallingWithImageUpload = (url, data) => {
  console.log(data)
  const url_post = process.env.REACT_APP_BASE_URL + url;
  let cookies = new Cookies();
  let token = cookies.get("token");
  return new Promise(async (resolve, reject) => {
    axios
      .post(url_post, data ,{headers:{
        "Content-Type": "multipart/form-data",
        "authorization": `Bearer ${token}`
      }})
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  });
};

export const getApiCalling = async (url) => {
  const url_post = process.env.REACT_APP_BASE_URL + "/api" + url;
  const headers = AuthHeaders();
  try {
    return await new Promise(async (resolve, reject) => {
      await axios.get(url_post, { headers }).then((res) => {
        resolve(res);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateApiCalling = (url, data) => {
  const url_Update = process.env.REACT_APP_BASE_URL + "/api" + url;
  const headers = AuthHeaders();
  try {
    return new Promise(async (resolve, reject) => {
      await axios.put(url_Update, data, { headers }).then((res) => {
        resolve(res);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteApiCalling = (url) => {
  const url_Update = process.env.REACT_APP_BASE_URL + "/api" + url;
  const headers = AuthHeaders();
  try {
    return new Promise(async (resolve, reject) => {
      await axios.delete(url_Update, { headers }).then((res) => {
        resolve(res);
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const AuthHeaders = () => {
  let headerToken = getSessionToken();
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    authorization: "Bearer " + headerToken,
  };
  return headers;
};

function getSessionToken() {
  // let getToken = localStorage.getItem('token');
  let cookies = new Cookies();
  let token = cookies.get("token");
  // let getToken = document.cookie
  // console.log(getToken.split("="))
  // let token = getToken?.split("=")[3]
  return token !== null ? token : null;
}
