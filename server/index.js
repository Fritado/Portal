const express = require("express");
const app = express();
const database = require("./config/database")
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const scrapeRoute = require("./routes/scrape")
const cors = require("cors");
const cookieParser = require('cookie-parser');

dotenv.config();
const PORT = process.env.PORT || 4000;

//databse connect
database.connect();

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use(express.urlencoded({
    extended:true
    }));

//routes
//http://localhost:4000/api/fritado
app.use("/api/auth" , userRoutes);
app.use("/api/scrape" , scrapeRoute );

//default routes
app.get("/" , (req,res) =>{
    return res.json({
        success:true,
        message:"Your server is up and running...."
    });
});

app.listen(PORT , () =>{
    console.log(`App is listening at ${PORT}`);
})
