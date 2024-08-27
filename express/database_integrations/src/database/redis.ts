import redis from "redis";

export const redisClient = redis.createClient({
  url: "redis://127.0.0.1:6379",
});

// Handle Redis connection errors
redisClient.on("error", (err) => {
  console.error("Redis error:", err);
});

// Handle connection close
redisClient.on("end", () => {
  console.log("Redis client disconnected");
});

// Reconnect if needed
redisClient.on("reconnecting", () => {
  console.log("Redis client reconnecting");
});
