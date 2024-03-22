import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogTopicGenerator = () => {
  const [topics, setTopics] = useState([]);
  const [industryInfo, setIndustryInfo] = useState();

  useEffect(() => {
    fetchingAboutBusiness();
    fetchOpenAITopics();
  }, []);

  const fetchingAboutBusiness = async (e) => {
    const url = "http://localhost:4000/api/businessProfile/get-businessProfile";
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
      const response = await axios.get(url, config);
      const {data} = response.data;
      console.log("About Business Response",data.aboutBusiness);
      setIndustryInfo(data.aboutBusiness);
    } catch (error) {
      console.error(
        "Error while fetching About Business content from database",
        error
      );
    }
  };

  const fetchOpenAITopics = async () => {
    const openAISecretKey =
      "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";

    const instruction =
      "You are a seasoned copywriter. I want you to write 10 eye-catching blog topics based on the company information that I provide.";
    // const industry_info =
    //   "I am a banking company that provides loans, savings accounts, current accounts, and other banking services.";

    const prompt = `${instruction} Company Information: ${industryInfo}`;

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

      const responseData = response.data;
      // console.log("Response of blog topic generator", responseData);
      const generatedTopics =
        responseData.choices[0].message.content.split("\n");

      setTopics(generatedTopics.filter((topic) => topic.trim() !== ""));

      const model = responseData.model;
      const promptTokens = responseData.usage.prompt_tokens;
      const completionTokens = responseData.usage.completion_tokens;
      const totalTokens = responseData.usage.total_tokens;

      //console.log(generatedTopics);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column">
        <label className="d-flex flex-column py-2">
          Industry Information:
          <input
            type="text"
            value={industryInfo}
            onChange={(e) => setIndustryInfo(e.target.value)}
            className="py-2"
          />
        </label>
      </div>
      <button onClick={fetchOpenAITopics}>Fetch OpenAI Topics</button>
      <div>
        <h2>Generated Topics:</h2>
        <ul>
          {topics.map((topic, index) => (
            <li key={index}>{topic}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogTopicGenerator;
