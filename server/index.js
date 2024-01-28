const express = require("express");
const app = express();
const database = require("./config/database")
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");

const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT || 4000;

//databse connect
database.connect();

//middleware
app.use(express.json());
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
//app.use("/api/fritado/auth" , userRoutes);
app.use("/api/v1/auth" , userRoutes);

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
