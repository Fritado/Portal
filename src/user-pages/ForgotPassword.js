import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/v1/auth/reset-password-token";
      const res = await axios.post(url, { email });
      setEmailSent(true);
      toast.success("Email sent  Successfull");
    } catch (error) {
      toast.error("This is an error!");
      console.log(error);
    }
  };
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0 d-flex flex-column mx-auto">
          <div className="col-lg-4 mx-auto pt-5">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5 mt-4">
              <div className="brand-logo">
                <img
                  src={require("../assets/images/logo2.png")}
                  alt="logo"
                  className="d-flex mx-auto"
                />
              </div>
              <h4>{!emailSent ? "Reset your Password" : "Check email"}</h4>
              <h6 className="font-weight-light">
                {!emailSent
                  ? "Signing up is easy. It only takes a few steps"
                  : `We have sent the reset password email to ${email}`}
              </h6>
              <form onSubmit={handelOnSubmit} className="pt-3">
                {!emailSent && (
                  <div className="form-group">
                    <input
                      required
                      type="email"
                      name="email"
                      value={email}
                      placeholder="Enter Email address"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={!email}
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  {!emailSent ? "RESET PASSWORD" : "Resend Email"}
                </button>
                <div className="text-center mt-4 font-weight-light">
                  <Link to="/login" className="text-color">
                    Need help signing in?
                  </Link>
                </div>
              </form>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
