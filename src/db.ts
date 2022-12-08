import { DataSource } from "typeorm";
import { Vasist } from "./entities/User";
import { Desviar } from "./entities/desviarEncuesta";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "",
  database: "vitasisten",
  entities: [Vasist, Desviar],
  logging: true,
  synchronize: true,
});
