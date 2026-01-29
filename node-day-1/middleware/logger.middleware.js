const loggerMiddleware = (req, res, next) => {
    const methodUsed = req.method;
    const requestUrl = req.url;

    console.log({methodUsed, requestUrl});
    next();
}

module.exports = loggerMiddleware;