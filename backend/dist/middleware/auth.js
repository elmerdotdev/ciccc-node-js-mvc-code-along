"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cookieAuthCheck = void 0;
const cookieAuthCheck = (req, res, next) => {
    const { isAuthenticated } = req.signedCookies;
    console.log(req.cookies);
    if (isAuthenticated) {
        next();
    }
    else {
        res.status(403).send('Middleware');
    }
};
exports.cookieAuthCheck = cookieAuthCheck;
