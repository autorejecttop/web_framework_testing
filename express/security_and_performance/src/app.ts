import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import helmet from "helmet";
import compression from "compression";
// import path from "path";

const app = express();

app.disable("x-powered-by");
app.use(helmet());
app.use(compression());
app.use(express.static("public"));

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.get("/", (_req, res) => {
  //   throw new Error("lol");
  // res.sendFile(path.join(process.cwd(), "/public/suisei-1.jpg"));
  // res.sendFile(`${process.cwd()}/src/views/index.ejs`);
  // res.sendFile(path.join(process.cwd(), "public", "suisei-1.jpg"));
  res.send(
    "<h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br /><h1>Hello, world!</h1><br />"
  );
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
