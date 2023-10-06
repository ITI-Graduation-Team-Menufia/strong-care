import React from 'react'
import check from "../../assets/images/check.png";

export default function Review() {
  return (
    <div dir="rtl" class="container d-flex justify-content-center align-items-center flex-column " style={{display: "flex", height: "100vh"}}>
      <h2 class="mb-5">طلبك قيد المراجعة</h2>
      <div class="row container d-flex justify-content-center align-items-center flex-column bg-light">
        <div class="col-md-4">
          <img src={check} alt="..." class="img-fluid"/>
        </div>
        <div class="col-md-4">
          <p class="text-center">طلبك قيد المراجعة وسيتم الرد عليك في اقرب وقت</p>
        </div>
      </div>
</div>
  )
}

