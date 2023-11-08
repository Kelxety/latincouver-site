import {
  mdiAccountCircle,
  mdiAccountGroup,
  mdiArrowRightThin,
  mdiCalendarAccount,
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiLogout,
  mdiMenu,
  mdiNotebook,
  mdiViewDashboardVariant,
} from "@mdi/js";
import Icon from "@mdi/react";
import React, { useState } from "react";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import logomini from "../../assets/images/logomini.svg";
import face2 from "../../assets/images/faces/face2.jpg";

// import "../../App.css"

function Navbar() {

  const [sidebarHR, setsidebarHR] = useState<boolean>(false);
  
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item sidebar-category">
            <p>Navigation</p>
            <span></span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              {/* <i className="mdi mdi-view-quilt menu-icon"></i> */}
              <Icon path={mdiViewDashboardVariant} style={{"width": "20px", "height": "20px", "marginRight": "10px"}} className="menu-icon" />
              <span className="menu-title">Dashboard</span>
              <div className="badge badge-info badge-pill">2</div>
            </Link>
          </li>
          <li className="nav-item sidebar-category">
            <p>Components</p>
            <span></span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"hr/"}>
              {/* <i className="mdi mdi-view-headline menu-icon"></i> */}
              <Icon path={mdiAccountGroup} style={{"width": "20px", "height": "20px", "marginRight": "10px"}} className="menu-icon" />
              <span className="menu-title">Human resources</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              {/* <i className="mdi mdi-chart-pie menu-icon"></i> */}
              <Icon path={mdiNotebook} style={{"width": "20px", "height": "20px", "marginRight": "10px"}} className="menu-icon" />
              <span className="menu-title">PMO</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              <i className="mdi mdi-grid-large menu-icon"></i>
              <span className="menu-title">Events</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              <i className="mdi mdi-emoticon menu-icon"></i>
              <span className="menu-title">Grants</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/"}>
              {/* <i className="mdi mdi-emoticon menu-icon"></i> */}
              <Icon path={mdiCurrencyUsd} style={{"width": "20px", "height": "20px", "marginRight": "10px"}} className="menu-icon" />
              <span className="menu-title">Sales</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
