import { Router } from "express";
import { IBaseRoute } from "../model/base_route";

export abstract class BaseRoutes {
    router: Router = Router();
    constructor() {

    }

    getRoutes() {
        return this.router;
    }

    init(routes: IBaseRoute[]) {
        routes.forEach(route => {
            this.router[route.requestMethod](route.path, route.handler)
        });
    }

}