const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((request, response, next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE");
    response.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization");
    next();
   });
const dbRouter = require("./db.router");
app.use("/db", dbRouter);
app.get("/", (request, response) => response.redirect("/db"));
app.use(express.static(__dirname));

   
app.listen(8080, () => console.log("Server listen on port 8080"));
