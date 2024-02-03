import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-fluid">
          <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
            <span className="text-dark text-center text-lg-left d-block d-sm-inline-block" style={{fontSize:"16px"}}>
              © 2024 Copyright{" "}
              <Link to="https://www.fritado.com" className =" text-dark"> |  Fritado Technologies </Link>
              | All rights reserved
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
