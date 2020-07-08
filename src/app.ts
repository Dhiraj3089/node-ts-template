import express from "express";
import cors from "cors";
import * as bodyParser from "body-parser";
import { routes } from "./routes";
import { InitDB } from "./db";
import errorHandler from "./middleware/errorhandler";
class App {
  private app: express.Application;

  constructor() {
    this.app = express();
  }

  async initConfig(): Promise<void> {
    try {
      this.setMiddleWares();
      await this.initDB();
      this.app.use(routes);
      this.app.use(errorHandler);
    } catch (error) {
      throw error;
    }
  }

  private setMiddleWares() {
    this.app.use(cors());
    this.app.use(bodyParser.json());
  }


  private async initDB() {
    const db = new InitDB();
    await db.Initialize();
  }

  public listen() {
    const port = '8084';
    this.app.listen(port, () => {
      console.log(`App listening on the port ${port}`);
    });
  }
}

export default App;
