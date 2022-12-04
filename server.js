const express = require("express");
const app = express();
const isAuth=require("./Midlleware/time");
app.use(isAuth);

app.use(express.static("./"))
app.get("/", (request, response) => {
      console.log(__dirname);
   response.sendFile(__dirname + "/home.html");
 });
 app.get("/services", (request, response) => {
      console.log(__dirname);
   response.sendFile(__dirname + "/contact.html");
 });
 app.get("/about", (request, response) => {
    console.log(__dirname);
 response.sendFile(__dirname + "/service.html");
});
 

const port = 3000;
app.listen(port, (err) => {
err ? console.error(err) : console.log(`server is running on ${port}`)});