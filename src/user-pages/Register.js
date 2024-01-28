import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
//import { sendOtp } from "../services/operations/authApi";
import { setSignupData } from "../slice/authSlice";
import AuthFooter from "../common/AuthFooter";
import axios from "axios";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    mode: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstname, lastname, email, password, confirmPassword, mode } =
    formData;

  //handle input field when some value will change
  const handleOnChange = (event) => {
    console.log(event.target.value);
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
      //[e.target.name]: e.target.value,
    }));
  };
  //handle from submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:4000/api/v1/auth/signup";
      const { formData: res } = await axios.post(url, formData);
      history.push("/login");
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    const signupData = { ...formData };

    //setting signup data to store to be used after otp verification
    dispatch(setSignupData(signupData));

    //send otp to user for verification
    //dispatch(sendOtp(formData.email));
    //Reset form data
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

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
              <form onSubmit={handleOnSubmit} className="pt-3">
                <div className="form-group d-flex gap-6">
                  <input
                    required
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleOnChange}
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Firstname"
                  />
                  <input
                    required
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleOnChange}
                    className="form-control form-control-lg"
                    id="exampleInputUsername1"
                    placeholder="Lastname"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    className="form-control form-control-lg"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleOnChange}
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleOnChange}
                    className="form-control form-control-lg"
                    id="exampleInputPassword1"
                    placeholder="Re-type Password"
                  />
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input
                        type="checkbox"
                        name="mode"
                        value="terms-condition"
                        onChange={handleOnChange}
                        checked={mode === "terms-condition"}
                        className="form-check-input"
                      />
                      <i className="input-helper"></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  SIGN UP
                </button>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/user-pages/login" className="text-primary">
                    Login
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
  );
};

export default Register;
