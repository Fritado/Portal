import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FiUpload } from "react-icons/fi";
import { PiAddressBookBold } from "react-icons/pi";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { FaUserEdit, FaEdit } from "react-icons/fa";
import { IoMdPhonePortrait } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import axios from "axios";
import { setUserProfile } from "../slice/ProfileSlice";
import { loginUser } from "../slice/authSlice";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const user = useSelector((state) => state.auth.user?.data.user);

  console.log("user", user);
  console.log("token", token);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateProfile = async (token, data) => {
    

    try {
      setLoading(true);
      const ProfileResponse = await axios.put("api/auth/update-Profile", data, {
        Authorization: `Bearer ${token}`,
      });
      console.log("Profileresponse coming", ProfileResponse);
      if (!ProfileResponse.data.success) {
        throw new Error(ProfileResponse.data.message);
      }

      dispatch(setUserProfile({ ...ProfileResponse.data.updatedUserDetails }));

      toast.success("Profile updated successfully");
    } catch (error) {
      console.log("UPDATE_PROFILE_API API ERROR - ", error.message);
      toast.error("Error while updating profile details ... please wait");
    } finally {
      setLoading(false);
    }
  };
  const submitProfileForm = async (e,formdata) => {
    e.preventDefault();
     console.log("Form Data - ", formdata)
    try {
      dispatch(updateProfile(token, formdata));
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message);
    }
  };

  return (
    <div>
      {/**top part */}

      <div className="page-header">
        <div className="d-flex flex-column">
          <h3 className="page-title"> Profile </h3>
          <p className="">Lorem ipsum lorem ipsum lorem ipsum</p>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="!#" onClick={(event) => event.preventDefault()}>
                Profile
              </Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Profile
            </li>
          </ol>
        </nav>
      </div>

      {/**change profile picture */}
      <div className="flex">
        <div className=" profile card flex-row justify-content-center d-flex align-items-center border rounded my-2 px-4">
          <img
            //src={previewSource || user?.image}
            //alt={`profile-${user?.firstName}`}
            className="profile-pic border"
          />

          <div className="">
            <p style={{ fontSize: "18px", paddingLeft: "8px" }}>
              Change Profile Picture
            </p>
            <div className="d-flex flex-row " style={{ gap: "0.75rem" }}>
              {/* <input
                type="file"
                className="hidden"
                accept="image/png, image/gif, image/jpeg"
  />*/}
              <button className="btn btn-primary border rounded py-2.5 px-4 mx-2">
                Select
              </button>
              <button className="d-flex align-items-center border rounded mx-2 px-3">
                <div>Upload</div>
                <FiUpload />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**right part */}
      <div className="form-active card">
        <div className="card-body">
          <form className="d-flex mx-5 form-sample justify-content-center">
            <div className="d-flex flex-column">
              <div className="d-flex text-dark">
                <span className="mr-1">
                  <FaEdit size={25} />
                </span>
                <h1 className="card-title" style={{ fontSize: "1.5rem" }}>
                  Edit profile
                </h1>
              </div>

              <div className="d-flex flex-row input-box">
                <div className="d-flex flex-column mr-2">
                  <label htmlFor="firstName" className="">
                    <FaUserEdit /> First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter First Name"
                    className="ip-style border rounded p-4 "
                    defaultValue={user?.firstname}
                    {...register("firstName", { required: true })}
                  />
                  {errors.fisrtName && (
                    <span>Please enter your first name</span>
                  )}
                </div>
                <div className="d-flex flex-column ml-2">
                  <label htmlFor="lastName" className="">
                    <FaUserEdit /> Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter Last Name"
                    className="ip-style border rounded p-4"
                    defaultValue={user?.lastname}
                    {...register("lastName", { required: true })}
                  />
                  {errors.fisrtName && <span>Please enter your last name</span>}
                </div>
              </div>

              <div className="d-flex flex-column input-box ">
                <label htmlFor="email" className="">
                  <MdOutlineMarkEmailRead /> Email
                </label>
                <input
                  readOnly
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter email "
                  className="ip-style border rounded p-4"
                  defaultValue={user?.email}
                />
              </div>

              <div className="d-flex flex-column input-box ">
                <label htmlFor="mobileNo" className="">
                  <IoMdPhonePortrait /> Mobile No.
                </label>
                <input
                  type="tel"
                  name="Mobile No."
                  id="mobileNo"
                  placeholder="123-45-678"
                  className="ip-style border rounded p-4"
                  {...register("contactNumber", {
                    required: {
                      value: true,
                      message: "Please enter your Contact Number.",
                    },
                    maxLength: { value: 12, message: "Invalid Contact Number" },
                    minLength: { value: 10, message: "Invalid Contact Number" },
                  })}
                />
                {errors.mobileNo && <span>Please enter your Number here </span>}
              </div>
              <div className="d-flex flex-column input-box">
                <label htmlFor="address" className="">
                  <PiAddressBookBold /> Address
                </label>
                <textarea
                  name="address"
                  id="address"
                  cols="20"
                  rows="2"
                  placeholder="Enter Your Address here"
                  className=" border rounded p-4"
                  {...register("about", { required: true })}

                />
              </div>
              <div className="d-flex flex-column input-box">
                <label htmlFor="image" className="">
                  <FaRegImage /> Image(png)
                </label>
                <input
                  type="file"
                  name="file"
                  id="image"
                  placeholder="Browse"
                  className=" border rounded p-2"
                  
                />
              </div>

              <button
                type="submit"
                onClick={submitProfileForm}
                className=" profile-btn mt-4 btn btn-primary mr-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
