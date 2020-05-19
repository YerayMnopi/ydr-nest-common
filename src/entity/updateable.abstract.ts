import { Column } from 'typeorm';
import { IsDate } from "class-validator";

export abstract class UpdateableEntity {

    @Column({type: 'date', update: false})
    @IsDate()
    createdAt: Date;

    @Column('date')
    @IsDate()
    updatedAt: Date;
}