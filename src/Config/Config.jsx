import axios from "axios";
const baseURL = "https://fakestoreapi.com";

const getData = async (url) => {
  try {
    const response = await axios.get(`${baseURL}/${url}`);
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

const postData = async (url, body) => {
  try {
    const response = await axios.post(`${baseURL}/${url}`, body);
    const result = await response.data;
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export { getData, postData };
