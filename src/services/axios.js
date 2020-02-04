import axios from "axios";
var token = localStorage.getItem('token');

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/v1/',
    // timeout: 2000,
    headers: { Authorization: `Bearer ${token}` }
  });


 export default instance;