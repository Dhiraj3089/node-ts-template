import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Password {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    password!: string;

    @ManyToOne(() => User, user => user.passwords)
    user!: User;
}