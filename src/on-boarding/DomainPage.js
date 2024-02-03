import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const DomainPage = () => {
  const history = useHistory();
  const handelSubmit = () => {
    //this click will hit the API and redirect to next page
    history.push("/");
  };
  return (
    <div>
      <div className="mt-2 d-flex align-items-center auth px-0">
        <div className="row w-100 d-flex flex-column mx-auto mx-0">
          <div className="col-lg-4 mx-auto pt-5">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5 mt-4">
              <div className="brand-logo">
                <img
                  src={require("../assets/images/logo2.png")}
                  alt="logo"
                  className="d-flex mx-auto"
                />
              </div>
              <h4>New here?</h4>
              <h6 className="font-weight-light" style={{textAlign:"justify"}}>
                Hello! I'm Fritado AI, your dedicated assistant designed to
                enhance your business's SEO. Just share your URL, and I'll
                handle automatic weekly SEO optimization. Ready to expand your
                customer reach? Let's begin!
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
                  NEXT
                </button>
                <div className="text-center mt-4 font-weight-light">
                  <Link to="/signup" className="text-color">
                    Need help ?
                  </Link>
                </div>
              </form>
            </div>
            <Link to="/plan-info" className="d-flex">
              <span className=" mt-4 font-weight-bold text-muted mx-auto">
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
