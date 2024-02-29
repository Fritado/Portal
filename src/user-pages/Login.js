import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import AuthFooter from "../common/AuthFooter";
import axios from "axios";
import { toast } from "react-hot-toast";
import { loginUser, userToken } from "../slice/authSlice";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { email, password } = formData;

  const handleOnChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const handelOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "api/auth/login";
      //const { formData: res } = await axios.post(url, formData);
      const response = await axios.post(url, formData);

      const { token } = response.data;
      //console.log(token);
      localStorage.setItem("token", token);
      toast.success("Login Successfull");

      history.push("/business-domain");
      dispatch(loginUser(response));
      dispatch(userToken(token));
    } catch (error) {
      toast.error("This is an error!");
      console.log(error);
    }
  };
  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0 d-flex flex-column mx-auto ">
          <div className="col-lg-4 mx-auto pt-5">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5 mt-5">
              <div className="brand-logo">
                <img
                  src={require("../assets/images/logo2.png")}
                  alt="logo"
                  className="d-flex mx-auto"
                />
              </div>
              <h4>Hello! let's get started</h4>
              <h6 className="font-weight-light">Sign in to continue.</h6>
              <Form onSubmit={handelOnSubmit} className="pt-3">
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={email}
                    placeholder="Username"
                    onChange={handleOnChange}
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <Form.Group className="d-flex search-field">
                  <Form.Control
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleOnChange}
                    size="lg"
                    className="h-auto"
                  />
                </Form.Group>
                <button
                  type="submit"
                  disabled={!email || !password}
                  className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                >
                  SIGN IN
                </button>
                <div className="my-2 d-flex justify-content-between align-items-center">
                  <div className="form-check">
                    <label className="form-check-label text-secondary">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                      Remember me
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="auth-link text-secondary"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div className="text-center mt-4 font-weight-light">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-color">
                    Create
                  </Link>
                </div>
                <div className="text-center mt-4 font-weight-light">
                  <Link to="/signup" className="text-color">
                    Need help signing in?
                  </Link>
                </div>
              </Form>
            </div>
          </div>
          <AuthFooter />
        </div>
      </div>
    </div>
  );
};

export default Login;
