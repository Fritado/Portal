import React, {useState} from 'react';
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";

const ForgotPassword = () => {
    const [email , setEmail] = useState(false);
  return (
    <div>
    <div className="d-flex align-items-center auth px-0">
      <div className="row w-100 mx-0">
        <div className="col-lg-4 mx-auto">
          <div className="auth-form-light text-left py-5 px-4 px-sm-5">
            <div className="brand-logo">
              <img
                src={require("../assets/images/logo2.png")}
                alt="logo"
                className="d-flex mx-auto"
              />
            </div>
            <h4>New here?</h4>
            <h6 className="font-weight-light">
              Signing up is easy. It only takes a few steps
            </h6>
            <form className="pt-3">
              <div className="form-group">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Enter Email here"
                  className="form-control form-control-lg"
                  id="exampleInputPassword1"
                />
              </div>
              
              <button
                type="submit"
                className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
              >
               RESET PASSWORD
              </button>
              <div className="text-center mt-4 font-weight-light">
                  <Link to="/user-pages/register" className="font-color">
                    Need help signing in?
                  </Link>
                </div>
            </form>
          </div>
        </div>
        <AuthFooter
         
          footdec={
            "© 2024 Copyright Fritado Technologies. All rights reserved"
          }
        />
      </div>
    </div>
  </div>
  )
}

export default ForgotPassword;


/**pop-up -> toast {We've sent the password reset link to your email address. Please check your inbox. If you need assistance, feel free to contact our support team.} */
