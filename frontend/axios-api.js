import axios from 'axios';
import {apiURL} from "./src/constants";

const instance = axios.create({
    baseURL: apiURL
});

export default instance;
