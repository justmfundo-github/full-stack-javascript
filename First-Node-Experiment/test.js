let express = require("express");

let ourApp = express();
ourApp.use(express.urlencoded({ extended: false }));

ourApp.get("/", function (req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>What Colour is the sky on a clear sunny day</p>
      <input name="skyColour" autocomplete="off">
      <button>Submit Answer</button>
    </form>
    `);
});

ourApp.post("/answer", function (req, res) {
  if (req.body.skyColour.toUpperCase() == "BLUE") {
    res.send(`
      <p>Congrats, that is the correct answer!</p>
      <a href="/">Back to Homepage</a>
      `);
  } else {
    res.send(`
      <p>Sorry, that is incorrect!</p>
      <a href="/">Back to Homepage</a>
      `);
  }
});

ourApp.get("/answer", function (req, res) {
  res.send("Are you lost, there is nothing to see here");
});
ourApp.listen(3000);
