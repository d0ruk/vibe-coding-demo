export const logger = {
  log: (message: string, ...args: unknown[]) => {
    console.log(
      `%c${message}`,
      "color: white; background: #2196f3; padding: 2px 6px; border-radius: 3px;",
      ...args
    );
  },
  warn: (message: string, ...args: unknown[]) => {
    console.warn(
      `%c${message}`,
      "color: black; background: #ffeb3b; padding: 2px 6px; border-radius: 3px;",
      ...args
    );
  },
  error: (message: string, ...args: unknown[]) => {
    console.error(
      `%c${message}`,
      "color: white; background: #f44336; padding: 2px 6px; border-radius: 3px;",
      ...args
    );
  },
};
