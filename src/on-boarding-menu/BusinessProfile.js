import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { MdAdd } from "react-icons/md";
import axios from "axios";

const BusinessProfile = () => {
  const [businessName, setBusinessName] = useState("");
  const [aboutBusiness, setAboutBusiness] = useState("");
  const [location, setLocation] = useState("");
  const [productAndServices, setproductAndServices] = useState([]);

  const saveLocalStorage = () => {
    try {
      localStorage.setItem("businessName", businessName);
      localStorage.setItem("aboutBusiness", aboutBusiness);
      localStorage.setItem("location", location);
      localStorage.setItem("productAndServices", productAndServices);
    } catch (err) {
      console.error("Error saving to local storage:", err);
    }
  };

  useEffect(() => {
    try {
      setBusinessName(localStorage.getItem("businessName") || "");
      setAboutBusiness(localStorage.getItem("aboutBusiness") || "");
      setLocation(localStorage.getItem("location") || "");
      setproductAndServices(localStorage.getItem("productAndServices") || "");
    } catch (error) {
      console.error("Error loading from local storage:", error);
    }
  }, []);

  const handleInputChange = (setState) => (event) => {
    try {
      const value = event.target.value;
      setState(value);
      // Update local storage immediately upon input change
      localStorage.setItem(event.target.name, value);
    } catch (error) {
      console.error("Error updating local storage:", error);
    }
  };

  const savingBusinessProfile = async (event) => {
    event.preventDefault();

    const updateBusinessProfileUrl =
      "http://localhost:4000/api/businessProfile/update-businessProfile";

    const createbusinessProfileUrl =
      "http://localhost:4000/api/businessProfile/create-businessProfile";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requestBody = {
        businessName,
        aboutBusiness,
      };

      // Check if business profile fields are not empty
      if (businessName.trim() !== "" || aboutBusiness.trim() !== "") {
        // If fields are not empty, update the business profile
        await axios.put(updateBusinessProfileUrl, requestBody, config);
        //console.log("Business Profile updated successfully");
      } else {
        // If fields are empty, create a new business profile
        await axios.post(createbusinessProfileUrl, requestBody, config);
        //console.log("Business Profile created successfully");
      }
    } catch (error) {
      console.log("Error in Business Profile", error);
    }
  };

  const savingLocation = async (event) => {
    event.preventDefault();

    const locationUrl =
      "http://localhost:4000/api/businessProfile/create-location";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requestBody = {
        location,
      };
      const LocationResponse = await axios.post(
        locationUrl,
        requestBody,
        config
      );
      //console.log("Location saved successfully:", LocationResponse);
    } catch (error) {
      console.log("Error in saving location", error);
    }
  };

  const savingProductAndService = async (event) => {
    event.preventDefault();

    const productAndServiceUrl =
      "http://localhost:4000/api/businessProfile/create-product&services";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const requestBody = {
        productAndServices,
      };
      const productAndServiceResponse = await axios.post(
        productAndServiceUrl,
        requestBody,
        config
      );
      // console.log(
      //   "Product And Service Response saved successfully:",
      //   productAndServiceResponse
      // );
    } catch (error) {
      console.log("Error in saving Product And Service", error);
    }
  };

  const getAboutBusiness = async (e) => {
    const getAboutBusinessUrl =
      "http://localhost:4000/api/businessProfile/get-businessProfile";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const BusinessData = await axios.get(getAboutBusinessUrl, config);
      // console.log("BusinessData" , BusinessData);
      const BusinessName = BusinessData.data.data.businessName;
      //console.log("BusinessName", BusinessName);
      setBusinessName(BusinessName);
      const AboutBusinessName = BusinessData.data.data.aboutBusiness;
      setAboutBusiness(AboutBusinessName);
      //console.log("BusinessData", BusinessData.data.data.aboutBusiness);
    } catch (Error) {
      console.error("Error while fetching about Business data", Error);
    }
  };
  const getServices = async (e) => {
    const getServiceUrl =
      "http://localhost:4000/api/businessProfile/get-product-service";
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const ServiceData = await axios.get(getServiceUrl, config);
      const serviceContentData = ServiceData.data.data.productAndServices[0];
      const data = serviceContentData.split(",");
      setproductAndServices(data);
      // console.log("ServiceData", ServiceData);
      console.log("ServiceData", data);
    } catch (Error) {
      console.error("Error while fetching Service  data", Error);
    }
  };

  useEffect(() => {
    getAboutBusiness();
    getServices();
  }, []);

  return (
    <div>
      <div className="page-header">
        <h2 className="text-dark font-weight-bold mb-2"> Business Profile </h2>
      </div>
      <div className="row">
        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Business profile</h4>
              <p className="card-description">
                Fritado leverages your business name and description to craft
                pertinent content. It is essential for the description to be
                accurate and concise
              </p>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1"> Business Name</label>
                  <Form.Control
                    type="text"
                    name="businessName"
                    value={businessName}
                    onChange={handleInputChange(setBusinessName)}
                    //onChange={(e) => setBusinessName(e.target.value)}
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Business Name"
                  />
                </Form.Group>

                <Form.Group>
                  <label htmlFor="exampleTextarea1">About Business</label>
                  <textarea
                    name="aboutBusiness"
                    value={aboutBusiness}
                    onChange={handleInputChange(setAboutBusiness)}
                    //onChange={(e) => setAboutBusiness(e.target.value)}
                    className="form-control"
                    id="exampleTextarea1"
                    col=""
                    rows="6"
                  ></textarea>
                </Form.Group>
                <button
                  onClick={savingBusinessProfile}
                  type="submit"
                  className="btn btn-primary mr-2"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Location</h4>
              <p className="card-description">
                Fritado can autonomously generate content focused on your
                business's location, enhancing the ability to reach more
                pertinent prospective customers.
              </p>
              <form className="forms-sample">
                <Form.Group>
                  <label htmlFor="exampleInputName1">Location</label>
                  <Form.Control
                    type="text"
                    name="location"
                    value={location}
                    onChange={handleInputChange(setLocation)}
                    //onChange={(e) => setLocation(e.target.value)}
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="location"
                  />
                </Form.Group>
                <button
                  onClick={getServices}
                  type="submit"
                  className="btn btn-primary mr-2"
                >
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Product & Services</h4>
              <p className="card-description">
                Fritado can autonomously generate content focused on your
                business's location, enhancing the ability to reach more
                pertinent prospective customers.
              </p>

              <form className="forms-sample">
                <div style={{ textAlign: "right" }} className="mt-2">
                  <Link to="/add-keyword">
                    <button
                      onClick={savingProductAndService}
                      className="btn btn-primary border rounded py-2 px-3 mx-2"
                    >
                      Add{" "}
                      <span>
                        <MdAdd size={22} />
                      </span>
                    </button>
                  </Link>
                </div>
                <ul>
                {Array.isArray(productAndServices) && productAndServices.map((service, index) => (
          <li key={index}>{service.trim()}</li>
        ))}
                </ul>
                {/* <Form.Group>
                  <label htmlFor="exampleInputName1">Product & Services</label>
                  <Form.Control
                    type="text"
                    name="productAndServices"
                    value={productAndServices}
                    onChange={handleInputChange(setproductAndServices)}
                    //onChange={(e) => setproductAndServices(e.target.value)}
                    className="form-control"
                    id="exampleInputName1"
                    placeholder="Product & Services"
                  />
                </Form.Group> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
