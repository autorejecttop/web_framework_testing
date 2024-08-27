import postgres from "postgres";

const sql = postgres({
  username: "autorejecttop",
  database: "autorejecttop",
  password: process.env["POSTGRES_PASSWORD"],
});

export default sql;
