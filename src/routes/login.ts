import { Router, Request, Response, NextFunction } from "express";
import { LoginController } from "../controller/login";
import { IBaseRoute } from "../model/base_route";
import { BaseRoutes } from "./base";

class LoginRoutes extends BaseRoutes {
    constructor() {
        super();
        this.init(this.setRoutes());
    }

    setRoutes(): IBaseRoute[] {
        const loginController: LoginController = new LoginController();
        const routes: IBaseRoute[] = [{
            requestMethod: 'post',
            path: '/login',
            handler: loginController.verifylogin.bind(loginController)
        }];

        return routes;
    }
}

export const loginRoutes = new LoginRoutes().getRoutes();
