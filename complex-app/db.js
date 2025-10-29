const dotenv = require("dotenv");
dotenv.config();
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.CONNECTIONSTRING);

async function start() {
  await client.connect(); // await ensures that this line completes before the next line
  module.exports = client;
  const app = require("./app.js");
  console.log("listening on port: " + process.env.PORT);
  app.listen(process.env.PORT);
}

// console.log("Getting ready to start the process");
start();
