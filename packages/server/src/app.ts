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

app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url });
  next();
});

app.use(healthRoutes);

export { app };
