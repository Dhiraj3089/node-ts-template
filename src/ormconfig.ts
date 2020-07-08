import { ConnectionOptions } from "typeorm"

export const dbConfig: ConnectionOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "pg",
  database: "CRP",

}

// "type": "sqlite",
//   "database": "/data/line.sqlite",
//   "logging": true