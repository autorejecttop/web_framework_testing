import express from "express";
import fs from "fs";

const app = express();

app.get("/", (_req, res, next) => {
  //   throw new Error("BROKEN");
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

export default app;
