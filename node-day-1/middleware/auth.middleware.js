const myMiddleWare = (req, res, next) => {
    const secret = req.body.secret;

    if(secret === undefined){
        const err = new Error('Forbidden');
        err.status = 403;
        next(err);
        return;
    }

    if(secret !== 'node') {
        const err = new Error('Unauthorized');
        err.status = 401;
        next(err);
        return;
    }

    next();
}

module.exports = myMiddleWare;