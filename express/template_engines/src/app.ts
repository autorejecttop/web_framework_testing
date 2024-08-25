import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
const app = express();

// View Engine config
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  res.render("index", {
    title: "Home",
    message: "Hello World!",
  });
});

app.use((_req, res) => {
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
    console.log(err);
    res.sendStatus(500);
  }
);

export default app;
