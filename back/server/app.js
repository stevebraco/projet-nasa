import express from "express";
import path from "path";
import cors from "cors";
import morgan from "morgan";
import planetsRouter from "../routes/planets/planets.router.js";
import launchesRouter from "../routes/launches/launches.router.js";

const app = express();

const __dirname = path.resolve();
console.log(path.join(__dirname, "public"));

app.use(cors());
app.use(morgan("combined"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

export default app;
