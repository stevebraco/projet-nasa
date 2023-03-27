import {
  abortLaunchId,
  addNewLaunch,
  existsLaunchId,
  getLaunches,
} from "../../models/launches.model.js";

const httpGetAllLaunches = (req, res) => {
  return res.status(200).json(getLaunches());
};
const httpPostLaunch = (req, res) => {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  addNewLaunch(launch);
  return res.status(201).json(launch);
};

const httpDeleteLaunch = (req, res) => {
  const id = Number(req.params.id);

  if (!existsLaunchId(id)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  const aborted = abortLaunchId(id);
  return res.status(200).json(aborted);
};

export { httpGetAllLaunches, httpPostLaunch, httpDeleteLaunch };
