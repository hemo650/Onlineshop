import axios from "axios"; 

const instance = axios.create({
    baseURL:'http://localhost:5001/web-app-a865f/us-central1/api'
});

export default instance; 