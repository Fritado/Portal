import React from "react";
import Header from "../common/Header";
import AuthFooter from "../common/AuthFooter";
import { IoSearch } from "react-icons/io5";
import HelpCenterCard from "./HelpCenterCard";

const HelpCenterPage = () => {
  return (
    <div>
      <Header />
      {/* Search bar */}
      <div
        className="px-4 mt-4"
        style={{ marginRight: "3.5rem", marginLeft: "3.5rem" }}
      >
        <div className="mt-2 d-flex flex-column justify-content-center">
          <span
            className=" position-relative"
            style={{ top: "40px", zIndex: "1" }}
          >
            <IoSearch
              size={25}
              style={{ marginRight: "15px", float: "right" }}
            />
          </span>
          <input
            type="search"
            placeholder="Search here"
            className="px-4 py-3 border mb-3 position-relative"
            style={{borderRadius:"10px"}}
          />
        </div>

        {/* 3 cards will display here */}
        <div className="d-flex flex-row my-4" style={{ gap: "48px" }}>
          <HelpCenterCard />
          <HelpCenterCard />
          <HelpCenterCard />
        </div>
        <div className="mt-4 pt-4"></div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default HelpCenterPage;
// self service
// client care
// create a ticket
