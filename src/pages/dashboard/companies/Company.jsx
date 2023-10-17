import { useParams } from 'react-router-dom';
import { addNewCompany, editCompany, getCompanyById } from '../../../APIs/companies';
import './Company.scss';
import DEFAULT_PROFILE_IMAGE from '../../../assets/images/dashboard/profile-pic.jpg';
import React, { useState, useRef, useEffect } from 'react';
import { addNewUser } from '../../../APIs/users';
import { Trans } from 'react-i18next';


export default function Company() {
  let [company, setCompany] = useState({});
  let [isLoading, setIsLoading] = useState();

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
  }, [id]);

  // Sanitizing company data from user._id & populating company data
  delete company?.user?._id;
  company = { ...company, ...company?.user };
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
  };


  // For uploading images
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCommercialRegisterImage, setSelectedCommercialRegisterImage] = useState(null);
  const [selectedIdentityImage, setSelectedIdentityImage] = useState(null);

  function handleFileChange(event, setterFunction) {
    const file = event.target.files[0];
    setterFunction(file);
  }


    const handleSave = async () => {
    const userData = new FormData();
    userData.append('firstName', 'شركة');
    userData.append('lastName', company.lastName);
    userData.append('password', 'defaultPassword');
    userData.append('profileImg', selectedProfileImage);
    userData.append('latitude', '123.456'); // For location, will come from maps api
    userData.append('longitude', '123.456'); 

    if (id === 'add') {
      userData.append('role', 'company');
      userData.append('phone', company.phone);
      userData.append('email', company.email);
    }

    console.log(userData);

    const companyData = new FormData();
    companyData.append('country', company.country);
    companyData.append('noCommercialRegister', company.noCommercialRegister);
    companyData.append('commission', company.commission);
    companyData.append('legalName', company.legalName);
    companyData.append('commercialRegisterImg', selectedCommercialRegisterImage);
    companyData.append('identityImg', selectedIdentityImage);

    // Send to BackEnd
    try {
      if (id === 'add') {
        let {_id} = (await addNewUser(userData, 'company')).data.data;
        // console.log(_id);
        companyData.append('user', _id);
        await addNewCompany(companyData);
        console.log('Company added Successfully');
      }
      else {
        await editCompany(id, userData);
      }
    } catch (error) {
      console.log(error);
    }

    console.log('Company data to be saved:');
  };


  return (
    <div className='company w-100 mt-2 px-3'>
      <h2 className='text-center'>{id === 'add' ? <Trans i18nKey='add-new-company' /> : <Trans i18nKey='company-details' />}</h2>
      {!isLoading && <div className="d-flex flex-column flex-sm-row mt-5 gap-2">
        <div className='d-flex flex-column col-12 col-sm-5 gap-3 align-items-center'>
          <div className="image-container">
            <img
              src={company?.profileImg?.url || DEFAULT_PROFILE_IMAGE}
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
                onChange={(event)=>handleFileChange(event, setSelectedProfileImage)}
              />
            </div>
          </div>
          <h2>{`${company?.firstName || 'New'} ${company?.lastName || 'Company'}`}</h2>
        </div>
        <div className='col-12 col-sm-5 d-flex flex-column gap-2'>
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
          {/* <div className="form-group">
            <label>User ID:</label>
            <input
              type="text"
              className="form-control"
              name="userId"
              value={company?.userId}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label><Trans i18nKey='first-name' /></label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={company?.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='last-name' /></label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={company?.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='verified' /></label>
            <select disabled
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
            <label><Trans i18nKey='verified-email' /></label>
            <select disabled
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
            <label><Trans i18nKey='verified-phone' /></label>
            <select disabled
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
            <label><Trans i18nKey='phone' /></label>
            <input
              type="text"
              className="form-control"
              name="phone"
              value={company?.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='email' /></label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={company?.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='location' /></label>
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
          {/* <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              className="form-control"
              name="role"
              value={company?.role}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label><Trans i18nKey='country'/></label>
            <input
              type="text"
              className="form-control"
              name="country"
              value={company?.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='commercial-registeration-no'/></label>
            <input
              type="text"
              className="form-control"
              name="noCommercialRegister"
              value={company?.noCommercialRegister}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='legal-name'/></label>
            <input
              type="text"
              className="form-control"
              name="legalName"
              value={company?.legalName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label><Trans i18nKey='legal-office'/></label>
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
          <div className="form-group">
            <label><Trans i18nKey='commercial-registeration-img'/></label>
            <input
                type="file"
                id="file-input"
                name="commercialRegisterImg"
                accept="image/*"
                onChange={(event)=>handleFileChange(event, setSelectedCommercialRegisterImage)}
                className='w-100'
              />
          </div>
          {/* //////////// */}
          {/* <div className="form-group">
            <label>State:</label>
            <input
              type="text"
              className="form-control"
              name="state"
              value={company?.state}
              onChange={handleInputChange}
            />
          </div> */}
          <div className="form-group">
            <label><Trans i18nKey='agent-identification-number'/></label>
            <input
            disabled
              type="text"
              className="form-control"
              name="identificationNo"
              value={company?.identificationNo}
              onChange={handleInputChange}
            />
          </div>
          {/* Identity Img */}
          <div className="form-group">
            <label><Trans i18nKey='identity-img'/></label>
            <input
                type="file"
                id="file-input"
                name="identityImg"
                accept="image/*"
                onChange={(event)=>handleFileChange(event, setSelectedIdentityImage)}
                className='w-100'
              />
          </div>
          <button className="btn btn-success w-50 mt-2 align-self-center" onClick={handleSave}>
          {id === 'add' ? (<Trans i18nKey='add' />) : (<Trans i18nKey='save' />)}
          </button>
        </div>

      </div>}
    </div>
  )
}
