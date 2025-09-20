# Express-API
This project builds a backend in Express by implementing simple REST APIs for authentication and users.

## Project Structure
```
/src
├── index.ts                  # Server entry point
├── db
│   └── users.ts              # User model + DB CRUD functions
├── helpers
│   └── index.ts              # Password hashing, salt generation, etc
├── middlewares
│   └── index.ts              # Authentication / Authorization middleware
├── router
│   ├── index.ts              # Combines all routers
│   ├── authentication.ts     # Auth routes
│   └── users.ts              # User routes
└── controllers               # Business logic
    ├── authentication.ts  
    └── users.ts           
```

## Component Roles
| Component | Roles |
| --- | --- |
| index.ts | Initialises the Express app, sets up the global middlewares, starts HTTP server, connects to the MongoDB database |
| db/users.ts | Defines MongoDB User schema and provides CRUD functions |
| helpers/index.ts | Handles password hashing, salt/pepper generation, security utilities |
| middlewares/index.ts | Implements authentication and authorization middlewares |
| router/index.ts | Combines all individual routers and exports the main router |
| router/authentication.ts | Defines /auth routes |
| router/users.ts | Defines /users routes for CRUD operations |
| controllers/authentication.ts | Handles register/login logic, cookie creation, password verification |
| controllers/users.ts | Handles user retrieval, deletion, and updates |

## Architecture Flow Diagram
<img width="1227" height="477" alt="image" src="https://github.com/user-attachments/assets/e88027b0-c970-4665-b5b0-f639ce30e2af" />
