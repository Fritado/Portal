import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form } from "react-bootstrap";
import AuthFooter from "../common/AuthFooter";
import axios from'axios';

const Login= () =>  {
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

  const handelOnSubmit = async(e) => {
     e.preventDefault();
    try{
      const url = "http://localhost:4000/api/v1/auth/login";
      const { formData: res } = await axios.post(url, formData);
      localStorage.setItem("token", res);
      history.push("/business-domain");
      console.log(res);

    }
    catch(error){
      console.log(error);

    }
    //console.log(formData);
    //dispatch(login(email, password, navigate));
  };
    return (
      <div>
        <div className="d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0 d-flex flex-column mx-auto">
            <div className="col-lg-4 mx-auto">
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
                <Form  onSubmit={handelOnSubmit} className="pt-3">
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
                      onClick={(event) => event.preventDefault()}
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
            <AuthFooter
            
            footdec={
              "© 2024 Copyright Fritado Technologies. All rights reserved"
            }
          />
              
          </div>
        </div>
      </div>
    );

}

export default Login;
