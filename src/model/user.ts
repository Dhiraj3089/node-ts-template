import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Unique } from "typeorm";
import { Password } from "./password";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column({unique:true})
    email!: string;

    @OneToMany(() => Password, password => password.user, {
        cascade: ["insert"]
    })
    passwords!: Password[];
}