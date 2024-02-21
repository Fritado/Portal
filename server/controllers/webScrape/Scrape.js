const express = require("express");
const axios = require("axios");
const puppeteer = require("puppeteer");

exports.webScrape = async (req, res) => {
  try {
    console.log("Incoming request body:", req.body);
    const { domainName } = req.body;
    if (!domainName) {
      return res.status(400).json({ error: "URL is required" });
    }
    const scrapedData = await axios.get(domainName, { timeout: 15000 });
    console.log( "scrapedData" , scrapedData);
    const htmlContent = scrapedData.data;
   
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(domainName, { waitUntil: "domcontentloaded" });

    // Extract text content after the page has fully loaded
    const textContent = await page.evaluate(() => {
      return document.body.textContent;
    });

    await browser.close();

    return res.status(200).json({
      success: true,
      message: "Scrapping Successfull",
      scrapedContent:textContent,
    });
  } catch (error) {
    console.error("Error:", error.message);
    console.log("Error while scraping website");
    res.status(500).json({ error: "Internal Server Error" });
  }
};
