import React from 'react';
import { Trans } from 'react-i18next';
import './Register.css';


function Register() {
  return (
    <div dir="rtl">
        <div class="container-reg">

            <div class="compensation">
                <div>
                    <div class="compensation-1"><Trans i18nKey="compensation-1">طريقة تقديم المطالبات والتعويضات</Trans></div>
                    <div class="compensation-2"><Trans i18nKey="compensation-2">يمكنك الان تقديم طلب التعويض عن طريق المنصة دون العناء لزيارة فروع الشركة</Trans></div>
                </div>
                <button><Trans i18nKey="compensation-button">طلب تعويض</Trans></button>
                
            </div>


            <div class="register"><Trans i18nKey="register">سجل معنا</Trans></div>
            
            <div class="registerType">
                <div class="registerType1">
                    <Trans i18nKey="register">
                        <div >
                            <div class="col">
                                <div class="card h-100">
                                    <div class="card-footer card-footer1">
                                        <h5 class="card-title">تسجيل ك شركة</h5>
                                    </div>
                                    <div class="card-body">
                                        <div class="comRegIcon" ><i className="fa-solid fa-users-line icon"></i></div>
                                        <p class="card-text">
                                        بالتسجيل كشركة في منصتنا يتيح للشركة تقديم خدمات ضمان مخصصة للعملاء، 
                                        مما يزيد من الاقبال على منتجاتها ويعزز من رضا العملاء 
                                        بالاضافة الى تقليل المسؤلية المالية وتحسين التنافسية في السوق
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Trans>
                </div>
                <div class="registerType2" >
                <Trans i18nKey="register">
                    <div class="row row-cols-1 row-cols-md-1 g-2">
                        <div class="col">
                            <div class="card h-100">
                                <div class="card-footer card-footer2 ">
                                    <h5 class="card-title">تسجيل ك فرد</h5>
                                </div>
                                <div class="card-body">
                                    <div class="comRegIcon" ><i class="fa-solid fa-user"></i></div>
                                    <p class="card-text">
                                        بالتسجيل كفرد في منصتنا يمكنك انشاء طلب صيانة او تعويض 
                                        لجهازك باستخدام رقم الضمان، نوفر لك حماية لاجهزتك من الاضرار والمخاطر مثل الكسر والسرقة مع خدمة عملاء متخصصة
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
  )
}

export default Register