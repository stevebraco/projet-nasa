const launches = new Map();
let latestFlightNumber = 100;
const launch = {
  flightNumber: 100,
  launchDate: new Date("December 26, 2030"),
  mission: 1,
  name: "Dassault",
  rocket: "Explorer IS1",
  destination: "Kepler-1652 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const existsLaunchId = (id) => {
  console.log(launches);
  // const exits = launches.has(Number(id));
  // console.log(exits);
  return launches.has(id);
};

const getLaunches = () => {
  return [...launches.values()];
};

const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    {
      ...launch,
      upcoming: true,
      success: true,
      customers: ["DRAKE", "NASA"],
      flightNumber: latestFlightNumber,
    }
    // Object.assign(launch, {
    //   upcoming: true,
    //   success: true,
    //   customer: ["DRAKE", "NASA"],
    //   filghtNumber: latestFlightNumber,
    // })
  );
};

const abortLaunchId = (id) => {
  const aborted = launches.get(id);
  aborted.upcoming = false;
  aborted.success = false;
  return aborted;
};

export { getLaunches, addNewLaunch, abortLaunchId, existsLaunchId };
