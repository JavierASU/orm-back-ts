import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Data Base is Connect");
    app.listen(5000);
    console.log("Server On Port", 5000);
  } catch (error) {
    console.log("Error");
  }
}
main();
