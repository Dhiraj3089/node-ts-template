import { Router, Request, Response } from "express";
import { userRoutes } from "./user";
import { loginRoutes } from "./login";

class MainRoutes {
  private router: Router;
  constructor() {
    this.router = Router();
  }
  init() {
    this.router.get("/", (req: Request, res: Response) => {
      res.status(200).send("Hello World!!");
    });
    this.router.use("/",loginRoutes);
    this.router.use("/user", userRoutes);

    return this.router;
  }
}

export const routes = new MainRoutes().init();
