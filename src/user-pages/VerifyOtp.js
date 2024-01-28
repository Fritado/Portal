import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authApi";

const VerifyOtp = () => {
   const [otp, setOtp] = useState("");
  // const { signupData } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  //const history = useHistory();

  // useEffect(() => {
  //   if (!signupData) {
  //     history.push("/login");
  //   }
  // }, []);

  // const handleVerifyAndSignup = (e) => {
  //  // e.preventDefault();
  //   const { firstName, lastName, email, password, confirmPassword } =
  //     signupData;

  //   dispatch(
  //     signUp(
  //       firstName,
  //       lastName,
  //       email,
  //       password,
  //       confirmPassword,
  //       otp,
        
  //     )
  //   );
  // };

  return (
    <div>
      <div>
        <h1>Verify account creation code</h1>
        <p className="">
          A verification code has been sent to you (please check the spam
          section).
        </p>
        <form >
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(props) => (
              <input
                {...props}
                placeholder="-"
                style={{
                  boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                }}
                className="w-[48px] lg:w-[60px] border-0  bg-richblack-800
                  rounded-[0.5rem] text-richblack-5 aspect-square text-center focus:border-0 focus:outline-2
                  focus:outline-yellow-50"
              />
            )}
            containerStyle={{
              justifyContent: "space-between",
              gap: "0 6px",
            }}
          />
          <button type="submit" className="">
            Verify account
          </button>
        </form>
        <div>
          <Link to="/login">
            <p>
              {" "}
              <BiArrowBack /> Back To Signup
            </p>
          </Link>
          <button 
          
          >
            <RxCountdownTimer />
            Resend it
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
