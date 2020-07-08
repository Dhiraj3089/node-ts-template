import { User } from "../model/user";
import { getDBRepository } from "../db/connection";
import { UserRepository } from "../repository/user";
import { Request, Response, NextFunction } from "express";
import Http404Error from "../utils/errorhandlers/http_error_404";
import HttpException from "../utils/errorhandlers/http_exception";
import { encrypt } from "../utils/password";
import { StudentsRepository } from "../repository/students";
import { Marks } from "../model/marks";

export class UserController {
    constructor() {

    }

    async getStudResult(req: Request, res: Response, next: NextFunction) {
        const studentRepo = await getDBRepository(StudentsRepository);
        const data = await studentRepo.createQueryBuilder('students')
            .innerJoinAndMapMany("students.marks",Marks,"marks","marks.studentid = students.id")
            .getMany();
        res.send(data);
    }

    async save(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this.saveUser(req.body);
            res.status(200).send(user);
        } catch (error) {
            next(error);
        }
    }

    private async saveUser(user: User | undefined): Promise<User | undefined> {
        if (user) {
            const userRepository = await getDBRepository(UserRepository);
            user.passwords[0].password = encrypt(user.passwords[0].password);
            user = await userRepository.save(user);
            if (!user) {
                throw new Http404Error("Something went wrong");
            }
            return user;
        } else {
            throw new HttpException(422, 'Unprocessable Entity');
        }
    }

    async showUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const userRepository = await getDBRepository(UserRepository);
            res.send(await userRepository.find());
        } catch (error) {
            next(error);
        }
    }
}