import { DataSource } from "typeorm";
import { Vasist } from "./entities/User";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "",
  database: "vitasisten",
  entities: [Vasist],
  logging: true,
  synchronize: true,
});
