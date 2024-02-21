import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  console.log("user details", user);

  return (
    <div className="d-flex">
   {user? (
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
            <span>{user.firstname}</span>
          </div>
        </nav>
          ):(null)
}
     
    </div>
  );
};

export default Navbar;
