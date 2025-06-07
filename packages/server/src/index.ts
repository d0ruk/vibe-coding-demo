import "reflect-metadata";
import { env } from "~/util/env";
import { app } from "~/app";
import logger from "~/util/logger";

const server = app.listen(env.PORT, () => {
  const { NODE_ENV, HOST, PORT } = env;
  logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
});

const onCloseSignal = () => {
  logger.info("SIGINT received, shutting down");
  server.close(() => {
    logger.info("Server closed");
    throw new Error("Server shutdown completed");
  });
  setTimeout(() => {
    throw new Error("Force shutdown after 10s");
  }, 10000).unref();
};

process.on("SIGINT", onCloseSignal);
process.on("SIGTERM", onCloseSignal);
