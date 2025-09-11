import express from 'express';

const router = express.Router();

// Default function to create and return a router instance
export default (): express.Router => {
    return router;
};
