import React from 'react'
import check from "../../assets/images/check.png";

export default function Review() {
  return (
    // <div  className="containter" style={{display: "flex", height: "100vh",width:"100vw", textAlign: "center", flexDirection: "column",alignItems:"center", justifyContent:"center", rowGap:"10px"}}>
    //   <p>طلبك قيد المراجعة</p>
    //     <div className="card" style={{width: "45rem", height: "20rem", margin: " 30px auto"}}>
    //         <img src={check} class="card-img-top" style={{ width: "30%", margin: "auto" }} alt="..."/>
    //         <div className="card-body">
    //             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //         </div>
    //     </div>
    // </div>
    <div class="container d-flex justify-content-center align-items-center flex-column " style={{display: "flex", height: "100vh"}}>
      <h2 class="mb-5">طلبك قيد المراجعة</h2>
      <div class="row container d-flex justify-content-center align-items-center flex-column bg-light shadow-lg">
        <div class="col-md-4">
          <img src={check} alt="..." class="img-fluid"/>
        </div>
        <div class="col-md-4">
          <p>طلبك قيد المراجعة وسيتم الرد عليك في اقرب وقت</p>
        </div>
      </div>
</div>
  )
}

