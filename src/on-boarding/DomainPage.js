import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthFooter from "../common/AuthFooter";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Spinner from ".././shared/Spinner";

const DomainPage = () => {
  const [urlInput, setUrlInput] = useState("");
  const [pageSpeedData, setPageSpeedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleOnChange = (e) => {
    //  console.log(e.target.value);
    setUrlInput(e.target.value);
  };
  const fetchData = async (e) => {
    e.preventDefault();
    setLoading(true);
    const apiKey = "AIzaSyCHCEQO7ge4Rs6ABVtlcOWiejNFp5T9LWI";
    const apiUrl = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed";
    const dynamicEndpoint = `${apiUrl}?url=${encodeURIComponent(
      urlInput
    )}&key=${apiKey}`;
    try {
      const response = await fetch(dynamicEndpoint);
      //console.log("url", dynamicEndpoint);
      const data = await response.json();
      // const data = await response.data.lighthouseResult.audits;
      //console.log("Api response coming", response.data.lighthouseResult.audits);

      console.log("response api data", data);
      setPageSpeedData(data);
      history.push({
        pathname: "/pagespeed-insights",
        state: { pageSpeedData: data },
      });
    } catch (error) {
      console.error("Error fetching PageSpeed data:", error);
      // console.log("Response data:", error.response.data);
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="mt-2 d-flex align-items-center mx-auto auth px-0">
        {loading ? (
          <Spinner />
        ) : (
          <div className="row w-100 d-flex flex-column mx-auto mx-0">
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
                <h6
                  className="font-weight-light"
                  style={{ textAlign: "justify" }}
                >
                  Hello! I'm Fritado AI, your dedicated assistant designed to
                  enhance your business's SEO. Just share your URL, and I'll
                  handle automatic weekly SEO optimization. Ready to expand your
                  customer reach? Let's begin!
                </h6>
                <form className="pt-3">
                  <div className="form-group">
                    <input
                      required
                      type="text"
                      name="urlInput"
                      value={urlInput}
                      onChange={handleOnChange}
                      placeholder="https://fritado.com"
                      className="form-control form-control-lg"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <button
                    onClick={fetchData}
                    type="submit"
                    className="mt-3 btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                  >
                    Analyse
                  </button>

                  <div className="text-center mt-4 font-weight-light">
                    <Link to="/signup" className="text-color">
                      Need help ?
                    </Link>
                  </div>
                </form>
              </div>
            </div>
            <AuthFooter />
          </div>
        )}
      </div>
    </div>
  );
};

export default DomainPage;
