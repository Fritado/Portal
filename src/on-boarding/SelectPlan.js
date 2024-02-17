import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";

const SelectPlan = () => {
  return (
    <div className="d-flex flex-column mt-2">
      <nav className="d-flex flex-row justify-content-between px-3 pb-2">
        <div className="brand-logo">
          <img
            src={require("../assets/images/logo2.png")}
            alt="logo"
            className="d-flex"
            style={{ height: "3rem" }}
          />
        </div>
        <div className="">
          <span>Hello Name Here </span>
        </div>
      </nav>
      <div className="d-flex mx-auto my-4">
        <img
          src={require("../assets/plan-pricing/plan.png")}
          className=" d-flex mx-auto  w-75 h-100"
        />
      </div>
      <Link to="/connect-website" className="d-flex">
        <span className="my-4 font-weight-bold d-flex text-muted mx-auto">
          Next
          <span>
            <MdKeyboardDoubleArrowRight />
          </span>
        </span>
      </Link>
      <AuthFooter />
    </div>
  );
};

export default SelectPlan;
