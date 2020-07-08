import { Request, Response, NextFunction } from "express";
import { comparePassword } from "../utils/password";
import { getDBRepository } from "../db/connection";
import { PasswordRepository } from "../repository/password";
import Http401Error from "../utils/errorhandlers/http_error_401";
import { UserRepository } from "../repository/user";

export class LoginController {
    constructor() { }

    async verifylogin(req: Request, res: Response, next: NextFunction) {
        const userRepository = await getDBRepository(UserRepository);
        const user = await userRepository.findOne({ email: req.body.email });
        const passwordRepository = await getDBRepository(PasswordRepository);
        const dbPassword = await passwordRepository.findOne({ user });
        if (dbPassword) {
            const isAuthentic = await comparePassword(req.body.password, dbPassword.password);
            if (isAuthentic) {
                res.send("Logged In Successfully");
                return;
            }
        }
        next(new Http401Error("Invalid username/ password"));
    }
}