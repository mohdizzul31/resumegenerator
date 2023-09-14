//Import required modules
const express = require("express");
const app = express();
const controller = require("./controller/resumeController.js");

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use(express.static("public"));
app.set(`view engine`,`ejs`);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views"+"/form.html");
});

app.post("/generate", (controller.resumeController));


//Start the server on port 3000
const port = 3000;
app.listen(port,() => {
    console.log(`Server is listening on port ${port}`);
});