import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Marks {
    @PrimaryColumn()
    id!:number;
    
    @Column({ nullable: true })
    subject!: string;

    @Column({ nullable: true })
    marks!: number;

    @Column()
    studentid!: number;
}