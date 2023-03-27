import app from "./app.js";

const PORT = process.env.PORT || 5000;

import { loadPlanets } from "../models/planets.model.js";

const startServer = async () => {
  await loadPlanets();

  app.listen(PORT, () => console.log(`Listenning on port ${PORT} 🚀🚀🚀`));
};

startServer();
