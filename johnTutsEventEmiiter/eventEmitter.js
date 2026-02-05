const fs = require("fs");
const fsPromises = require("fs/promises");
const uuid = require("uuid");
const fns = require("date-fns");
const path = require("path");

const myEventLogger = async (message) => {
  const date = fns.format(new Date(), "yy-MM-dd\tHH:mm:ss");
  const logMessage = `${date}\t${message} for user ${uuid.v4()}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }

    await fsPromises.appendFile(
      path.join(__dirname, "logs", "eventsLog.txt"),
      logMessage,
    );
  } catch (err) {
    console.error("Error writing to log file", err);
  }
};

module.exports = { myEventLogger };
