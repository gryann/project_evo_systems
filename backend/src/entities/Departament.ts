import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("departaments")
export class Departament {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    initials: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}