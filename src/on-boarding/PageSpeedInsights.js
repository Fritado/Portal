import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import AuthFooter from "../common/AuthFooter";
import PageSpeedData from "./PageSpeedData";
import { ImMobile } from "react-icons/im";
import { BsLaptop } from "react-icons/bs";

const PageSpeedInsights = () => {
  const location = useLocation();
  const pageSpeedData = location.state?.pageSpeedData;
  const time = pageSpeedData.lighthouseResult.fetchTime;
  const domainName = pageSpeedData.id;

  //console.log("pageSpeedData:", pageSpeedData);

  return (
    <div className="d-flex flex-column">
      <nav className="d-flex flex-row justify-content-between mt-2 px-3 pb-2">
        <div className="brand-logo">
          <img
            src={require("../assets/images/logo2.png")}
            alt="logo"
            className="d-flex"
            style={{ height: "3rem" }}
          />
        </div>
        <div className="">
          <span>Name Here </span>
        </div>
      </nav>
      <div style={{ maxWidth: "960px", margin: "auto" }}>
        <div className="d-flex justify-content-between">
          <h1 className=" text-dark timestamp">{time}</h1>
          <span className="download-Icon">
            <FaFileDownload size={38} />
          </span>
        </div>
        <div className="d-flex mx-auto my-4 justify-content-center">
          <div className="px-2">
            <span className="pr-2">
              <ImMobile size={20} />
            </span>
              Mobile
          </div>
          <div className="px-2">
            <span className="pr-2">
              <BsLaptop size={20} />
            </span>
              Desktop
          </div>
        </div>
        <div className="border rounded bg-white text-dark my-3">
          <PageSpeedData />
        </div>
        {/*<div className="d-flex pagespeed">
        {PageSpeedInsights && (
          <pre className="bg-white">
            {JSON.stringify(pageSpeedData, null, 2)}
          </pre>
        )}
        </div>*/}
      </div>
      <Link to="/pricing" className="d-flex">
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

export default PageSpeedInsights;
