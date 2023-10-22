import { useParams } from 'react-router-dom';
import { addNewUser, editUser, getUserById } from '../../../APIs/users';
import './User.scss';
import defaultProfilePic from '../../../assets/images/dashboard/profile-pic.jpg';
import React, { useEffect, useState, useRef } from 'react';
import Map from '../companies/Map';
import { Trans } from 'react-i18next';
// import useFetch from '../../../hooks/useFetch';
// import { createUserSchema, updateUserSchema } from './user.validation';


export default function User() {
  let [user, setUser] = useState({});
  let [isLoading, setIsLoading] = useState();
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

    if (id !== 'add') {
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



  // const validateUserData = (userData, schema) => {
  //   const { error } = schema.validate(userData, { abortEarly: false });
  //   if (error) {
  //     // Handle validation errors here, for example, by displaying error messages to the user.
  //     console.log(error.details);
  //     return false; // Validation failed
  //   }
  //   return true; // Validation succeeded
  // };



  const handleSave = async () => {
    const data = new FormData();
    data.append('firstName', user.firstName);
    data.append('lastName', user.lastName);
    data.append('profileImg', selectedImage);
    data.append('latitude', latitude); //Testing purposes for now
    data.append('longitude', longitude);


    if (id === 'add') {
      data.append('role', user.role || 'admin');
      data.append('phone', user.phone);
      data.append('email', user.email);
      data.append('password', '12345678'); //Static Password for each new user
    }


    // // Validate the user data based on the 'createUserSchema' or 'createAdminUserSchema'
    // const isValidData = id === 'add'
    //   ? validateUserData(user, createUserSchema)
    //   : validateUserData(user, updateUserSchema);

    // if (!isValidData) {
    //   // Handle validation errors and return if the data is invalid.
    //   return;
    // }


    // Send to BackEnd
    try {
      if (id === 'add') {
        console.log('ADD', data);
        await addNewUser(data, user.role);
      }
      else {
        console.log('Edit', data);
        await editUser(id, data);
      }
    } catch (error) {
      console.log(error);
    }

    console.log('User data to be saved:');
    console.log(data);
  };
  /////////location

  const [showMap, setShowMap] = useState(false);
  const [chosenLocation, setChosenLocation] = useState(null);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const handleCoordinatesChange = (lat, lng) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const handleMapClick = (e) => {
    setChosenLocation(e.latlng);
  };

  const handleButtonClick = () => {
    setShowMap(true);
  };
  return (
    <div className='user w-100 mt-2 px-3'>
      <h2 className='text-center'>{id === 'add' ? <Trans i18nKey='add-new-user' /> : <Trans i18nKey='user-details' />}</h2>
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
            <label><Trans i18nKey='first-name' /></label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={user?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='last-name' /></label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={user?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='role' /></label>
            <select
              className="form-control"
              name="role"
              value={user?.role}
              onChange={handleInputChange}
            >
              <option value='' disabled required selected><Trans i18nKey='choose-role' /></option>
              {/* <option value={'individual'}>Individual</option> */}
              <option value={'admin'} selected><Trans i18nKey='admin' /></option>
              <option value={'compensationDepart'}><Trans i18nKey='compensations-dept' /></option>
              <option value={'requestsDepart'}><Trans i18nKey='requests-dept' /></option>
            </select>
          </div>
          <div className="form-group">
            <label><Trans i18nKey='verified' /></label>
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
            <label><Trans i18nKey='verified-email' /></label>
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
            <label><Trans i18nKey='verified-phone' /></label>
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
            <label><Trans i18nKey='phone' /></label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={user?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='email' /></label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={user?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
              <label>Location:</label>
              <div>
                <button
                  className="btn btn-outline-light form-control"
                  onClick={handleButtonClick}
                >
                  Choose Your Location
                </button>
                {showMap && (
                  <Map
                    onCoordinatesChange={handleCoordinatesChange}
                    className="map"
                    style={{ height: "250px" }}
                    center={[24.774265, 46.738586]}
                    zoom={5}
                    onClick={handleMapClick}
                    chosenLocation={chosenLocation}
                  />
                )}
                <p>Latitude: {latitude}</p>
                {/* <p>Longitude: {longitude}</p>    */}
              </div>
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
            {id === 'add' ? (<Trans i18nKey='add' />) : (<Trans i18nKey='save' />)}
          </button>
        </div>
      </div>}
    </div>
  )
}
