import React, { useState } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";
import { ImMobile } from "react-icons/im";
import { BsLaptop } from "react-icons/bs";
import { setDomainName } from "../slice/PageSpeedSlics";
import { useDispatch } from 'react-redux';
import Header from "../common/Header";

const PageSpeedInsights = () => {
  const [activeTab, setActiveTab] = useState("desktop");
  const location = useLocation();
  const dispatch = useDispatch();
  const pageSpeedData = location.state?.pageSpeedData;
  const time = pageSpeedData.lighthouseResult.fetchTime;
  const domainName = pageSpeedData.id;
  dispatch(setDomainName(domainName))
  console.log("pageSpeedData:", pageSpeedData);

  const inputTime = new Date(time);
  const formattedTime = inputTime.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="d-flex flex-column">
      <Header />
     
      <div style={{ maxWidth: "960px", margin: "auto" }} className="mt-4 pt-2">
          <h1 className="pb-1 text-dark text-center">{formattedTime}</h1>
        <div className="d-flex mx-auto my-2 justify-content-center ">
          {/*<div
            onClick={() => handleTabChange("mobile")}
            className="px-3 text-dark cursor-pointer"
          >
            <span className="pr-1">
              <ImMobile size={23} />
            </span>
            Mobile
          </div> */}
          <div className="px-3 text-dark cursor-pointer">
            <span className="pr-2">
              <BsLaptop size={25} />
            </span>
            Desktop
          </div>
        </div>
        <div className="border rounded bg-white text-dark mb-3">
          {activeTab === "mobile" ? <MobileView /> : <DesktopView />}
        </div>
        {/*<div className="d-flex pagespeed">
        {PageSpeedInsights && (
          <pre className="bg-white">
            {JSON.stringify(pageSpeedData, null, 2)}
          </pre>
        )}
        </div>*/}
      </div>

      <button
        className="justify-content-center mx-auto mt-3
             btn btn-primary border rounded py-2.5 px-3 mx-2  my-4 font-weight-bold"
      >
        <Link to="/pricing" className="d-flex text-white text-decoration-none">
          Go next
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
