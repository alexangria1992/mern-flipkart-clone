const express = require('express');
const env = require("dotenv");
const app = express(); 
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
//environment variable or you can say constants 

//routes 
const authRoutes = require("./routes/auth")
const adminRoutes = require("./routes/admin/auth")
env.config();

//mongodb connection 
//mongodb+srv://root:<password>@cluster0.i0vcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.i0vcr.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
     {
         useNewUrlParser: true, 
         useUnifiedTopology: true,
         useCreateIndex: true
    }).then(() => {
        console.log("Database Connected!!")
    });


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", authRoutes);
app.use("/api", adminRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})

