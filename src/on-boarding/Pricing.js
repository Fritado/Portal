import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex mx-auto my-4">
        <img src={require("../assets/plan-pricing/pricing.png")} className=" d-flex mx-auto  w-100 h-100" />
      </div>
      <Link to="/dashboard" className="d-flex">
        <span className="my-4 font-weight-bold d-flex text-muted mx-auto">
            Next
            <span>
              <MdKeyboardDoubleArrowRight />
            </span>
        </span>
          </Link>
    </div>
  );
};

export default Pricing;
