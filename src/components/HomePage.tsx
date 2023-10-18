import React from 'react'

import Icon from '@mdi/react';
import { mdiAccount, mdiAccountBox, mdiAccountCircle, mdiAccountGroup, mdiAlphaGBox, mdiArrowRight, mdiCalendarAccount, mdiCalendarMultiple, mdiCog, mdiCogOutline, mdiCurrencyUsd, mdiEmail, mdiFacebook, mdiGooglePlus, mdiInformation, mdiLogout, mdiMenu, mdiNotebook, mdiSettingsHelper, mdiTwitter, mdiViewDashboardVariant } from '@mdi/js';


import logo from "../assets/images/logo.svg"
import logomini from "../assets/images/logomini.svg"
import face1 from "../assets/images/faces/face1.jpg"
import face2 from "../assets/images/faces/face2.jpg"
import face3 from "../assets/images/faces/face3.jpg"
import face4 from "../assets/images/faces/face4.jpg"
import face5 from "../assets/images/faces/face5.jpg"
import face6 from "../assets/images/faces/face6.jpg"
import face7 from "../assets/images/faces/face7.jpg"
import face8 from "../assets/images/faces/face8.jpg"
import face9 from "../assets/images/faces/face9.jpg"
import face10 from "../assets/images/faces/face10.jpg"
import face11 from "../assets/images/faces/face11.jpg"
import face12 from "../assets/images/faces/face12.jpg"
import face13 from "../assets/images/faces/face13.jpg"
import face14 from "../assets/images/faces/face14.jpg"
import face15 from "../assets/images/faces/face15.jpg"
import face16 from "../assets/images/faces/face16.jpg"
import face17 from "../assets/images/faces/face17.jpg"
import face18 from "../assets/images/faces/face18.jpg"
import face19 from "../assets/images/faces/face19.jpg"
import face20 from "../assets/images/faces/face20.jpg"
import face21 from "../assets/images/faces/face21.jpg"
import face22 from "../assets/images/faces/face22.jpg"
import face23 from "../assets/images/faces/face23.jpg"
import face24 from "../assets/images/faces/face24.jpg"
import face25 from "../assets/images/faces/face25.jpg"
import face26 from "../assets/images/faces/face26.jpg"
import face27 from "../assets/images/faces/face27.jpg"

