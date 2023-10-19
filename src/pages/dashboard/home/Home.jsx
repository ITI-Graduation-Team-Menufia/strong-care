import React, { useEffect, useRef } from "react";
import { Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useInView } from "framer-motion";
import "./home.css";
import {
  faAppleAlt,
  faArrowTrendDown,
  faArrowTrendUp,
  faBuilding,
  faCheck,
  faCommentsDollar,
  faFileLines,
  faHourglassHalf,
  faUser,
  faUsersBetweenLines,
  faUsersGear,
  faX,
} from "@fortawesome/free-solid-svg-icons";
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
  };

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
      <h1>
        <Trans i18nKey="home"></Trans>
      </h1>
      <div className="container-fluid">
        <div className="row gap-xl-0 gap-lg-  m-auto" >
              {/*  عدد عقود الضمان*/}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-12 grid-margin mb-3 m-auto px-2" style={{height:"160px"}}>
                <div
                  className="card h-100"
                  style={{ boxShadow: "0px 3px 10px #c1d6fcaf " }}
                >
                  <div className="card-body d-flex align-items-center px-1 py-3">
                    <div className="fs-1 col-2 text-center">
                      <FontAwesomeIcon icon={faFileLines} className="text-primary"/></div>
                    <div className="d-flex ms-3 ms-md-1 flex-column col-10">
                      <div className=" col-9 mb-2 d-flex ">
                        <h5 className="mb-0 "><Trans i18nKey="warranty-contract-number"></Trans></h5>
                        <p className="text-success ms-2 mb-0 font-weight-medium mr-2">+3.5%{" "}</p>
                        <FontAwesomeIcon icon={faArrowTrendUp}className="text-success"/>
                      </div>
                      <div className="col-3 icon icon-box-success">
                        <h2 className="text-primadry">33</h2>
                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                      <h6 className="text-muted font-weight-normal">Potential growth</h6>
                    </div>
                  </div>
                </div>
              </div>

              {/* عدد الطلبات */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-12 grid-margin mb-3 m-auto px-2" style={{height:"160px"}}>
                <div className="card" style={{ boxShadow: "0px 3px 10px #c1d6fcaf "}}>
                  <div className="card-body d-flex">
                    <div className="fs-1 col-2 text-center m-auto">
                      <FontAwesomeIcon icon={faCommentsDollar} className="textd-primary" style={{ color: "#f36f5f" }} />
                    </div>
                    <div className="d-flex flex-column ms-3 col-10">
                      <div className=" col-9 mb-2 d-flex a">
                        <h5 className="mb-0"><Trans i18nKey="requests-number"></Trans></h5>
                        <p className="text-danger ms-2 mb-0 font-weight-medium mr-2">+3.5%{" "}</p>
                        <FontAwesomeIcon  icon={faArrowTrendDown}className="text-danger"/>
                      </div>
                      <div className="col-3 icon icon-box-success">
                        <h2 className="text-primadry">50</h2>
                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                      <h6 className="text-muted font-weight-normal">  Potential Drop</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* عدد الشركات */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-12 grid-margin mb-3 m-auto px-2" style={{height:"160px"}}>
                <div className="card h-100"style={{ boxShadow: "0px 3px 10px #c1d6fcaf" }}>
                  <div className="card-body d-flex align-items-center px-1 py-3">
                    <div className="fs-1 col-2 text-center"> <FontAwesomeIcon icon={faBuilding} className="text-warning" /></div>
                    <div className="d-flex flex-column ms-3 col-10">
                      <div className=" col-9 mb-2 d-flex align-items-center align-self-start">
                        <h5 className="mb-0">
                          <Trans i18nKey="companies-number"></Trans>
                        </h5>
                        <p className="text-success ms-2 mb-0 font-weight-medium mr-2"> +3.5%{" "}</p>
                        <FontAwesomeIcon  icon={faArrowTrendUp}className="text-success"/>
                      </div>
                      <div className="col-3 icon icon-box-success">
                        <h2 className="text-primadry" style={{ color: "#f36sf5f" }}> 23</h2>
                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                      <h6 className="text-muted font-weight-normal">Potential growth </h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* عدد المستخدمين */}
              <div className="col-xl-6 col-lg-6 col-md-6 col-sm-9 col-12 grid-margin mb-3  m-auto px-2 flip-card users-num" style={{height:"160px"}}>
                {/* first */}
                <div
                  className="card  flip-card-inner h-100"
                  style={{ boxShadow: "0px 3px 10px #c1d6fcaf" }}
                >
                  {/* card-front*/}
                  <div className="card-body d-flex align-items-center px-1 py-3 flip-card-front">
                    <div className="fs-1 col-2 text-center"><FontAwesomeIcon icon={faUser} className="text-info" /> </div>
                    <div className="d-flex flex-column col-10 ms-3">
                      <div className=" col-9 mb-2 d-flex ">
                        <h5 className="mb-0"><Trans i18nKey="users-number"></Trans> </h5>
                        <p className="text-success ms-2 mb-0 font-weight-medium mr-2">-3.5%{" "}</p>
                        <FontAwesomeIcon  icon={faArrowTrendUp}  className="text-success" />
                      </div>
                      <div className="col-3 icon icon-box-success ">
                        <h2 className="text-primadry"  style={{ color: "#f36ff5f" }} >  46 </h2>
                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                      <h6 className="text-muted font-weight-normal"> Potential growth </h6>
                    </div>
                  </div>
                  {/* card-back */}
                  <div className="flip-card-back flex pe-3 w-100  col-10 pt-3 admins d-flex gap-3 justify-content-evenly">
                    <div className="requests-admin   border-end m-1 w-50 ">
                      <FontAwesomeIcon  className="text-success d-block text-center fs-3 m-auto" icon={faUsersBetweenLines}/>
                      <p className=" text-muted font-weight-normal text-center">
                        <span className="fs-3 ">3</span>{" "}
                        <Trans i18nKey="admin-in-request-department"></Trans>
                      </p>
                    </div>
                    <div className="compensation-admin  m-1 w-50">
                      <FontAwesomeIcon className="text-info fs-3 d-block text-center m-auto"  icon={faUsersGear} />
                      <p className=" text-muted font-weight-normal text-center">
                        <span className="fs-3 ">9</span>{" "}
                        <Trans i18nKey="admin-in-compensation-department"></Trans>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* the Second Line */}
          <div
            className="row mt-0 min row  income-partners px-3 "
            style={{ maxHeight: "", height: "100%" }}
          >
            {/*the chart of the income إجمالي الدخل */}
            <div className=" col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12  m-auto mb-2 grid-margin  income">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-row justify-content-between">
                    <CanvasJSChart options={options} />
                  </div>
                  <div className="row">
                    <div className="col-12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 income-pending">

         {/* الطلبات المعلقة */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-9 col-12 grid-margin mb-2 mt-sm-0 mt-0 m-auto pending-requests" >
                <div className="card " style={{ boxShadow: "0px 3px 10px #c1d6fcaf "}}>
                  <div className="card-body d-flex p-lg-2 ps-md-3">
                    <div className="fs-1 col-2 text-center m-auto">
                    <FontAwesomeIcon icon={faHourglassHalf} className="text-warning "  />
                    </div>
                    <div className="d-flex flex-column ms-3 col-10">
                      <div className=" col-9 mb-2 d-flex a">
                        <p className="mb-0 fs-5 fs-md-3"><Trans i18nKey="pending-requests"></Trans></p>
                        <p className="text-danger ms-2 mb-0 font-weight-medium mr-2">+3.5%{" "}</p>
                        <FontAwesomeIcon  icon={faArrowTrendDown}className="text-danger"/>
                      </div>
                      <div className="col-3 icon icon-box-success">
                        <h2 className="text-primadry">50</h2>
                        <span className="mdi mdi-arrow-top-right icon-item"></span>
                      </div>
                      <h6 className="text-muted font-weight-normal">  Potential Drop</h6>
                    </div>
                  </div>
                </div>
              </div>
             {/* انشط شركاؤنا */}

            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-10 col-12  m-auto grid-margin stretch-card active-clients " style={{height: "60px"}}>
              <div className="card">
                <div
                  className="card-body p-3"
                  style={{
                    overflow: "scroll",
                    maxHeight: "290px",
                    height: "100%",
                  }}
                >
                  <h4 className="card-title  text-primary">
                    <Trans i18nKey="active-partners"></Trans>
                  </h4>
                  <div className="table-responsive">
                    <table className="table table-striped ">
                      <thead>
                        <tr>
                          <th> <Trans i18nKey="user"></Trans> </th>
                          <th>
                            {" "}
                            <Trans i18nKey="profits"></Trans>{" "}
                          </th>

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
          </div>
          {/* the Third Line */}

    </motion.div>
  );
}
