import express from "express";
import path from "path";
const app = express();

const publicPath = path.join(__dirname, "public");
console.log(`Static: ${publicPath}`);

app.use("/public", express.static(publicPath, {}));

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.post("/", (_req, res) => {
  res.send("Got a POST request");
});

app.put("/", (_req, res) => {
  res.send("Got a PUT request");
});

app.delete("/", (_req, res) => {
  res.send("Got a DELETE request");
});

app.use((req, res, next) => {
  res.status(404).send("404 not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

export default app;
