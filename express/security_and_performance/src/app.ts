import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import helmet from "helmet";

const app = express();

app.disable("x-powered-by");
app.use(helmet());

app.get("/", (_req, res) => {
  //   throw new Error("lol");
  res.send("<h1>Hello world</h1>");
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((_req, res, _next) => {
  res.status(404).send("<h1>We didn't find anything you requested</h1>");
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
    res
      .status(500)
      .send("<h1>Something broke on our side, please revert back</h1>");
  }
);

export default app;
