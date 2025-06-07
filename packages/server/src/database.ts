import { DataSource } from "typeorm";
import { Book } from "~/entities/Book";
import { Author } from "~/entities/Author";
import { Publisher } from "~/entities/Publisher";
import { Customer } from "~/entities/Customer";
import { env } from "~/util/env";
import logger from "~/util/logger";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "./database.sqlite",
  synchronize: env.SYNC_DB,
  logging: env.DEBUG,
  entities: [Book, Author, Publisher, Customer],
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    logger.info("Database connection initialized.");
  } catch (error) {
    logger.error("Error during database initialization:", error);
    throw new Error("Database initialization failed");
  }
};
