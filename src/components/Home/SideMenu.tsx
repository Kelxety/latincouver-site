import React, { useState } from "react";

import {
  mdiAccountGroup,
  mdiAlphaGBox,
  mdiArrowRight,
  mdiCalendarMultiple,
  mdiCog,
  mdiCurrencyUsd,
  mdiNotebook,
  mdiViewDashboardVariant,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

function SideMenu() {

    const [subMenuHR, setSubMenuHR] = useState<boolean>(false);

  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item sidebar-category">
            <p>Latincouver Community</p>
            <span></span>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <Icon path={mdiViewDashboardVariant} size={1} className="mr-2" />
              <span className="menu-title">Dashboard</span>
              <div className="badge badge-info badge-pill">2</div>
            </Link>
          </li>
          <li className="nav-item sidebar-category">
            <p>Components</p>
            <span></span>
          </li>
          <li className="nav-item">
            {/* <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded={false} aria-controls="ui-basic">
                <span className="menu-title mr-10">Categories</span>
                <Icon path={mdiArrowRight} size={1} className='menu-arrow' />
            </a> */}
            <a
              href="#ui-basic"
              aria-expanded={false}
              aria-controls="ui-basic"
              data-toggle="collapse"
              className="nav-link"
              onClick={() => setSubMenuHR(subMenuHR === true ? false : true)}
            >
              <Icon path={mdiAccountGroup} size={1} className="mr-2" />
              <span className="menu-title mr-10">HR</span>
              <Icon path={mdiArrowRight} size={1} className="menu-arrow" />
            </a>
            {subMenuHR === true ? (
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item">
                    <Link to="hr/employee" className="nav-link">
                      Employees
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Contractors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Volunteers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Leave Requests
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/charts/chartjs.html">
              {/* <i className="mdi mdi-chart-pie menu-icon"></i> */}
              <Icon path={mdiNotebook} size={1} className="mr-2" />
              <span className="menu-title">PMO</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              {/* <i className="mdi mdi-grid-large menu-icon"></i> */}
              <Icon path={mdiCalendarMultiple} size={1} className="mr-2" />
              <span className="menu-title">Events</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <Icon path={mdiAlphaGBox} size={1} className="mr-2" />
              <span className="menu-title">Grant</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <Icon path={mdiCurrencyUsd} size={1} className="mr-2" />
              <span className="menu-title">Sales</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages/tables/basic-table.html">
              <Icon path={mdiCog} size={1} className="mr-2" />
              <span className="menu-title">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default SideMenu;
