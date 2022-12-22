import { DataSource } from "typeorm";
import { Vasist } from "./entities/User";
import { Desviar } from "./entities/desviarEncuesta";
import { Cobrar } from "./entities/cobranza";
import { Estado } from "./entities/estado.cliente";
export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "",
  database: "vitasisten",
  entities: [Vasist, Desviar, Cobrar, Estado],
  logging: true,
  synchronize: true,
});
