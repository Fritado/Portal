import React from "react";
import { IoTriangle, IoSquareSharp } from "react-icons/io5";
import { MdCircle } from "react-icons/md";
import {
  RiCalendar2Line,
  RiTimerLine,
  RiWifiOffFill,
  RiLoaderLine,
} from "react-icons/ri";
import { PiDesktopTowerBold, PiGoogleChromeLogoBold } from "react-icons/pi";

const PageSpeedData = () => {
  return (
    <div>
      <div className="mx-auto justify-content-center my-2">
        {/**preogress */}
        <div className="d-flex flex-row progress-box ">
          <div className="d-flex flex-column mx-auto box-style">
            <div className="progress-bar mx-auto">
              <span className="progress-value">0%</span>
            </div>
            <h3 className="text-center mt-3">Perfomance</h3>
            <p className="text-center mt-1 ">
              Values are estimated and may vary.{" "}
              <span className="text-primary">
                The performance score is calculated{" "}
              </span>{" "}
              directly from these metrics.
              <span className="text-primary"> See calculator.</span>
            </p>
            <div className="d-flex flex-row mx-auto">
              <div className="d-flex flex-row ">
                <span>
                  <IoTriangle color="red" className="icon" /> 0-49
                </span>
              </div>
              <div className="d-flex flex-row ">
                <span className="pl-3">
                  <IoSquareSharp color="rgb(221, 207, 15)" className="icon" />{" "}
                  50-89
                </span>
              </div>
              <div className="d-flex flex-row ">
                <span className="pl-3">
                  <MdCircle color="rgb(15, 221, 60)" className="icon" /> 90-100
                </span>
              </div>
            </div>
          </div>

          <div className="d-flex box-style border-left">
            <img
              src={require("../assets/images/logo2.png")}
              alt="logo"
              className="d-flex p-3 mx-auto page-img border rounded"
            />
          </div>
        </div>
        {/**content div */}
        <div className="my-3 px-1">
          <h6 className="pl-2">METRICS</h6>
          <div className="d-flex flex-column mt-2">
            {/**replicate it */}
            <div className="d-flex flex-row border-top px-3 py-2 ">
              <div
                className="d-flex flex-column mt-1 "
                style={{ width: "50%" }}
              >
                <span className="pr-3">
                  <IoTriangle color="red" className="icon" />
                  First Contentful Paint
                </span>
                <h2 className="pl-4 ml-2 pt-1">7.1 s</h2>
              </div>
              <div className="d-flex flex-column mt-1 ">
                <span>
                  {" "}
                  <IoTriangle color="red" className="icon" />
                  Largest Contentful Paint
                </span>
                <h2 className="pl-4 ml-2 pt-1">21.7 s</h2>
              </div>
            </div>

            <div className="d-flex flex-row border-top px-3 py-2  ">
              <div
                className="d-flex flex-column mt-1 "
                style={{ width: "50%" }}
              >
                <span className="pr-3">
                  <MdCircle color="rgb(15, 221, 60)" className="icon" />
                  Total Blocking Time
                </span>
                <h2 className="pl-4 ml-2 pt-1">7.1 s</h2>
              </div>
              <div className="d-flex flex-column mt-1 ">
                <span>
                  {" "}
                  <MdCircle color="rgb(15, 221, 60)" className="icon" />
                  Cumulative Layout Shift
                </span>
                <h2 className="pl-4 ml-2 pt-1">0.013 s</h2>
              </div>
            </div>
            <div className="d-flex flex-row border-top px-3 py-2">
              <div className="d-flex flex-column mt-1 ">
                <span className="pr-3">
                  <IoTriangle color="red" className="icon" />
                  Speed Index
                </span>
                <h2 className="pl-4 ml-2 pt-1">17.1 s</h2>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-around mt-2">
              <div className="d-flex flex-column px-2 py-2">
                <span style={{ fontSize: "13px" }}>
                  <RiCalendar2Line size={15} className="icon-sm" />
                  Captured at 9 Feb 2024, 14:15 GMT+5:30
                </span>
                <span style={{ fontSize: "13px" }}>
                  <RiTimerLine size={15} className="icon-sm" />
                  Initial page load
                </span>
              </div>
              <div className="d-flex flex-column px-1 py-2">
                <span style={{ fontSize: "13px" }}>
                  <PiDesktopTowerBold size={15} className="icon-sm" />
                  Emulated Moto G Power with Lighthouse 11.4.0
                </span>
                <span style={{ fontSize: "13px" }}>
                  <RiWifiOffFill size={15} className="icon-sm" />
                  Slow 4G throttling
                </span>
              </div>
              <div className="d-flex flex-column px-1 py-2">
                <span style={{ fontSize: "13px" }}>
                  <RiLoaderLine size={15} className="icon-sm" />
                  Single page load
                </span>
                <span style={{ fontSize: "13px" }}>
                  <PiGoogleChromeLogoBold size={15} className="icon-sm" />
                  Using HeadlessChromium 121.0.6167.85 with lr
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageSpeedData;
