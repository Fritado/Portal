import React, { useEffect } from "react";
import { IoMdLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../slice/authSlice";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user?.data.user);
  const storedUsername = localStorage.getItem("username");
  console.log("storedUsername", storedUsername);
  useEffect(() => {
    // If there's a stored username, dispatch the loginUser action
    if (storedUsername) {
      //dispatch(loginUser({ username: storedUsername }));
    }
  }, [dispatch, storedUsername]);

  const handleLogoutBtn = () => {
    localStorage.removeItem("username");
    dispatch(logoutUser());
  };
  return (
    <div>
      <nav className="d-flex flex-row justify-content-between align-items-center px-3 pb-2 pt-2 bg-white">
        <div className="brand-logo">
          <img
            src={require("../assets/images/logo2.png")}
            alt="logo"
            className="d-flex"
            style={{ height: "3rem" }}
          />
        </div>
        <div className="d-flex flex-row px-3 pt-2">
          <p className="pr-1">
            <strong> Hello,</strong>
          </p>
          <span className="text-dark">
            {user?.firstname} {user?.lastname}
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
