import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { setToken } from "../slice/tokenSlice"

//this page will open after hiting url from email.

const ResetPassword = () => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { token } = useParams();
  const dispatch = useDispatch();

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `api/auth/reset-password/${token}`;
      const res = await axios.post(url, {
        showPassword,
        showConfirmPassword,
        token,
      });
      console.log(res);
      
     
      toast.success("Password Reset Successfull");
      history.push("/login");
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
              <h4>New here?</h4>
              <h6 className="font-weight-light">
                Signing up is easy. It only takes a few steps
              </h6>
              <form className="pt-3">
                <div className="form-group">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Re-type Password"
                  />
                </div>

                <button
                  type="submit"
                  onClick={handelSubmit}
                  disabled={!showPassword || !showConfirmPassword}
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  RESET PASSWORD
                </button>
                <div className="text-center mt-4 font-weight-light">
                  <Link to="/signup" className="text-color">
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

export default ResetPassword;
