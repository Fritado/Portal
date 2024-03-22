import React, { useState } from "react";
import Header from "./common/Header";
import AuthFooter from "./common/AuthFooter";
import { TfiControlForward } from "react-icons/tfi";
import axios from "axios";
import { Link,useHistory } from "react-router-dom";

const PortalWalkThrough = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [cleanContent, setCleanContent] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const fetchwebsiteName = async (e) => {
    setLoading(true);
    //const getWebsiteUrl = "http://localhost:4000/api/domainName/fetch-projectUrl";
    const getWebsiteUrl = "api/domainName/fetch-projectUrl";
    const token = localStorage.getItem("token");
    try {
      if (!token) {
        throw new Error("Token not found , please login first");
      }
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const Website_Name = await axios.get(getWebsiteUrl, config);
      const data = Website_Name.data;
      const website_array = data.data[0];
      console.log("About Business Response", website_array[0]);
      const zerothIndexValue = website_array[0];
      setWebsiteName(zerothIndexValue);
      handleSubmit();
      //console.log("Value at 0th index:", zerothIndexValue);
    } catch (error) {
      console.log(
        error,
        "Error in portal walk Through while fetching website name of business"
      );
      setLoading(false);
    }
  };
  const handleSubmit = async (e) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/api/scrape/business-profile-generator",
        { website_name: websiteName }
      );
      const { cleanContent } = response.data;
      //console.log("cleanContent ", cleanContent);
      setCleanContent(cleanContent);
      analyzeContent();
    } catch (error) {
      console.error("Error in fetching content of scrapped website:", error);
      setError("Failed to analyze content");
      setLoading(false);
    }
  };
  const analyzeContent = async (e) => {
    const openAISecretKey =
      "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";
    const prompt = `
      I have copied this  ${cleanContent}  content from a service/business website. I want you to analyse this content and provide me below information.
      1. Write about business in 500 words? Store the answer in Business variable.
      2. What services or products it offers? Store the answer in Services variable.
      3. Give me 100 short tail and  long tail local keywords based on my business location .
       that will help me optimize the website for Search Engine to attract targeted business.
      Store the answer in Keywords variable.
      4. Give me list of business location (example : India, Karnataka, Bangalore etc).
      `;
    const data = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.5,
      max_tokens: 2500,
      top_p: 1.0,
      frequency_penalty: 0.52,
      presence_penalty: 0.5,
      stop: ["11."],
    };

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openAISecretKey}`,
          },
        }
      );
      // console.log("Analysis Result:", response);
      const messageContent = response.data.choices[0].message.content;
      const businessStartIndex = messageContent.indexOf("Business:") + 10;
      const businessEndIndex = messageContent.indexOf("Services:");
      const businessContent = messageContent
        .substring(businessStartIndex, businessEndIndex)
        .trim();

      const servicesStartIndex = messageContent.indexOf("Services:") + 9; // Adding 9 to exclude "Services:" and the space
      const servicesEndIndex = messageContent.indexOf("Keywords:");
      const servicesContent = messageContent
        .substring(servicesStartIndex, servicesEndIndex)
        .trim();

      // Extracting keywords content
      const keywordsStartIndex = messageContent.indexOf("Keywords:") + 9; // Adding 9 to exclude "Keywords:" and the space
      const keywordsContent = messageContent
        .substring(keywordsStartIndex)
        .trim();
      await savingbusinessContent(businessContent);
      await savingServiceContent(servicesContent);
      await savingKeyWordContent(keywordsContent);
      console.log("Message Content:", messageContent);
      console.log("Keywords Content:", keywordsContent);
      setLoading(false);
      history.push('/dashboard');
    } catch (Error) {
      console.log(Error, "Error while calling openAI api ");
      setLoading(false);
    }
  };

  const savingbusinessContent = async (businessContent) => {
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
        aboutBusiness: businessContent,
      };
      const saveBusinessUrl =
        "http://localhost:4000/api/businessProfile/update-businessProfile";
      const BusinessContentResponse = await axios.put(
        saveBusinessUrl,
        requestBody,
        config
      );
      // console.log("Business content saved:", BusinessContentResponse.data);
    } catch (error) {
      console.error("Error while saving business content of Open AI:", error);
    }
  };

  const savingServiceContent = async (serviceContent) => {
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
        productAndServices: serviceContent,
      };
      const saveServiceUrl =
        "http://localhost:4000/api/businessProfile/update-product-service";
      const ServiceContentResponse = await axios.put(
        saveServiceUrl,
        requestBody,
        config
      );
      //console.log("Service content saved:", ServiceContentResponse.data);
    } catch (Error) {
      console.log(
        "Error received while saving Service data coming from Open AI",
        Error
      );
    }
  };

  const savingKeyWordContent = async (keyWordsContent) => {
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
        keywords: keyWordsContent,
      };
      const saveKeywordUrl =
        "http://localhost:4000/api/businessProfile/update-keywords";
      const KeywordsContentResponse = await axios.put(
        saveKeywordUrl,
        requestBody,
        config
      );
      //console.log("Keywords content saved:", KeywordsContentResponse.data);
    } catch (Error) {
      console.log(
        "Error received while saving keyword data coming from Open AI",
        Error
      );
    }
  };

  return (
    <div>
      <Header />
      <div>
        <div
          className="d-flex flex-column mt-4  justify-content-center mx-auto bg-white"
          style={{ maxWidth: "655px" }}
        >
          <div className="d-flex flex-column py-4 px-3">
            <h2 className="">Watch our guide</h2>
            <p>
              Lorem lorem lorem lorem lorem Lorem lorem lorem lorem loremLorem
              lorem lorem lorem loremLorem lorem lorem lorem lorem
            </p>
          </div>
          <div className="my-3 px-3 d-flex justify-content-center ">
            <iframe
              width="860"
              height="400"
              src="https://www.youtube.com/embed/4RVv5o-ctic?si=TbM0KiN59JZJ3ptp&amp;start=24"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-auto  mt-4 ">
          <Link to="#">
            <button
              onClick={fetchwebsiteName}
              className="btn text-dark pl-2 mx-2 "
            >
              Explore Your Dashboard
              <span className="ml-1">
                <TfiControlForward />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <AuthFooter />
    </div>
  );
};

export default PortalWalkThrough;
