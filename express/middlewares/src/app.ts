// import express, {
//   type ErrorRequestHandler,
//   type NextFunction,
//   type Request,
//   type Response,
// } from "express";
// const app = express();

// app.use(function handleRequest(_req, _res, next) {
//   console.log(`Time: ${Date.now()}`);
//   next();
// });

// app.use(
//   "/user/:id",
//   function handleOneUserRequest(req, _res, next) {
//     console.log(`Request URL: ${req.originalUrl}`);
//     next();
//   },
//   function handleOneUserRequest(req, _res, next) {
//     console.log(`Request Type: ${req.method}`);
//     next();
//   }
// );

// app.get(
//   "/user/:id",
//   function handleOneUserRequest(req, _res, next) {
//     // res.send(`User ID: ${req.params.id}`);
//     if (req.params.id === "0") {
//       next("route");
//     } else {
//       next();
//     }
//   },
//   function handleOneUserRequest(_req, res) {
//     res.send("regular");
//   }
// );

// app.get("/user/:id", function handleOneUserRequest(_req, res) {
//   res.send("special");
// });

// app.use(function handleNotFound(_req: Request, res: Response) {
//   res.sendStatus(404);
// });

// app.use(function handleError(
//   err: ErrorRequestHandler,
//   _req: Request,
//   res: Response,
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   _next: NextFunction
// ) {
//   console.error(err);
//   res.sendStatus(500);
// });

// export default app;

import express from "express";
const app = express();
const router = express.Router();

router.use((req, _res, next) => {
  if (!req.headers["x-auth"]) return next("router");
  next();
});

// a middleware function with no mount path. This code is executed for every request to the router
router.use((_req, _res, next) => {
  console.log("Time:", Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use(
  "/user/:id",
  (req, _res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, _res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get(
  "/user/:id",
  (req, _res, next) => {
    // if the user ID is 0, skip to the next router
    if (req.params.id === "0") next("route");
    // otherwise pass control to the next middleware function in this stack
    else next();
  },
  (_req, res) => {
    // send a regular page
    res.send("regular");
  }
);

// handler for the /user/:id path, which sends a special page
router.get("/user/:id", (req, res) => {
  console.log(req.params.id);
  res.send("special");
});

// mount the router on the app
app.use("/admin", router, (_req, res) => {
  res.sendStatus(401);
});

export default app;
