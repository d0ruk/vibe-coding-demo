import "reflect-metadata";
import { getEnv } from "~/util/env";
import initializeLogger from "./util/logger";
import app from "~/app";
import "./database";

const initializeServer = async () => {
  const env = await getEnv();
  const logger = await initializeLogger();

  const server = app.listen(env.APP_PORT, () => {
    const { NODE_ENV, HOST, APP_PORT } = env;
    logger.info(
      `Server (${NODE_ENV}) running on port http://${HOST}:${APP_PORT}`
    );
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
};

await initializeServer();
