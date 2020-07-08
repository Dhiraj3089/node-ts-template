import { Repository, EntityRepository } from "typeorm";
import { Students } from "../model/student";
import { Marks } from "../model/marks";

@EntityRepository(Students)
export class StudentsRepository extends Repository<Students>{
}


@EntityRepository(Marks)
export class MarksRepository extends Repository<Marks>{
}