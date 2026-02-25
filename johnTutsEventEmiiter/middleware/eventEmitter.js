const fs = require("fs");
const fsPromises = require("fs/promises");
const uuid = require("uuid");
const fns = require("date-fns");
const path = require("path");

const myEventLogger = async (message, fileName) => {
  const date = fns.format(new Date(), "yy-MM-dd\tHH:mm:ss");
  const logMessage = `${date}\t${message} for user ${uuid.v4()}\n`;

  console.log(logMessage);
  try {
    if (!fs.existsSync(path.join(__dirname, "..", fileName))) {
      await fsPromises.mkdir(path.join(__dirname, "..", fileName));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "..", fileName),
      logMessage,
    );
  } catch (err) {
    console.error("Error writing to log file", err);
  }
};

const logger = (req, res, next) => {
  myEventLogger(
    `${req.method}\t ${req.headers.origin}\t ${req.url}`,
    "log.txt",
  );
  console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = { myEventLogger, logger };
