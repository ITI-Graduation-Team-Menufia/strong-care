import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="d-felx-column m-0">
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted"
        dir="rtl"
        id="footer"
      >
        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3 pt-5">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">الضمانات</h6>
                <p>انواع الضمانات</p>

                <h6 className="text-uppercase fw-bold mb-4">التعويضات</h6>
                <p>انواع التعويضات</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">شؤون قانونية</h6>
                <p>المستندات</p>
                <p>سياسة الخصوصية</p>
                <p>الامن والحماية</p>
                <p>شروط الاستخدام</p>

                <h6 className="text-uppercase fw-bold mb-4">الشركات </h6>
                <p>حول الشركات</p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 ">
                <h6 className="text-uppercase fw-bold mb-4">مركز الاتصال</h6>
                <p>
                  <MDBIcon icon="phone" className="mx-3" /> + 01 234 567 88
                </p>

                <h6 className="text-uppercase fw-bold mb-4">الفرع الرئيسي</h6>
                <p>المطالبات</p>
                <p>
                  <MDBIcon icon="envelope" className="mx-3" />
                  info@example.com
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="mx-auto">
            <span className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </span>
            <span className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </span>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023
          <span className="text-reset fw-bold">Menoufia Team</span>
        </div>
      </MDBFooter>
    </div>
  );
}
