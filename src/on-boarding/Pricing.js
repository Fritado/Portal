import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoMdRadioButtonOn, IoMdRadioButtonOff , IoMdArrowForward} from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { LuBadgeHelp } from "react-icons/lu";
import AuthFooter from "../common/AuthFooter";

const Pricing = () => {
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
        <div className="bg-white">
          <div className="d-flex flex-row justify-content-between pricing ">
            <h4>Get a 1-Week free trial with our annual plan</h4>
            <span><LuBadgeHelp size={25}/></span>
          </div>
          <div className="border-top-design">
            <div className="mx-auto text-center py-4">
              <h2 className="text-dark">Reach more customers</h2>
              <p className="pt-3">
                With Fritado , you can reach more customers and grwo your
                business week over week
              </p>
            </div>
            <div className="d-flex flex-column justify-content-between py-2 ">
              <div className="d-flex  justify-content-between ">
                <button className="price-btn" style={{backgroundColor:"rgba(47, 130, 162, 0.859)"}}>
                  <span>
                    <IoMdRadioButtonOn size={20}/>
                  </span>{" "}
                  Annual
                </button>
                <button className="price-btn text-dark">
                  <span className="pr-2 mb-1">
                    <IoMdRadioButtonOff size={20}/>
                  </span>{" "}
                  Monthly
                </button>
              </div>
              <ul className="pt-4 text-dark">
                <li className="list-styling">
                  {" "}
                  <span>
                    <TiTick size={25} />
                  </span>
                  1-week free trial
                </li>
                <li className="list-styling">
                  <span>
                    <TiTick size={25} />
                  </span>
                  Weekly automated SEO updates to reach customers
                </li>
                <li className="list-styling">
                  <span>
                    <TiTick size={25} />
                  </span>
                  Grow your popularity with unlimited blog posts
                </li>
                <li className="list-styling">
                  <span>
                    <TiTick size={25} />
                  </span>
                  Track your growth with custom dashboard
                </li>
              </ul>
            </div>
            <div className="d-flex flex-row justify-content-between mt-4 mb-3">
              <div  className="price-btn border-0">
                <span className="text-dark">
                  <strong className="price">$49.99 </strong> /mo (billed annually)
                </span>
              </div>
              <button className="price-btn" style={{backgroundColor:"rgba(47, 130, 162, 0.859)"}}>
                Start free trial <span><IoMdArrowForward size={20}/></span>
              </button>
            </div>
          </div>
        </div>
      </div>

      
      <AuthFooter />
    </div>
  );
};

export default Pricing;
