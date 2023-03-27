import express from "express";
import {
  httpGetAllLaunches,
  httpPostLaunch,
  httpDeleteLaunch,
} from "./launches.controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpPostLaunch);
launchesRouter.delete("/:id", httpDeleteLaunch);

export default launchesRouter;
