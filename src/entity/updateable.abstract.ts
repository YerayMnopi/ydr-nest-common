import { Column, BeforeInsert, BeforeUpdate, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { IsDate, IsUUID } from "class-validator";

export abstract class UpdateableEntity {
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column({type: 'timestamp', update: false, default: new Date()})
    @IsDate()
    @CreateDateColumn()
    createdAt: Date;

    @Column('timestamp', {default: new Date()})
    @IsDate()
    @UpdateDateColumn()
    updatedAt: Date;

    @Column('timestamp', {nullable: true})
    @IsDate()
    deletedAt: Date;
}