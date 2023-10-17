import axios from "axios";
import { baseURL } from "./baseURL";



let getAllRecords = (path) => axios.get(`${baseURL}${path}`);



export { getAllRecords }