import { useParams } from "react-router-dom";
import {
  addNewCompany,
  editCompany,
  getCompanyById,
} from "../../../APIs/companies";
import "./Company.scss";
import DEFAULT_PROFILE_IMAGE from "../../../assets/images/dashboard/profile-pic.jpg";
import React, {useState,useRef,useEffect} from "react";
import { addNewUser } from "../../../APIs/users";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js‏‏"
import Map from "./Map";
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

    if (id !== "add") {
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
    console.log(name, value);
  };

  // For uploading images
  const [selectedProfileImage, setSelectedProfileImage] = useState(null);
  const [selectedCommercialRegisterImage, setSelectedCommercialRegisterImage] =
    useState(null);
  const [selectedIdentityImage, setSelectedIdentityImage] = useState(null);

  function handleFileChange(event, setterFunction) {
    const file = event.target.files[0];
    setterFunction(file);
  }

  const handleSave = async () => {
    const userData = new FormData();
    userData.append("firstName", company.firstName);
    userData.append("lastName", company.lastName);
    userData.append("password", "defaultPassword");
    userData.append("profileImg", selectedProfileImage);
    userData.append("latitude", latitude); // For location, will come from maps api
    userData.append("longitude", longitude);

    if (id === "add") {
      userData.append("role", "company");
      userData.append("phone", company.phone);
      userData.append("email", company.email);
    }

    console.log(userData);

    const companyData = new FormData();
    companyData.append("country", company.country);
    companyData.append("noCommercialRegister", company.noCommercialRegister);
    companyData.append("commission", company.commission);
    companyData.append("legalName", company.legalName);
    companyData.append("latitude", latitude);  
    companyData.append("longitude", longitude)
    companyData.append(
      "commercialRegisterImg",
      selectedCommercialRegisterImage
    );
    companyData.append("identityImg", selectedIdentityImage);
    
    // Send to BackEnd
    try {
      if (id === "add") {
        let { _id } = (await addNewUser(userData, "company")).data.data;
        console.log(_id);
        companyData.append("user", _id);
        await addNewCompany(companyData);
        console.log("Company added Successfully");
      } else {
        await editCompany(id, userData);
      }
    } catch (error) {
      console.log(error);
    }

    console.log("Company data to be saved:");
    console.log(companyData)
    console.log(longitude)
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
    <div className="company">
      <h2>{id === "add" ? "Create New Company" : "Company Details"}</h2>
      {!isLoading && (
        <div className="container d-flex flex-column flex-sm-row mt-3 gap-2">
          <div className="d-flex flex-column col-12 col-sm-5 gap-3 align-items-center">
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
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={(event) =>
                    handleFileChange(event, setSelectedProfileImage)
                  }
                />
              </div>
            </div>
            <h2>{`${company?.firstName || "New"} ${
              company?.lastName || "Company"
            }`}</h2>
          </div>
          <div className="col-12 col-sm-5 d-flex flex-column gap-1">
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
                disabled
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
                disabled
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
                disabled
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
                {/* <p>Latitude: {latitude}</p> */}
                {/* <p>Longitude: {longitude}</p>    */}
              </div>
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
              <p className="text-danger">To be changed to a map </p>
            </div>
            {/* Commercial register image */}
            <div className="form-group">
              <label>Commercial Register Img:</label>
              <input
                type="file"
                id="file-input"
                name="commercialRegisterImg"
                accept="image/*"
                onChange={(event) =>
                  handleFileChange(event, setSelectedCommercialRegisterImage)
                }
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
              <label>Identification Number:</label>
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
              <label>Identity Img:</label>
              <input
                type="file"
                id="file-input"
                name="identityImg"
                accept="image/*"
                onChange={(event) =>
                  handleFileChange(event, setSelectedIdentityImage)
                }
              />
            </div>
            <button
              className="btn btn-success w-50 mt-2 align-self-center"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
