import { DataSource } from "typeorm";
import { Book } from "~/entities/Book";
import { Author } from "~/entities/Author";
import { Publisher } from "~/entities/Publisher";
import { Customer } from "~/entities/Customer";
import { Order } from "~/entities/Order";
import { User } from "~/entities/User";
import { UserRole } from "~/entities/UserRole";
import { getEnv } from "~/util/env";
import initializeLogger from "./util/logger";

const initializeDatabase = async () => {
  let AppDataSource: DataSource;
  const logger = await initializeLogger();

  try {
    const env = await getEnv();
    AppDataSource = new DataSource({
      type: "sqlite",
      database: "./database.sqlite",
      synchronize: env?.SYNC_DB,
      logging: env?.DEBUG,
      entities: [Book, Author, Publisher, Customer, Order, User, UserRole],
    });
    await AppDataSource.initialize();
    logger.info("Database connection initialized.");

    return AppDataSource;
  } catch (error) {
    logger.error("Error during database initialization:", error);
    throw new Error("Database initialization failed");
  }
};

export default await initializeDatabase();
