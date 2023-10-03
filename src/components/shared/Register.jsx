import React from "react";
import { Trans } from "react-i18next";
import "./Register.css";

function Register() {
  return (
    <div dir="rtl " className="register">
      <div className="container-reg">
        <div className="compensation">
          <div>
            <div className="compensation-1">
              <Trans i18nKey="compensation-1">
                طريقة تقديم المطالبات والتعويضات
              </Trans>
            </div>
            <div className="compensation-2">
              <Trans i18nKey="compensation-2">
                يمكنك الان تقديم طلب التعويض عن طريق المنصة دون العناء لزيارة
                فروع الشركة
              </Trans>
            </div>
          </div>
          <button>
            <Trans i18nKey="compensation-button">طلب تعويض</Trans>
          </button>
        </div>

        <div className="register">
          <Trans i18nKey="register">سجل معنا</Trans>
        </div>

        <div className="registerType">
          <div className="registerType1">
            <Trans i18nKey="register">
              <div>
                <div className="col">
                  <div className="card h-100">
                    <div className="card-footer card-footer1">
                      <h5 className="card-title">تسجيل ك شركة</h5>
                    </div>
                    <div className="card-body">
                      <div className="comRegIcon">
                        <i className="fa-solid fa-users-line icon"></i>
                      </div>
                      <p className="card-text">
                        بالتسجيل كشركة في منصتنا يتيح للشركة تقديم خدمات ضمان
                        مخصصة للعملاء، مما يزيد من الاقبال على منتجاتها ويعزز من
                        رضا العملاء بالاضافة الى تقليل المسؤلية المالية وتحسين
                        التنافسية في السوق
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Trans>
          </div>
          <div className="registerType2">
            <Trans i18nKey="register">
              <div className="row row-cols-1 row-cols-md-1 g-2">
                <div className="col">
                  <div className="card h-100">
                    <div className="card-footer card-footer2 ">
                      <h5 className="card-title">تسجيل ك فرد</h5>
                    </div>
                    <div className="card-body">
                      <div className="comRegIcon">
                        <i className="fa-solid fa-user"></i>
                      </div>
                      <p className="card-text">
                        بالتسجيل كفرد في منصتنا يمكنك انشاء طلب صيانة او تعويض
                        لجهازك باستخدام رقم الضمان، نوفر لك حماية لاجهزتك من
                        الاضرار والمخاطر مثل الكسر والسرقة مع خدمة عملاء متخصصة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Trans>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
