import { endpoints } from "../api";
import { setToken } from "../../slice/authSlice";
import { apiConnector } from "../apiConnector";
import { useHistory } from 'react-router-dom';

 
const { SENDOTP_API, SIGNUP_API, LOGIN_API } = endpoints;



export function sendOtp(email) {
  return async () => {
    try {
      const response = await apiConnector("POST", SENDOTP_API, {
        email,
        checkUserPresent: true,
      });
      console.log("SENDOTP API RESPONSE......", response);

      console.log(response.data.success);
      if (!response.data.success) {
        throw new Error(response.data.success);
      }
     // window.location.replace("/verify-otp");
   // navigate("/verify-otp")
    } catch (error) {
      console.log(error)
      console.log("SENDOTP API ERROR", error.message);
    }
  };
}

export function signUp(
  firstname,
  lastname,
  email,
  password,
  confirmPassword,
  otp,

) {
  return async () => {
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
        otp,
      });
      console.log("SIGNUP API RESPONSE.......", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
     // window.location.replace("/login");
     // navigate("/login");
    } catch (error) {
      console.log("SIGNUP API ERROR............", error);
     // window.location.replace("/register");
     // navigate("/signup")
    }
  };
}


export function login(email, password, history) {
  return async (dispatch) => {
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      });
      console.log("LOGIN API RESPONSE...", response);
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      dispatch(setToken(response.data.token));
      history.push("/dashboard");
    } catch (error) {
      console.log("LOGIN API ERROR............", error);
    }
  };
}

// export function logout(navigate) {
//   return (dispatch) => {
//     dispatch(setToken(null));
//     dispatch(setUser(null));
//     dispatch(resetCart());
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     toast.success("Logged Out");
//     navigate("/");
//   };
// }
