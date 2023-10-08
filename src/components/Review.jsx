import React from 'react'
<<<<<<< HEAD
import check from "../../assets/images/check.png";
import { Trans } from "react-i18next";
=======
import check from "../assets/images/check.png";
import { Trans } from "react-i18next";

>>>>>>> 2bf5646d9abb4e897afa1c4a57b040dce612fb5a
export default function Review() {
  return (
    <div dir="rtl" class="container d-flex justify-content-center align-items-center flex-column " style={{display: "flex", height: "100vh"}}>
      <h2 class="mb-5"><Trans i18nKey="waiting-review1" values="ar">طلبك قيد المراجعة</Trans></h2>
      <div class="row container d-flex justify-content-center align-items-center flex-column bg-light">
        <div class="col-md-4">
          <img src={check} alt="..." class="img-fluid"/>
        </div>
        <div class="col-md-4">
<<<<<<< HEAD
          <p class="text-center"><Trans i18nKey="waiting-review2" values="ar">طلبك قيد المراجعة وسيتم الرد عليك في اقرب وقت</Trans></p>
=======
        <p class="text-center"><Trans i18nKey="waiting-review2" values="ar"></Trans></p>
>>>>>>> 2bf5646d9abb4e897afa1c4a57b040dce612fb5a
        </div>
      </div>
</div>
  )
}

