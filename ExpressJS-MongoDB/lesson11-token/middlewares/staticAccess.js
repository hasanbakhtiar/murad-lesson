const staticAccess = async (req, res, next) => {
    try {
        const token = 'd832767809bb1a62ceb8168aa4c18072';
        const incomingToken = req.headers['static-access'];
        if (
            !Object.keys(req.headers).includes('static-access') ||
            !incomingToken ||
            incomingToken !== token
        ) {
            return res.status(403).json({
                message: 'NO ACCESS',
            });
        }
        next();
    } catch (error) {
        console.log(error);
    }
};
module.exports = {staticAccess};
