import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import logger from "~/util/logger";
import { env } from "~/util/env";
import healthRoutes from "~/routes/health";

const app: Express = express();

app.set("trust proxy", true);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());

app.use(healthRoutes);

app.use((req, res) => {
  logger.warn(`Route not found: ${req.method} ${req.originalUrl}`);
  res.status(404).json({ error: "Route not found" });
});

export { app };
