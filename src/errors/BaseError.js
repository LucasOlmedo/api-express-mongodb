class BaseError extends Error {
    constructor(message, statusCode = 500) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }

    sendResponse(error, res) {
        const { message, statusCode } = error;
        res.status(statusCode).json({ message });
    }
}

export default BaseError;