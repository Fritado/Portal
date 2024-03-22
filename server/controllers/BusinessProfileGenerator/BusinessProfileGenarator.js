const User = require("../../models/User");
const Keywords = require("../../models/BusinessProfileModels/Keywords");
const ProductAndServices = require("../../models/BusinessProfileModels/ProductAndServices");
const BusinessProfile = require("../../models/BusinessProfileModels/BusinessProfile");
const { stripTags } = require("striptags");
const axios = require("axios");
const cheerio = require("cheerio");

// Initialize an empty variable to store the cleanContent result
let cleanContent = null;

exports.BusinessProfileGenerator = async (req, res) => {
  try {
    const { website_name } = req.body;

    // Remove prefixes such as www, http://, https:// from the website name
    const domain = website_name
      .replace(/^(https?:\/\/)?(www\.)?/, "")
      .split(".")
      .slice(-2)
      .join(".");

    // Function to add protocol prefix if missing
    const addProtocolPrefix = (url) => {
      if (!/^(?:f|ht)tps?:\/\//i.test(url)) {
        return `http://${url}`;
      }
      return url;
    };

    const url = addProtocolPrefix(domain);

    // Fetch HTML content of the website
    const { data: html } = await axios.get(url);

    // Load HTML into Cheerio for easy manipulation
    const $ = cheerio.load(html);

    // Extract body content
    const bodyContent = $("body").text();

    // Clean the content
     cleanContent = bodyContent
      .replace(/<[^>]*>/g, "") // Remove HTML tags
      .replace(/[^\w\s]/g, "") // Remove special characters
      .replace(/\s+/g, " ") // Remove extra whitespace
      .trim(); // Trim leading/trailing whitespace

    //const analysisResult = await analyzeContent(cleanContent);

    res.json({ cleanContent });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.PrintCleanContent = async (req, res) => {
  try {
    // Check if there is a cleanContent result available
    if (cleanContent) {
      console.log("Clean Content Result:", cleanContent);
      res.json({ message: "Clean content result printed successfully" });
    } else {
      res.status(404).json({ error: "Clean content result not found" });
    }
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.analyzeContent = async (e) => {
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



















// const prompt = `
//       I have copied this  ${cleanContent}  content from a service/business website. I want you to analyse this content and provide me below information.
//       1. What this business is about , give me this in 300 words? Enclose the answer in the <business> tag.
//       2. What services or products it offers? Enclose the answer in the <service> tag.
//       3.Give me 30 Keywords separated by comma that will help me optimize the website for Search Engine to attract targeted business.
//       `;

