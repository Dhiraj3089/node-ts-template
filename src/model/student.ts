import { Entity, Column, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { User } from "./user";

@Entity()
export class Students {
    @PrimaryColumn()
    id!: number;

    @Column({ nullable: true })
    name!: string;

    user!: User;
}