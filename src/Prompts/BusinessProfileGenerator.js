import React, { useState, useEffect } from "react";
import axios from "axios";

const BusinessProfileGenerator = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [cleanContent, setCleanContent] = useState("");
  const [analysisResult, setAnalysisResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/scrape/business-profile-generator",
        { website_name: websiteName }
      );
      const { cleanContent } = response.data;
      console.log("cleanContent ", cleanContent);
      setCleanContent(cleanContent);
      setError("");
    } catch (error) {
      console.error("Error in fetching content of scrapped website:", error);
      setError("Failed to analyze content");
      setCleanContent("");
    }
  };

  const analyzeContent = async (e) => {
    e.preventDefault();
    const openAISecretKey =
      "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";
    const prompt = `
      I have copied this  ${cleanContent}  content from a service/business website. I want you to analyse this content and provide me below information.
      1. Write about my business in 500 words? Enclose the answer in the <business> tag.
      2. What services or products it offers? Enclose the answer in the <service> tag.
      3. Give me 100 short tail and  long tail local keywords based on my business location .separated by comma that will help me optimize the website for Search Engine to attract targeted business.
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

      console.log("Analysis Result:", response);

      const messageContent = response.data.choices[0].message.content;
      console.log("Message Content:", messageContent);
    } catch (Error) {
      console.log(Error, "Error while calling openAI api ");
    }
  };

  return (
    <div>
      <h1>Website Content Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={websiteName}
          onChange={(e) => setWebsiteName(e.target.value)}
          placeholder="Enter website name"
        />

        <button type="submit">Analyze</button>
      </form>

      <form className="py-4 my-4">
        <textarea
          type="text"
          rows={5}
          cols={18}
          placeholder="Enter cleanContent here"
          value={cleanContent}
        />
        <button onClick={analyzeContent} type="submit">
          openAi
        </button>
      </form>
      {/* {cleanContent && (
        <div>
          <h2>Business</h2>
          <p>Analyze business</p>
          <h2>Service Offered</h2>
          <p>Analyze services</p>
          <h2>Keywords</h2>
          <p>Analyze keywords</p>
        </div>
      )}
      {error && <p>{error}</p>} */}
    </div>
  );
};

export default BusinessProfileGenerator;
