import React, { useState } from "react";
import AuthFooter from "../common/AuthFooter";
import { useHistory, useParams, Link, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setToken } from "../slice/tokenSlice";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const { password, confirmPassword } = formData;
  const handleOnChange = ({ currentTarget: input }) => {
    //console.log(input.value)
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const url = `api/auth/reset-password`;
      console.log(url);
      const res = await axios.post(url, {
        password,
        confirmPassword,
        token,
      });
      console.log("resdata", res);
      toast.success("Password Reset Successfull");
      history.push("/login");
    } catch (error) {
      toast.error("!Token expired please generate new link");
      console.log(error);
      console.log("Error resetting password");
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
              <form onSubmit={handelOnSubmit} className="pt-3">
                <div className="form-group">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Password"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    name="confirmPassword"
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Re-type Password"
                    onChange={handleOnChange}
                  />
                </div>

                <button
                  type="submit"
                  //disabled={!showPassword || !showConfirmPassword}
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
