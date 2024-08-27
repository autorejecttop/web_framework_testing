import { MongoClient } from "mongodb";

export const mongoClient = new MongoClient("mongodb://127.0.0.1:27017");
export const db = mongoClient.db("database_integrations");
