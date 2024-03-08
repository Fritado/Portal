import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Trans } from "react-i18next";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/authSlice";

const Navbar = () => {
  const [sidebarIconOnly, setSidebarIconOnly] = useState(false);
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logoutUser());
    // Redirect or perform any other actions after logout
  };
  const toggleOffcanvas = () => {
    document.querySelector(".sidebar-offcanvas").classList.toggle("active");
  };
  const toggleSidebarIconOnly = () => {
    setSidebarIconOnly(!sidebarIconOnly);
    document.body.classList.toggle("sidebar-icon-only");
  };

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" to="/">
          <img
            src={require("../assets/images/logo2.png")}
            alt="logo"
            className="h-25 mt-2"
          />
        </Link>
        <Link className="navbar-brand brand-logo-mini" to="/">
          <img src={require("../assets/images/logo-mini.svg")} alt="logo" />
        </Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button
          className="navbar-toggler navbar-toggler align-self-center"
          type="button"
          onClick={toggleSidebarIconOnly}
        >
          <span className="mdi mdi-menu"></span>
        </button>
        <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input
                type="text"
                className="form-control bg-transparent border-0"
                placeholder="Search products"
              />
            </div>
          </form>
        </div>
        <ul className="navbar-nav navbar-nav-right">
          <li className="nav-item nav-profile d-none d-xl-flex">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <Trans>Download Reports</Trans>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown">
                <Dropdown.Item
                  className="dropdown-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <i className="mdi mdi-file-pdf mr-2"></i>
                  <Trans>PDF</Trans>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
                <Dropdown.Item
                  className="dropdown-item d-flex align-items-center"
                  href="!#"
                  onClick={(evt) => evt.preventDefault()}
                >
                  <i className="mdi mdi-file-excel mr-2"></i>
                  <Trans>Excel</Trans>
                </Dropdown.Item>
                <div className="dropdown-divider"></div>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item nav-profile nav-language">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <div className="nav-profile-img">
                  <img
                    src={require("../assets/images/faces/face28.png")}
                    alt="profile"
                  />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">
                    <Trans>
                      {" "}
                      Anisha
                    </Trans>
                  </p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown">
                <div className="p-3 text-center profile-bg">
                  <img
                    className="img-avatar img-avatar48 img-avatar-thumb"
                    src={require("../assets/images/faces/face28.png")}
                    alt=""
                  />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">
                    <Trans>User Options</Trans>
                  </h5>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span>
                      <Trans>Inbox</Trans>
                    </span>
                    <span className="p-0">
                      <span className="badge badge-primary">3</span>
                      <i className="mdi mdi-email-open-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span className="text-dark">
                      <Link to="profile">Profile</Link>
                    </span>
                    <span className="p-0">
                      <span className="badge badge-success">1</span>
                      <i className="mdi mdi-account-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span>
                      <Trans>Settings</Trans>
                    </span>
                    <i className="mdi mdi-settings"></i>
                  </Dropdown.Item>
                  <div role="separator" className="dropdown-divider"></div>
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark mt-2">
                    <Trans>Actions</Trans>
                  </h5>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span>
                      <Trans>Lock Account</Trans>
                    </span>
                    <i className="mdi mdi-lock ml-1"></i>
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="dropdown-item d-flex align-items-center justify-content-between"
                    href="!#"
                    onClick={(evt) => evt.preventDefault()}
                  >
                    <span onClick={handleLogout}>
                      <Trans>Log Out</Trans>
                    </span>
                    <i className="mdi mdi-logout ml-1"></i>
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown>
          </li>

          <li className="nav-item">
            <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator hide-carret">
                <i className="mdi mdi-bell-outline"></i>
                <span className="count-symbol bg-danger"></span>
              </Dropdown.Toggle>
            </Dropdown>
          </li>
        </ul>
        <button
          className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
          type="button"
          onClick={toggleOffcanvas}
        >
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
