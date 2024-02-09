import React from 'react'

const Header = () => {
  return (
    <div>
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
    </div>
  )
}

export default Header
