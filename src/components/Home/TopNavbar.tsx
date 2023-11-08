import React from "react";

import logo from "../../assets/images/logo.svg"
import logomini from "../../assets/images/logomini.svg"
import Icon from "@mdi/react";
import { mdiAccountBox, mdiCalendar, mdiCog, mdiEmailOpen, mdiInformation, mdiLogout, mdiMenu } from "@mdi/js";

import face5 from "../../assets/images/faces/face5.jpg"
import face4 from "../../assets/images/faces/face4.jpg"
import face2 from "../../assets/images/faces/face2.jpg"
import face3 from "../../assets/images/faces/face3.jpg"

const TopNavbar = () => {
  return (
    <>
      <nav className="navbar col-lg-12 col-12 px-0 py-0 py-lg-4 d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
          <button
            className="navbar-toggler navbar-toggler align-self-center"
            type="button"
            data-toggle="minimize"
          >
            {/* <span className="mdi mdi-menu"></span> */}
            <Icon path={mdiMenu} size={1} />
          </button>
          <div className="navbar-brand-wrapper">
            <a className="navbar-brand brand-logo" href="index.html">
                <img src={logo} alt="logo" />
            </a>
            <a className="navbar-brand brand-logo-mini" href="index.html">
              {/* <img src="images/logo-mini.svg" alt="logo" /> */}
              <img src={logomini} alt="logo" />
            </a>
          </div>
          <h4 className="font-weight-bold mb-0 d-none d-md-block mt-1">
            Welcome back, Brandon Haynes
          </h4>
          <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item">
              <h4 className="mb-0 font-weight-bold d-none d-xl-block">
                Mar 12, 2019 - Apr 10, 2019
              </h4>
            </li>
            <li className="nav-item dropdown mr-1">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                id="messageDropdown"
                href="#"
                data-toggle="dropdown"
              >
                {/* <i className="mdi mdi-calendar mx-0"></i> */}
                <Icon path={mdiCalendar} size={1} />
                <span className="count bg-info">2</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="messageDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Messages
                </p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src={face4}
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">
                      David Grey
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      The meeting is cancelled
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src={face2}
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">
                      Tim Cook
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      New product launch
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <img
                      src={face3}
                      alt="image"
                      className="profile-pic"
                    />
                  </div>
                  <div className="preview-item-content flex-grow">
                    <h6 className="preview-subject ellipsis font-weight-normal">
                      {" "}
                      Johnson
                    </h6>
                    <p className="font-weight-light small-text text-muted mb-0">
                      Upcoming board meeting
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li className="nav-item dropdown mr-2">
              <a
                className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center"
                id="notificationDropdown"
                href="#"
                data-toggle="dropdown"
              >
                {/* <i className="mdi mdi-email-open mx-0"></i> */}
                <Icon path={mdiEmailOpen} size={1} />
                <span className="count bg-danger">1</span>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
                aria-labelledby="notificationDropdown"
              >
                <p className="mb-0 font-weight-normal float-left dropdown-header">
                  Notifications
                </p>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-success">
                      {/* <i className="mdi mdi-information mx-0"></i> */}
                      <Icon path={mdiInformation} size={1} className="mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">
                      Application Error
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Just now
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      {/* <i className="mdi mdi-settings mx-0"></i> */}
                      <Icon path={mdiCog} size={1} className="mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">
                      Settings
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      Private message
                    </p>
                  </div>
                </a>
                <a className="dropdown-item preview-item">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-info">
                      {/* <i className="mdi mdi-account-box mx-0"></i> */}
                      <Icon path={mdiAccountBox} size={1} className="mx-0" />
                    </div>
                  </div>
                  <div className="preview-item-content">
                    <h6 className="preview-subject font-weight-normal">
                      New user registration
                    </h6>
                    <p className="font-weight-light small-text mb-0 text-muted">
                      2 days ago
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          <button
            className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
            type="button"
            data-toggle="offcanvas"
          >
            <span className="mdi mdi-menu"></span>
          </button>
        </div>
        <div className="navbar-menu-wrapper navbar-search-wrapper d-none d-lg-flex align-items-center">
          <ul className="navbar-nav mr-lg-2">
            <li className="nav-item nav-search d-none d-lg-block">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Here..."
                  aria-label="search"
                  aria-describedby="search"
                />
              </div>
            </li>
          </ul>
          {/* <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                data-toggle="dropdown"
                id="profileDropdown"
              >
                <img src={face5} alt="profile" />
                <span className="nav-profile-name">Eleanor Richardson</span>
              </a>
              <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                <a className="dropdown-item">
                  <i className="mdi mdi-settings text-primary"></i>
                  <Icon path={mdiCog} size={1} className="text-primary" />
                  Settings
                </a>
                <a className="dropdown-item">
                  <i className="mdi mdi-logout text-primary"></i>
                  <Icon path={mdiLogout} size={1} className="text-primary" />
                  Logout
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link icon-link">
                <i className="mdi mdi-plus-circle-outline"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link icon-link">
                <i className="mdi mdi-web"></i>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link icon-link">
                <i className="mdi mdi-clock-outline"></i>
              </a>
            </li>
          </ul> */}
        </div>
      </nav>
    </>
  );
};

export default TopNavbar;
