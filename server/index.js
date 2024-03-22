const express = require("express");
const app = express();
const database = require("./config/database");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const scrapeRoute = require("./routes/scrape");
const Blogtopicgenerator = require("./routes/Blogtopicgenerator");
const ProjectRoute = require("./routes/ProjectRoute");
const BusinessProfileRoute = require("./routes/BusinessProfileRoute");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const fileupload = require("express-fileupload");

dotenv.config();
const PORT = process.env.PORT || 4000;

//databse connect
database.connect();

//middleware
app.use(fileupload());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);

//routes
//http://localhost:4000/api/fritado
app.use("/api/auth", userRoutes);
app.use("/api/scrape" , scrapeRoute );
app.use("/api/openAi", Blogtopicgenerator);
app.use("/api/domainName", ProjectRoute);
app.use("/api/businessProfile" , BusinessProfileRoute)

//default routes
app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is up and running....",
  });
});

app.listen(PORT, () => {
  console.log(`App is listening at ${PORT}`);
});
