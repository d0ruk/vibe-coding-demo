/* eslint-disable security/detect-non-literal-fs-filename */

import { pino } from "pino";
import path from "path";
import { readFileSync, existsSync, rmSync } from "fs";

const pkg = JSON.parse(
  readFileSync(path.resolve(__dirname, "../../../../package.json"), "utf-8")
);
const name = pkg.name || "server.log";

const folderPath = path.join("/tmp", name);
if (existsSync(folderPath)) {
  rmSync(folderPath, { recursive: true, force: true });
}

const logger = pino({
  name,
  level: "info",
  transport: {
    targets: [
      {
        target: "pino-pretty",
        options: {
          colorize: true,
          translateTime: "SYS:standard",
          ignore: "pid,hostname",
        },
      },
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

export default logger;
