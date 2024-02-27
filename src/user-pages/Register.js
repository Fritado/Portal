import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginUser ,signUpdata } from "../slice/authSlice";
import AuthFooter from "../common/AuthFooter";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    isVisible: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { firstname, lastname, email, password, confirmPassword, isVisible } =
    formData;

  //handle input field when some value will change
  const handleOnChange = (event) => {
    // console.log(event.target.value);
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  //handle from submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const url = "api/auth/signup";
      const { formData: res } = await axios.post(url, formData);
      toast.success("Login Successfull");
      console.log(res);

      history.push("/login");
      // console.log(res);
    } catch (error) {
      toast.error("This is an error!");
      console.log(error);
    }

    const signupData = { ...formData};

    //setting signup data to store to be used after otp verification
    dispatch(signUpdata(signupData))
     dispatch(loginUser(signupData));
     console.log(signupData)
    
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
              <form onSubmit={handleOnSubmit} className="pt-3">
                <div className="form-group d-flex gap-3">
                  <input
                    required
                    type="text"
                    name="firstname"
                    value={firstname}
                    onChange={handleOnChange}
                    className="form-control form-control-lg mr-2"
                    id="exampleInputUsername1"
                    placeholder="Firstname"
                  />
                  <input
                    required
                    type="text"
                    name="lastname"
                    value={lastname}
                    onChange={handleOnChange}
                    className="form-control form-control-lg ml-2"
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
                        name="isVisible"
                        value="terms-condition"
                        onChange={handleOnChange}
                        checked={isVisible}
                        className="form-check-input"
                      />
                      <i className="input-helper"></i>I agree to all Terms &
                      Conditions
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={
                    !firstname ||
                    !lastname ||
                    !email ||
                    !password ||
                    !confirmPassword ||
                    !isVisible
                  }
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  SIGN UP
                </button>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account?{" "}
                  <Link to="/login" className="text-color">
                    Login
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

export default Register;
