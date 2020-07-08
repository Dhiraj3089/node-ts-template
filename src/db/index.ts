import { createConnection } from "typeorm";
import { promises as fsPromise } from "fs";
import { Entities } from "../model";
import { dbConfig } from "../ormconfig";
export class InitDB {
  async Initialize() {

    // const file = await fsPromise.readFile("./ormconfig.json", "utf-8");
    // const dbConfig = JSON.parse(file);
    await createConnection({
      ...dbConfig,
      entities: Entities,
      synchronize: false
    });
    console.log("DB Initialized");
  }
}
