import React from "react";
import { Trans } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Register.css";

function Register() {
  return (
    <div dir="rtl" className="container px-5 my-5">
      <div className="row">
        <div
          className="text-light p-5 rounded-top-3 justify-content-between"
          style={{ background: "linear-gradient(to left, #1e549f, #5fc9f3)" }}
        >
          <div className="d-flex flex-column justify-content-between col-md-9 col-sm-12">
            <span className="fs-2 mb-4">
              <Trans i18nKey="compensation-1  ">
                طريقة تقديم المطالبات والتعويضات
              </Trans>
            </span>
            <div className=" ">
              <Trans i18nKey="compensation-2">
                <span className="fa-md">
                  يمكنك الان تقديم طلب التعويض عن طريق المنصة دون العناء لزيارة
                  فروع الشركة
                </span>
              </Trans>
            </div>
          </div>
          <div className="col-md-3 col-sm-12  d-flex justify-content-end">
            <button className="btn m-auto text-primary mt-4 bg-white fw-bolder">
              <span className="lead fw-bold">
                <Trans i18nKey="compensation-button">طلب تعويض</Trans>
              </span>
            </button>
          </div>
        </div>

        <div className="row my-5 justify-content-center display-5">
          <Trans i18nKey="register">سجل معنا</Trans>
        </div>

        <div className="row justify-content-between">
          <div className="card col-md-6">
            <div className=" bg-gradient">
              <h5 className="card-title">تسجيل ك شركة</h5>
            </div>
            <div className="">
              <div className="">
                <i className="fa-solid fa-users-line icon"></i>
              </div>
              <p className="card-text">
                بالتسجيل كشركة في منصتنا يتيح للشركة تقديم خدمات ضمان مخصصة
                للعملاء، مما يزيد من الاقبال على منتجاتها ويعزز من رضا العملاء
                بالاضافة الى تقليل المسؤلية المالية وتحسين التنافسية في السوق
              </p>
            </div>
          </div>
          <div className="card col-md-6">
            <div className=" bg-gradient">
              <h5 className="card-title">تسجيل ك فرد</h5>
            </div>
            <div className="card-body">
              <div className="">
                <i className="fa-solid fa-user"></i>
              </div>
              <p className="card-text">
                بالتسجيل كفرد في منصتنا يمكنك انشاء طلب صيانة او تعويض لجهازك
                باستخدام رقم الضمان، نوفر لك حماية لاجهزتك من الاضرار والمخاطر
                مثل الكسر والسرقة مع خدمة عملاء متخصصة
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
