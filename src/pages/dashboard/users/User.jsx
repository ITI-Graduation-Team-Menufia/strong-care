import { useParams } from 'react-router-dom';
import { addNewUser, editUser, getUserById } from '../../../APIs/users';
import './User.scss';
import defaultProfilePic from '../../../assets/images/dashboard/profile-pic.jpg';
import React, { useEffect, useState, useRef } from 'react';
// import useFetch from '../../../hooks/useFetch';


// DUMMY DATA
// let user0 = {
//   id: 1,
//   firstName: 'John',
//   lastName: 'Doe',
//   phone: '1234567890',
//   email: 'john.doe@example.com',
//   location: 'New York',
//   img: 'https://picsum.photos/400',
//   role: 'Administrator',
// }

export default function User() {
  // set a state for the user to make it interact with the form modifications
  let [user, setUser] = useState({});
  let [isLoading, setIsLoading] = useState();

  // Get user Id from the url (params)
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(id);
        setUser(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };


    if(id !== 'add'){
      fetchData();
    }
  }, [id]);

  // For Image attachment hidden button
  const fileInputRef = useRef(null);

  // Triggers the input type file when the icon is clicked
  const handleEditClick = () => {
    fileInputRef.current.click();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // HANDLE SETTING THE ATTACHED IMAGE ON THE USER
  };

  // For uploading image
  const [selectedImage, setSelectedImage] = useState(null);
  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedImage(file);
  }

  const handleSave = async () => {
    const data = new FormData();
    data.append('firstName', user.firstName);
    data.append('lastName', user.lastName);
    data.append('profileImg', selectedImage);
    data.append('latitude', '123.456'); //Testing purposes for now
    data.append('longitude', '123.456');


    if(id === 'add'){
      data.append('role', user.role || 'admin');
      data.append('phone', user.phone);
      data.append('email', user.email);
      data.append('password', '12345678'); //Static Password for each new user
    }

    // Send to BackEnd
    try {
      if(id === 'add'){
        console.log('ADD', data);
        await addNewUser(data, user.role);
      }
      else{
        console.log('Edit', data);
        await editUser(id, data);
      }
    } catch (error) {
      console.log(error);
    }

    console.log('User data to be saved:');
    console.log(data);
  };

  return (
    <div className='user w-100 mt-2 px-3'>
      <h2 className='text-center'>{id === 'add' ? 'Create New User' : 'User Details'}</h2>
      {!isLoading && <div className="d-flex flex-column flex-sm-row mt-5 gap-2">
        <div className='d-flex flex-column col-12 col-sm-5 gap-3 align-items-center'>
          <div className="image-container">
            <img
              src={user?.profileImg?.url || defaultProfilePic}
              alt="img"
              className="image rounded-circle"
            />
            <div className="edit-icon" onClick={handleEditClick}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <input
                type="file"
                id="file-input"
                name="profileImg"
                style={{ display: 'none' }}
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <h2>{`${user?.firstName || 'New'} ${user?.lastName || 'User'}`}</h2>
        </div>
        <div className='col-12 col-sm-5 d-flex flex-column gap-2'>
          {/* SHOWING USER ID */}
          {/* <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              className="form-control"
              name="id"
              value={user._id}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <select
              className="form-control"
              name="role"
              value={user?.role}
              onChange={handleInputChange}
            >
              <option value='' disabled required selected>Choose a role</option>
              {/* <option value={'individual'}>Individual</option> */}
              <option value={'admin'} selected>Admin</option>
              <option value={'compensationDepart'}>Compensation Dept.</option>
              <option value={'requestsDepart'}>Requests Dept.</option>
            </select>
          </div>
          <div className="form-group">
            <label>Verified:</label>
            <select
              className="form-control"
              name="verified"
              value={user?.verified}
              onChange={handleInputChange}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label>Verified Email:</label>
            <select
              className="form-control"
              name="verifiedEmail"
              value={user?.verifiedEmail}
              onChange={handleInputChange}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label>Verified Phone:</label>
            <select
              className="form-control"
              name="verifiedPhone"
              value={user?.verifiedPhone}
              onChange={handleInputChange}
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={user?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user?.email}
              onChange={handleInputChange}
            />
          </div>
          {/* <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={user?.location || 'Location'}
              onChange={handleInputChange}
            />
            <p className='text-danger'>To be changed to a map </p>
          </div> */}
          {/* SHOWING USER PROFIEL IMG URL */}
          {/* <div className="form-group">
            <label>Profile Image:</label>
            <input
              type="text"
              className="form-control"
              name="profileImage"
              value={user.profileImg.url}
              onChange={handleInputChange}
            />
          </div> */}

          <button className="btn btn-success w-50 mt-2 align-self-center" onClick={handleSave} >
            {id === 'add' ? "Create" : "Save"}
          </button>
        </div>
      </div>}
    </div>
  )
}
