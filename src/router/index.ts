import express from 'express';
import authentication from './authentication';
import users from './users';

const router = express.Router();

// Default function to create and return a router instance
export default (): express.Router => {
    authentication(router);
    users(router);
    
    return router;
};
