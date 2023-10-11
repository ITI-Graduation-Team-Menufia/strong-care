import axios from "axios";
import { baseURL } from "./baseURL";

let url = `${baseURL}users/`;

let getAllUsers = () => axios.get(url);
let getUserById = (userId) => axios.get(`${url}${userId}`);
let addNewUser = (user, role) => {
  if(role === 'admin'){
    console.log('Sending an admin..');
  return axios.post(`${url}/addAdmin`, user);
  }else{
    console.log('Sending a user..');
    return axios.post({url}, user);
  }
}
let editUser = (userId, user) =>
  axios.put(`${url}/${userId}`, user, {
    headers: {
      'Content-Type': 'multipart/form-data', // Important for file uploads
    }})
let deleteUser = (userId) => axios.delete(`${url}/${userId}`);
let changeUserPassword = (userId, newPassword) => axios.patch(`${url}/${userId}`, newPassword);
let changeUserPhone = (userId, newPhone) => axios.patch(`${url}/changePhone/${userId}`, newPhone);


export {
  getAllUsers,
  getUserById,
  addNewUser,
  editUser,
  deleteUser,
  changeUserPassword,
  changeUserPhone
};