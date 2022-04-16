import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Departament } from "./Departament";

@Entity("functionaries")
export class Functionary {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    RG: string;

    @Column()
    id_departament: string;

    @ManyToOne(() => Departament)
    @JoinColumn({ name : "id_departament" })
    departament: Departament;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}