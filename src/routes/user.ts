import { Router, Request, Response, NextFunction } from "express";
import { UserController } from "../controller/user";
import { IBaseRoute } from "../model/base_route";
import { BaseRoutes } from "./base";

class UserRoutes extends BaseRoutes {
    constructor() {
        super();
        this.init(this.setRoutes());
    }

    setRoutes(): IBaseRoute[] {
        const userController: UserController = new UserController();
        const routes: IBaseRoute[] = [{
            requestMethod: 'post',
            path: '/save',
            handler: userController.save.bind(userController)
        }, {
            requestMethod: 'get',
            path: '/all',
            handler: userController.showUsers.bind(userController)
        }, {
            requestMethod: 'get',
            path: '/marks',
            handler: userController.getStudResult.bind(userController)
        }];

        return routes;
    }
}

export const userRoutes = new UserRoutes().getRoutes();
