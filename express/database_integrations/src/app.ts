import express from "express";
import { db } from "./database/mongo";
import { mongoClient } from "./database/mongo";
import sql from "./database/postgres";
import { redisClient } from "./database/redis";

mongoClient
  .connect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error(`Error connecting to MongoDB: ${error}`);
  });

redisClient
  .connect()
  .then(() => {
    console.log("Connected to Redis");
  })
  .catch((error) => {
    console.error(`Error connecting to Redis: ${error}`);
  });

const app = express();

app.use(express.json());

app.get("/db/:database", async (req, res) => {
  switch (req.params.database) {
    case "mongo": {
      const testCollection = db.collection("test");
      const result = await testCollection.find().toArray();

      res.send({
        result: result,
      });
      break;
    }
    case "pg": {
      const result = await sql`
        SELECT * FROM test;
      `;

      res.send({
        result: result,
      });
      break;
    }
    case "redis": {
      const result = await redisClient.get("test");

      if (!result) {
        return res.sendStatus(404);
      }

      res.send({
        result: result,
      });

      break;
    }
    default:
      res.sendStatus(404);
  }
});

export default app;
