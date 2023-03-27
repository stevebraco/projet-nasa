import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

const __dirname = path.resolve();

const planets = [];
function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

console.log(__dirname);

const loadPlanets = () => {
  return new Promise((resolve, reject) => {
    fs.createReadStream(
      path.join(__dirname, "server", "data", "kepler_data.csv")
    )
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          planets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject(err);
      })
      .on("end", () => {
        console.log("🚀");
        resolve();
      });
  });
};

export { planets, loadPlanets };
