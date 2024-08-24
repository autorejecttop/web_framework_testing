import express, {
  type ErrorRequestHandler,
  type NextFunction,
  type Request,
  type Response,
} from "express";
import cookieParser from "cookie-parser";

const app = express();

function myLogger(req: Request, _res: Response, next: NextFunction) {
  console.log("LOGGED");
  console.log(req.ip);

  next();
}
app.use(myLogger);

function requestTime(req: Request, _res: Response, next: NextFunction) {
  req.requestTime = Date.now();
  next();
}
app.use(requestTime);

function cookieValidator(cookies: unknown) {
  try {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(cookies);
        resolve(cookies);
      }, 500);
    });
  } catch (error) {
    console.error(error);
    throw new Error("Invalid cookies");
  }
}

async function validateCookies(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  await cookieValidator(req.cookies);
  next();
}
app.use(cookieParser());
app.use(validateCookies);

function optionsMiddleware(options: unknown) {
  return function (_req: Request, _res: Response, next: NextFunction) {
    if (options && typeof options === "object" && "lol" in options) {
      console.log(options.lol);
    }

    next();
  };
}
app.use(optionsMiddleware({ lol: "lol" }));

app.get("/", function rootHandler(req, res) {
  let responseText = "Hello World!<br>";
  responseText += `<small>Requested at: ${req.requestTime}</small>`;

  // throw new Error();
  res.send(responseText);
});

app.use(function notFoundMiddleware(_req, res) {
  // throw new Error("Lol");
  res.sendStatus(404);
});

app.use(function errorHandlerMiddleware(
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  res.sendStatus(500);

  next();
});

export default app;
