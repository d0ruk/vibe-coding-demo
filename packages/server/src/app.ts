import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import initializeLogger from "~/util/logger";
import { getEnv } from "~/util/env";
import HealthRoutes from "~/routes/HealthRoutes";
import BookRoutes from "~/routes/BookRoutes";
import UserRoutes from "~/routes/UserRoutes";

const initializeApp = async () => {
  const env = await getEnv();
  const logger = await initializeLogger();

  const app: Express = express();

  app.set("trust proxy", true);

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
  app.use(helmet());

  app.use("/health", HealthRoutes);
  app.use("/books", BookRoutes);
  app.use("/users", UserRoutes);

  app.use((req, res) => {
    logger.warn(`Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ error: "Route not found" });
  });

  return app;
};

export default await initializeApp();
