import { Repository, EntityRepository } from "typeorm";
import { Password } from "../model/password";

@EntityRepository(Password)
export class PasswordRepository extends Repository<Password>{
}
