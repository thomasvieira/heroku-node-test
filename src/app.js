const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  return response.json({Message: "Ok! Server Online"});
}); //DONE

console.log("Server Online On Port 3333");

module.exports = app;
