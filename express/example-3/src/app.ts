import express from "express"; // type Response, // type Request, // type NextFunction,
import birdsRouter from "./birds";
// import path from "path";

const app = express();
// app.all("/secret", (_req, _res, next) => {
//   console.log("Accessing the secret section...");
//   next();
// });

// app.get("/", (_req, res) => {
//   res.send("GET request to the homepage");
// });

// app.post("/", (_req, res) => {
//   res.send("POST request to the homepage");
// });

// app.get("/data/([\\$])book", (_req, res) => {
//   res.send("Fetching books");
// });

// app.get("/", (req, res) => {
//   res.send("root");
// });

// app.get("/about", (req, res) => {
//   res.send("about");
// });

// app.get("/random.text", (req, res) => {
//   res.send("random.text");
// });

// app.get("/ab?cd", (req, res) => {
//   res.send("ab?cd");
// });

// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd");
// });

// app.get("/ab*cd", (req, res) => {
//   res.send("ab*cd");
// });

// app.get("/ab(cd)?e", (req, res) => {
//   res.send("ab(cd)?e");
// });

// app.get(/a/, (req, res) => {
//   res.send("/a/");
// });

// app.get(/.*fly$/, (req, res) => {
//   res.send("/.*fly$/");
// });

// app.get("/users/:userId/books/:bookId", (req, res) => {
//   res.send(req.params);
// });

// app.get("/flights/:from-:to", (req, res) => {
//   res.send(req.params);
// });

// app.get("/plantae/:genus.:species", (req, res) => {
//   res.send(req.params);
// });

// app.get("/user/:userId(\\d+)", (req, res) => {
//   res.send(req.params);
// });

// app.get("/example/a", (_req, res) => {
//   res.send("Hello from A!");
// });

// app.get(
//   "/example/b",
//   async (_req, _res, next) => {
//     console.log("The response will be sent by the next function...");

//     await new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("");
//       }, 2000);
//     });

//     next();
//   },
//   (_req, res) => {
//     res.send("Hello from B!");
//   }
// );

// const cb0 = (_req: Request, _res: Response, next: NextFunction) => {
//   console.log("CB0");
//   next();
// };

// const cb1 = (_req: Request, _res: Response, next: NextFunction) => {
//   console.log("CB1");
//   next();
// };

// const cb2 = (_req: Request, res: Response) => {
//   res.send("Hello from C!");
// };

// app.get("/example/c", [cb0, cb1, cb2]);

// app.get(
//   "/example/d",
//   [cb0, cb1],
//   (_req: Request, _res: Response, next: NextFunction) => {
//     console.log("the response will be sent by the next function...");
//     next();
//   },
//   (_req: Request, res: Response) => {
//     res.send("Hello from D!");
//   }
// );

app.get("/", (_req, res) => {
  res.sendStatus(417);
});

// app.get("/example/e", (_req, res) => {
// res.download("./package.json");
// res.end();
// res.json("lol");
// res.jsonp("lol");
// res.redirect("back");
// res.render("index", { title: "Express" });
// res.send("lol");
// res.sendFile(path.join(process.cwd(), "package.json"));
// res.sendStatus(417);
// });

app
  .route("/book")
  .get((req, res) => {
    res.send("Get a random book");
  })
  .post((req, res) => {
    res.send("Add a book");
  })
  .put((req, res) => {
    res.send("Update the book");
  });

app.use("/birds", birdsRouter);

app.use((_req, res, next) => {
  res.send("404 NOT FOUND");
  next();
});

// app.use((err, req, res, next) => {
//   res.send("500 INTERNAL SERVER ERROR");
//   console.error(err);
//   next();
// });

export default app;
