
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectMongo = require("./config/db.mongo");
const pool = require("./config/db.postgres");

const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


connectMongo();
pool.connect().then(() => console.log("PostgreSQL connecté"));

app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/profiles", profileRoutes);

app.get("/api/health", (req, res) => {
  res.json({ status: "l'api fonctionne" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
