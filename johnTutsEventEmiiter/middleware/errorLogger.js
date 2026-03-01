const { myEventLogger } = require("./eventEmitter");

const logError = (err, req, res, next) => {
  myEventLogger(`Error: ${err.message}`, "errorLog.txt");
  console.log(err.stack);
  res.status(500).send("Internal Server Error");
  next();
};

module.exports = logError;
