import BaseError from "../errors/BaseError.js";

const errorHandle = (error, req, res, next) => {
    if (error instanceof BaseError) {
        error.sendResponse(error, res);
    } else {
        next(error);
    }
};

export default errorHandle;