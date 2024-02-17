import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import AuthFooter from "../common/AuthFooter";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView"
import { ImMobile } from "react-icons/im";
import { BsLaptop } from "react-icons/bs";

const PageSpeedInsights = () => {
  const [activeTab, setActiveTab] = useState('desktop');
  const location = useLocation();
  const pageSpeedData = location.state?.pageSpeedData;
  const time = pageSpeedData.lighthouseResult.fetchTime;
  const domainName = pageSpeedData.id;
  //console.log("pageSpeedData:", pageSpeedData);

  const inputTime = new Date(time)
  const formattedTime = inputTime.toLocaleString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


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
          <h1 className=" text-dark timestamp">{formattedTime}</h1>
          <span className="download-Icon">
            <FaFileDownload size={38} />
          </span>
        </div>
        <div className="d-flex mx-auto my-4 justify-content-center">
          <div onClick={() => handleTabChange('mobile')} className="px-3 text-dark cursor-pointer">
            <span className="pr-1">
              <ImMobile size={23} />
            </span>
              Mobile
          </div>
          <div onClick={() => handleTabChange('desktop')} className="px-3 text-dark cursor-pointer">
            <span className="pr-2">
              <BsLaptop size={25} />
            </span>
              Desktop
          </div>
        </div>
        <div className="border rounded bg-white text-dark my-3">
        {activeTab === 'mobile' ? <MobileView /> : <DesktopView />}
          
        </div>
        {/*<div className="d-flex pagespeed">
        {PageSpeedInsights && (
          <pre className="bg-white">
            {JSON.stringify(pageSpeedData, null, 2)}
          </pre>
        )}
        </div>*/}
      </div>
    
        <button className="justify-content-center mx-auto mt-3
             btn btn-primary border rounded py-2.5 px-3 mx-2  my-4 font-weight-bold">
        <Link to="/pricing" className="d-flex text-white">Go next
          <span>
            <MdKeyboardDoubleArrowRight />
          </span>
          </Link>
        </button>
      
      <AuthFooter />
    </div>
  );
};

export default PageSpeedInsights;