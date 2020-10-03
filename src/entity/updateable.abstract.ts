import { Column, BeforeUpdate } from 'typeorm';
import { IsDate } from "class-validator";

export abstract class UpdateableEntity {

    @Column({type: 'date', update: false, default: new Date()})
    @IsDate()
    createdAt: Date;

    @Column('date', {default: new Date()})
    @IsDate()
    updatedAt: Date;

    @Column('date', {nullable: true})
    @IsDate()
    deletedAt: Date;

    @BeforeUpdate()
    setUpdatedAt() {
      this.updatedAt = new Date();
    }
  
}