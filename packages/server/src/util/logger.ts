/* eslint-disable security/detect-non-literal-fs-filename */

import { pino } from "pino";
import path from "path";
import { existsSync, rmSync } from "fs";

const initializeLogger = async () => {
  const { getEnv } = await import("~/util/env");
  const env = await getEnv();

  const name = env.APP_NAME || "app";
  const folderPath = path.join("/tmp", name);
  if (existsSync(folderPath)) {
    rmSync(folderPath, { recursive: true, force: true });
  }

  return pino({
    name,
    level: "info",
    transport: {
      targets: [
        ...(!env.isProduction
          ? [
              {
                target: "pino-pretty",
                options: {
                  colorize: true,
                  translateTime: "SYS:standard",
                  ignore: "pid,hostname",
                },
              },
            ]
          : []),
        {
          target: "pino/file",
          level: "warn",
          options: {
            destination: `${folderPath}/${new Date().toISOString()}.log`,
            mkdir: true,
          },
        },
      ],
    },
  });
};

export default initializeLogger;