const HomePage = () => {
  return (
    <>
        <div className="container-scroller d-flex">
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
          <ul className="nav">
            <li className="nav-item sidebar-category">
              <p>Latincouver Community</p>
              <span></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {/* <i className="mdi mdi-view-quilt menu-icon"></i> */}
                <Icon path={mdiViewDashboardVariant} size={1} className='mr-2' />
                <span className="menu-title">Dashboard</span>
                <div className="badge badge-info badge-pill">2</div>
              </a>
            </li>
            {/* <li className="nav-item sidebar-category">
              <p>Components</p>
              <span></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                <i className="mdi mdi-palette menu-icon"></i>
                <span className="menu-title mr-10">UI Elements</span>
                <Icon path={mdiArrowRight} size={1} className='menu-arrow' />
                <i className="menu-arrow">
                </i>
              </a>
              <div className="collapse" id="ui-basic">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                </ul>
              </div>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="pages/forms/basic_elements.html">
                {/* <i className="mdi mdi-view-headline menu-icon"></i> */}
                <Icon path={mdiAccountGroup} size={1} className='mr-2' />
                <span className="menu-title">HR</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/charts/chartjs.html">
                {/* <i className="mdi mdi-chart-pie menu-icon"></i> */}
                <Icon path={mdiNotebook} size={1} className='mr-2' />
                <span className="menu-title">PMO</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                {/* <i className="mdi mdi-grid-large menu-icon"></i> */}
                <Icon path={mdiCalendarMultiple} size={1} className='mr-2' />
                <span className="menu-title">Events</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <Icon path={mdiAlphaGBox} size={1} className='mr-2' />
                <span className="menu-title">Grant</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <Icon path={mdiCurrencyUsd} size={1} className='mr-2' />
                <span className="menu-title">Sales</span>
              </a>
            </li>
            {/* <li className="nav-item sidebar-category">
              <p>Pages</p>
              <span></span>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="pages/tables/basic-table.html">
                <Icon path={mdiCog} size={1} className='mr-2' />
                <span className="menu-title">Settings</span>
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                <Icon path={mdiAccount}
                  title="User Profile"
                  size={1}
                  color="white"
                />
                <span className="menu-title">User Pages</span>
              </a>
              <div className="collapse" id="auth">
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login.html"> Login </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/login-2.html"> Login 2 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register.html"> Register </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/register-2.html"> Register 2 </a></li>
                  <li className="nav-item"> <a className="nav-link" href="pages/samples/lock-screen.html"> Lockscreen </a></li>
                </ul>
              </div>
            </li> */}
            {/* <li className="nav-item sidebar-category">
              <p>Apps</p>
              <span></span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="docs/documentation.html">
                <i className="mdi mdi-file-document-box-outline menu-icon"></i>
                <span className="menu-title">Documentation</span>
              </a>
            </li> */}
            {/* <li className="nav-item">
              <a className="nav-link" href="http://www.bootstrapdash.com/demo/spica/template/">
                <button className="btn bg-danger btn-sm menu-title">Upgrade to pro</button>
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="container-fluid page-body-wrapper">
          <nav className="navbar col-lg-12 col-12 px-0 py-0 py-lg-4 d-flex flex-row">
            <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
              <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
                {/* <span className="mdi mdi-menu"></span> */}
                <Icon path={mdiMenu} size={1} />
              </button>
              <div className="navbar-brand-wrapper">
                <a className="navbar-brand brand-logo" href="index.html"><img src={logo} alt="logo"/></a>
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src={logomini} alt="logo"/></a>
              </div>
              <h4 className="font-weight-bold mb-0 d-none d-md-block mt-1">Welcome back, Tony Khan</h4>
              <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item">
                  <h4 className="mb-0 font-weight-bold d-none d-xl-block">Mar 12, 2019 - October 18, 2023</h4>
                </li>
                <li className="nav-item dropdown mr-1">
                  <a className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center" id="messageDropdown" href="#" data-toggle="dropdown">
                    {/* <i className="mdi mdi-calendar mx-0"></i> */}
                    <Icon path={mdiCalendarAccount} size={1} className='mx-0' />
                    <span className="count bg-info">2</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="messageDropdown">
                    <p className="mb-0 font-weight-normal float-left dropdown-header">Messages</p>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                          <img src={face2} alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">David Grey
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          The meeting is cancelled
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                          <img src={face2} alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal">Tim Cook
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          New product launch
                        </p>
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                          <img src={face2} alt="image" className="profile-pic" />
                      </div>
                      <div className="preview-item-content flex-grow">
                        <h6 className="preview-subject ellipsis font-weight-normal"> Johnson
                        </h6>
                        <p className="font-weight-light small-text text-muted mb-0">
                          Upcoming board meeting
                        </p>
                      </div>
                    </a>
                  </div>
                </li>
                <li className="nav-item dropdown mr-2">
                  <a className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center" id="notificationDropdown" href="#" data-toggle="dropdown">
                    {/* <i className="mdi mdi-email-open mx-0"></i> */}
                    <Icon path={mdiCogOutline} size={1} />
                    {/* <Icon path={mdiEmail} size={1} className='mx-0' />
                    <span className="count bg-danger">1</span> */}
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                    {/* <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p> */}
                    {/* <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-success">
                            <Icon path={mdiInformation} size={1} className='mx-0' />
                            <i className="mdi mdi-information mx-0"></i>
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Application Error</h6>
                        <p className="font-weight-light small-text mb-0 text-muted">
                          Just now
                        </p>
                      </div>
                    </a> */}
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-primary">
                            <Icon path={mdiAccountCircle} size={1} />
                            {/* <Icon path={mdiCog} size={1} className='mx-0' /> */}
                          {/* <i className="mdi mdi-settings mx-0"></i> */}
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Profile</h6>
                        {/* <p className="font-weight-light small-text mb-0 text-muted">
                          Private message
                        </p> */}
                      </div>
                    </a>
                    <a className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <div className="preview-icon bg-danger">
                            <Icon path={mdiLogout} size={1} color={"white"} className='mx-0' />
                        {/* <    Icon path={mdiAccountBox} size={1} className='mx-0' /> */}
                        </div>
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject font-weight-normal">Logout</h6>
                        {/* <p className="font-weight-light small-text mb-0 text-muted">
                          2 days ago
                        </p> */}
                      </div>
                    </a>
                  </div>
                </li>
              </ul>
              <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
                <span className="mdi mdi-menu"></span>
              </button>
            </div>
            <div className="navbar-menu-wrapper navbar-search-wrapper d-none d-lg-flex align-items-center">
              <ul className="navbar-nav mr-lg-2">
                <li className="nav-item nav-search d-none d-lg-block">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search Here..." aria-label="search" aria-describedby="search" />
                  </div>
                </li>
              </ul>
              {/* <ul className="navbar-nav navbar-nav-right">
                <li className="nav-item nav-profile dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                    <img src={face5} alt="profile"/>
                    <span className="nav-profile-name">Eleanor Richardson</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                    <a className="dropdown-item">
                        <Icon path={mdiCog} size={1} />
                      Settings
                    </a>
                    <a className="dropdown-item">
                        <Icon path={mdiLogout} size={1} />
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

          <div className="main-panel">
            <div className="content-wrapper">
              <div className="row">
                <div className="col-12 col-xl-6 grid-margin stretch-card">
                  <div className="row w-100 flex-grow">
                    <div className="col-md-12 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-title">Website Audience Metrics</p>
                          <p className="text-muted">25% more traffic than previous week</p>
                          <div className="row mb-3">
                            <div className="col-md-7">
                              <div className="d-flex justify-content-between traffic-status">
                                <div className="item">
                                  <p className="mb-">Users</p>
                                  <h5 className="font-weight-bold mb-0">93,956</h5>
                                  <div className="color-border"></div>
                                </div>
                                <div className="item">
                                  <p className="mb-">Bounce Rate</p>
                                  <h5 className="font-weight-bold mb-0">58,605</h5>
                                  <div className="color-border"></div>
                                </div>
                                <div className="item">
                                  <p className="mb-">Page Views</p>
                                  <h5 className="font-weight-bold mb-0">78,254</h5>
                                  <div className="color-border"></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <ul className="nav nav-pills nav-pills-custom justify-content-md-end" id="pills-tab-custom"
                                role="tablist">
                                <li className="nav-item">
                                  <a className="nav-link active" id="pills-home-tab-custom" data-toggle="pill"
                                    href="#pills-health" role="tab" aria-controls="pills-home" aria-selected="true">
                                    Day
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" id="pills-profile-tab-custom" data-toggle="pill" href="#pills-career"
                                    role="tab" aria-controls="pills-profile" aria-selected="false">
                                    Week
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" id="pills-contact-tab-custom" data-toggle="pill" href="#pills-music"
                                    role="tab" aria-controls="pills-contact" aria-selected="false">
                                    Month
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <canvas id="audience-chart"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <p className="card-title">Weekly Balance</p>
                            <p className="text-success font-weight-medium">20.15 %</p>
                          </div>
                          <div className="d-flex align-items-center flex-wrap mb-3">
                            <h5 className="font-weight-normal mb-0 mb-md-1 mb-lg-0 mr-3">$22.736</h5>
                            <p className="text-muted mb-0">Avg Sessions</p>
                          </div>
                          <canvas id="balance-chart" height="130"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center justify-content-between flex-wrap">
                            <p className="card-title">Today Task</p>
                            <p className="text-success font-weight-medium">45.39 %</p>
                          </div>
                          <div className="d-flex align-items-center flex-wrap mb-3">
                            <h5 className="font-weight-normal mb-0 mb-md-1 mb-lg-0 mr-3">17.247</h5>
                            <p className="text-muted mb-0">Avg Sessions</p>
                          </div>
                          <canvas id="task-chart" height="130"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-6 grid-margin stretch-card">
                  <div className="row w-100 flex-grow">
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body">
                          <p className="card-title">Regional Load</p>
                          <p className="text-muted">Last update: 2 Hours ago</p>
                          <div className="regional-chart-legend d-flex align-items-center flex-wrap mb-1"
                            id="regional-chart-legend"></div>
                          <canvas height="280" id="regional-chart"></canvas>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 grid-margin stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <div className="d-flex align-items-center mb-4">
                            <p className="card-title mb-0 mr-1">Today activity</p>
                            <div className="badge badge-info badge-pill">2</div>
                          </div>
                          <div className="d-flex flex-wrap pt-2">
                            <div className="mr-4 mb-lg-2 mb-xl-0">
                              <p>Time On Site</p>
                              <h4 className="font-weight-bold mb-0">77.15 %</h4>
                            </div>
                            <div>
                              <p>Page Views</p>
                              <h4 className="font-weight-bold mb-0">14.15 %</h4>
                            </div>
                          </div>
                        </div>
                        <canvas height="150" id="activity-chart"></canvas>
                      </div>
                    </div>
                    <div className="col-md-12 stretch-card">
                      <div className="card">
                        <div className="card-body pb-0">
                          <p className="card-title">Server Status 247</p>
                          <div className="d-flex justify-content-between flex-wrap">
                            <p className="text-muted">Last update: 2 Hours ago</p>
                            <div className="d-flex align-items-center flex-wrap server-status-legend mt-3 mb-3 mb-md-0">
                              <div className="item mr-3">
                                <div className="d-flex align-items-center">
                                  <div className="color-bullet"></div>
                                  <h5 className="font-weight-bold mb-0">128GB</h5>
                                </div>
                                <p className="mb-">Total Usage</p>
                              </div>
                              <div className="item mr-3">
                                <div className="d-flex align-items-center">
                                  <div className="color-bullet"></div>
                                  <h5 className="font-weight-bold mb-0">92%</h5>
                                </div>
                                <p className="mb-">Memory Usage</p>
                              </div>
                              <div className="item mr-3">
                                <div className="d-flex align-items-center">
                                  <div className="color-bullet"></div>
                                  <h5 className="font-weight-bold mb-0">16%</h5>
                                </div>
                                <p className="mb-">Disk Usage</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <canvas height="170" id="status-chart"></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 grid-margin stretch-card">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Financial management review</h4>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <thead>
                            <tr>
                              <th>
                                User
                              </th>
                              <th>
                                First name
                              </th>
                              <th>
                                Progress
                              </th>
                              <th>
                                Amount
                              </th>
                              <th>
                                Deadline
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="py-1">
                                <img src={face1} alt="image"/>
                              </td>
                              <td>
                                Herman Beck
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-success" role="progressbar" style={{"width": "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $ 77.99
                              </td>
                              <td>
                                May 15, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face2} alt="image"/>
                              </td>
                              <td>
                                Messsy Adam
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-danger" role="progressbar" style={{"width": "25%"}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $245.30
                              </td>
                              <td>
                                July 1, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face3} alt="image"/>
                              </td>
                              <td>
                                John Richards
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar" style={{"width": "90%"}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $138.00
                              </td>
                              <td>
                                Apr 12, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face4} alt="image"/>
                              </td>
                              <td>
                                Peter Meggik
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-primary" role="progressbar" style={{"width": "50%"}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $ 77.99
                              </td>
                              <td>
                                May 15, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face5} alt="image"/>
                              </td>
                              <td>
                                Edward
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-danger w-1/3" style={{"width": "20%"}} role="progressbar" aria-valuenow={35} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $ 160.25
                              </td>
                              <td>
                                May 03, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face6} alt="image"/>
                              </td>
                              <td>
                                John Doe
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-info" role="progressbar" style={{"width": "65%"}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $ 123.21
                              </td>
                              <td>
                                April 05, 2015
                              </td>
                            </tr>
                            <tr>
                              <td className="py-1">
                                <img src={face7} alt="image"/>
                              </td>
                              <td>
                                Henry Tom
                              </td>
                              <td>
                                <div className="progress">
                                  <div className="progress-bar bg-warning" role="progressbar"  style={{"width": "20%"}} aria-valuenow={20} aria-valuemin={0} aria-valuemax={100}></div>
                                </div>
                              </td>
                              <td>
                                $ 150.00
                              </td>
                              <td>
                                June 16, 2015
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card bg-facebook d-flex align-items-center">
                    <div className="card-body py-5">
                      <div
                        className="d-flex flex-row align-items-center flex-wrap justify-content-md-center justify-content-xl-start py-1">
                        {/* <i className="mdi mdi-facebook text-white icon-lg"></i> */}
                        <Icon path={mdiFacebook} size={2} className='text-white' />
                        <div className="ml-3 ml-md-0 ml-xl-3">
                          <h5 className="text-white font-weight-bold">2.62 Subscribers</h5>
                          <p className="mt-2 text-white card-text">You main list growing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card bg-google d-flex align-items-center">
                    <div className="card-body py-5">
                      <div
                        className="d-flex flex-row align-items-center flex-wrap justify-content-md-center justify-content-xl-start py-1">
                        {/* <i className="mdi mdi-google-plus text-white icon-lg"></i> */}
                        <Icon path={mdiGooglePlus} size={2} className='text-white' />
                        <div className="ml-3 ml-md-0 ml-xl-3">
                          <h5 className="text-white font-weight-bold">3.4k Followers</h5>
                          <p className="mt-2 text-white card-text">You main list growing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 grid-margin stretch-card">
                  <div className="card bg-twitter d-flex align-items-center">
                    <div className="card-body py-5">
                      <div
                        className="d-flex flex-row align-items-center flex-wrap justify-content-md-center justify-content-xl-start py-1">
                        {/* <i className="mdi mdi-twitter text-white icon-lg"></i> */}
                        <Icon path={mdiTwitter} size={2} className="text-white" />
                        <div className="ml-3 ml-md-0 ml-xl-3">
                          <h5 className="text-white font-weight-bold">3k followers</h5>
                          <p className="mt-2 text-white card-text">You main list growing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <footer className="footer">
              <div className="card">
                <div className="card-body">
                  <div className="d-sm-flex justify-content-center justify-content-sm-between">
                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Copyright © bootstrapdash.com 2020</span>
                    <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Distributed By: <a href="https://www.themewagon.com/" target="_blank">ThemeWagon</a></span>
                    <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> Free <a href="https://www.bootstrapdash.com/" target="_blank">Bootstrap dashboard templates</a> from Bootstrapdash.com</span>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage