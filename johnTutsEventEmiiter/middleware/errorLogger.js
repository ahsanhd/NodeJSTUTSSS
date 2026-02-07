const { myEventLogger } = require("./eventEmitter");

const logError = (res, req, err, next) => {
  myEventLogger(`Error: ${err.message}`, "errorLog.txt");
  console.log(err.stack);
  res.status(500).send("Internal Server Error");
  next();
};

module.exports = logError;
