import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
const app = express();

// Override Express Default API
// app.response.sendStatus = function (statusCode, type, message) {
//   return this.contentType(type).status(statusCode).send(message);
// };

// Object.defineProperty(app.request, "ip", {
//   configurable: true,
//   enumerable: true,
//   get() {
//     return this.get("Client-IP");
//   },
// });

app.use((req, res) => {
  //   res.sendStatus(404, "text/plain", "Not Found");
  console.log(req.ip);

  res.sendStatus(404);
});

app.use(
  (
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _next: NextFunction
  ) => {
    console.error(err);
    res.sendStatus(500);
  }
);

export default app;
