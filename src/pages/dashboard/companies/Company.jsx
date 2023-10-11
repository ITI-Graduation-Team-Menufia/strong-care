import { useParams } from 'react-router-dom';
import { addNewCompany, editCompany, getCompanyById } from '../../../APIs/companies';
import './Company.scss';
import defaultProfilePic from '../../../assets/images/dashboard/profile-pic.jpg';
import React, { useState, useRef, useEffect } from 'react';


// DUMMY DATA
// let company0 = {
//   id: 1,
//   firstName: 'Samsung',
//   lastName: 'Company',
//   phone: '1234567890',
//   email: 'samsung@gmail.com',
//   location: 'Washington',
//   profileImg: {url:'https://picsum.photos/400'},
//   role: 'company',
//   country: 'USA',
//   noCommercialRegister: '3132133120',
//   legalName: 'Samsung',
//   legalLocation: 'USA, America',
//   commercialRegisterImg: 'https://picsum.photos/400',
//   state:'verified',
//   identificationNo: '021354',
//   identityImg: 'https://picsum.photos/400',
// }


export default function Company() {
  // set a state for the user to make it interact with the form modifications
  let [company, setCompany] = useState({});
  let [isLoading, setIsLoading] = useState();

  // Get company Id from the url (params)
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCompanyById(id);
        setCompany(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    
    if (id !== 'add') {
      fetchData();
    }
  }, []);

  // Sanitizing company data from user._id & populating company data
  delete company?.user?._id;
  company = {...company, ...company?.user};
  delete company?.user;

  // For Image attachment hidden button
  const fileInputRef = useRef(null);
  const handleEditClick = () => {
    fileInputRef.current.click();
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCompany({ ...company, [name]: value });
    // HANDLE SETTING THE ATTACHED IMAGE ON THE USER
    console.log(name, value);
  };



  // For uploading image
  const [selectedImage, setSelectedImage] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];
    setSelectedImage(file);
  }



  const handleSave = async () => {
    let companyToBeSent = {
      firstName: company.firstName,
      lastName: company.lastName,
      password: 'userpassword',
      profileImg: selectedImage,
      role: company.role,
      phone: company.phone,
      email: company.email
    }

    const data = new FormData();
    data.append('firstName', companyToBeSent.firstName);
    data.append('lastName', companyToBeSent.lastName);
    data.append('password', companyToBeSent.password);
    data.append('profileImg', companyToBeSent.profileImg);

    if (id === 'add') {
      data.append('role', companyToBeSent.role);
      data.append('phone', companyToBeSent.phone);
      data.append('email', companyToBeSent.email);
    }

    console.log(data);

    // Send to BackEnd
    try {
      if (id === 'add') {
        console.log(data);
        await addNewCompany(data, companyToBeSent.role);
      }
      else {
        await editCompany(id, data);
      }
    } catch (error) {
      console.log(error);
    }

    console.log('Company data to be saved:');
    console.log(companyToBeSent);
  };


  return (
    <div className='company'>
      <h2>{id === 'add' ? 'Create New Company' : 'Company Details'}</h2>
      {!isLoading && <div className="container d-flex flex-column flex-sm-row mt-3 gap-2">
        <div className='d-flex flex-column col-12 col-sm-5 gap-3 align-items-center'>
          <div className="image-container">
            <img
              src={company?.profileImg?.url || defaultProfilePic}
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
          <h2>{`${company?.firstName || 'New'} ${company?.lastName || 'Company'}`}</h2>
        </div>
        <div className='col-12 col-sm-5 d-flex flex-column gap-1'>
          {/* SHOWING COMPANY ID */}
          {/* <div className="form-group">
            <label>ID:</label>
            <input
              type="text"
              className="form-control"
              name="id"
              value={company.id}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label>First Name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={company?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Last Name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={company?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Verified:</label>
            <select
              className="form-control"
              name="verified"
              value={company?.verified}
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
              value={company?.verifiedEmail}
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
              value={company?.verifiedPhone}
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
              value={company?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={company?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={company?.location}
              onChange={handleInputChange}
            />
            <p className='text-danger'>To be changed to a map </p>
          </div>
          {/* SHOWING COMPANY PROFILE IMG URL */}
          {/* <div className="form-group">
            <label>Profile Image:</label>
            <input
              type="text"
              className="form-control"
              name="profileImage"
              value={company.img}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={company?.role}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={company?.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>No. Commercial Register:</label>
            <input
              type="text"
              className="form-control"
              name="noCommercialRegister"
              value={company?.noCommercialRegister}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Legal Name:</label>
            <input
              type="text"
              className="form-control"
              name="legalName"
              value={company?.legalName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Legal Location:</label>
            <input
              type="text"
              className="form-control"
              name="legalLocation"
              value={company?.legalLocation}
              onChange={handleInputChange}
            />
            <p className='text-danger'>To be changed to a map </p>
          </div>
          {/* Commercial register image */}
          {/* <div className="form-group">
            <label>Commercial Register Img:</label>
            <input
              type="text"
              className="form-control"
              name="commercialRegisterImg"
              value={company?.commercialRegisterImg}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={company?.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Identification Number:</label>
            <input
              type="text"
              className="form-control"
              name="identificationNo"
              value={company?.identificationNo}
              onChange={handleInputChange}
            />
          </div>
          {/* Identity Img */}
          {/* <div className="form-group">
            <label>Identity Img:</label>
            <input
              type="text"
              className="form-control"
              name="identityImg"
              value={company?.identityImg}
              onChange={handleInputChange}
            />
          </div> */}
          <button className="btn btn-success w-50 mt-2 align-self-center" onClick={handleSave}>
            Save
          </button>
        </div>

      </div>}
    </div>
  )
}
