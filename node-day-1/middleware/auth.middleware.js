const myMiddleWare = (req, res, next) => {
    const secret = req.body.secret;

    if(secret === undefined){
        res.json({error: 'Secret is missing'});
        return;
    }

    if(secret !== 'node') {
        res.json({error: 'Access denied'});
        return;
    }


     next();
}

module.exports = myMiddleWare;