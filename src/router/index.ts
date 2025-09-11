import express from 'express';
import authentication from './authentication';

const router = express.Router();

// Default function to create and return a router instance
export default (): express.Router => {
    authentication(router);
    return router;
};
