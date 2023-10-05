// import React from 'react'
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// export default function ConfirmationCode() {
//     // const newLocal = "--fa-primary-color: #0548bd; --fa-secondary-color: #0d5de7; --fa-secondary-opacity: 0.5;"
//   return (
//     <div class="d-flex flex-column justify-content-center align-items-center w-50" style={{ }}>
        
//         <i class="fa-solid fa-unlock-keyhole w-50" style={{color: "#0548bd"}}></i>
//         <input type='text' placeholder='code' class="w-50"/>
//         <button type="button" class="w-25 btn btn-primary col-1">Submit</button>

//     </div>
//   )
// }
import React from 'react';


const CenteredComponent = () => {
  return (
    <div style={{display: "flex", height: "100vh"}}> 
      <div className="card d-flex flex-column justify-content-center align-items-center center-item shadow-lg pt-5" style={{width: "25rem", height:"30rem",margin:"auto"}}>
        <i className="fa-solid fa-unlock-keyhole w-100 " style={{color: "#0d6efd" , fontSize:"100px", height:"100px "}}></i>
        <div className="card-body d-flex flex-column justify-content-start align-items-center w-70  mt-5">
          <h5 className="text-dark font-weight-bold">ادخل كود التأكيد</h5>
          <input type='text' placeholder='code' class="w-700 rounded border border-primary mt-2 " style={{width: "20rem"}}/>
          <button type="button" class="btn btn-primary btn-lg mt-3" style={{backgroundcolor:"#0d6efd"}}>Submit</button>
        </div>
      </div>
    </div>
    
  );
};

export default CenteredComponent;