import React from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logoutUser } from "../slice/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  // console.log(storedUser);

  const handleLogoutBtn = () => {
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav className="d-flex flex-row justify-content-between align-items-center px-3 pb-2 pt-2 bg-white">
        <div
          className="brand-logo"
          style={{ marginRight: "0.75rem" , marginLeft: "0.75rem" }}
        >
          <img
            src={require("../assets/images/logo2.png")}
            alt="logo"
            className="d-flex"
            style={{ height: "3rem" }}
          />
        </div>
        <div
          className="d-flex flex-row px-3 pt-2"
          style={{ marginRight: "0.75rem", marginleft: "0.75rem" }}
        >
          <p className="pr-1">
            <strong> Hello,</strong>
          </p>
          <span className="text-dark">
            {storedUser.firstname} {storedUser.lastname}
          </span>
          <span className="pl-3 cursor-pointer" onClick={handleLogoutBtn}>
            <IoMdLogOut size={25} />
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Header;
