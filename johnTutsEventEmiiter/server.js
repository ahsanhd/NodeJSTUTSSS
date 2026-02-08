const { logger } = require("./middleware/eventEmitter");
const express = require("express");
const path = require("path");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const eventEmitter = require("events");
const logError = require("./middleware/errorLogger");

class MyEmitter extends eventEmitter {}

const myEmitter = new MyEmitter();

const app = express();

app.use(logger);

const whitelist = ["https://www.mysite.com", "http://localhost:3000"];

const corsOptions = {
  options: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS "));
    }
  },
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/newpage", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("oldpage", (req, res) => {
  res.statusCode(301).redirect("/newpage");
});
app.use((req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(logError);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// myEmitter.on("log", (message) => {
//   myEventLogger(message);
// });

// setTimeout(() => {
//   myEmitter.emit("log", "Log event Happened");
// }, 2000);
