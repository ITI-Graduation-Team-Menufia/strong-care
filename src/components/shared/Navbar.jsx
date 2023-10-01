// import React from "react";
// // import { Translation } from "react-i18next";
// import { Trans } from "react-i18next";

// export default function Navbar() {
//   return (
//     <div>
//       <nav class="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
//         <div class="container-fluid">
//           <a class="navbar-brand" href="#">
//             {/* <Translation>{(t) => t("home")}</Translation> */}
//             <Trans>
//               <H1>home</H1>
//             </Trans>
//           </a>
//           <button
//             class="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavDropdown"
//             aria-controls="navbarNavDropdown"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span class="navbar-toggler-icon"></span>
//           </button>
//           <div class="collapse navbar-collapse" id="navbarNavDropdown">
//             <ul class="navbar-nav">
//               <li class="nav-item">
//                 <a class="nav-link active" aria-current="page" href="#">
//                   المطالبات والتعويض
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   المستثمرون
//                 </a>
//               </li>
//               <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   من نحن
//                 </a>
//               </li>
//               <li class="nav-item dropdown">
//                 <a
//                   class="nav-link dropdown-toggle"
//                   href="#"
//                   role="button"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   الدخول
//                 </a>
//                 <ul class="dropdown-menu">
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Action
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Another action
//                     </a>
//                   </li>
//                   <li>
//                     <a class="dropdown-item" href="#">
//                       Something else here
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import { Trans } from "react-i18next";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" dir="rtl">
      <div className="container">
        <a className="navbar-brand" href="#">
          <Trans i18nKey="home">Home</Trans>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                <Trans i18nKey="claimsAndCompensation">
                  المطالبات والتعويض
                </Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="investors">المستثمرون</Trans>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Trans i18nKey="aboutUs">من نحن</Trans>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <Trans i18nKey="login">الدخول</Trans>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="action">Action</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="anotherAction">Another action</Trans>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <Trans i18nKey="somethingElse">Something else here</Trans>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
