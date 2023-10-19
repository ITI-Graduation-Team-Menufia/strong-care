import React, { useEffect, useRef } from "react";
import { Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import "./home.css" 
import {
  faAppleAlt,
  faArrowTrendDown,
  faArrowTrendUp,
  faBuilding,
  faCheck,
  faCommentsDollar,
  faFileLines,
  faUser,
  faUsersBetweenLines,
  faUsersGear,
  faX,
}
from "@fortawesome/free-solid-svg-icons";
import CanvasJSReact from "@canvasjs/react-charts";
import { t } from "i18next";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function Home() {
  // the chart
  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2", // "light1", "dark1", "dark2"
    title: {
      text: t("income"),
    },
    axisY: {
      title: t("profits"),
    },
    axisX: {
      title: t("month"),
      prefix: "W",
      interval: 2,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Week {x}: {y}%",
        dataPoints: [
          { x: 1, y: 64 },
          { x: 2, y: 61 },
          { x: 3, y: 64 },
          { x: 4, y: 62 },
          { x: 5, y: 64 },
          { x: 6, y: 60 },
          { x: 7, y: 58 },
        ],
      },
    ],
    //tabel data
  };
  //data of the pending requests
  const tableData = [
    {
      // imageSrc: "../../assets/images/faces-clipart/pic-1.png",
      name: "Salim Store",
      email: "salim@gmail.com",
      phone: "01881314242",
      location: "Makka",
      idNumber: "55",
    },
    {
      // imageSrc: "../../assets/images/faces-clipart/pic-1.png",
      name: "Talal Store",
      email: "talall@gmail.com",
      phone: "01111314242",
      location: "madina",
      idNumber: "44",
    },
    {
      // imageSrc: "../../assets/images/faces-clipart/pic-1.png",
      name: "Super Store",
      email: "super@gmail.com",
      phone: "01111114242",
      location: "reyad",
      idNumber: "33",
    },
    // Add more data objects as needed
  ];
  //animation
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      initial={{ opacity: 0, x: "-100vh" }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", duration: 1 }}
    >
      {/* Content */}
      <div className="row gap-xl-0 gap-lg- container m-auto">
        <h1>
          <Trans i18nKey="home"></Trans>
        </h1>
        {/*  عدد عقود الضمان*/}
        <div class="col-xl-6  col-lg-6 col-md-9  col-sm-8 col-9 grid-margin m-auto  stretch-card mb-2 px-2">
          <div
            className="card h-100"
            style={{ boxShadow: "0px 3px 10px #c1d6fcaf " }}
          >
            <div class="card-body d-flex align-items-center px-1 py-3">
              <div className="fs-1 col-2 text-center">
                <FontAwesomeIcon icon={faFileLines} className="text-primary" />
              </div>
              <div class="d-flex ms-3 ms-md-1 flex-column col-10">
                <div class=" col-9 mb-2 d-flex ">
                  <h5 class="mb-0 ">
                    <Trans i18nKey="warranty-contract-number"></Trans>
                  </h5>
                  <p class="text-success ms-2 mb-0 font-weight-medium mr-2">
                    +3.5%{" "}
                  </p>
                  <FontAwesomeIcon icon={faArrowTrendUp}  className="text-success"/>
                </div>
                <div class="col-3 icon icon-box-success">
                  <h2 className="text-primadry">33</h2>
                  <span class="mdi mdi-arrow-top-right icon-item"></span>
                </div>
                <h6 class="text-muted font-weight-normal">Potential growth</h6>
              </div>
            </div>
          </div> 
        </div>

        {/* عدد الطلبات */}
        <div class="col-xl-6 col-lg-6 col-md-9 col-sm-8 col-9 h-100  m-auto grid-margin  stretch-card mb-2 px-2">
          <div
            className="card"
            style={{ boxShadow: "0px 3px 10px #c1d6fcaf ", maxHeight: "159px"}}
          >
            <div class="card-body d-flex">
              <div className="fs-1 col-2 text-center">
                <FontAwesomeIcon
                  icon={faCommentsDollar}
                  className="textd-primary"
                  style={{ color: "#f36f5f" }}
                />
              </div>
              <div class="d-flex flex-column ms-3 col-10">
                <div class=" col-9 mb-2 d-flex a">
                  <h5 class="mb-0">
                    <Trans i18nKey="requests-number"></Trans>
                  </h5>
                  <p class="text-danger ms-2 mb-0 font-weight-medium mr-2">
                    +3.5%{" "}
                  </p>
                  <FontAwesomeIcon icon={faArrowTrendDown} className="text-danger"/>
                </div>
                <div class="col-3 icon icon-box-success">
                  <h2 className="text-primadry">50</h2>
                  <span class="mdi mdi-arrow-top-right icon-item"></span>
                </div>
                <h6 class="text-muted font-weight-normal">Potential Drop</h6>
              </div>
            </div>
          </div>
        </div>
        {/* عدد الشركات */}
        <div class="col-xl-6 col-lg-6 col-md-9 col-sm-8 col-9 m-auto  grid-margin  stretch-card mb-2 px-2">
          <div
            className="card h-100"
            style={{ boxShadow: "0px 3px 10px #c1d6fcaf" }}
          >
            <div class="card-body d-flex align-items-center px-1 py-3">
              <div className="fs-1 col-2 text-center">
                <FontAwesomeIcon icon={faBuilding} className="text-warning" />
              </div>
              <div class="d-flex flex-column ms-3 col-10">
                <div class=" col-9 mb-2 d-flex align-items-center align-self-start">
                  <h5 class="mb-0">
                    <Trans i18nKey="companies-number"></Trans>
                  </h5>
                  <p class="text-success ms-2 mb-0 font-weight-medium mr-2">
                    +3.5%{" "}
                  </p>
                  <FontAwesomeIcon icon={faArrowTrendUp} className="text-success" />
                </div>
                <div class="col-3 icon icon-box-success">
                  <h2 className="text-primadry" style={{ color: "#f36sf5f" }}>
                    23
                  </h2>
                  <span class="mdi mdi-arrow-top-right icon-item"></span>
                </div>
                <h6 class="text-muted font-weight-normal">Potential growth</h6>
              </div>
            </div>
          </div>
        </div>
        {/* عدد المستخدمين */}
        <div class="col-xl-6 col-lg-6 col-md-9  col-sm-8 col-9 m-auto grid-margin  stretch-card mb-2 px-2 flip-card users-num">
         {/* first */}
          <div
            className="card  flip-card-inner h-100"
            style={{ boxShadow: "0px 3px 10px #c1d6fcaf" }}
          >
              {/* card-front*/}
            <div class="card-body d-flex align-items-center px-1 py-3 flip-card-front">
              <div className="fs-1 col-2 text-center">
                <FontAwesomeIcon icon={faUser} className="text-info" />
              </div>
              <div class="d-flex flex-column col-10 ms-3">
                <div class=" col-9 mb-2 d-flex ">
                  <h5 class="mb-0">
                    <Trans i18nKey="users-number"></Trans>
                  </h5>
                  <p class="text-success ms-2 mb-0 font-weight-medium mr-2">
                    -3.5%{" "}
                  </p>
                  <FontAwesomeIcon icon={faArrowTrendUp} className="text-success"/>
                </div>
                <div class="col-3 icon icon-box-success ">
                  <h2 className="text-primadry" style={{ color: "#f36ff5f" }}>
                    46
                  </h2>
                  <span class="mdi mdi-arrow-top-right icon-item"></span>
                </div>
                <h6 class="text-muted font-weight-normal">Potential growth</h6>
              </div>
            </div>
              {/* card-back */}
              <div className="flip-card-back flex pe-3 w-100  col-10 pt-3 admins d-flex gap-3 justify-content-evenly">
                  <div className="requests-admin   border-end m-1 w-50 ">
                  <FontAwesomeIcon className="text-success d-block text-center fs-3 m-auto" icon={faUsersBetweenLines} />
                  <p className=" text-muted font-weight-normal text-center"><span className="fs-3 ">3</span> <Trans i18nKey="admin-in-request-department"></Trans></p>
                  </div>
                  <div className="compensation-admin  m-1 w-50">
                  <FontAwesomeIcon className="text-info fs-3 d-block text-center m-auto" icon={faUsersGear} />
                  <p className=" text-muted font-weight-normal text-center"><span className="fs-3 ">9</span> <Trans i18nKey="admin-in-compensation-department"></Trans></p>

                  </div>
              </div>
            </div>
          
        </div>

        {/* the Second Line */}
        <div
          class="row mt-3 min row  income-partners"
          style={{ maxHeight: "", height: "100%" }}
        >
          {/*the chart of the income إجمالي الدخل */}
          <div class=" col-xl-8 col-lg-8 col-md-9 col-sm-10 col-10  m-auto mb-2 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-row justify-content-between">
                  <CanvasJSChart options={options} />
                </div>
                <div class="row">
                  <div class="col-12"></div>
                </div>
              </div>
            </div>
          </div>
          {/* انشط شركاؤنا */}
          <div class="col-xl-4 col-lg-4 col-md-9 col-sm-10 col-10  m-auto grid-margin stretch-card ">
            <div class="card">
            <div
              class="card-body"
              style={{ overflow: "scroll", maxHeight: "450px", height: "100%" }}
            >
              <h4 class="card-title text-primary">
                <Trans i18nKey="active-partners"></Trans>
              </h4>
              <div class="table-responsive">
                <table class="table table-striped ">
                  <thead>
                    <tr>
                      <th> User </th>
                      <th>
                        {" "}
                        <Trans i18nKey="profits"></Trans>{" "}
                      </th>
                      {/* <th> Progress </th> */}
                      {/* <th> Amount </th> */}
                      {/* <th> Deadline </th> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faArrowTrendUp}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faArrowTrendUp}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faArrowTrendUp}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-success"
                          icon={faArrowTrendUp}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-danger"
                          icon={faArrowTrendDown}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-1 d-flex flex-column">
                        <FontAwesomeIcon
                          icon={faAppleAlt}
                          style={{ fontSize: "2rem" }}
                        />
                        <p>Salem Store</p>
                      </td>
                      <td>
                        $12000{" "}
                        <FontAwesomeIcon
                          className="text-danger"
                          icon={faArrowTrendDown}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            </div>
          </div>
        </div>
        {/* the Third Line */}
        <div class="col-lg-12 col-md-9 col-sm-9 col-  m-auto grid-margin mt-3 tabel" style={{width: "90%"}}>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-primary">
                <Trans i18nKey="pending-requests"></Trans>
              </h4>
              <p class="card-description"> </p>
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr className="fw-bold">
                      <th>
                        {" "}
                        <Trans i18nKey="user"></Trans>{" "}
                      </th>
                      <th>
                        {" "}
                        <Trans i18nKey="Company"></Trans>{" "}
                      </th>
                      {/* <th>
                        {" "}
                        <Trans i18nKey="company-email"></Trans>{" "}
                      </th>
                      <th>
                        {" "} */}
                        {/* <Trans i18nKey="phone"></Trans>{" "}
                      </th>
                      <th>
                        {" "}
                        <Trans i18nKey="location"></Trans>{" "}
                      </th>
                      <th>
                        {" "}
                        <Trans i18nKey="idNumber"></Trans>{" "}
                      </th> */}

                      <th>
                        <Trans i18nKey="action"></Trans>{" "}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {tableData.map((data, index) => (
                      <tr key={index}>
                        <td className="py-1">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-info"
                          />
                        </td>
                        <td>{data.name}</td>
                        {/* <td>{data.email}</td> */}
                        {/* <td>{data.phone}</td> */}
                        {/* <td>{data.location}</td> */}
                        {/* <td>{data.idNumber}</td> */}
                        <td className="d-flex">
                          <button className="btn btn-danger m-1 p-1">
                            <FontAwesomeIcon icon={faX} />
                          </button>
                          <button className="btn btn-success m-1 p-1">
                            <FontAwesomeIcon icon={faCheck} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
