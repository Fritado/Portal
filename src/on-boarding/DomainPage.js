import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const DomainPage = () => {
  return (
    <div>
      <div className="mt-2 d-flex align-items-center auth px-0">
        <div className="row w-100 d-flex flex-column mx-auto mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img
                  src={require("../assets/images/logo2.png")}
                  alt="logo"
                  className="d-flex mx-auto"
                />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <form className="pt-3">
                <div className="form-group">
                  <input
                    required
                    type="url"
                    name="domain"
                    placeholder="Enter Business Url"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  SUBMIT
                </button>
                <div className="text-center mt-4 font-weight-light">
                  <Link to="/user-pages/register" className="font-color">
                    Need help ?
                  </Link>
                </div>
              </form>
            </div>
              <Link to="/plan" className="d-flex">
            <span className=" my-4 font-weight-bold text-muted mx-auto">
                Next
                <span>
                  <MdKeyboardDoubleArrowRight />
                </span>
            </span>
              </Link>
          </div>
          <AuthFooter
            footdec={
              "© 2024 Copyright Fritado Technologies. All rights reserved"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default DomainPage;

/**url ip */
