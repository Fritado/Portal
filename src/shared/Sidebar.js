import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Collapse } from "react-bootstrap";
import { Trans } from "react-i18next";
import { FaCode ,FaBlog} from "react-icons/fa";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({ [menuState]: false });
    } else if (Object.keys(this.state).length === 0) {
      this.setState({ [menuState]: true });
    } else {
      Object.keys(this.state).forEach((i) => {
        this.setState({ [i]: false });
      });
      this.setState({ [menuState]: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector("#sidebar").classList.remove("active");
    Object.keys(this.state).forEach((i) => {
      this.setState({ [i]: false });
    });

    const dropdownPaths = [
      { path: "/apps", state: "appsMenuOpen" },
      { path: "/api-channles", state: "apiChannelsMenuOpen" },
      { path: "/business-profile", state: "businessProfileMenuOpen" },
      { path: "/onsite-code", state: "onSiteMenuOpen" },
      { path: "/blog-automation", state: "contentMarketingMenuOpen" },
      { path: "/form-elements", state: "formElementsMenuOpen" },
      { path: "/tables", state: "tablesMenuOpen" },
      { path: "/maps", state: "mapsMenuOpen" },
      { path: "/icons", state: "iconsMenuOpen" },
      { path: "/charts", state: "chartsMenuOpen" },
      { path: "/user-pages", state: "userPagesMenuOpen" },
      { path: "/error-pages", state: "errorPagesMenuOpen" },
      { path: "/general-pages", state: "generalPagesMenuOpen" },
      { path: "/ecommerce", state: "ecommercePagesMenuOpen" },
    ];

    dropdownPaths.forEach((obj) => {
      if (this.isPathActive(obj.path)) {
        this.setState({ [obj.state]: true });
      }
    });
  }
  render() {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <ul className="nav">
          <li className="nav-item nav-category">
            <Trans>Main</Trans>
          </li>
          <li
            className={
              this.isPathActive("/dashboard") ? "nav-item active" : "nav-item"
            }
          >
            <Link className="nav-link" to="/dashboard">
              <span className="icon-bg">
                <i className="mdi mdi-cube menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Dashboard</Trans>
              </span>
            </Link>
          </li>
          <li className="nav-item nav-category">
            <Trans>Integrations</Trans>
          </li>

          <li
            className={
              this.isPathActive("/api-channles")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.apiChannelsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("apiChannelsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-crosshairs-gps menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>API Channels</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.apiChannelsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/fb-connect")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/fb-connect"
                  >
                    <Trans>Connect Website</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/social-media")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/social-media"
                  >
                    <Trans>Social medias</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/email-api")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/email-api"
                  >
                    <Trans>Email API</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/sms-api")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/sms-api"
                  >
                    <Trans>SMS API</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/business-profile")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.businessProfileMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("businessProfileMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-format-list-bulleted menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Onboarding</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.businessProfileMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/business-profile")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/business-profile"
                  >
                    <Trans>Business Profile</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/competetor")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/competetor"
                  >
                    <Trans>Competetors</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tbd") ? "nav-link active" : "nav-link"
                    }
                    to="/keywords"
                  >
                    <Trans>Keywords</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>

          <li
            className={
              this.isPathActive("/onsite-code")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.onSiteMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("onSiteMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <FaCode />
              </span>
              <span className="menu-title">
                <Trans>Onsite</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.onSiteMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/onsite-code")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/onsite-code"
                  >
                    <Trans>Code Change</Trans>
                  </Link>
                </li>
                
              </ul>
            </Collapse>
          </li>

          
          <li
            className={
              this.isPathActive("/blog-automation")
                ? "nav-item active"
                : "nav-item"
            }
          >
            <div
              className={
                this.state.contentMarketingMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("contentMarketingMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <FaBlog />
              </span>
              <span className="menu-title">
                <Trans>Content Marketing</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.contentMarketingMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/blog-automation")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/blog-automation"
                  >
                    <Trans>Blog Automation</Trans>
                  </Link>
                </li>
                
              </ul>
            </Collapse>
          </li>

          
          <li className="nav-item nav-category">
            <Trans>Marketing</Trans>
          </li>

          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Leads</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    <Trans>Leads</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Email Automation</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    <Trans>Email Automation</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          {/* /////////////////////////////////////////////// */}
          <li
            className={
              this.isPathActive("/charts") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.chartsMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("chartsMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-chart-bar menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Charts</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.chartsMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/charts/chart-js")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/charts/chart-js"
                  >
                    <Trans>Chart Js</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/tables") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.tablesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("tablesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-table-large menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Tables</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.tablesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/tables/basic-table")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/tables/basic-table"
                  >
                    <Trans>Basic Table</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item nav-category">Sample Pages</li>
          <li
            className={
              this.isPathActive("/user-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.userPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("userPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-lock menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>User Pages</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.userPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/login-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/login-1"
                  >
                    <Trans>Login</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/user-pages/register-1")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/user-pages/register-1"
                  >
                    <Trans>Register</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li
            className={
              this.isPathActive("/error-pages") ? "nav-item active" : "nav-item"
            }
          >
            <div
              className={
                this.state.errorPagesMenuOpen
                  ? "nav-link menu-expanded"
                  : "nav-link"
              }
              onClick={() => this.toggleMenuState("errorPagesMenuOpen")}
              data-toggle="collapse"
            >
              <span className="icon-bg">
                <i className="mdi mdi-security menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Error pages</Trans>
              </span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={this.state.errorPagesMenuOpen}>
              <ul className="nav flex-column sub-menu">
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/error-pages/error-404")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/error-pages/error-404"
                  >
                    <Trans>404</Trans>
                  </Link>
                </li>
                <li className="nav-item">
                  {" "}
                  <Link
                    className={
                      this.isPathActive("/error-pages/error-500")
                        ? "nav-link active"
                        : "nav-link"
                    }
                    to="/error-pages/error-500"
                  >
                    <Trans>500</Trans>
                  </Link>
                </li>
              </ul>
            </Collapse>
          </li>
          <li className="nav-item documentation-link">
            <a
              className="nav-link"
              href="http://bootstrapdash.com/demo/connect-plus-react-free/documentation/documentation.html"
            >
              <span className="icon-bg">
                <i className="mdi mdi-file-document-box menu-icon"></i>
              </span>
              <span className="menu-title">
                <Trans>Documentation</Trans>
              </span>
            </a>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="user-details">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <div className="d-flex align-items-center">
                    <div className="sidebar-profile-img">
                      <img
                        src={require("../assets/images/faces/face28.png")}
                        alt="profile"
                      />
                    </div>
                    <div className="sidebar-profile-text">
                      <p className="mb-1">
                        <Trans>Henry Klein</Trans>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="badge badge-danger">3</div>
              </div>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <Link
                to="/billing-plan"
                onClick={(event) => event.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-settings menu-icon"></i>
                <span className="menu-title">
                  {" "}
                  <Trans>Billing & Plans</Trans>
                </span>
              </Link>
            </div>
          </li>
          <li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a
                href="!#"
                onClick={(event) => event.preventDefault()}
                className="nav-link"
              >
                <i className="mdi mdi-speedometer menu-icon"></i>
                <span className="menu-title">
                  <Trans>Take Tour</Trans>
                </span>
              </a>
            </div>
          </li>
          {/*<li className="nav-item sidebar-user-actions">
            <div className="sidebar-user-menu">
              <a href="!#" onClick={event => event.preventDefault()} className="nav-link"><i className="mdi mdi-logout menu-icon"></i>
                <span className="menu-title"><Trans>Log Out</Trans></span></a>
            </div>
  </li>*/}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector("body");
    document.querySelectorAll(".sidebar .nav-item").forEach((el) => {
      el.addEventListener("mouseover", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.add("hover-open");
        }
      });
      el.addEventListener("mouseout", function () {
        if (body.classList.contains("sidebar-icon-only")) {
          el.classList.remove("hover-open");
        }
      });
    });
  }
}

export default withRouter(Sidebar);
