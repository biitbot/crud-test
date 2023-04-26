import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

//Entities to be loaded on the ORM to do the table :) 

@Entity()
export class Employees {

    //Decorator to autogenerate an ID 
    @PrimaryGeneratedColumn({ type: 'bigint' }) //the type parameter is to change the regular int 
    id: number;                                //for a larger int 

    @Column()
    name: string;

    @Column()
    position: string;

    @Column()
    age: number;

    @Column()
    salary: number;

}