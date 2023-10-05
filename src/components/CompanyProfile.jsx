import { motion } from 'framer-motion'
import React from 'react'
const CompanyProfile = () => {
  return (
    <motion.div initial={{ opacity: 0,y:500}}
    animate={{ opacity: 1, y:0}}
    transition={{ delay: 0.3,type:'spring' }} className="container my-5">
    <div className="row">
      <div className=" mb-1"><h2 className="fw-bold col-md-3 text-center">اسم الشركة</h2></div>
  
    <div className="col-md-3 d-flex justify-content-center align-items-center mb-sm-3">
  <img src="./images/company.png" className="img-thumbnail img-fluid rounded" alt="Company"></img>
</div>
      <div className="col-md-9">
        <form>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputIdentification" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputIdentification" className="col-sm-4 col-form-label  fs-6 fw-bold">الرقم التعريفي</label>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputCompanyName" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputCompanyName" className="col-sm-4 col-form-label fs-6 fw-bold">اسم الشركة</label>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputtext" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputtext" className="col-sm-4 col-form-label fs-6 fw-bold">ايميل الشركة</label>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputMobile" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputMobile" className="col-sm-4 col-form-label fs-6 fw-bold">رقم الجوال</label>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputTradeLicense" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputTradeLicense" className="col-sm-4 col-form-label fs-6 fw-bold">السجل التجاري</label>
          </div>
          <div className="mb-3 row">
            <div className="col-sm-8">
              <input type="text" className="form-control" id="inputCommission" value="XXXXXXXXXXXXXXXXXXXXX" disabled readonly></input>
            </div>
            <label for="inputCommission" className="col-sm-4 col-form-label fs-6 fw-bold">نسبة العمولة</label>
          </div>
        </form>
      </div>
      </div>
      <div className="d-flex justify-content-center mt-4 gap-3">

      <button className=" btn btn-primary fs-6 ">انشاء عقود ضمان</button>
      <button className=" btn btn-primary fs-6">سجل عقود ضمان</button>
    </div>
  </motion.div>
  
  


  )
}

export default CompanyProfile