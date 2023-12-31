import React from 'react'
import { Trans } from 'react-i18next'
const CompanyProfile = () => {
  
  return (
    <div className='container mt-3' >
   
    <div className="row">
      <div className=" mb-1"><h2 className="fw-bold col-md-3 text-center"><Trans i18nKey="company-name"></Trans></h2></div>
  
      <div className="col-md-3 d-flex justify-content-center align-items-center mb-sm-3">
      <div className="position-relative">
        <img src="./images/company.png" className="img-thumbnail img-fluid rounded" alt="Company" />
        <i className="bi bi-pencil position-absolute bg-light opacity-100 fs-3 rounded-5 " style={{ top: '83%', left: '80%', cursor: 'pointer', transform: 'translate(-50%, -50%)' }}></i>
      </div>
    </div>

      <div className="col-md-9 ">
        <form className=''>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6 ">
              <input type="text" className="form-control" id="inputIdentification" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputIdentification" className="col-sm-4 col-form-label  fs-6 fw-bold"><Trans i18nKey="identification-number"></Trans></label>
          </div>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputCompanyName" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputCompanyName" className="col-sm-4 col-form-label fs-6 fw-bold"><Trans i18nKey="company-name"></Trans></label>
          </div>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputtext" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputtext" className="col-sm-4 col-form-label fs-6 fw-bold"><Trans i18nKey="company-mail"></Trans></label>
          </div>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputMobile" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputMobile" className="col-sm-4 col-form-label fs-6 fw-bold"><Trans i18nKey="phone"></Trans></label>
          </div>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputTradeLicense" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputTradeLicense" className="col-sm-4 col-form-label fs-6 fw-bold"><Trans i18nKey="commercial-registration"></Trans></label>
          </div>
          <div className="mb-3 row justify-content-end">
            <div className="col-sm-6">
              <input type="text" className="form-control" id="inputCommission" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputCommission" className="col-sm-4 col-form-label fs-6 fw-bold"><Trans i18nKey="commission-percentage"></Trans></label>
          </div>
        </form>
      </div>
      </div>
      <div className="d-flex justify-content-center mt-4 gap-3">

      <button className=" btn btn-primary fs-6 "><Trans i18nKey="create-warranty-contract"></Trans></button>
      <button className=" btn btn-primary fs-6"><Trans i18nKey="register-warranty-contracts"></Trans></button>
    </div>
    <div className="row mt-4 justify-content-center mt-5">
    <h5 className='text-success text-center '><Trans i18nKey="reviewing"></Trans></h5>
    <div className="col-auto">
        <input className="form-control form-control-lg mt-3 " id="formFileLg" type="file" />
    </div>
    <div className="col-auto">
        <button className="btn btn-primary fs-6 mt-3"><Trans i18nKey="confirming"></Trans></button>
        
    </div>
</div>


  </div>
  
  


  )
}

export default CompanyProfile