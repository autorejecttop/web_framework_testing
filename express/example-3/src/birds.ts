import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";

const birdsRouter = express.Router();

const timeLog = (_req: Request, _res: Response, next: NextFunction) => {
  console.log(`Time: ${Date.now()}`);
  next();
};
birdsRouter.use(timeLog);

birdsRouter.get("/", (req, res) => {
  res.send("Birds home page");
});

birdsRouter.get("/about", (req, res) => {
  res.send("About birds");
});

export default birdsRouter;
